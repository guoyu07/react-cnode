import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../actions';
import { Lib, merged } from '../lib/lib';
import { DataLoad, DataNull, Header, TipMsgSignIn, Footer, UserHeadImg } from './common/index';


/**
 * MyMessage
 */
class MyMessage extends Component {
	constructor(props) {
		super(props);
		//初始化状态
		this.initState = (props) => {
			var { state,location } = props;
			var { pathname,search } = location;
			this.path = pathname + search;
			//初始化state,当path数据都为空的时候
			this.state = merged(state.defaults);
			this.state.path = this.path;
		}
		//获取数据
		this.getData = (props, state) => {
			var data = this.reqData(props);
			var {scrollX, scrollY} = this.state;
			window.scrollTo(scrollX, scrollY); //设置滚动条位置
			if(data.accesstoken == undefined || data.accesstoken == '') {
				this.props.SIGN_OUT();
				return false; //拦截请求
			}
			//return false;
			var options = {
				type: 'GET',
				url: '/api/v1/messages',
				data: data
			};
			Lib.get(options.url,options.data,(res) => {
				this.setState({data: res.data,loadMsg: '加载成功',loadAnimation: false});
			},(res,xhr) => { 
				if (xhr.status == 404) {
				    this.setState({loadMsg: '消息不存在',loadAnimation: false});
				} else {
					this.setState({loadMsg: '加载失败',loadAnimation: false});
				}
				//this.state.loadAnimation = false;
				//dispatch 改变状态
				//this.props.SET_STATE(this.state);
			});
		}
		this.reqData = (props) => {
			var accesstoken = props.User ? props.User.accesstoken : '';
			return { accesstoken }
		}
		/**
		 * [卸载组件之前一些操作]
		 * @return {[type]} [description]
		 */
		this.unMount = () => {
			//记录滚动条的位置
			this.state.scrollX = window.scrollX;
			this.state.scrollY = window.scrollY;
			//dispatch 改变状态
			//this.props.SET_STATE(this.state);
		}
		this.initState(this.props);
	}
	/**
	 * [componentDidMount description]
	 * @return {[type]} [description]
	 */
	componentDidMount() {
		//render之后 获取数据
		this.getData(this.props, this.state);
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
	        this.unMount(); //地址栏已经发生改变，做一些卸载前的处理
	    }
	    this.initState(np);
	}
	/**
	 * [componentDidUpdate description]
	 * @return {[type]} [description]
	 */
	componentDidUpdate() {
		//组件更新之后重新获取数据
	    //this.getData();
	}
	/**
	 * [componentWillUnmount description]
	 * @return {[type]} [description]
	 */
	componentWillUnmount() {
	    this.unMount(); //地址栏已经发生改变，做一些卸载前的处理
	}

	render() {
		var { data,loadAnimation, loadMsg, id, tabIndex } = this.state;
		var { User, params } = this.props;
		var main = null;
		if(!User) {
			main = <TipMsgSignIn />;
		} else if(!data) {
			main = <DataLoad loadAnimation={loadAnimation} loadMsg={loadMsg} />;
		} else {
			let {hasnot_read_messages, has_read_messages} = data;
			Array.prototype.push.apply(hasnot_read_messages, has_read_messages);
			main = <MessageList list={hasnot_read_messages} />;
		}
		return(
			<div>
				<Header title="消息" />
				{main}
				<Footer index="2" />
			</div>
		)
	}
}

/**
 * MessageList
 */

class MessageList extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		var list = this.props.list;
		return (
			<div className="msg-box">
				<ul className="list">
					{
						list.map((item,index) => {
							var { type,author,topic,reply,has_read } = item;
							var main = null;
							if(type == 'at') {
								main = <div>在话题<Link to={`/topic/${topic.id}`}>{topic.title}</Link>@你</div>
							} else {
								main = <div>在话题<Link to={`/topic/${topic.id}`}>{topic.title}</Link>回复你</div>
							}
							return (
								<li data-flex="box:first" key={index}>
									<Link className="user" to={`/user/${author.loginname}`} >
										<UserHeadImg url={author.avatar_url}/>										
									</Link>
									<div>
										<div className="name">{author.loginname}<time>{Lib.formatDate(reply.create_at)}</time></div>
										<div data-flex="box:first">
											<div data-flex="cross:center"><div className={`dian-${has_read}`}></div></div>
											{content}
										</div>
									</div>
								</li>
							)
						})
					}
				</ul>
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

export default connect(mapStateToProps,action('MyMessage'))(MyMessage); //连接redux

