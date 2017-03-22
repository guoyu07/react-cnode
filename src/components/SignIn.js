import React, { Component,PropTypes } from 'react';
import { connect } from 'react-redux';
import action from '../actions';
import { Lib, merged } from '../lib/lib'
import { Header } from './common/index';


class SignIn extends Component {
	constructor(props) {
		super(props);
		//初始化状态
		this.state = { button: '登录'};
		this.signClick = () => {
			var accesstoken = this.refs.accesstoken.value;
			if(!accesstoken) {
				return alert('令牌不能为空');
			} else{
				//修改状态使用this.setState({}),不要直接使用this.state ={}
				this.setState({ button: '登录中...'});
				//发送请求
				Lib.post('/api/v1/accesstoken',{ accesstoken },(res) => {
					if(res.success) {
						alert('登录成功');
						res.accesstoken = accesstoken;
						this.props.SIGN_IN_SUCCESS(res); //dispatch action
						//跳转到相应路由
						this.context.router.push({
							pathname: '/user/' + res.loginname 
						});
					} else {
						alert('登录失败');
						this.setState({ button: '登录'});
					}
				}, () => {
						alert('登录失败');
						this.setState({ button: '登录'});
				});
			}	
		}
	}
	render() {
		return (
			<div>
				<Header title="登录" leftIcon="fanhui"/>
				<div className="signin" data-flex="dir:top main:center cross:center">
					<div className="center">
						<div className="text">
							<input type="text" placeholder="accesstoken" ref="accesstoken"/>
						</div>
						<button className="btn" onClick={this.signClick}>{this.state.button}</button>
					</div>
				</div>
			</div>
		)
	}
}

SignIn.contextTypes = {
    router: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
	return {
		User: state.User
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return bindActionCreators({
//     	SIGN_IN_SUCCESS: action.SIGN_IN_SUCCESS,
//     	SIGN_OUT: action.SIGN_OUT,
//     	UN_SIGN: action.UN_SIGN
//     });
// }
//  
//[mapDispatchToProps(dispatch, [ownProps]): dispatchProps] (Object or Function): 
//如果传递的是一个对象，那么每个定义在该对象的函数都将被当作Redux action creator，
//而且这个对象会与 Redux store 绑定在一起，其中所定义的方法名将作为属性名，
//合并到组件的 props 中。

export default connect(mapStateToProps, action('SignIn'))(SignIn); //连接redux
