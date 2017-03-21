import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import action from '../../actions';
import { Lib, merged } from '../../lib/lib';

/**
 *
 * 共用模块 UserInfo、mymessage、Topics
 */

const getData = (options) => {
	var defaultOptions = {
		id: '', //组件唯一ID
		type: 'GET', //请求方式 ，默认GET
		url: '', //请求地址
		interrupt: false, //true 拦截请求， false 不拦截
		data: null, //发送给服务器的数据
		component: <div></div>, //react 组件
		success: (state) => { return state }, //成功的回调
		error: (state) => { return state } //失败后的回调
	};
	//覆盖默认配置
	for(let key in options) {
		defaultOptions[key] = options[key];
	}
	/**
	 * Index 
	 */
	class Index extends Component {
		constructor(props) {
			super(props);
			/**
			 * 初始化state
			 */
			this.initState = (props) => {
				var { state, location } = props;
				var { pathname, search } = location;
				this.path = pathname + search;

				if(typeof state.path[this.path] === 'object' && state.path[this.path].path === this.path) {
					this.state = state.path[this.path];
				} else {
					
					this.state = merged(state.defaultOptionss);
					this.state.path = this.path;
				}
			}

			/**
			 * DOM初始化完成后执行回调
			 */
			this.readyDOM = () => {
				var { success, error } = this.props.defaultOptions;
				var { scrollX, scrollY } = this.state;
				if(this.get) {
					return false;
				}
				window.scrollTo(scrollX,scrollY); //设置滚动条的位置
				if(this.interruptReq()) {
					return false; //请求被拦截
				}
				this.get = Lib.get(this.getUrl(), this.getData(), (res) => {
					this.state.loadMsg = '加载成功';
					this.state.loadAnimation = false;
					this.state.data = res.data;
					this.props.setState(succcess(this.state) || this.state);
				},(res,xhr) => {
					if(xhr.status === 404) {
						this.state.loadMsg = '话题不存在';
					} else {
						this.state.loadMsg = '加载失败';
					}
					this.state.loadAnimation = false;
					this.props.setState(error(this.state) || this.state);
				})
			}
			/**
			 * [unmount]
			 * @return {[type]} [description]
			 */
			this.unmount = () => {
				if(typeof this.get != 'undefined') {
					this.get.end();
					delete this.get;
				}
				this.state.scrollX = window.scrollX; //记录滚动条位置
				this.state.scrollY = window.scrollY;
				this.props.setState(this.state);
			}
			this.getUrl = () => {
				var { url } = this.props.defaultOptions;
				if(typeof url === 'function') {
					return url(this.props,this.state);
				} else if(url && typeof url === 'string') {
					return url;
				} else {
					return this.props.location.pathname;
				}
			}
			/**
			 * interrupt
			 */
			this.interruptReq = () => {
				var { interrupt } = this.props.defaultOptions;
				if(typeof interrupt === 'function') {
					return interrupt(this.props, this.state)
				}
				return stop;
			}

			this.initState(this.props);
		}
		

		render() {
			return <this.props.defaultOptions.component {...this.props} state= { this.state } />
		}
		/**
		 * [componentDidMount description]
		 * 在初始化渲染执行之后立刻调用一次，仅客户端有效（服务器端不会调用）
		 * 你可以通过 this.getDOMNode() 来获取相应 DOM 节点
		 * @return {[type]} [description]
		 */
		
		componentDidMount() {
			this.readyDOM();
		}
		/**
		 * [componentWillReceiveProps description]
		 * 在组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用
		 * @return {[type]} [description]
		 */
		componentWillReceiveProps(props) {
			var { location } = props;
			var { pathname, search } = location;
			var path = pathname + search;
			if(this.path !== path) {
				this.unmount(); //地址栏已经发生改变
			}
			this.initState(props);
		}
		/**
		 * [componentDidUpdate description]
		 * 在组件的更新已经同步到 DOM 中之后立刻被调用。该方法不会在初始化渲染的时候调用。
		 * 使用该方法可以在组件更新之后操作 DOM 元素。
		 * @return {[type]} [description]
		 */
		componentDidUpdate() {
			this.readyDOM();
		}
		/**
		 * [componentWillUnmount description]
		 * 在组件从 DOM 中移除的时候立刻被调用。
		 * 在该方法中执行任何必要的清理，比如无效的定时器，
		 * 或者清除在 componentDidMount 中创建的 DOM 元素
		 * @return {[type]} [description]
		 */
		componentWillUnmount() {
			this.unmount();
		}
		
	}
	Index.defaultProps = { options }
	return connect((state) => { return { state: state[options.id], User: state.User } }, action(action.id))(Index); //连接redux

}


export default Index