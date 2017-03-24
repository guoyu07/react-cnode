import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../../actions';
import { Lib, merged } from '../../lib/lib';

/**
 * 加载动画
 */
export class DataLoad extends Component {
	render() {
		let { loadAnimation, loadMsg } = this.props;
		return (
			<div className={'data-load data-load-' + loadAnimation }>
				<div className="msg">{ loadMsg }</div> 
			</div>
		)
	}
}
DataLoad.defaultProps = {
	loadAnimation: true, //默认显示加载动画
	loadMsg: '正在加载中'
}
/**
 * 公共头部
 */
export class Header extends Component {
	render() {
		let { title, leftTo, leftIcon, rightIcon, rightTo, rightClick } = this.props;
		let left = null;

		if(leftTo && leftIcon) {
			left = (
				<Link to={leftTo} >
					<i className={'iconfont icon-' + leftIcon }></i>
				</Link>
			)
		} else if(leftIcon === 'fanhui') {
			left = (
			    <a onClick={this.context.router.goBack}>
			        <i className={'iconfont icon-' + leftIcon}></i>
			    </a>
			);
		}

		let right = null;
		if(rightTo && rightIcon) {
			right = (
				<Link to={rightTo}>
					<i className={'iconfont icon-' + rightIcon }></i>
				</Link>
			)
		}
		else if(rightIcon && rightClick){
			right = (
				<div onClick={rightClick}>
					<i className={'iconfont icon-' + rightIcon }></i>
				</div>
			)
		}

		return (
			<header className="common-header" data-flex>
				<div className="icon" data-flex="main:center cross:center" data-flex-box="0">
					{left}
				</div>
				<h2 className="title" data-flex-box="1">{ title }</h2>
				<div className="icon" data-flex="main:center cross:center" data-flex-box="0">
					{right}
				</div>
			</header>
		)
	}
}
Header.contextTypes = {
    router: React.PropTypes.object.isRequired
}
/**
 * 暂无记录
 * 
 */
export class DataNull extends Component {
	render() {
		return <div>暂无记录</div>
	}
}
/**
 * TipMsgSignIn
 */
export class TipMsgSignIn extends Component {
	render() {
		return (
			<div className="tip-msg-signin">
				你还未登录，请先<Link to="/signin">登录</Link>
			</div>
		)
	}
}
/**
 * 用户头像
 */
export class UserHeadImg extends Component {
	render() {
		return (
			<div className="user-headimg" style={{ backgroundImage: 'url('+ this.props.url + ')'}}>
			</div>
		)
	}
}
/**
 * TabIcon
 */
export class TabIcon extends Component {
	render() {
		var { tab, top, good } = this.props;
		if(top) {
			tab = 'top';
		} else if(good) {
			tab = 'good';
		}
		return (
			<i className={'iconfont icon-' + tab }></i>
		)
	}
}
/**
 * Footer
 */
class FooterInit extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messageCount: 0
		};
		this.getMessageCount = () => {
			var accesstoken = this.props.User ? this.props.User.accesstoken : '';
			if(accesstoken) {
				Lib.get('/api/v1/message/count', { accesstoken }, (res) => {
					this.setState({
						messageCount: res.data
					})
				})
			}
		}
	}
	render() {
		var myUrl = this.props.User && this.props.User.loginname ? '/user/' + this.props.User.loginname : '/signin';
		var arr = [];
		arr[this.props.index] = 'on';
		return (
			<footer className="common-footer">
				<div className="zhanwei"></div>
				<ul className="menu" data-flex="box:mean">
					<li className={arr[0]}>
						<Link to="/">
							<i className="iconfont icon-shouye"></i>首页
						</Link>
					</li>
					<li className={arr[1]}>
						<Link to="/topic/create">
							<i className="iconfont icon-fabu"></i>发布
						</Link>
					</li>
					<li className={arr[2]}>
						<Link to="/my/messages">
							<i className="iconfont icon-xiaoxi"></i>消息{this.state.messageCount > 0 ? this.state.messageCount : ''}
						</Link>
					</li>
					<li className={arr[3]}>
						<Link to={myUrl}>
							<i className="iconfont icon-wode"></i>我的
						</Link>
					</li>
				</ul>
			</footer>
		)
	}

	componentDidMount() {
		this.getMessageCount();	
	}
	/**
	 * 防止组件不必要的更新
	 */
	shouldComponentUpdate(nextProps, nextState) {
		return this.props.index !== nextProps.index || this.state.messageCount !== nextState.messageCount; 
	}
	componentDidUpdate(prevProps, prevState) {
		this.getMessageCount();
	}
}

FooterInit.defaultProps = {
	index: 0
}
const mapStateToProps = (state) => {
	return { User: state.User }
}
var Footer = connect(mapStateToProps, action('Footer'))(FooterInit);
export { Footer }


 
