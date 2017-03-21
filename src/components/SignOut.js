import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import action from '../actions';
import { Lib, merged } from '../lib/lib';
import {  Header } from './common/index';

class SignOut extends Component {
	constructor(props) {
		super(props);
		this.signOutClick = () => {
			this.props.SIGN_OUT(); //发起一次dispatch，更新state
			this.context.router.replace({ pathname: '/' }); //跳转到首页，假如使用push会在浏览器历史添加一条记录
		}
	}
	render() {
		return(
			<div>
				<Header title="退出" leftIcon="fanhui" />
				<div className="signin" data-flex="dir:top main:center cross:center">
				    <div className="center">
				        <button className="btn btn-red" onClick={this.signOutClick}>确认退出登录？</button>
				    </div>
				</div>
			</div>
		)
	}
}

SignOut.contextTypes = {
    router: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
	return {
		User: state.User
	}
}

export default connect(mapStateToProps, action('SignOut'))(SignOut); //连接redux