import React, { Component, PropTypes } from 'react';
import { Router, Route, IndexRoute, browserHistory, hashHistory } from 'react-router';

//import component
import IndexList from '../components/IndexList'
import TopicPost from '../components/TopicPost'
import Topic from '../components/Topic'
import MyMessage from '../components/MyMessage'
import UserInfo from '../components/UserInfo'
import SignIn from '../components/SignIn'
import SignOut from '../components/SignOut'

//这里首先会将默认路由组件作为children
//之后就是加载那个页面，再将组件作为children

class Root extends Component {
    render() {
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

var history = process.env.NODE_ENV !== 'production' ? browserHistory : hashHistory;

const RouteConfig = (
    <Router history={history}>
        <Route path="/" component={Root}>
            <IndexRoute component={IndexList} />
            <Route path="topic/create" component={TopicPost} />
            <Route path="topic/:id" component={Topic} />
            <Route path="my/messages" component={MyMessage} />
            <Route path="user/:loginname" component={UserInfo} />
            <Route path="signin" component={SignIn} />
            <Route path="signout" component={SignOut} />
        </Route>
    </Router>
);

export default RouteConfig