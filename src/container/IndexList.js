import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import action from '../actions';
import { Lib, merged, env } from '../lib/lib';
import IndexList from '../components/IndexList'
import GetNextPage from 'get-next-page';
import { DataLoad, Footer, UserHeadImg, TabIcon } from '../components/common/index';

class Index extends Component {
    constructor(props) {
        super(props);
        /**
         * 初始化状态
         * @param  {[type]} props [description]
         * @return {[type]}       [description]
         */
        this.initState = (props) => {
            var {state, location} = props;
            var {pathname, search} = location;
            this.path = pathname + search;
            this.state = merged(state.defaults); 
            this.state.path = this.path;
            this.state.page = 1;
            this.state.limit = 10;
            this.state.data = [];
        };
        /**
         * 发送请求
         * @return {[type]} [description]
         */
        this.getData = (props,state) => {
            var {scrollX, scrollY} = this.state;
            if(this.get) return false;
            window.scrollTo(scrollX, scrollY); //设置滚动条位置
            var data = this.reqData(props,state);
            var options = {
                type: 'GET', //请求类型
                url: '/api/v1/topics', //请求地址
                data: data
            };
            //获取数据
            this.get = new GetNextPage(this.refs.dataload, {
                url: env + options.url,
                data: options.data,
                start: this.start,
                load: this.load,
                error: this.error
            });
        };
        /**
         * 参数，发送数据
         * @param  {[type]} props [description]
         * @param  {[type]} state [description]
         * @return {[type]}       [description]
         */
        this.reqData = (props, state) => {
            var { page, limit, mdrender } = state;
            return {
                tab: props.location.query.tab || 'all',
                page,
                limit,
                mdrender
            }
        }
        /**
         * 请求开始
         */
        this.start = () => {
            this.state.loadAnimation = true;
            this.state.loadMsg = '正在加载中...';
            this.props.SET_STATE(this.state);
        }
        /**
         * 下一页加载成功
         * 
         * @param {Object} res
         */
        this.load = (res) => {
            var { state } = this;
            var { data } = res;
            if (!data.length) {
                state.nextBtn = false;
                state.loadMsg = '没有了';
            } else {
                state.nextBtn = true;
                state.loadMsg = '上拉加载更多';
            }
            //将后来的数据push
            Array.prototype.push.apply(state.data, data);
            state.page = ++state.page;
            state.loadAnimation = false;
            this.props.SET_STATE(this.state);
        }

        /**
         * 请求失败时
         */
        this.error = () => {
            this.state.loadAnimation = false;
            this.state.loadMsg = '加载失败';
            this.props.SET_STATE(this.state);
        }
        /**
         * [description]
         * @return {[type]} [description]
         */
        this.unMount = () => {
            //结束请求
            this.get.end();
            delete this.get;
            this.state.scrollX = window.scrollX; //记录滚动条位置
            this.state.scrollY = window.scrollY;
            this.props.SET_STATE(this.state);
        }
        this.initState(this.props);
    }
    /**
     * componentDidMount
     */
    componentDidMount() {
        //render之前 获取数据
        this.getData(this.props,this.state);
    }
    /**
     * [componentWillReceiveProps description]
     */
    componentWillReceiveProps(np) {
        var { location } = np;
        var { pathname, search } = location;
        var path = pathname + search;
        if (this.path !== path) {
            //地址栏已经发生改变，重新加载数据
            this.unMount();
            this.initState(np);
        }
        
    }
    // shouldComponentUpdate(np,ns) {
    //  var { location } = np;
    //  var { pathname, search } = location;
    //  var path = pathname + search;
    //  if (this.path !== path) {
    //     return true;
    //  } else {
    //      return false;
    //  }
    // }
    componentDidUpdate() {
        //render之前 获取数据
        //console.log("componentDidUpdate start",this.props,this.state,"componentDidUpdate end");
        this.getData(this.props,this.state);
    } 
    render() {
        console.log("test start",{...this.props},"test end");
        var { loadAnimation,loadMsg } = this.props.state.data;
        return(
            <div>
                <IndexList {...this.props} state={this.state}/>
                <div ref="dataload"><DataLoad loadAnimation={loadAnimation} loadMsg={loadMsg} /></div> 
            </div>
        )

    }   
}


const mapStateToProps = (state) => {
    return {
        state: state.Data,
        User: state.User
    }
}

export default connect(mapStateToProps,action('Index'))(Index); //连接redux   