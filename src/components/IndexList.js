import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Lib, merged, env } from '../lib/lib';
import { DataLoad, Footer, UserHeadImg, TabIcon } from './common/index';

/**
 * 首页组件
 */
class IndexList extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		console.log("Index start",this.props,"Index end");
		var { data, loadAnimation, loadMsg } = this.props.state;
		var tab = this.props.location.query.tab || 'all';
		var main = data ? <List list={data} /> : null;
		return (
			<div className="index-list-box">
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
	shouldComponentUpdate(np) {
		return false;
	}
}




export default IndexList



