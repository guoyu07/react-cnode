import { combineReducers } from 'redux'
import action from '../actions'
import { Lib,merged } from '../../src/lib/lib'

var defaultState = {
	defaults: {
	    path: '', //当前页面的路径
	    loadAnimation: true, //true显示加载动画，false 不显示加载动画
	    loadMsg: '加载中', //加载提示
	    data: null, //页面的数据
	    scrollX: 0, //滚动条X
	    scrollY: 0, //滚动条Y 
	    mdrender: true //当为false时，不渲染，默认为 true，渲染出现的所有 markdown 格式文本。
	},
	data: {}
}

/**
 * 存储用户信息 signIn/signout/Userinfo 相关,这样话每次刷新，数据不会丢失，本地持久化存储
 */
function postUser(state = JSON.parse(Lib.getLocalStorge('User')),action) {
	switch(action.type) {
		case 'SIGN_IN_SUCCESS':
			Lib.setLocalStorge('User',JSON.stringify(action.data)); //登录进去，添加信息
			return action.data;
		case 'SIGN_OUT':
			Lib.removeLocalStorge('User'); //退出，删除信息
			return null;
		default:
			return state;
	}
}
/**
 * [存储数据，与IndexList,Topic... 列表展示相关]
 * @param  {[type]} defaultState [默认值]
 * @param  {[type]} action       [action]
 */
function postData(state = defaultState,action) {
	switch(action.type) {
		case 'SET_STATE':
			state.data = action.data;
			return merged(state);
		default:
			return state;
	}
}

export default combineReducers({
	User: postUser,
	Data: postData
})



