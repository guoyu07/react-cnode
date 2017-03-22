import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import action from '../actions';
import { Lib, merged } from '../lib/lib';
import { Header, TipMsgSignIn, Footer } from './common/index';


class TopicPost extends Component {
	constructor(props) {
		super(props);
		/**
		 * 初始化组件状态
		 */
		this.state = {
			tab: '',
			title: '',
			content: '',
			accesstoken : this.props.User ? this.props.User.accesstoken : ''
		};
		this.postState = false;
		/**
		 * [点击发布按钮]
		 * @return {[type]} [description]
		 */
		this.rightClick = () => {
			var { state } = this;
			if(this.postState) return false;
			if(!state.tab) {
				return alert('请选择发表类型')
			} else if(state.title.length < 10) {
				return alert('标题字数必须大于10')
			} else if(state.content.length < 30){
				return alert('内容字数不能少于30')
			}
			this.postState = true;
			Lib.post('/api/v1/topics/', {
				accesstoken: state.accesstoken,
				tab: state.tab,
				title: state.title,
				content: state.content
			}, (res) => {
				if(res.success) {
					this.context.router.push({
						pathname: '/topic/' + res.topic_id
					})
				} else {
					alert('发布失败');
					this.postState = false;
				}
			},(res) => {
				alert('发布失败');
				this.postState = false;
			});
		}
		/**
		 * [获取options 类型]
		 * @return {[type]} [监听用户输入]
		 */
		this.tabInput = (e) => {
			this.state.tab = e.target.value;
		}
		/**
		 * [获取主题名]
		 * @return {[type]} [description]
		 */
		this.titleInput = (e) => {
			this.state.title = e.target.value;
		}
		/**
		 * [获取内容]
		 * @return {[type]} [description]
		 */
		this.contentInput = (e) => {
			this.state.content = e.target.value;
		}
	}
	render() {
		var  { User } = this.props;
		var main = null;
		if(! User) {
			main = <TipMsgSignIn />
		} else {
			main = <NewTopic {...this.state} tabInput={this.tabInput} titleInput={this.titleInput} contentInput={this.contentInput}/>
		}
		return (
			<div>
				<Header title="发表主题" rightIcon="fabu" rightClick={this.rightClick}/>
				{main}
				<Footer index="1"/>
			</div>
		)
	}
}

TopicPost.contextTypes = {
    router: React.PropTypes.object.isRequired
}

class NewTopic extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="topic-create">
				<div className="item">
					<select className="tab" defaultValue={this.props.tab} onInput={this.props.tabInput}>
						<option value="">请选择发表类型</option>
						<option value="share">分享</option>
						<option value="ask">问答</option>
						<option value="job">工作</option>
					</select>
				</div>
				<div className="item">
					<input type="text" defaultValue={this.props.title} onInput={this.props.titleInput} placeholder="标题字数不低于10" />
				</div>
				<div className="item">
					<textarea defaultValue={this.props.content} onInput={this.props.contentInput} placeholder="内容字数不低于30"></textarea>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		User: state.User
	}
}

export default connect(mapStateToProps, action('TopicPost'))(TopicPost); //连接redux

