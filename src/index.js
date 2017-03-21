import React, { Component, PropTypes } from 'react';
import ReactDOM, { render } from 'react-dom';
import { Provider } from 'react-redux';
import route from '../src/config/route';
import configStore from '../src/config/store';

//样式文件
import 'normalize.css'; //重置浏览器样式
import 'flex.css'; //flex 布局兼容
import '../src/style/index.less'; //样式
import '../src/style/Iconfont/iconfont.css'; //字体样式
import 'github-markdown-css'; //markdown 样式

let store = configStore(); //store must be object
render(
	<Provider store={store}>
		{route}
	</Provider>,
	document.getElementById('reactInit')
)
