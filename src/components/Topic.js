import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../actions';
import { Lib, merged } from '../lib/lib';
import { DataLoad, Footer, UserHeadImg, TabIcon, Header } from './common/index';
/**
 * Topic
 */
class Topic extends  Component {
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
			var data = this.reqData(props,state);
			var {scrollX, scrollY} = this.state;
			window.scrollTo(scrollX, scrollY); //设置滚动条位置
			var options = {
				type: 'GET',
				url: '/api/v1/topic/' + (props.params.id || ''),
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
		}
		this.reqData = (props, state) => {
			var accesstoken = props.User ? props.User.accesstoken : '';
			return { mdrender: state.mdrender, accesstoken }
		}
		this.unMount = () => {
			//记录滚动条的位置
			this.state.scrollX = window.scrollX;
			this.state.scrollY = window.scrollY;
			//dispatch 改变状态
			this.props.SET_STATE(this.state);
		}
		/**
		 * 点赞或者取消赞
		 * @param  {[type]} id        [reply_id]
		 * @param  {[type]} index     [index]
		 * @param  {[type]} loginname [description]
		 */
		this.clickZan = (id,index,loginname) => {
			var { state } = this;
			var accesstoken = this.props.User ? this.props.User.accesstoken : ''; 
			var uid = this.props.User ? this.props.User.id : '';
			if(!accesstoken) {
				return this.context.router.push({ pathname: '/signin'}); //跳转到登录
			} else if(this.props.User.loginname === loginname){
				return alert('你不能给自己点赞!');
			}
			Lib.post(`/api/v1/reply/${id}/ups`,{ accesstoken },(res) => {
				var ups = state.data.replies[index-1].ups;
				if(res.action == 'down') { //取消赞，ups 里面存的是user id
					for(let i = 0; i < ups.length; i++) {
						if(ups[i] === uid) {
							ups.splice(i,1);//删除
						}
					}
				} else { //点赞
					ups.push(uid);
				}
				this.setState({data: state.data});
			},(res) => { 
				//this.props.SET_STATE(this.props.state);
			});
		}
		/**
		 * 显示回复框
		 * @param  {[type]} index [楼层]
		 * @return {[type]}       [description]
		 */
		this.showReplyBox = (index) => {
			var accesstoken = this.props.User ? this.props.User.accesstoken : '';
			if(!accesstoken) {
				return this.context.router.push({pathname: '/signin'});
			}
			--index;
			if(this.props.list[index].display === 'block') {
				this.props.list[index].display === 'none';
			} else {
				this.props.list[index].display === 'block'
			}
		}
		/**
		 * 重新加载数据
		 * @param  {[type]} data [description]
		 * @return {[type]}      [description]
		 */
		this.reLoadData = (data) => {
			//this.props.state.data = data;
			//this.props.SET_STATE(this.props.state);
			this.setState({data: data});
		}
		this.initState(this.props);
	}
	componentDidMount() {
		//render之后 获取数据
		this.getData(this.props,this.state);
	}
	componentWillReceiveProps(np) {
	    var { location } = np;
	    var { pathname, search } = location;
	    var path = pathname + search;
	    if (this.path !== path) {
	        this.unMount(); //地址栏已经发生改变，做一些卸载前的处理
	    }
	    this.initState(np);
	}
	componentDidUpdate() {
		//组件更新之后重新获取数据
	    //this.getData();
	}
	componentWillUnmount() {
	    this.unMount(); //地址栏已经发生改变，做一些卸载前的处理
	}

	render() {
		var { data, loadAnimation, loadMsg, id } = this.state;
		var main = data ? <Article {...this.state} reLoadData={this.reLoadData} clickZan={this.clickZan} showReplyBox={this.showReplyBox}/> : <DataLoad loadMsg={loadMsg} loadAnimation={loadAnimation}/>;
		return (
			<div>
				<Header leftIcon="fanhui" title="详情"/>
				{main}
			</div>
		)
	}
}

Topic.contextTypes = {
	router: React.PropTypes.object.isRequired
}
/**
 * 文章主体
 */
