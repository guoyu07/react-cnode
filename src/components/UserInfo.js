import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../actions';
import { Lib, merged } from '../lib/lib';
import { DataLoad, DataNull, Header, TipMsgSignin, Footer, UserHeadImg } from './common/index'; 
/**
 * UserInfo
 */
class UserInfo extends Component {
	constructor(props) {
	    super(props);
	    //初始化状态
	    this.initState = (props) => {
	    	var { state,location } = props;
	    	var { pathname,search } = location;
	    	this.path = pathname + search;
    		this.state = merged(state.defaults);
    		this.state.path = this.path;
	    };
	    //获取数据
	    this.getData = (props) => {
	    	var {scrollX, scrollY} = this.state;
	    	window.scrollTo(scrollX, scrollY); //设置滚动条位置
	    	var options = {
	    		type: 'GET',
	    		url: '/api/v1/user/' + props.params.loginname,
	    		data: {}
	    	};
	    	Lib.get(options.url,options.data,(res) => {
	    		this.setState({data: res.data,loadMsg: '加载成功',loadAnimation: false});
	    		//dispatch 改变状态
	    		//this.props.SET_STATE(this.state);
	    	},(res,xhr) => { 
	    		if (xhr.status == 404) { 
	    		    this.setState({loadMsg: '用户不存在',loadAnimation: false});
	    		} else {
	    		    this.setState({data: res.data,loadMsg: '加载失败',loadAnimation: false});
	    		}
	    		//dispatch 改变状态
	    		//this.props.SET_STATE(this.state);
	    	});
	    };
	    /**
	     * [卸载组件之前一些操作]
	     * @return {[type]} [description]
	     */
	    this.unMount = () => {
	    	//记录滚动条的位置
	    	this.state.scrollX = window.scrollX;
	    	this.state.scrollY = window.scrollY;
	    	//dispatch 改变状态
	    	this.props.SET_STATE(this.state);
	    }
	    this.tab = (tabIndex) => {
	        this.setState({tabIndex: tabIndex});
	        //this.props.SET_STATE(this.state);
	    }
	    this.initState(this.props);

	}
	/**
	 * 在初始化渲染执行之后立刻调用一次，仅客户端有效（服务器端不会调用）。
     * 在生命周期中的这个时间点，组件拥有一个 DOM 展现，
     * 你可以通过 this.getDOMNode() 来获取相应 DOM 节点。
	 * @return {[type]} [description]
	 */
	componentDidMount() {
		//render之后 获取数据
		this.getData(this.props);
	}
	// /**
	//  * 在组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用
	//  * 组件的 props 属性可以通过父组件来更改，这时，componentWillReceiveProps 将来被调用。可以在这个方法里更新 state,
 //     * 以触发 render 方法重新渲染组件。
	//  */
	// componentWillReceiveProps(np) {
	//     var { location } = np;
	//     var { pathname, search } = location;
	//     var path = pathname + search;
	//     if (this.path !== path) {
	//         this.unMount(); //地址栏已经发生改变，做一些卸载前的处理
	//     }
	//     this.initState(np);
	// }
	// /**
	//  * 该方法不会在初始化渲染的时候调用。
	//  * 使用该方法可以在组件更新之后操作 DOM 元素。
	//  * shouldComponentUpdate 假如为false， render  componentWillUpdate 和 componentDidUpdate都不会调用
	//  */
	// componentDidUpdate() {
	// 	//组件更新之后重新获取数据
	//     //this.getData(this.props);
	// }
	// /**
	//  * 在组件从 DOM 中移除的时候立刻被调用。
	//  * 在该方法中执行任何必要的清理，比如无效的定时器，
	//  * 或者清除在 componentDidMount 中创建的 DOM 元素
	//  */
	// componentWillUnmount() {
	//     this.unMount(); //地址栏已经发生改变，做一些卸载前的处理
	// }

	render() {
		
		var { data, loadAnimation, loadMsg, tabIndex = 0 } = this.state;
		var { User, params } = this.props;
		User = User ? User : {};
		var main = data ? <Home data={data} tabIndex={tabIndex} tab={this.tab} />: <DataLoad loadAnimation={loadAnimation} loadMsg={loadMsg} />;
		var title = params.loginname == User.loginname ? '个人中心': params.loginname + '的个人中心';
		var footer = params.loginname == User.loginname ? <Footer index="3" /> : null;
		var leftIcon = params.loginname == User.loginname ? null: 'fanhui';
		var rightIcon = params.loginname == User.loginname ? 'tuichu': null;

		return (
			<div>
				<Header title={title} leftIcon={leftIcon} rightIcon={rightIcon} rightTo="signout"/>
				{main}
				{footer}
			</div>
		)
	}
}

/**
 * Home
 */
class Home extends Component {
	constructor(props) {
		super(props)
	}

	render() {
			var { avatar_url, loginname, score, recent_topics, recent_replies, create_at } = this.props.data;
			var { tabIndex } = this.props;
			var arrOn = [];
			var arrDisplay = [];
			arrOn[tabIndex] = 'on';
			arrDisplay[tabIndex] = 'block';
		return (
			<div className="user-index">
				<div className="headimg" data-flex="dir:top main:center cross:center">
					<UserHeadImg url={avatar_url} />
					<div className="name">{loginname}</div>
					<div className="score">积分：{score}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注册于：{Lib.formatDate(create_at)}</div>
				</div>
				<ul className="tab-nav" data-flex="box:mean">
					<li onClick={() => { this.props.tab(0) } } className={arrOn[0]}>主题</li>
					<li onClick={() => { this.props.tab(1) } } className={arrOn[1]}>回复</li>
				</ul>
				<HomeList list={recent_topics} display={arrDisplay[0]} />
				<HomeList list={recent_replies} display={arrDisplay[1]} />
			</div>
		) 
	}	
}

/**
 * HomeList
 * 发布的主题和回复列表
 */
class HomeList extends Component {
	render() {
		var { list, display } = this.props;
		return (
			<ul className="list" style={{ display: display }}>
				{
					list.map((item,index) => {
						let { id, title, last_reply_at } = item;
						return (
							<li key={index} >
								<Link data-flex="box:last" to={`/topic/${id}`}>
									<div className="tit">{title}</div>
									<time className>{Lib.formatDate(last_reply_at)}</time>
								</Link>
							</li>
						)
					})
				}
			</ul>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		state: state.Data,
		User: state.User
	}
}
export default connect(mapStateToProps,action('UserInfo'))(UserInfo);
