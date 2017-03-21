import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../actions';
import { Lib, merged } from '../lib/lib';
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
		};
		/**
		 * 发送请求
		 * @return {[type]} [description]
		 */
		this.getData = (props,state) => {
			var data = this.reqData(props,state);
			var options = {
				type: 'GET', //请求类型
				url: '/api/v1/topics', //请求地址
				data: data
			};
			Lib.get(options.url,options.data,(res) => {
				this.setState({
					loadMsg: '加载成功',
					loadAnimation: false,
					data: res.data
				});
				//dispatch 改变状态
				//this.props.SET_STATE(this.state);
			},(res,xhr) => {
				if (xhr.status == 404) {
				    this.setState({
				    	loadMsg: '话题不存在',
				    	loadAnimation: false,
				    });
				} else {
				    this.setState({
				    	loadMsg: '加载失败',
				    	loadAnimation: false,
				    });
				}
				//dispatch 改变状态
				//this.props.SET_STATE(this.state);
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
		 * 卸载之后的一些操作
		 * @return {[type]} [description]
		 */
		this.unMount = () => {
			//记录滚动条的位置
			this.state.scrollX = window.scrollX;
			this.state.scrollY = window.scrollY;
			//dispatch 改变状态
			//this.props.SET_STATE(this.state);
		};
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
	        //this.unMount(); //地址栏已经发生改变，做一些卸载前的处理
	        this.getData(np,this.state);
	        
	    }
	    //this.initState(np);
	}
	/**
	 * [componentDidUpdate description]
	 * @return {[type]} [description]
	 */
	componentDidUpdate() {
		//组件更新之后重新获取数据
	    //this.getData(this.props,this.state);
	}
	/**
	 * [componentWillUnmount description]
	 * @return {[type]} [description]
	 */
	componentWillUnmount() {
	    this.unMount(); //地址栏已经发生改变，做一些卸载前的处理
	}

	render() {
		var { data, loadAnimation, loadMsg } = this.state;
		var tab = this.props.location.query.tab || 'all';
		var main = data ? <List list={data} /> : null;
		return (
			<div>
				<Nav tab={tab}/>
				{ main } 

				<Footer index="0"/>
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
		console.log(this.props.tab);
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