class Article extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		
		var { author,create_at,visit_count,reply_count,title,id,content,replies } = this.props.data;
		var createMarkup = () => {
		    return {
		        __html: content
		    };
		};
		return(
			<div className="topic">
				<div className="user" data-flex>
					<div className="headimg" data-flex-box="0">
						<UserHeadImg  url={author.avatar_url} />
					</div>
					<div className="data" data-flex="dir:top" data-flex-box="1">
						<div data-flex="main:justify">
							<Link to={`/user/${author.loginname}`} className="name">{author.loginname}</Link>
							<time data-flex-box="1">{Lib.formatDate(create_at)}</time>
							<div className="lou">#楼主</div>
							<div className="font" data-flex="main: center cross: center">
								<TabIcon {...this.props.data} />
							</div>
						</div>
						<div className="qt" data-flex>
							<div>阅读:{visit_count}</div>
							<div>回复:{reply_count}</div>
						</div>
					</div>
				</div>
				<h2 className="tit2">{title}</h2>
				<div className="content markdown-body" dangerouslySetInnerHTML={createMarkup()}></div>
				<h3 className="tit3">共<em>{replies.length}</em>条回复</h3>
				<ReplyList reLoadData={this.reLoadData} list={replies} id={id} clickZan={this.props.clickZan} showReplyBox={this.props.showReply} User={this.props.User} />
			</div>
		)
	}
}
/**
 * 回复列表
 */
class ReplyList extends Component {
	constructor(props) {
		super(props);
		this.isUp = (arr) => {
			var id = this.props.User ? this.props.User.id : '';
			for(let i = 0; i < arr.length; i++) {
				if(arr[i] == id) return true;
			}
			return false;
		}
	}
	render() {
		
		var accesstoken = this.props.User ? this.props.User.accesstoken : '';
		return (
			<ul className="re-list">
				{
					this.props.list.map((item,index) => {
						var { id, content, author, ups, create_at, display = 'none' } = item;
						var at = new Date(create_at);
						var upState = this.isUp(ups);
						var createMarkup = () => {
							return {
								__html: content
							}
						};

						return (
							<li key={index} data-flex>
								<div className="headimg" data-flex-box="0">
									<UserHeadImg url={author.avatar_url} />
								</div>
								<div className="main" data-flex-box="1">
									<div data-flex="main: justify">
										<Link to={`/user/${author.loginnname}`} className="name">{author.loginname}</Link>
										<time data-flex-box="1">{Lib.formatDate(create_at)}</time>
										<div className="lou">#{++index}</div>
									</div>
									<div className="content markdown-body" dangerouslySetInnerHTML={createMarkup()}></div>
									<div className="bottom" data-flex="main:right">
										<div className={`font font-${upState}`} onClick={ () => { this.props.clickZan(id,index,author.loginname) } }>
											<i className="iconfont icon-dianzan"></i>
											<em>{ups.length > 0 ? ups.length : ''}</em>
										</div>
										<div className="font" onClick={ () => { this.props.showReplyBox(index) }}>
											<i className="iconfont icon-huifu"></i>
										</div>
									</div>
									<ReplyBox display={display} reLoadData={this.props.reLoadData} placeholder={`@${author.loginname}`} loginname={author.loginname} data={{accesstoken,id: this.props.id, reply_id: id}}/>
								</div>
							</li>
						)
					})
				}
			</ul>
		)
	}
}

class ReplyBox extends Component {
	constructor(props) {
		super(props);
		this.state = { btnname: '回复' };
		/**
		 * @return {[type]} [提交回复内容]
		 */
		this.submit = () => {
			this.setState({ btnname: '提交中'});
			var data = this.props.data;
			if(data.reply_id) {
				data.content = `[@${this.props.loginname}](/user/${this.props.loginname}) ${this.refs.content.value}`;
			} else {
				data.content = this.refs.content.value;
			}
			if(data.content == '') {
				return alert('回复内容不能为空');
			}
			data.content += '\n\r[from react cnode 手机版](https://github.com/hitao123/react-cnode)';
			Lib.post(`/api/v1/topic/${data.id}/replies`, data, (res) => {
				this.setState({ btnname: '回复成功'});
				//重新获取评论列表
				Lib.get(`/api/v1//topic/${data.id}`,{}, (res) => {
					this.props.reLoadData(res.data); //刷新
					this.setState({ btnname: '回复'});
				}, (res) => {
					this.setState({ btnname: '刷新失败，请重试'});
				})
			}, (res) => {
				this.setState({ btnname: '回复失败'});
			});
		}
	}

	render() {
		return (
			<div className="reply-box" style={{ display: this.props.display }}>
				<div className="text">
					<textarea ref="content" placeholder={ this.props.placeholder }></textarea>
				</div>
				<div data-flex="main:right">
					<button className="btn" onClick= { this.submit }>{this.state.btnname}</button>
				</div>
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
export default connect(mapStateToProps,action('Topic'))(Topic);

