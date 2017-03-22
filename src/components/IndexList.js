import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../actions';
import { Lib, merged, env } from '../lib/lib';
import { DataLoad, Footer, UserHeadImg, TabIcon } from './common/index';
import GetNextPage from 'get-next-page';
/**
 * 首页组件
 */
class IndexList extends Component {
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
			window.scrollTo(scrollX, scrollY); //设置滚动条位置
			var data = this.reqData(props,state);
			var options = {
				type: 'GET', //请求类型
				url: '/api/v1/topics', //请求地址
				data: data
			};
			// Lib.get(options.url,options.data,(res) => {
			// 	this.setState({
			// 		loadMsg: '加载成功',
			// 		loadAnimation: false,
			// 		data: res.data
			// 	});
			// 	//dispatch 改变状态
			// 	//this.props.SET_STATE(this.state);
			// },(res,xhr) => {
			// 	if (xhr.status == 404) {
			// 	    this.setState({
			// 	    	loadMsg: '话题不存在',
			// 	    	loadAnimation: false,
			// 	    });
			// 	} else {
			// 	    this.setState({
			// 	    	loadMsg: '加载失败',
			// 	    	loadAnimation: false,
			// 	    });
			// 	}
			// 	//dispatch 改变状态
			// 	//this.props.SET_STATE(this.state);
			// });
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
	    	this.setState({
	    		loadMsg: '正在加载中...',
	    		loadAnimation: true
	    	});
		}
		/**
		 * 下一页加载成功
		 * 
		 * @param {Object} res
		 */
		this.load = (res) => {
		    var { state } = this;
		    var { data } = res;
		    if (!data.length && data.length < before.limit) {
		        this.setState({
		        	loadMsg: '没有了',
		        	loadAnimation: false,
		        	nextBtn: false
		        });
		    } else {
		        this.setState({
		        	loadMsg: '上拉加载更多',
		        	loadAnimation: false,
		        	nextBtn: false
		        });
		    }
		    //将后来的数据push
		    Array.prototype.push.apply(state.data, data);
		    state.page = ++state.page;
		    this.setState({
		    	loadMsg: '加载成功',
		    	loadAnimation: false,
		    	page: state.page,
		    	data: state.data
		    });
		}

		/**
		 * 请求失败时
		 */
		this.error = () => {
		    this.state.loadAnimation = false;
		    this.state.loadMsg = '加载失败';
		    this.props.setState(this.state);
		}
		this.initState(this.props);
	}
	/**
	 * @return {[type]} [description]
	 */
	componentDidMount() {
		//render之前 获取数据
		this.getData(this.props,this.state);
	}
	/**
	 * [componentWillReceiveProps description]
	 * @param  {[type]} np [description]
	 * @return {[type]}    [description]
	 */
	componentWillReceiveProps(np) {
	    var { location } = np;
	    var { pathname, search } = location;
	    var path = pathname + search;
	    if (this.path !== path) {
	        //地址栏已经发生改变，重新加载数据
	        this.getData(np,this.state);
	    }
	}


	render() {
		var { data, loadAnimation, loadMsg } = this.state;
		var tab = this.props.location.query.tab || 'all';
		var main = data ? <List list={data} /> : null;
		return (
			<div>
				<div className="index-list-box">
					<Nav tab={tab}/>
					{ main } 
					<Footer index="0"/>
				</div>
				<div ref="dataload"><DataLoad loadAnimation={loadAnimation} loadMsg={loadMsg} /></div> 
			</div>
		)
	}
}
/**
 * 导航栏
 */
class Nav extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		var setCur = {};
		setCur[this.props.tab] = 'on';
		return (
			<nav className="index-nav">
				<ul data-flex="box:mean">
					<li className={setCur.all}>
						<Link to="/" activeClassName="active">全部</Link>
					</li>
					<li className={setCur.good}>
						<Link to="/?tab=good" activeClassName="active">精华</Link>
					</li>
					<li className={setCur.share}>
						<Link to="/?tab=share" activeClassName="active">分享</Link>
					</li>
					<li className={setCur.ask}>
						<Link to="/?tab=ask" activeClassName="active">问答</Link>
					</li>
					<li className={setCur.job}>
						<Link to="/?tab=job" activeClassName="active">工作</Link>
					</li>
				</ul>
				<div className="height"></div>
			</nav>
		)
	}
	/**
	 * [提高性能，当且仅当 tab 发生改变才重新渲染]
	 */
	shouldComponentUpdate(nextProps) {
		return this.props.tab !== nextProps.tab;
	}
}
/**
 * 所有列表
 */
class List extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<ul className="index-list">
				{
					this.props.list.map((item,index) => {
						return <ListItem {...item} key={index}/>
					})
				}
			</ul>
		)
	}
}
/**
 * 单行列表
 */
class ListItem extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		let { id,title,author,visit_count,reply_count,create_at,last_reply_at } = this.props;
		return (
			<li>
				<Link to={`/topic/${id}`}>
					<div data-flex="box:first">
						<div className="font" data-flex="cross:center">
							<TabIcon {...this.props} />
						</div>
						<h3 className="tit">{title}</h3>
					</div>
					<div className="bottom" data-flex="box:first">
						<div className="author" data-flex="cross:center">
							<UserHeadImg url={author.avatar_url}/>
						</div>
						<div className="con" data-flex="dir:top main:center">
							<p data-flex="cross:center box:last">
								<span className="name">{author.loginname}</span>
								<span className="count">{reply_count}/{visit_count}</span>
							</p>
							<p data-flex="cross:center box:last">
								<time>创建于{Lib.formatDate(create_at)}</time>
								<time>最近回复{Lib.formatDate(last_reply_at)}</time>
							</p>
						</div>
					</div>
				</Link>
			</li>
		)
	}
}


const mapStateToProps = (state) => {
	return {
		state: state.Data,
		User: state.User
	}
}

export default connect(mapStateToProps,action('IndexList'))(IndexList); //连接redux



