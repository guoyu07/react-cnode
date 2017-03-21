webpackJsonp([0],{

/***/ 271:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\cnode\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\cnode\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = configureStore;
	
	var _redux = __webpack_require__(174);
	
	var _reduxThunk = __webpack_require__(272);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _reduxLogger = __webpack_require__(273);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _reducers = __webpack_require__(279);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var middleware = [_reduxThunk2.default, (0, _reduxLogger2.default)()];
	
	function configureStore() {
		return (0, _redux.createStore)(_reducers2.default, _redux.applyMiddleware.apply(undefined, middleware));
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\cnode\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "store.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },

/***/ 197:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\cnode\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\cnode\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(198);
	
	var _IndexList = __webpack_require__(259);
	
	var _IndexList2 = _interopRequireDefault(_IndexList);
	
	var _TopicPost = __webpack_require__(265);
	
	var _TopicPost2 = _interopRequireDefault(_TopicPost);
	
	var _Topic = __webpack_require__(266);
	
	var _Topic2 = _interopRequireDefault(_Topic);
	
	var _MyMessage = __webpack_require__(267);
	
	var _MyMessage2 = _interopRequireDefault(_MyMessage);
	
	var _UserInfo = __webpack_require__(268);
	
	var _UserInfo2 = _interopRequireDefault(_UserInfo);
	
	var _SignIn = __webpack_require__(269);
	
	var _SignIn2 = _interopRequireDefault(_SignIn);
	
	var _SignOut = __webpack_require__(270);
	
	var _SignOut2 = _interopRequireDefault(_SignOut);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	//import component
	
	
	//这里首先会将默认路由组件作为children
	//之后就是加载那个页面，再将组件作为children
	
	var Root = function (_Component) {
	    _inherits(Root, _Component);
	
	    function Root() {
	        _classCallCheck(this, Root);
	
	        return _possibleConstructorReturn(this, (Root.__proto__ || Object.getPrototypeOf(Root)).apply(this, arguments));
	    }
	
	    _createClass(Root, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                this.props.children
	            );
	        }
	    }]);
	
	    return Root;
	}(_react.Component);
	
	var history =  false ? _reactRouter.browserHistory : _reactRouter.hashHistory;
	
	var RouteConfig = _react2.default.createElement(
	    _reactRouter.Router,
	    { history: history },
	    _react2.default.createElement(
	        _reactRouter.Route,
	        { path: '/', component: Root },
	        _react2.default.createElement(_reactRouter.IndexRoute, { component: _IndexList2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'topic/create', component: _TopicPost2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'topic/:id', component: _Topic2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'my/messages', component: _MyMessage2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'user/:loginname', component: _UserInfo2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'signin', component: _SignIn2.default }),
	        _react2.default.createElement(_reactRouter.Route, { path: 'signout', component: _SignOut2.default })
	    )
	);
	
	exports.default = RouteConfig;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\cnode\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "route.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 259:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\cnode\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\cnode\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(198);
	
	var _reactRedux = __webpack_require__(167);
	
	var _actions = __webpack_require__(260);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _lib = __webpack_require__(261);
	
	var _index = __webpack_require__(263);
	
	var _getNextPage = __webpack_require__(264);
	
	var _getNextPage2 = _interopRequireDefault(_getNextPage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * 首页组件
	 */
	var IndexList = function (_Component) {
		_inherits(IndexList, _Component);
	
		function IndexList(props) {
			_classCallCheck(this, IndexList);
	
			/**
	   * 初始化状态
	   * @param  {[type]} props [description]
	   * @return {[type]}       [description]
	   */
			var _this = _possibleConstructorReturn(this, (IndexList.__proto__ || Object.getPrototypeOf(IndexList)).call(this, props));
	
			_this.initState = function (props) {
				var state = props.state,
				    location = props.location;
				var pathname = location.pathname,
				    search = location.search;
	
				_this.path = pathname + search;
	
				if (_typeof(state.path[_this.path]) === 'object' && state.path[_this.path].path === _this.path) {
					_this.state = state.path[_this.path];
				} else {
					_this.state = (0, _lib.merged)(state.defaults);
					_this.state.path = _this.path;
					_this.state.page = 1;
					_this.state.limit = 10;
				}
			};
			/**
	   * 发送请求
	   * @return {[type]} [description]
	   */
			_this.getData = function (props, state) {
				var data = _this.reqData(props, state);
				var options = {
					type: 'GET', //请求类型
					url: '/api/v1/topics', //请求地址
					data: data
				};
				_lib.Lib.get(options.url, options.data, function (res) {
					_this.state.loadMsg = '加载成功';
					_this.state.loadAnimation = false;
					_this.state.data = res.data;
					//dispatch 改变状态
					_this.props.SET_STATE(_this.state);
				}, function (res, xhr) {
					if (xhr.status == 404) {
						_this.state.loadMsg = '话题不存在';
					} else {
						_this.state.loadMsg = '加载失败';
					}
					_this.state.loadAnimation = false;
					//dispatch 改变状态
					_this.props.SET_STATE(_this.state);
				});
			};
			/**
	   * 参数，发送数据
	   * @param  {[type]} props [description]
	   * @param  {[type]} state [description]
	   * @return {[type]}       [description]
	   */
			_this.reqData = function (props, state) {
				var page = state.page,
				    limit = state.limit,
				    mdrender = state.mdrender;
	
				return {
					tab: props.location.query.tab || 'all',
					page: page,
					limit: limit,
					mdrender: mdrender
				};
			};
			/**
	   * 卸载之后的一些操作
	   * @return {[type]} [description]
	   */
			_this.unMount = function () {
				//记录滚动条的位置
				_this.state.scrollX = window.scrollX;
				_this.state.scrollY = window.scrollY;
				//dispatch 改变状态
				_this.props.SET_STATE(_this.state);
			};
			_this.initState(_this.props);
			return _this;
		}
		/**
	  * [componentWillMount description]
	  * @return {[type]} [description]
	  */
	
	
		_createClass(IndexList, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				//render之前 获取数据
				this.getData(this.props, this.state);
			}
			/**
	   * [componentWillReceiveProps description]
	   * @param  {[type]} np [description]
	   * @return {[type]}    [description]
	   */
	
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(np) {
				var location = np.location;
				var pathname = location.pathname,
				    search = location.search;
	
				var path = pathname + search;
				if (this.path !== path) {
					this.unMount(); //地址栏已经发生改变，做一些卸载前的处理
				}
				this.initState(np);
			}
			/**
	   * [componentDidUpdate description]
	   * @return {[type]} [description]
	   */
	
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate() {
				//组件更新之后重新获取数据
				this.getData(this.props, this.state);
			}
			/**
	   * [componentWillUnmount description]
	   * @return {[type]} [description]
	   */
	
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				this.unMount(); //地址栏已经发生改变，做一些卸载前的处理
			}
		}, {
			key: 'render',
			value: function render() {
				var _props$state = this.props.state,
				    data = _props$state.data,
				    loadAnimation = _props$state.loadAnimation,
				    loadMsg = _props$state.loadMsg;
	
				var tab = this.props.location.query || 'all';
				var main = data.length > 0 ? _react2.default.createElement(List, { list: data }) : null;
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(Nav, { tab: 'tab' }),
					main,
					_react2.default.createElement(_index.Footer, { index: '0' })
				);
			}
		}]);
	
		return IndexList;
	}(_react.Component);
	/**
	 * 导航栏
	 */
	
	
	var Nav = function (_Component2) {
		_inherits(Nav, _Component2);
	
		function Nav(props) {
			_classCallCheck(this, Nav);
	
			return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).call(this, props));
		}
	
		_createClass(Nav, [{
			key: 'render',
			value: function render() {
				var setCur = {};
				setCur[this.props.tab] = 'on';
				return _react2.default.createElement(
					'nav',
					{ className: 'index-nav' },
					_react2.default.createElement(
						'ul',
						{ 'data-flex': 'box:mean' },
						_react2.default.createElement(
							'li',
							{ className: 'setCur.all' },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/', activeClassName: 'active' },
								'\u5168\u90E8'
							)
						),
						_react2.default.createElement(
							'li',
							{ className: 'setCur.good' },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/?tab=good', activeClassName: 'active' },
								'\u7CBE\u534E'
							)
						),
						_react2.default.createElement(
							'li',
							{ className: 'setCur.share' },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/?tab=share', activeClassName: 'active' },
								'\u5206\u4EAB'
							)
						),
						_react2.default.createElement(
							'li',
							{ className: 'setCur.ask' },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/?tab=ask', activeClassName: 'active' },
								'\u95EE\u7B54'
							)
						),
						_react2.default.createElement(
							'li',
							{ className: 'setCur.job' },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/?tab=job', activeClassName: 'active' },
								'\u5DE5\u4F5C'
							)
						)
					),
					_react2.default.createElement('div', { className: 'height' })
				);
			}
			/**
	   * [提高性能，当且仅当 tab 发生改变才重新渲染]
	   * @return {[type]} [description]
	   */
	
		}, {
			key: 'shouldComponentUpdate',
			value: function shouldComponentUpdate(nextProps) {
				return this.props.tab !== nextProps.tab;
			}
		}]);
	
		return Nav;
	}(_react.Component);
	/**
	 * 所有列表
	 */
	
	
	var List = function (_Component3) {
		_inherits(List, _Component3);
	
		function List(props) {
			_classCallCheck(this, List);
	
			return _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));
		}
	
		_createClass(List, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'ul',
					{ className: 'index-list' },
					this.props.list.map(function (item, index) {
						return _react2.default.createElement(ListItem, _extends({}, item, { key: index }));
					})
				);
			}
		}]);
	
		return List;
	}(_react.Component);
	/**
	 * 单行列表
	 */
	
	
	var ListItem = function (_Component4) {
		_inherits(ListItem, _Component4);
	
		function ListItem(props) {
			_classCallCheck(this, ListItem);
	
			return _possibleConstructorReturn(this, (ListItem.__proto__ || Object.getPrototypeOf(ListItem)).call(this, props));
		}
	
		_createClass(ListItem, [{
			key: 'render',
			value: function render() {
				var _props = this.props,
				    id = _props.id,
				    title = _props.title,
				    author = _props.author,
				    visit_count = _props.visit_count,
				    reply_count = _props.reply_count,
				    create_at = _props.create_at,
				    last_reply_at = _props.last_reply_at;
	
				return _react2.default.createElement(
					'li',
					null,
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/topic/' + id },
						_react2.default.createElement(
							'div',
							{ 'data-flex': 'box:first' },
							_react2.default.createElement(
								'div',
								{ className: 'font', 'data-flex': 'cross:center' },
								_react2.default.createElement(_index.TabIcon, this.props)
							),
							_react2.default.createElement(
								'h3',
								{ className: 'tit' },
								title
							)
						),
						_react2.default.createElement(
							'div',
							{ className: 'bottom', 'data-flex': 'box:first' },
							_react2.default.createElement(
								'div',
								{ className: 'author', 'data-flex': 'cross:center' },
								_react2.default.createElement(_index.UserHeadImg, { url: author.avatar_url })
							),
							_react2.default.createElement(
								'div',
								{ className: 'con', 'data-flex': 'dir:top main:center' },
								_react2.default.createElement(
									'p',
									{ 'data-flex': 'cross:center box:last' },
									_react2.default.createElement(
										'span',
										{ className: 'name' },
										author.loginname
									),
									_react2.default.createElement(
										'span',
										{ className: 'count' },
										reply_count,
										'/',
										visit_count
									)
								),
								_react2.default.createElement(
									'p',
									{ 'data-flex': 'cross:center box:last' },
									_react2.default.createElement(
										'time',
										null,
										'\u521B\u5EFA\u4E8E',
										_lib.Lib.formatDate(create_at)
									),
									_react2.default.createElement(
										'time',
										null,
										'\u6700\u8FD1\u56DE\u590D',
										_lib.Lib.formatDate(last_reply_at)
									)
								)
							)
						)
					)
				);
			}
		}]);
	
		return ListItem;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
		return {
			state: state.Data,
			User: state.User
		};
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, (0, _actions2.default)('IndexList'))(IndexList); //连接redux
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\cnode\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "IndexList.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 260:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\cnode\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\cnode\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	//登入，登出，设置状态 三种 状态
	
	exports.default = function (id) {
		var action = {};
		var actionArr = ['SIGN_IN_SUCCESS', 'SIGN_OUT', 'SET_STATE'];
	
		var _loop = function _loop(i) {
			action[actionArr[i]] = function (data) {
				return {
					id: id,
					type: actionArr[i],
					data: data
				};
			};
		};
	
		for (var i = 0; i < actionArr.length; i++) {
			_loop(i);
		}
		return action;
	};
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\cnode\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 261:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\cnode\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\cnode\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.merged = exports.Lib = undefined;
	
	var _objMerged = __webpack_require__(262);
	
	var _objMerged2 = _interopRequireDefault(_objMerged);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var env =  false ? '' : 'https://cnodejs.org';
	var Lib = {};
	
	/**
	 * ajax 请求默认配置
	 * @param {object} options
	 */
	
	Lib.ajax = function (options) {
	
	  var defaultOptions = {
	    url: window.location.pathname,
	    async: true, //默认异步
	    type: 'GET', //默认GET请求
	    data: {}, //发送给服务器的数据
	    dataType: 'json', //数据类型
	    success: function success(data) {}, //成功回调
	    error: function error(e) {
	      console.log(e);
	    } // 出错回调
	  };
	
	  var pData = []; //存储数据
	  var sData = ''; //拼接数据
	
	  //属性覆盖
	  for (var option in options) {
	    defaultOptions[option] = options[option];
	  }
	  for (var item in options.data) {
	    pData.push(item + '=' + escape(options.data[item]));
	  }
	  //拼接查询字符串
	  sData = pData.join('&');
	  defaultOptions.type = options.type.toUpperCase();
	
	  var xhr = new XMLHttpRequest();
	  try {
	    if (defaultOptions.type === 'GET') {
	      sData = url + '?' + sData;
	      xhr.open(defaultOptions.type, sData + '&t=' + new Date().getTime(), defaultOptions.async);
	      xhr.send();
	    } else {
	      //post 请求方式
	      xhr.open(defaultOptions.type, defaultOptions.url, defaultOptions.async);
	      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	      xhr.send(sData);
	    }
	  } catch (e) {
	    //放弃请求
	    xhr.abort();
	  }
	  //判断是否异步
	  if (defaultOptions.async) {
	    xhr.addEventListener('readystatechange', httpEnd, false);
	  } else {
	    //同步
	    httpEnd();
	  }
	
	  xhr.end = function () {
	    xhr.removeEventListener('readystatechange', httpEnd, false);
	  };
	
	  function httpEnd() {
	    if (xhr.readyState === 4) {
	      var header = xhr.getAllResponseHeaders();
	      var response = xhr.responseText;
	      //将服务器返回的数据转回为json 数据
	      if (/application\/json/.test(header) || defaultOptions.dataType === 'json' && /^(\{|\[)([\s\S])*?(\]|\})$/.test(response)) {
	        response = JSON.parse(response);
	      }
	      if (xhr.status >= 200 && xhr.status <= 300 || xhr.status == 304) {
	        defaultOptions.success(response, defaultOptions, xhr);
	      } else {
	        defaultOptions.error(defaultOptions, xhr);
	      }
	    }
	  }
	  //特殊符号转义
	  function escape(str) {
	    str += ''; //隐式转换
	    str = str.replace(/%/g, '%25');
	    str = str.replace(/\+/g, '%2B');
	    str = str.replace(/ /g, '%20');
	    str = str.replace(/\//g, '%2F');
	    str = str.replace(/\?/g, '%3F');
	    str = str.replace(/&/g, '%26');
	    str = str.replace(/\=/g, '%3D');
	    str = str.replace(/#/g, '%23');
	    return str;
	  }
	  return xhr;
	};
	
	/**
	 * ajax post 请求封装
	 * 
	 */
	Lib.post = function (url, data, success, error) {
	  var options = {
	    url: env + url,
	    type: 'POST',
	    data: data,
	    success: success || function () {},
	    error: error || function () {}
	  };
	  return Lib.ajax(options);
	};
	/**
	 * ajax get 请求封装
	 * 
	 */
	Lib.get = function (url, data, success, error) {
	  var options = {
	    url: env + url,
	    type: 'GET',
	    data: data,
	    success: success || function () {},
	    error: error || function () {}
	  };
	  return Lib.ajax(options);
	};
	
	/**
	 * 格式化时间
	 * 
	 */
	Lib.formatDate = function (string) {
	  var date = new Date(string);
	  var time = (new Date().getTime() - date.getTime()) / 1000; //相差时间，单位秒
	  if (time < 0) {
	    return '';
	  } else if (time < 60) {
	    return '刚刚';
	  } else if (time / 60 < 60) {
	    return parseInt(time / 60) + '分钟前';
	  } else if (time / 3600 < 24) {
	    return parseInt(time / 3600) + '小时前';
	  } else if (time / 86400 < 31) {
	    parseInt(time / 86400) + '天前';
	  } else if (time / 2592000 < 12) {
	    parseInt(time / 2592000) + '月前';
	  } else {
	    parseInt(time / 31536000) + '年前';
	  }
	};
	/**
	 * localstorge 存储封装
	 */
	Lib.setLocalStorge = function (key, value) {
	  return localStorage.setItem(key, value);
	};
	Lib.getLocalStorge = function (key) {
	  return localStorage.getItem(key);
	};
	Lib.removeLocalStorge = function (key) {
	  if (key) {
	    return localStorage.removeItem(key);
	  } else {
	    return localStorage.removeItem();
	  }
	};
	
	exports.Lib = Lib;
	exports.merged = _objMerged2.default;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\cnode\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "lib.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 262:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!(function (merged) {
	    'use strict';
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (merged), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module !== 'undefined' && module.exports) {
	        exports = module.exports = merged();
	    } else {
	        window.merged = merged();
	    }
	})(function () {
	    'use strict';
	
	    /**
	     * (复制对象)
	     * 
	     * @returns (返回复制的对象)
	     */
	    function merged() {
	        for (var len = arguments.length, arg = Array(len), key = 0; key < len; key++) {
	            arg[key] = arguments[key];
	        }
	
	        var obj = {};
	        for (var i = 0; i < arg.length; i++) {
	            for (var key in arg[i]) {
	                var curObj = arg[i][key];
	                if (isJson(curObj)) {
	                    if (isJson(obj[key])) {
	                        obj[key] = merged(obj[key], curObj); // obj 此属性已经是对象，则和该对象原来的属性合并
	                    } else {
	                        obj[key] = merged(curObj); // obj 此属性不是对象，则和该对象原来的属性合并
	                    }
	                } else if (isArray(curObj)) { //此对象是数组
	                    obj[key] = mergedArr(curObj);
	                } else {
	                    obj[key] = curObj; //属性不是obj
	                }
	            }
	        }
	        return obj;
	    };
	
	    /**
	     * (复制数组)
	     * 
	     * @param arr (description)
	     */
	    function mergedArr(arr) {
	        var arr2 = [];
	
	        for (var i = 0; i < arr.length; i++) {
	            var curObj = arr[i];
	            if (isJson(curObj)) {
	                arr2[i] = merged(curObj); // 复制对象
	            } else if (isArray(curObj)) { //复制数组
	                arr2[i] = mergedArr(curObj);
	            } else {
	                arr2[i] = curObj; //属性不是obj
	            }
	        }
	        return arr2;
	    }
	
	    function isJson(obj) {
	        return (typeof obj === 'undefined' ? 'undefined' : typeof (obj)) == 'object' && Object.prototype.toString.call(obj).toLowerCase() === '[object object]' && !obj.length; //true 是 false不是
	    };
	    function isArray(arr) {
	        return Object.prototype.toString.call(arr).toLowerCase() === '[object array]'; //true 是 false不是
	    }
	    return merged;
	});
	


/***/ },

/***/ 263:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\cnode\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\cnode\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Footer = exports.TabIcon = exports.UserHeadImg = exports.TipMsgSignIn = exports.DataNull = exports.Header = exports.DataLoad = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(198);
	
	var _reactRedux = __webpack_require__(167);
	
	var _actions = __webpack_require__(260);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _lib = __webpack_require__(261);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * 加载动画
	 */
	var DataLoad = exports.DataLoad = function (_Component) {
		_inherits(DataLoad, _Component);
	
		function DataLoad() {
			_classCallCheck(this, DataLoad);
	
			return _possibleConstructorReturn(this, (DataLoad.__proto__ || Object.getPrototypeOf(DataLoad)).apply(this, arguments));
		}
	
		_createClass(DataLoad, [{
			key: 'render',
			value: function render() {
				var _props = this.props,
				    loadAnimation = _props.loadAnimation,
				    loadMsg = _props.loadMsg;
	
				return _react2.default.createElement(
					'div',
					{ className: 'data-load data-load-' + loadAnimation },
					_react2.default.createElement(
						'div',
						{ className: 'msg' },
						loadMsg
					)
				);
			}
		}]);
	
		return DataLoad;
	}(_react.Component);
	
	DataLoad.defaultProps = {
		loadAnimation: true, //默认显示加载动画
		loadMsg: '正在加载中'
	};
	/**
	 * 公共头部
	 */
	
	var Header = exports.Header = function (_Component2) {
		_inherits(Header, _Component2);
	
		function Header() {
			_classCallCheck(this, Header);
	
			return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
		}
	
		_createClass(Header, [{
			key: 'render',
			value: function render() {
				var _props2 = this.props,
				    title = _props2.title,
				    leftTo = _props2.leftTo,
				    leftIcon = _props2.leftIcon,
				    rightIcon = _props2.rightIcon,
				    rightTo = _props2.rightTo,
				    rightClick = _props2.rightClick;
	
				var left = null;
	
				if (leftTo && leftIcon) {
					if (leftIcon === 'fanhui') {
						left = _react2.default.createElement(
							'a',
							{ onClick: this.context.router.goBack },
							_react2.default.createElement('i', { className: 'iconfont icon-' + leftIcon })
						);
					} else {
						left = _react2.default.createElement(
							_reactRouter.Link,
							{ to: leftTo },
							_react2.default.createElement('i', { className: 'iconfont icon-' + leftIcon })
						);
					}
				}
	
				var right = null;
				if (rightTo && rightIcon) {
					if (rightClick) {
						right = _react2.default.createElement(
							_reactRouter.Link,
							{ to: rightTo },
							_react2.default.createElement('i', { className: 'iconfont icon-' + rightIcon })
						);
					} else {
						right = _react2.default.createElement(
							'div',
							{ onClick: rightClick },
							_react2.default.createElement('i', { className: 'iconfont icon-' + rightIcon })
						);
					}
				}
	
				return _react2.default.createElement(
					'header',
					{ className: 'common-header', 'data-flex': true },
					_react2.default.createElement(
						'div',
						{ className: 'icon', 'data-flex': 'main:center cross:center', 'data-flex-box': '0' },
						left
					),
					_react2.default.createElement(
						'h2',
						null,
						title
					),
					_react2.default.createElement(
						'div',
						{ className: 'icon', 'data-flex': 'main:center cross:center', 'data-flex-box': '0' },
						right
					)
				);
			}
		}]);
	
		return Header;
	}(_react.Component);
	
	Header.contextTypes = {
		router: _react2.default.PropTypes.object.isRequired
	};
	/**
	 * 暂无记录
	 * 
	 */
	
	var DataNull = exports.DataNull = function (_Component3) {
		_inherits(DataNull, _Component3);
	
		function DataNull() {
			_classCallCheck(this, DataNull);
	
			return _possibleConstructorReturn(this, (DataNull.__proto__ || Object.getPrototypeOf(DataNull)).apply(this, arguments));
		}
	
		_createClass(DataNull, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					'\u6682\u65E0\u8BB0\u5F55'
				);
			}
		}]);
	
		return DataNull;
	}(_react.Component);
	/**
	 * TipMsgSignIn
	 */
	
	
	var TipMsgSignIn = exports.TipMsgSignIn = function (_Component4) {
		_inherits(TipMsgSignIn, _Component4);
	
		function TipMsgSignIn() {
			_classCallCheck(this, TipMsgSignIn);
	
			return _possibleConstructorReturn(this, (TipMsgSignIn.__proto__ || Object.getPrototypeOf(TipMsgSignIn)).apply(this, arguments));
		}
	
		_createClass(TipMsgSignIn, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'tip-msg-signin' },
					'\u8BF7\u5148',
					_react2.default.createElement(
						_reactRouter.Link,
						{ to: '/signin' },
						'\u767B\u5F55'
					)
				);
			}
		}]);
	
		return TipMsgSignIn;
	}(_react.Component);
	/**
	 * 用户头像
	 */
	
	
	var UserHeadImg = exports.UserHeadImg = function (_Component5) {
		_inherits(UserHeadImg, _Component5);
	
		function UserHeadImg() {
			_classCallCheck(this, UserHeadImg);
	
			return _possibleConstructorReturn(this, (UserHeadImg.__proto__ || Object.getPrototypeOf(UserHeadImg)).apply(this, arguments));
		}
	
		_createClass(UserHeadImg, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement('div', { className: 'user-headimg', style: { backgroundImage: 'url(' + this.props.url + ')' } });
			}
		}]);
	
		return UserHeadImg;
	}(_react.Component);
	/**
	 * TabIcon
	 */
	
	
	var TabIcon = exports.TabIcon = function (_Component6) {
		_inherits(TabIcon, _Component6);
	
		function TabIcon() {
			_classCallCheck(this, TabIcon);
	
			return _possibleConstructorReturn(this, (TabIcon.__proto__ || Object.getPrototypeOf(TabIcon)).apply(this, arguments));
		}
	
		_createClass(TabIcon, [{
			key: 'render',
			value: function render() {
				var _props3 = this.props,
				    tab = _props3.tab,
				    top = _props3.top,
				    good = _props3.good;
	
				if (top) {
					tab = 'top';
				} else if (good) {
					tab = 'good';
				}
				return _react2.default.createElement('i', { className: 'iconfoot icon-' + tab });
			}
		}]);
	
		return TabIcon;
	}(_react.Component);
	/**
	 * Footer
	 */
	
	
	var FooterInit = function (_Component7) {
		_inherits(FooterInit, _Component7);
	
		function FooterInit(props) {
			_classCallCheck(this, FooterInit);
	
			var _this7 = _possibleConstructorReturn(this, (FooterInit.__proto__ || Object.getPrototypeOf(FooterInit)).call(this, props));
	
			_this7.state = {
				messageCount: 0
			};
			_this7.getMessageCount = function () {
				var accesstoken = _this7.props.User ? _this7.props.User.accesstoken : '';
				if (accesstoken) {
					_lib.Lib.get('/api/v1/message/count', { accesstoken: accesstoken }, function (res) {
						_this7.setState({
							messageCount: res.data
						});
					});
				}
			};
			return _this7;
		}
	
		_createClass(FooterInit, [{
			key: 'render',
			value: function render() {
				var myUrl = this.props.User && this.props.User.loginname ? '/user/' + this.props.User.loginname : '/signin';
				var arr = [];
				arr[this.props.index] = 'on';
				return _react2.default.createElement(
					'footer',
					{ className: 'common-footer' },
					_react2.default.createElement('div', { className: 'zhanwei' }),
					_react2.default.createElement(
						'ul',
						{ className: 'menu', 'data-flex': 'box:mean' },
						_react2.default.createElement(
							'li',
							{ className: arr[0] },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/' },
								_react2.default.createElement('i', { className: 'icon icon-shouye' }),
								'\u9996\u9875'
							)
						),
						_react2.default.createElement(
							'li',
							{ className: arr[1] },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/topic/create' },
								_react2.default.createElement('i', { className: 'icon icon-fabu' }),
								'\u53D1\u5E03'
							)
						),
						_react2.default.createElement(
							'li',
							{ className: arr[2] },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/my/messages' },
								_react2.default.createElement('i', { className: 'icon icon-xiaoxi' }),
								'\u6D88\u606F',
								this.state.messageCount > 0 ? this.state.messageCount : ''
							)
						),
						_react2.default.createElement(
							'li',
							{ className: arr[3] },
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: myUrl },
								_react2.default.createElement('i', { className: 'icon icon-wode' }),
								'\u6211\u7684'
							)
						)
					)
				);
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.getMessageCount();
			}
			// /**
			//  * 防止组件不必要的更新
			//  */
			// shouldComponentUpdate(nextProps, nextState) {
			// 	return this.props.index !== nextProps.index || this.state.messageCount !== nextState.messageCount; 
			// }
	
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate(prevProps, prevState) {
				this.getMessageCount();
			}
		}]);
	
		return FooterInit;
	}(_react.Component);
	
	FooterInit.defaultProps = {
		index: 0
	};
	var mapStateToProps = function mapStateToProps(state) {
		return { User: state.User };
	};
	var Footer = (0, _reactRedux.connect)(mapStateToProps, (0, _actions2.default)('Footer'))(FooterInit);
	exports.Footer = Footer;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\cnode\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 264:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;!(function(GetNextPage) {
	    if (true) {
	
	        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (GetNextPage), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof module !== 'undefined' && module.exports) {
	        module.exports = GetNextPage();
	    } else {
	        window.GetNextPage = GetNextPage();
	    }
	})(function() {
	    function GetNextPage(select, set) {
	        this.el = getEl(select); //选择元素触发加载分页的元素
	        /*
	            元素在可视区位置，符合其中一个条件就会触发加载机制
	        */
	        this.top = set.top || 0; //元素在顶部伸出的距离才加载
	        this.right = set.right || 0; //元素在右边伸出的距离才加载
	        this.bottom = set.bottom || 0; //元素在底部伸出的距离才加载
	        this.left = set.left || 0; //元素在左边伸出的距离才加载
	        this.dataType = 'json';
	        /*
	            发送到服务器的相关数据
	        */
	        this.url = set.url || location.pathname; //发送到服务器的地址
	        this.data = set.data || {}; //发送到服务器的数据
	        this.pageName = set.pageName || 'page'; //分页的参数名称，用来加载完成后+1
	        /*
	            回调方法
	        */
	        this.startCall = set.start || function() {}; //开始加载时调用方法
	        this.loadCall = set.load || function() {}; //加载成功时调用方法
	        this.errorCall = set.error || function() {}; //开始加载时调用方法
	        this.endCall = set.end || function() {}; //加载完成时调用方法
	
	        //监听的事件列表
	        this.monitorEvent = ['DOMContentLoaded', 'load', 'click', 'touchstart', 'touchend', 'haschange', 'online', 'pageshow', 'popstate', 'resize', 'storage', 'mousewheel', 'scroll'];
	        /*
	            存储http请求对象
	        */
	        this.xhr = null;
	        /*
	            页面初始化
	        */
	        this.init();
	    };
	
	    /**
	     * 初始化插件
	     */
	    GetNextPage.prototype.init = function() {
	        this.eachDOM = this.eachDOM.bind(this);
	        this.readystatechange = this.readystatechange.bind(this);
	        this.start();
	    };
	
	    GetNextPage.prototype.start = function() {
	        //事件绑定
	        var eventList = this.monitorEvent;
	        for (let i = 0; i < eventList.length; i++) {
	            window.addEventListener(eventList[i], this.eachDOM, false);
	        }
	        this.eachDOM();
	    };
	    /**
	     * 卸载插件
	     */
	    GetNextPage.prototype.end = function() {
	        var eventList = this.monitorEvent;
	        for (let i = 0; i < eventList.length; i++) {
	            window.removeEventListener(eventList[i], this.eachDOM, false);
	        }
	
	        if (this.xhr) this.xhr.removeEventListener('readystatechange', this.readystatechange, false);
	    };
	
	    /**
	     * 遍历DOM查询是否符合加载条件
	     */
	    GetNextPage.prototype.eachDOM = function() {
	
	        if (this.testXhrStart()) return;
	        let length = this.el.length;
	        for (let i = 0; i < length; i++) {
	            if (this.testMeet(this.el[i]) === true) {
	                this.GetNextPageData(this.el[i]);
	                return;
	            }
	
	        }
	    };
	    /**
	     * 获取下一页数据
	     * @param {object} el 触发事件的元素
	     */
	    GetNextPage.prototype.GetNextPageData = function(el) {
	        if (this.testXhrStart()) return;
	        this.startCall(el);
	        let url = this.getUrl();
	        this.xhr = new XMLHttpRequest(); //创建http请求对象
	        this.xhr.open('GET', url, true); //异步请求
	        this.xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	        this.xhr.addEventListener('readystatechange', this.readystatechange, false);
	        this.xhr.send(); //发送请求
	
	    };
	
	    /**
	     * http请求
	     */
	    GetNextPage.prototype.readystatechange = function() {
	        let xhr = this.xhr;
	
	        if (xhr.readyState === 4) {
	            var head = xhr.getAllResponseHeaders();
	            var response = xhr.responseText;
	            //将服务器返回的数据，转换成json
	            if (/application\/json/.test(head) || this.dataType === 'json' && /^(\{|\[)([\s\S])*?(\]|\})$/.test(response)) {
	                response = JSON.parse(response);
	            }
	
	            if (xhr.status === 200) {
	                this.loadCall(response, xhr);
	                if (this.data[this.pageName]) this.data[this.pageName]++;
	            } else {
	                this.errorCall(response, xhr.status, xhr);
	            }
	            this.endCall(response, xhr.status, xhr);
	        }
	
	    };
	    /**
	     * 获取发送请求的url，含参数
	     * @returns {string} 返回拼接成的url地址
	     */
	    GetNextPage.prototype.getUrl = function() {
	        let data = this.data;
	        let aData = [];
	        let url = '';
	        for (let attr in data) {
	            aData.push(attr + '=' + data[attr]);
	        }
	        url = this.url + '?' + aData.join('&') + '&' + new Date().getTime();
	        return url;
	    };
	    /**
	     * 检测元素是否在可视区
	     * @param {object} el 检测的元素
	     */
	    GetNextPage.prototype.testMeet = function(el) {
	        let bcr = el.getBoundingClientRect(); //取得元素在可视区的位置
	        let mw = el.offsetWidth; //元素自身宽度
	        let mh = el.offsetHeight; //元素自身的高度
	        let w = window.innerWidth; //视窗的宽度
	        let h = window.innerHeight; //视窗的高度
	        let boolX = (!((bcr.right - this.left) <= 0 && ((bcr.left + mw) - this.left) <= 0) && !((bcr.left + this.right) >= w && (bcr.right + this.right) >= (mw + w))); //上下符合条件
	        let boolY = (!((bcr.bottom - this.top) <= 0 && ((bcr.top + mh) - this.top) <= 0) && !((bcr.top + this.bottom) >= h && (bcr.bottom + this.bottom) >= (mh + h))); //上下符合条件
	        if (el.width != 0 && el.height != 0 && boolX && boolY) {
	            return true;
	        } else {
	            return false;
	        }
	    };
	    /**
	     * 判断请求状态
	     * @returns {boolean} true 禁止请求 false允许请求
	     */
	    GetNextPage.prototype.testXhrStart = function() {
	        return Boolean((this.xhr !== null) && (this.xhr && this.xhr.readyState !== 4));
	    };
	    /**
	     * 获取元素
	     * @param   {string} select 选择器
	     * @returns {Array}    返回选择的元素
	     */
	    function getEl(select) {
	        switch (typeof select) {
	            case 'string':
	                return document.querySelectorAll(select);
	            case 'object':
	                if (Object.prototype.toString.call(select) === '[object Array]') {
	                    return select;
	                } else {
	                    return [select];
	                }
	        }
	    }
	    return GetNextPage;
	});

/***/ },

/***/ 265:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\cnode\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\cnode\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(198);
	
	var _reactRedux = __webpack_require__(167);
	
	var _actions = __webpack_require__(260);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _lib = __webpack_require__(261);
	
	var _index = __webpack_require__(263);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TopicPost = function (_Component) {
		_inherits(TopicPost, _Component);
	
		function TopicPost(props) {
			_classCallCheck(this, TopicPost);
	
			/**
	   * 初始化组件状态
	   * @type {Object}
	   */
			var _this = _possibleConstructorReturn(this, (TopicPost.__proto__ || Object.getPrototypeOf(TopicPost)).call(this, props));
	
			_this.state = {
				tab: '',
				title: '',
				content: '',
				accesstoken: _this.props.User ? _this.props.User.accesstoken : ''
			};
			_this.postState = false;
			/**
	   * [点击发布按钮]
	   * @return {[type]} [description]
	   */
			_this.rightClick = function () {
				var state = _this.state;
	
				if (_this.postState) return false;
				if (!state.tab) {
					return alert('请选择发表类型');
				} else if (state.title.length < 10) {
					return alert('标题字数必须大于10');
				} else if (state.content.length < 30) {
					return alert('内容字数不能少于30');
				}
				_this.postState = true;
				_lib.Lib.post('/api/v1/topic/', {
					accesstoken: state.accesstoken,
					tab: state.tab,
					title: state.title,
					content: state.content
				}, function (res) {
					if (res.success) {
						_this.context.router.push({
							pathname: '/topic' + res.topic_id
						});
					} else {
						alert('发布失败');
						_this.postState = false;
					}
				}, function (res) {
					alert('发布失败');
					_this.postState = false;
				});
			};
			/**
	   * [获取options 类型]
	   * @return {[type]} [监听用户输入]
	   */
			_this.tabInput = function (e) {
				_this.state.tab = e.target.value;
			};
			/**
	   * [获取主题名]
	   * @return {[type]} [description]
	   */
			_this.titleInput = function (e) {
				_this.state.title = e.target.value;
			};
			/**
	   * [获取内容]
	   * @return {[type]} [description]
	   */
			_this.contentInput = function (e) {
				_this.state.content = e.target.value;
			};
			return _this;
		}
	
		_createClass(TopicPost, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_index.Header, { title: '\u53D1\u8868\u4E3B\u9898', rightIcon: 'fabu', rightClick: this.rightClick }),
					main,
					_react2.default.createElement(_index.Footer, { index: '1' })
				);
			}
		}]);
	
		return TopicPost;
	}(_react.Component);
	
	TopicPost.contextTypes = {
		router: _react2.default.PropTypes.object.isRequired
	};
	
	var NewTopic = function (_Component2) {
		_inherits(NewTopic, _Component2);
	
		function NewTopic() {
			_classCallCheck(this, NewTopic);
	
			return _possibleConstructorReturn(this, (NewTopic.__proto__ || Object.getPrototypeOf(NewTopic)).call(this, props));
		}
	
		_createClass(NewTopic, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'topic-create' },
					_react2.default.createElement(
						'div',
						{ className: 'item' },
						_react2.default.createElement(
							'select',
							{ className: 'tab', defaultValue: this.props.tab, onInput: this.props.tabInput },
							_react2.default.createElement(
								'option',
								{ value: '' },
								'\u8BF7\u9009\u62E9\u53D1\u8868\u7C7B\u578B'
							),
							_react2.default.createElement(
								'option',
								{ value: 'share' },
								'\u5206\u4EAB'
							),
							_react2.default.createElement(
								'option',
								{ value: 'ask' },
								'\u95EE\u7B54'
							),
							_react2.default.createElement(
								'option',
								{ value: 'job' },
								'\u5DE5\u4F5C'
							)
						)
					),
					_react2.default.createElement(
						'div',
						{ className: 'item' },
						_react2.default.createElement('input', { type: 'text', defaultValue: this.props.title, onInput: this.props.titleInput, placeholder: '\u6807\u9898\u5B57\u6570\u4E0D\u4F4E\u4E8E10' })
					),
					_react2.default.createElement(
						'div',
						{ className: 'item' },
						_react2.default.createElement('textarea', { defaultValue: this.props.content, onInput: this.props.contentInput, placeholder: '\u5185\u5BB9\u5B57\u6570\u4E0D\u4F4E\u4E8E30' })
					)
				);
			}
		}]);
	
		return NewTopic;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
		return {
			User: state.User
		};
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, (0, _actions2.default)('TopicPost'))(TopicPost); //连接redux
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\cnode\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "TopicPost.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 266:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\cnode\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\cnode\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(198);
	
	var _reactRedux = __webpack_require__(167);
	
	var _actions = __webpack_require__(260);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _lib = __webpack_require__(261);
	
	var _index = __webpack_require__(263);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * Topic
	 */
	
	var Topic = function (_Component) {
		_inherits(Topic, _Component);
	
		function Topic() {
			_classCallCheck(this, Topic);
	
			//初始化状态
			var _this = _possibleConstructorReturn(this, (Topic.__proto__ || Object.getPrototypeOf(Topic)).call(this, props));
	
			_this.initState = function (props) {
				var state = props.state,
				    location = props.location;
				var pathname = location.pathname,
				    search = location.search;
	
				_this.path = pathname + search;
				if (_typeof(state.path[_this.path]) == 'object' && state.path[_this.path].path == _this.path) {
					//当state已经有数据时候
					_this.state = state.path[_this.path];
				} else {
					//初始化state,当path数据都为空的时候
					_this.state = (0, _lib.merged)(state.defaults);
					_this.state.path = _this.path;
				}
			};
			//获取数据
			_this.getData = function (props, state) {
				var _this$state = _this.state,
				    scrollX = _this$state.scrollX,
				    scrollY = _this$state.scrollY;
	
				window.scrollTo(scrollX, scrollY); //设置滚动条位置
				var options = {
					type: 'GET',
					url: '/api/v1/topic/' + (props.params.id || ''),
					data: function data(props, state) {
						var accesstoken = props.User ? props.User.accesstoken : '';
						return { mdrender: state.mdrender, accesstoken: accesstoken };
					}
				};
				_lib.Lib.get(options.url, options.data, function (res) {
					_this.state.loadMsg = '加载成功';
					_this.state.loadAnimation = false;
					_this.state.data = res.data;
					//dispatch 改变状态
					_this.props.SET_STATE(_this.state);
				}, function (res, xhr) {
					if (xhr.status == 404) {
						_this.state.loadMsg = '话题不存在';
					} else {
						_this.state.loadMsg = '加载失败';
					}
					_this.state.loadAnimation = false;
					//dispatch 改变状态
					_this.props.SET_STATE(_this.state);
				});
			};
			/**
	   * [卸载组件之前一些操作]
	   * @return {[type]} [description]
	   */
			_this.unMount = function () {
				//记录滚动条的位置
				_this.state.scrollX = window.scrollX;
				_this.state.scrollY = window.scrollY;
				//dispatch 改变状态
				_this.props.SET_STATE(_this.state);
			};
			/**
	   * 点赞或者取消赞
	   * @param  {[type]} id        [reply_id]
	   * @param  {[type]} index     [index]
	   * @param  {[type]} loginname [description]
	   */
			_this.clickZan = function (id, index, loginname) {
				var accesstoken = _this.props.User ? _this.props.User.accesstoken : '';
				var uid = _this.props.User ? _this.props.User.id : '';
				if (!accesstoken) {
					return _this.context.router.push({ pathname: '/signin' }); //跳转到登录
				} else if (_this.props.User.loginname === loginname) {
					return alert('你不能给自己点赞!');
				}
				_lib.Lib.post('/api/v1/reply/${id}/ups', { accesstoken: accesstoken }, function (res) {
					var ups = _this.props.state.data.replies[index - 1].ups;
					if (res.action == 'down') {
						//取消赞，ups 里面存的是user_id
						for (var i = 0; i < ups.length; i++) {
							if (ups[i] === uid) {
								ups.slice(i, 1); //删除
							}
						}
					} else {
						//点赞
						ups.push(uid);
					}
				}, function (res) {
					_this.props.SET_STATE(_this.props.state);
				});
			};
			/**
	   * 显示回复框
	   * @param  {[type]} index [楼层]
	   * @return {[type]}       [description]
	   */
			_this.showReply = function (index) {
				var accesstoken = _this.props.User ? _this.props.User.accesstoken : '';
				if (!accesstoken) {
					return _this.context.router.push({ pathname: '/signin' });
				}
				--index;
				if (_this.props.state.data.replies[index].display === 'block') {
					_this.props.state.data.replies[index].display === 'none';
				} else {
					_this.props.state.data.replies[index].display === 'block';
				}
				_this.props.SET_STATE(_this.props.state);
			};
			/**
	   * 重新加载数据
	   * @param  {[type]} data [description]
	   * @return {[type]}      [description]
	   */
			_this.reLoadData = function (data) {
				_this.props.state.data = data;
				_this.props.SET_STATE(_this.props.state);
			};
			_this.initState(_this.props);
			return _this;
		}
		/**
	  * [componentDidMount description]
	  * @return {[type]} [description]
	  */
	
	
		_createClass(Topic, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				//render之后 获取数据
				this.getData();
			}
			/**
	   * [componentWillReceiveProps description]
	   * @param  {[type]} np [description]
	   * @return {[type]}    [description]
	   */
	
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(np) {
				var location = np.location;
				var pathname = location.pathname,
				    search = location.search;
	
				var path = pathname + search;
				if (this.path !== path) {
					this.unMount(); //地址栏已经发生改变，做一些卸载前的处理
				}
				this.initState(np);
			}
			/**
	   * [componentDidUpdate description]
	   * @return {[type]} [description]
	   */
	
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate() {
				//组件更新之后重新获取数据
				this.getData();
			}
			/**
	   * [componentWillUnmount description]
	   * @return {[type]} [description]
	   */
	
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				this.unMount(); //地址栏已经发生改变，做一些卸载前的处理
			}
		}, {
			key: 'render',
			value: function render() {
				var _props$state = this.props.state,
				    data = _props$state.data,
				    loadAnimation = _props$state.loadAnimation,
				    loadMsg = _props$state.loadMsg,
				    id = _props$state.id;
	
				var main = data ? _react2.default.createElement(Article, _extends({}, this.props, { reLoadData: this.reLoadData, clickZan: this.clickZan, showReply: this.showReply })) : _react2.default.createElement(_index.DataLoad, { loadMsg: loadMsg, loadAnimation: loadAnimation });
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(Header, { leftIcon: 'fanhui', title: '\u8BE6\u60C5' }),
					main
				);
			}
		}]);
	
		return Topic;
	}(_react.Component);
	
	Topic.contextTypes = {
		route: _react2.default.PropTypes.object.required
	};
	/**
	 * 文章主体
	 */
	
	var Article = function (_Component2) {
		_inherits(Article, _Component2);
	
		function Article(props) {
			_classCallCheck(this, Article);
	
			return _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).call(this, props));
		}
	
		_createClass(Article, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'topic' },
					_react2.default.createElement(
						'div',
						{ className: 'user', 'data-flex': true },
						_react2.default.createElement(
							'div',
							{ className: 'headimg', 'data-flex-box': '0' },
							_react2.default.createElement(_index.UserHeadImg, { url: author.url_avatar })
						),
						_react2.default.createElement(
							'div',
							{ className: 'data', 'data-flex': 'dir:top', 'data-flex-box': '1' },
							_react2.default.createElement(
								'div',
								{ 'data-flex': 'main:justify' },
								_react2.default.createElement(
									_reactRouter.Link,
									{ to: '/user/' + author.loginname, className: 'name' },
									author.loginname
								),
								_react2.default.createElement(
									'time',
									{ 'data-flex-box': '1' },
									_lib.Lib.formatDate(create_at)
								),
								_react2.default.createElement(
									'div',
									{ className: 'lou' },
									'#\u697C\u4E3B'
								),
								_react2.default.createElement(
									'div',
									{ className: 'font', 'data-flex': 'main: center cross: center' },
									_react2.default.createElement(_index.TabIcon, this.props.state.data)
								)
							),
							_react2.default.createElement(
								'div',
								{ className: 'qt', 'data-flex': true },
								_react2.default.createElement(
									'div',
									null,
									'\u9605\u8BFB:',
									visit_count
								),
								_react2.default.createElement(
									'div',
									null,
									'\u56DE\u590D:',
									reply_count
								)
							)
						)
					),
					_react2.default.createElement(
						'h2',
						{ className: 'tit2' },
						title
					),
					_react2.default.createElement('div', { className: 'content markdown-body', dangerouslySetInnerHTML: this.createMarkUp() }),
					_react2.default.createElement(
						'h3',
						{ className: 'tit3' },
						'\u5171',
						_react2.default.createElement(
							'em',
							null,
							replies.length
						),
						'\u6761\u56DE\u590D'
					),
					_react2.default.createElement(ReplyList, { reLoadData: this.reLoadData, list: replies, id: id, clickZan: this.clickZan, showReply: this.showReply, User: this.props.User })
				);
			}
		}]);
	
		return Article;
	}(_react.Component);
	/**
	 * 回复列表
	 */
	
	
	var ReplyList = function (_Component3) {
		_inherits(ReplyList, _Component3);
	
		function ReplyList(props) {
			_classCallCheck(this, ReplyList);
	
			var _this3 = _possibleConstructorReturn(this, (ReplyList.__proto__ || Object.getPrototypeOf(ReplyList)).call(this, props));
	
			_this3.isUp = function (arr) {
				var id = _this3.props.User ? _this3.props.User.id : '';
				for (var i = 0; i < arr.length; i++) {
					if (arr[i] == id) return true;
				}
				return false;
			};
			return _this3;
		}
	
		_createClass(ReplyList, [{
			key: 'render',
			value: function render() {
				var _this4 = this;
	
				var accesstoken = this.props.User ? this.props.User.accesstoken : '';
				return _react2.default.createElement(
					'ul',
					{ className: 're-list' },
					this.props.list.map(function (item, index) {
						var id = item.id,
						    content = item.content,
						    author = item.author,
						    ups = item.ups,
						    create_at = item.create_at,
						    _item$display = item.display,
						    display = _item$display === undefined ? 'none' : _item$display;
	
						var at = new Date(create_at);
						var upState = _this4.isUp(ups);
						var createMarkup = function createMarkup() {
							return {
								__html: content
							};
						};
	
						return _react2.default.createElement(
							'li',
							{ key: index, 'data-flex': true },
							_react2.default.createElement(
								'div',
								{ className: 'headimg', 'data-flex-box': '0' },
								_react2.default.createElement(UserHeaderImg, { url: author.url })
							),
							_react2.default.createElement(
								'div',
								{ className: 'main', 'data-flex-box': '1' },
								_react2.default.createElement(
									'div',
									{ 'data-flex': 'main: justify' },
									_react2.default.createElement(
										_reactRouter.Link,
										{ to: '/user/' + author.loginnname, className: 'name' },
										author.loginname
									),
									_react2.default.createElement(
										'time',
										{ 'data-flex-box': '1' },
										_lib.Lib.formatDate(create_at)
									),
									_react2.default.createElement(
										'div',
										{ className: 'lou' },
										'#',
										++index
									)
								),
								_react2.default.createElement('div', { className: 'content markdown-body', dangerouslySetInnerHTML: createMarkup() }),
								_react2.default.createElement(
									'div',
									{ className: 'bottom', 'data-flex': 'main:right' },
									_react2.default.createElement(
										'div',
										{ className: 'font font-' + upState, onClick: function onClick() {
												_this4.props.clickZan(id, index, author.loginname);
											} },
										_react2.default.createElement('i', { className: 'iconfont icon-dianzan' }),
										_react2.default.createElement(
											'em',
											null,
											ups.length > 0 ? ups.length : ''
										)
									),
									_react2.default.createElement(
										'div',
										{ className: 'font', onClick: function onClick() {
												_this4.props.showReplyBox(index);
											} },
										_react2.default.createElement('i', { className: 'iconfont icon-huifu' })
									)
								),
								_react2.default.createElement(ReplyBox, null)
							)
						);
					})
				);
			}
		}]);
	
		return ReplyList;
	}(_react.Component);
	
	var ReplyBox = function (_Component4) {
		_inherits(ReplyBox, _Component4);
	
		function ReplyBox(props) {
			_classCallCheck(this, ReplyBox);
	
			var _this5 = _possibleConstructorReturn(this, (ReplyBox.__proto__ || Object.getPrototypeOf(ReplyBox)).call(this, props));
	
			_this5.state = { btnname: '回复' };
			/**
	   * 提交回复内容
	   * @return {[type]} [description]
	   */
			_this5.submit = function () {
				_this5.setState({ btnname: '提交中' });
				var data = _this5.props.data;
				if (data.reply_id) {
					data.content = '[@' + _this5.props.loginname + '](/user/' + _this5.props.loginname + ') ' + _this5.refs.content.value;
				} else {
					data.content = _this5.refs.content.value;
				}
				if (data.content == '') {
					return alert('回复内容不能为空');
				}
				data.content += '\n\r[from react cnode 手机版](https://github.com/hitao123/react-cnode)';
				_lib.Lib.post('/api/v1/topic/' + data.id + '/replies', data, function (res) {
					_this5.setState({ btnname: '回复成功' });
					//重新获取评论列表
					_lib.Lib.get('/api/v1//topic/' + data.id, {}, function (res) {
						_this5.props.reLoadData(res.data); //刷新
						_this5.setState({ btnname: '回复' });
					}, function (res) {
						_this5.setState({ btnname: '刷新失败，请重试' });
					});
				}, function (res) {
					_this5.setState({ btnname: '回复失败' });
				});
			};
			return _this5;
		}
	
		_createClass(ReplyBox, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'reply-box', style: { display: this.props.display } },
					_react2.default.createElement(
						'div',
						{ className: 'text' },
						_react2.default.createElement('textarea', { ref: 'content', placeholder: this.props.placeholder })
					),
					_react2.default.createElement(
						'div',
						{ 'data-flex': 'main:right' },
						_react2.default.createElement(
							'button',
							{ className: 'btn', onClick: this.submit },
							this.state.btnname
						)
					)
				);
			}
		}]);
	
		return ReplyBox;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
		return {
			state: state.Data,
			User: state.User
		};
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, (0, _actions2.default)('Topic'))(Topic);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\cnode\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "Topic.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 267:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\cnode\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\cnode\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(198);
	
	var _reactRedux = __webpack_require__(167);
	
	var _actions = __webpack_require__(260);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _lib = __webpack_require__(261);
	
	var _index = __webpack_require__(263);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * MyMessage
	 */
	var MyMessage = function (_Component) {
		_inherits(MyMessage, _Component);
	
		function MyMessage(props) {
			_classCallCheck(this, MyMessage);
	
			//初始化状态
			var _this = _possibleConstructorReturn(this, (MyMessage.__proto__ || Object.getPrototypeOf(MyMessage)).call(this, props));
	
			_this.initState = function (props) {
				var state = props.state,
				    location = props.location;
				var pathname = location.pathname,
				    search = location.search;
	
				_this.path = pathname + search;
				if (_typeof(state.path[_this.path]) == 'object' && state.path[_this.path].path == _this.path) {
					//当state已经有数据时候
					_this.state = state.path[_this.path];
				} else {
					//初始化state,当path数据都为空的时候
					_this.state = (0, _lib.merged)(state.defaults);
					_this.state.path = _this.path;
				}
			};
			//获取数据
			_this.getData = function (props, state) {
				var _this$state = _this.state,
				    scrollX = _this$state.scrollX,
				    scrollY = _this$state.scrollY;
	
				window.scrollTo(scrollX, scrollY); //设置滚动条位置
				var options = {
					type: 'GET',
					url: '/api/v1/messages',
					data: function data(props) {
						var accesstoken = props.User ? props.User.accesstoken : '';
						return { accesstoken: accesstoken };
					}
				};
				_lib.Lib.get(options.url, options.data, function (res) {
					_this.state.loadMsg = '加载成功';
					_this.state.loadAnimation = false;
					_this.state.data = res.data;
					//dispatch 改变状态
					_this.props.SET_STATE(_this.state);
				}, function (res, xhr) {
					if (xhr.status == 404) {
						_this.state.loadMsg = '消息不存在';
					} else {
						_this.state.loadMsg = '加载失败';
					}
					_this.state.loadAnimation = false;
					//dispatch 改变状态
					_this.props.SET_STATE(_this.state);
				});
			};
			/**
	   * [卸载组件之前一些操作]
	   * @return {[type]} [description]
	   */
			_this.unMount = function () {
				//记录滚动条的位置
				_this.state.scrollX = window.scrollX;
				_this.state.scrollY = window.scrollY;
				//dispatch 改变状态
				_this.props.SET_STATE(_this.state);
			};
			_this.initState(_this.props);
			return _this;
		}
		/**
	  * [componentDidMount description]
	  * @return {[type]} [description]
	  */
	
	
		_createClass(MyMessage, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				//render之后 获取数据
				this.getData();
			}
			/**
	   * [componentWillReceiveProps description]
	   * @param  {[type]} np [description]
	   * @return {[type]}    [description]
	   */
	
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(np) {
				var location = np.location;
				var pathname = location.pathname,
				    search = location.search;
	
				var path = pathname + search;
				if (this.path !== path) {
					this.unMount(); //地址栏已经发生改变，做一些卸载前的处理
				}
				this.initState(np);
			}
			/**
	   * [componentDidUpdate description]
	   * @return {[type]} [description]
	   */
	
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate() {
				//组件更新之后重新获取数据
				this.getData();
			}
			/**
	   * [componentWillUnmount description]
	   * @return {[type]} [description]
	   */
	
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				this.unMount(); //地址栏已经发生改变，做一些卸载前的处理
			}
		}, {
			key: 'render',
			value: function render() {
				var _props$state = this.props.state,
				    data = _props$state.data,
				    loadAnimation = _props$state.loadAnimation,
				    loadMsg = _props$state.loadMsg,
				    id = _props$state.id,
				    tabIndex = _props$state.tabIndex;
				var _props = this.props,
				    User = _props.User,
				    params = _props.params;
	
				var main = null;
	
				if (!User) {
					main = _react2.default.createElement(_index.TipMsgSignin, null);
				} else if (!data) {
					main = _react2.default.createElement(_index.DataLoad, { loadAnimation: loadAnimation, loadMsg: loadMsg });
				} else {
					var hasnot_read_messages = data.hasnot_read_messages,
					    has_read_messages = data.has_read_messages;
	
					Array.prototype.push.apply(hasnot_read_messages, has_read_messages);
					main = _react2.default.createElement(MessageList, { list: hasnot_read_messages });
				}
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_index.Header, { title: '\u6D88\u606F' }),
					main,
					_react2.default.createElement(_index.Footer, { index: '2' })
				);
			}
		}]);
	
		return MyMessage;
	}(_react.Component);
	
	/**
	 * MessageList
	 */
	
	var MessageList = function (_Component2) {
		_inherits(MessageList, _Component2);
	
		function MessageList(props) {
			_classCallCheck(this, MessageList);
	
			return _possibleConstructorReturn(this, (MessageList.__proto__ || Object.getPrototypeOf(MessageList)).call(this, props));
		}
	
		_createClass(MessageList, [{
			key: 'render',
			value: function render() {
				var list = this.props.list;
				return _react2.default.createElement(
					'div',
					{ className: 'msg-box' },
					_react2.default.createElement(
						'ul',
						{ className: 'list' },
						list.map(function (item, index) {
							var type = item.type,
							    author = item.author,
							    topic = item.topic,
							    reply = item.reply,
							    has_read = item.has_read;
	
							var main = null;
							if (type == 'at') {
								main = _react2.default.createElement(
									'div',
									null,
									'\u5728\u8BDD\u9898',
									_react2.default.createElement(
										_reactRouter.Link,
										{ to: '/topic/' + topic.id },
										topic.title
									),
									'@\u4F60'
								);
							} else {
								main = _react2.default.createElement(
									'div',
									null,
									'\u5728\u8BDD\u9898',
									_react2.default.createElement(
										_reactRouter.Link,
										{ to: '/topic/' + topic.id },
										topic.title
									),
									'\u56DE\u590D\u4F60'
								);
							}
							return _react2.default.createElement(
								'li',
								{ 'data-flex': 'box:first', key: index },
								_react2.default.createElement(
									_reactRouter.Link,
									{ className: 'user', to: '/user/' + author.loginname },
									_react2.default.createElement(_index.UserHeadImg, { url: author.avatar_url })
								),
								_react2.default.createElement(
									'div',
									null,
									_react2.default.createElement(
										'div',
										{ className: 'name' },
										author.loginname,
										_react2.default.createElement(
											'time',
											null,
											_lib.Lib.formatDate(reply.create_at)
										)
									),
									_react2.default.createElement(
										'div',
										{ 'data-flex': 'box:first' },
										_react2.default.createElement(
											'div',
											{ 'data-flex': 'cross:center' },
											_react2.default.createElement('div', { className: 'dian-' + has_read })
										),
										content
									)
								)
							);
						})
					)
				);
			}
		}]);
	
		return MessageList;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
		return {
			state: state.Data,
			User: state.User
		};
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, (0, _actions2.default)('MyMessage'))(MyMessage); //连接redux
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\cnode\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "MyMessage.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\cnode\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\cnode\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(198);
	
	var _reactRedux = __webpack_require__(167);
	
	var _actions = __webpack_require__(260);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _lib = __webpack_require__(261);
	
	var _index = __webpack_require__(263);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	/**
	 * UserInfo
	 */
	var UserInfo = function (_Component) {
		_inherits(UserInfo, _Component);
	
		function UserInfo(props) {
			_classCallCheck(this, UserInfo);
	
			//初始化状态
			var _this = _possibleConstructorReturn(this, (UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).call(this, props));
	
			_this.initState = function (props) {
				var state = props.state,
				    location = props.location;
				var pathname = location.pathname,
				    search = location.search;
	
				_this.path = pathname + search;
				if (_typeof(state.path[_this.path]) == 'object' && state.path[_this.path].path == _this.path) {
					//当state已经有数据时候
					_this.state = state.path[_this.path];
				} else {
					//初始化state,当path数据都为空的时候
					_this.state = (0, _lib.merged)(state.defaults);
					_this.state.path = _this.path;
				}
			};
			//获取数据
			_this.getData = function (props) {
				var _this$state = _this.state,
				    scrollX = _this$state.scrollX,
				    scrollY = _this$state.scrollY;
	
				window.scrollTo(scrollX, scrollY); //设置滚动条位置
				var options = {
					type: 'GET',
					url: '/api/v1/user/' + props.params.loginname,
					data: {}
				};
				_lib.Lib.get(options.url, options.data, function (res) {
					_this.state.loadMsg = '加载成功';
					_this.state.loadAnimation = false;
					_this.state.data = res.data;
					//dispatch 改变状态
					_this.props.SET_STATE(_this.state);
				}, function (res, xhr) {
					if (xhr.status == 404) {
						_this.state.loadMsg = '用户不存在';
					} else {
						_this.state.loadMsg = '加载失败';
					}
					_this.state.loadAnimation = false;
					//dispatch 改变状态
					_this.props.SET_STATE(_this.state);
				});
			};
			/**
	   * [卸载组件之前一些操作]
	   * @return {[type]} [description]
	   */
			_this.unMount = function () {
				//记录滚动条的位置
				_this.state.scrollX = window.scrollX;
				_this.state.scrollY = window.scrollY;
				//dispatch 改变状态
				_this.props.SET_STATE(_this.state);
			};
			_this.tab = function (tabIndex) {
				_this.state.tabIndex = tabIndex;
				_this.props.SET_STATE(_this.state);
			};
			_this.initState(_this.props);
	
			return _this;
		}
		/**
	  * 在初始化渲染执行之后立刻调用一次，仅客户端有效（服务器端不会调用）。
	     * 在生命周期中的这个时间点，组件拥有一个 DOM 展现，
	     * 你可以通过 this.getDOMNode() 来获取相应 DOM 节点。
	  * @return {[type]} [description]
	  */
	
	
		_createClass(UserInfo, [{
			key: 'componentDidMount',
			value: function componentDidMount() {
				//render之后 获取数据
				this.getData(this.props);
			}
			/**
	   * 在组件接收到新的 props 的时候调用。在初始化渲染的时候，该方法不会调用
	   * 组件的 props 属性可以通过父组件来更改，这时，componentWillReceiveProps 将来被调用。可以在这个方法里更新 state,
	      * 以触发 render 方法重新渲染组件。
	   */
	
		}, {
			key: 'componentWillReceiveProps',
			value: function componentWillReceiveProps(np) {
				var location = np.location;
				var pathname = location.pathname,
				    search = location.search;
	
				var path = pathname + search;
				if (this.path !== path) {
					this.unMount(); //地址栏已经发生改变，做一些卸载前的处理
				}
				this.initState(np);
			}
			/**
	   * 该方法不会在初始化渲染的时候调用。
	   * 使用该方法可以在组件更新之后操作 DOM 元素。
	   * shouldComponentUpdate 假如为false， render  componentWillUpdate 和 componentDidUpdate都不会调用
	   */
	
		}, {
			key: 'componentDidUpdate',
			value: function componentDidUpdate() {
				//组件更新之后重新获取数据
				this.getData();
			}
			/**
	   * 在组件从 DOM 中移除的时候立刻被调用。
	   * 在该方法中执行任何必要的清理，比如无效的定时器，
	   * 或者清除在 componentDidMount 中创建的 DOM 元素
	   */
	
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				this.unMount(); //地址栏已经发生改变，做一些卸载前的处理
			}
		}, {
			key: 'render',
			value: function render() {
				var _props$state = this.props.state,
				    data = _props$state.data,
				    loadAnimation = _props$state.loadAnimation,
				    loadMsg = _props$state.loadMsg,
				    tabIndex = _props$state.tabIndex,
				    id = _props$state.id;
				var _props = this.props,
				    User = _props.User,
				    params = _props.params;
	
				User = User ? User : {};
				var main = data ? _react2.default.createElement(Home, { data: data, tabIndex: tabIndex, tab: this.tab }) : _react2.default.createElement(_index.DataLoad, { loadAnimation: loadAnimation, loadMsg: loadMsg });
				var title = params.loginname == User.loginname ? '个人中心' : params.loginname + '的个人中心';
				var footer = params.loginname == User.loginname ? _react2.default.createElement(_index.Footer, { index: '3' }) : null;
				var leftIcon = params.loginname == User.loginname ? null : 'fanhui';
				var rightIcon = params.loginname == User.loginname ? 'tuichu' : null;
	
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_index.Header, { title: title, leftIcon: leftIcon, rightIcon: rightIcon, rightTo: 'signout' }),
					main,
					footer
				);
			}
		}]);
	
		return UserInfo;
	}(_react.Component);
	
	/**
	 * Home
	 */
	
	
	var Home = function (_Component2) {
		_inherits(Home, _Component2);
	
		function Home(props) {
			_classCallCheck(this, Home);
	
			return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));
		}
	
		_createClass(Home, [{
			key: 'render',
			value: function render() {
				var _this3 = this;
	
				var _props$data = this.props.data,
				    avatar_url = _props$data.avatar_url,
				    loginname = _props$data.loginname,
				    score = _props$data.score,
				    recent_topics = _props$data.recent_topics,
				    recent_replies = _props$data.recent_replies,
				    create_at = _props$data.create_at;
				var tabIndex = this.props.tabIndex;
	
				var arrOn = [];
				var arrDisplay = [];
				arrOn[tabIndex] = 'on';
				arrDisplay[tabIndex] = 'block';
				return _react2.default.createElement(
					'div',
					{ className: 'user-index' },
					_react2.default.createElement(
						'div',
						{ className: 'headimg', 'data-flex': 'dir:top main:center cross:center' },
						_react2.default.createElement(UserHeadImg, { url: avatar_url }),
						_react2.default.createElement(
							'div',
							{ className: 'name' },
							loginname
						),
						_react2.default.createElement(
							'div',
							{ className: 'score' },
							'\u79EF\u5206\uFF1A',
							score,
							'\xA0\xA0\xA0\xA0\xA0\xA0\u6CE8\u518C\u4E8E\uFF1A',
							_lib.Lib.formatDate(create_at)
						)
					),
					_react2.default.createElement(
						'ul',
						{ className: 'tab-nav', 'data-flex': 'box:mean' },
						_react2.default.createElement(
							'li',
							{ onClick: function onClick() {
									_this3.props.tab(0);
								}, className: arrOn[0] },
							'\u4E3B\u9898'
						),
						_react2.default.createElement(
							'li',
							{ onClick: function onClick() {
									_this3.props.tab(1);
								}, className: arrOn[1] },
							'\u56DE\u590D'
						)
					),
					_react2.default.createElement(HomeList, { list: recent_topics, display: arrDisplay[0] }),
					_react2.default.createElement(HomeList, { list: recent_replies, display: arrDisplay[1] })
				);
			}
		}]);
	
		return Home;
	}(_react.Component);
	
	/**
	 * HomeList
	 * 发布的主题和回复列表
	 */
	
	
	var HomeList = function (_Component3) {
		_inherits(HomeList, _Component3);
	
		function HomeList() {
			_classCallCheck(this, HomeList);
	
			return _possibleConstructorReturn(this, (HomeList.__proto__ || Object.getPrototypeOf(HomeList)).apply(this, arguments));
		}
	
		_createClass(HomeList, [{
			key: 'render',
			value: function render() {
				var _props2 = this.props,
				    list = _props2.list,
				    dislay = _props2.dislay;
	
				return _react2.default.createElement(
					'ul',
					{ className: 'list', style: { display: display } },
					list.map(function (item, index) {
						return _react2.default.createElement(
							'li',
							{ key: index },
							'let ',
							(id, title, last_reply_at),
							' = item;',
							_react2.default.createElement(
								_reactRouter.Link,
								{ 'data-flex': 'box:last', to: '/topic/' + id },
								_react2.default.createElement(
									'div',
									{ className: 'tit' },
									title
								),
								_react2.default.createElement(
									'time',
									{ className: true },
									_lib.Lib.formatDate(last_reply_at)
								)
							)
						);
					})
				);
			}
		}]);
	
		return HomeList;
	}(_react.Component);
	
	var mapStateToProps = function mapStateToProps(state) {
		return {
			state: state.Data,
			User: state.User
		};
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, (0, _actions2.default)('UserInfo'))(UserInfo);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\cnode\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "UserInfo.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 269:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\cnode\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\cnode\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(167);
	
	var _actions = __webpack_require__(260);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _lib = __webpack_require__(261);
	
	var _index = __webpack_require__(263);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SignIn = function (_Component) {
		_inherits(SignIn, _Component);
	
		function SignIn(props) {
			_classCallCheck(this, SignIn);
	
			//初始化状态
			var _this = _possibleConstructorReturn(this, (SignIn.__proto__ || Object.getPrototypeOf(SignIn)).call(this, props));
	
			_this.state = { button: '登录' };
			_this.signClick = function () {
				var accesstoken = _this.refs.accesstoken.value;
				if (!accesstoken) {
					return alert('令牌不能为空');
				} else {
					//修改状态使用this.setState({}),不要直接使用this.state ={}
					_this.setState({ button: '登录中...' });
					//发送请求
					_lib.Lib.post('/api/v1/accesstoken', { accesstoken: accesstoken }, function (res) {
						if (res.success) {
							alert('登录成功');
							res.accesstoken = accesstoken;
							_this.props.SIGN_IN_SUCCESS(res); //dispatch action
							//跳转到相应路由
							_this.context.router.push({
								pathname: '/user/' + res.loginname
							});
						} else {
							alert('登录失败');
							_this.setState({ button: '登录' });
						}
					}, function () {
						alert('登录失败');
						_this.setState({ button: '登录' });
					});
				}
			};
			return _this;
		}
	
		_createClass(SignIn, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(_index.Header, { title: '\u767B\u5F55', leftIcon: 'fanhui' }),
					_react2.default.createElement(
						'div',
						{ className: 'signin', 'data-flex': 'dir:top main:center cross:center' },
						_react2.default.createElement(
							'div',
							{ className: 'center' },
							_react2.default.createElement(
								'div',
								{ className: 'input' },
								_react2.default.createElement('input', { type: 'text', placeholder: 'accesstoken', ref: 'accesstoken' })
							),
							_react2.default.createElement(
								'button',
								{ className: 'btn', onClick: this.signClick },
								this.state.button
							)
						)
					)
				);
			}
		}]);
	
		return SignIn;
	}(_react.Component);
	
	SignIn.contextTypes = {
		router: _react2.default.PropTypes.object.isRequired
	};
	
	var mapStateToProps = function mapStateToProps(state) {
		return {
			User: state.User
		};
	};
	
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
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, (0, _actions2.default)('SignIn'))(SignIn); //连接redux
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\cnode\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "SignIn.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 270:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\cnode\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\cnode\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(167);
	
	var _actions = __webpack_require__(260);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	var _lib = __webpack_require__(261);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var SignOut = function (_Component) {
		_inherits(SignOut, _Component);
	
		function SignOut(props) {
			_classCallCheck(this, SignOut);
	
			var _this = _possibleConstructorReturn(this, (SignOut.__proto__ || Object.getPrototypeOf(SignOut)).call(this, props));
	
			_this.signOutClick = function () {
				_this.props.SIGN_OUT(); //发起一次dispatch，更新state
				_this.context.router.replace({ pathname: '/' }); //跳转到首页，假如使用push会在浏览器历史添加一条记录
			};
			return _this;
		}
	
		_createClass(SignOut, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(Header, { title: '\u9000\u51FA', leftIcon: 'fanhui' }),
					_react2.default.createElement(
						'div',
						{ className: 'signin', 'data-flex': 'dir:top main:center cross:center' },
						_react2.default.createElement(
							'div',
							{ className: 'center' },
							_react2.default.createElement(
								'button',
								{ className: 'btn btn-red', onClick: this.signOutClick },
								'\u786E\u8BA4\u9000\u51FA\u767B\u5F55\uFF1F'
							)
						)
					)
				);
			}
		}]);
	
		return SignOut;
	}(_react.Component);
	
	SignOut.contextTypes = {
		router: _react2.default.PropTypes.object.isRequired
	};
	
	var mapStateToProps = function mapStateToProps(state) {
		return {
			User: state.User
		};
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, (0, _actions2.default)('SignOut'))(SignOut); //连接redux
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\cnode\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "SignOut.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 1:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\cnode\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\cnode\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _react = __webpack_require__(2);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(29);
	
	var _reactDom2 = _interopRequireDefault(_reactDom);
	
	var _reactRedux = __webpack_require__(167);
	
	var _route = __webpack_require__(197);
	
	var _route2 = _interopRequireDefault(_route);
	
	var _store = __webpack_require__(271);
	
	var _store2 = _interopRequireDefault(_store);
	
	__webpack_require__(280);
	
	__webpack_require__(284);
	
	__webpack_require__(289);
	
	__webpack_require__(291);
	
	__webpack_require__(297);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	//markdown 样式
	
	//样式
	//重置浏览器样式
	var store = (0, _store2.default)(); //store must be object
	//字体样式
	//flex 布局兼容
	
	
	//样式文件
	(0, _reactDom.render)(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_route2.default
	), document.getElementById('reactInit'));
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\cnode\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 273:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _core = __webpack_require__(274);
	
	var _helpers = __webpack_require__(275);
	
	var _defaults = __webpack_require__(278);
	
	var _defaults2 = _interopRequireDefault(_defaults);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * Creates logger with following options
	 *
	 * @namespace
	 * @param {object} options - options for logger
	 * @param {string | function | object} options.level - console[level]
	 * @param {boolean} options.duration - print duration of each action?
	 * @param {boolean} options.timestamp - print timestamp with each action?
	 * @param {object} options.colors - custom colors
	 * @param {object} options.logger - implementation of the `console` API
	 * @param {boolean} options.logErrors - should errors in action execution be caught, logged, and re-thrown?
	 * @param {boolean} options.collapsed - is group collapsed?
	 * @param {boolean} options.predicate - condition which resolves logger behavior
	 * @param {function} options.stateTransformer - transform state before print
	 * @param {function} options.actionTransformer - transform action before print
	 * @param {function} options.errorTransformer - transform error before print
	 *
	 * @returns {function} logger middleware
	 */
	function createLogger() {
	  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	
	  var loggerOptions = _extends({}, _defaults2.default, options);
	
	  var logger = loggerOptions.logger,
	      transformer = loggerOptions.transformer,
	      stateTransformer = loggerOptions.stateTransformer,
	      errorTransformer = loggerOptions.errorTransformer,
	      predicate = loggerOptions.predicate,
	      logErrors = loggerOptions.logErrors,
	      diffPredicate = loggerOptions.diffPredicate;
	
	  // Return if 'console' object is not defined
	
	  if (typeof logger === 'undefined') {
	    return function () {
	      return function (next) {
	        return function (action) {
	          return next(action);
	        };
	      };
	    };
	  }
	
	  if (transformer) {
	    console.error('Option \'transformer\' is deprecated, use \'stateTransformer\' instead!'); // eslint-disable-line no-console
	  }
	
	  // Detect if 'createLogger' was passed directly to 'applyMiddleware'.
	  if (options.getState && options.dispatch) {
	    // eslint-disable-next-line no-console
	    console.error('redux-logger not installed. Make sure to pass logger instance as middleware:\n\nimport createLogger from \'redux-logger\';\n\nconst logger = createLogger();\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n);');
	
	    return function () {
	      return function (next) {
	        return function (action) {
	          return next(action);
	        };
	      };
	    };
	  }
	
	  var logBuffer = [];
	
	  return function (_ref) {
	    var getState = _ref.getState;
	    return function (next) {
	      return function (action) {
	        // Exit early if predicate function returns 'false'
	        if (typeof predicate === 'function' && !predicate(getState, action)) {
	          return next(action);
	        }
	
	        var logEntry = {};
	        logBuffer.push(logEntry);
	
	        logEntry.started = _helpers.timer.now();
	        logEntry.startedTime = new Date();
	        logEntry.prevState = stateTransformer(getState());
	        logEntry.action = action;
	
	        var returnedValue = void 0;
	        if (logErrors) {
	          try {
	            returnedValue = next(action);
	          } catch (e) {
	            logEntry.error = errorTransformer(e);
	          }
	        } else {
	          returnedValue = next(action);
	        }
	
	        logEntry.took = _helpers.timer.now() - logEntry.started;
	        logEntry.nextState = stateTransformer(getState());
	
	        var diff = loggerOptions.diff && typeof diffPredicate === 'function' ? diffPredicate(getState, action) : loggerOptions.diff;
	
	        (0, _core.printBuffer)(logBuffer, _extends({}, loggerOptions, { diff: diff }));
	        logBuffer.length = 0;
	
	        if (logEntry.error) throw logEntry.error;
	        return returnedValue;
	      };
	    };
	  };
	}
	
	exports.default = createLogger;
	module.exports = exports['default'];

/***/ },

/***/ 274:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.printBuffer = printBuffer;
	
	var _helpers = __webpack_require__(275);
	
	var _diff = __webpack_require__(276);
	
	var _diff2 = _interopRequireDefault(_diff);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	/**
	 * Get log level string based on supplied params
	 *
	 * @param {string | function | object} level - console[level]
	 * @param {object} action - selected action
	 * @param {array} payload - selected payload
	 * @param {string} type - log entry type
	 *
	 * @returns {string} level
	 */
	function getLogLevel(level, action, payload, type) {
	  switch (typeof level === 'undefined' ? 'undefined' : _typeof(level)) {
	    case 'object':
	      return typeof level[type] === 'function' ? level[type].apply(level, _toConsumableArray(payload)) : level[type];
	    case 'function':
	      return level(action);
	    default:
	      return level;
	  }
	}
	
	function defaultTitleFormatter(options) {
	  var timestamp = options.timestamp,
	      duration = options.duration;
	
	
	  return function (action, time, took) {
	    var parts = ['action'];
	
	    if (timestamp) parts.push('@ ' + time);
	    parts.push(String(action.type));
	    if (duration) parts.push('(in ' + took.toFixed(2) + ' ms)');
	
	    return parts.join(' ');
	  };
	}
	
	function printBuffer(buffer, options) {
	  var logger = options.logger,
	      actionTransformer = options.actionTransformer,
	      _options$titleFormatt = options.titleFormatter,
	      titleFormatter = _options$titleFormatt === undefined ? defaultTitleFormatter(options) : _options$titleFormatt,
	      collapsed = options.collapsed,
	      colors = options.colors,
	      level = options.level,
	      diff = options.diff;
	
	
	  buffer.forEach(function (logEntry, key) {
	    var started = logEntry.started,
	        startedTime = logEntry.startedTime,
	        action = logEntry.action,
	        prevState = logEntry.prevState,
	        error = logEntry.error;
	    var took = logEntry.took,
	        nextState = logEntry.nextState;
	
	    var nextEntry = buffer[key + 1];
	
	    if (nextEntry) {
	      nextState = nextEntry.prevState;
	      took = nextEntry.started - started;
	    }
	
	    // Message
	    var formattedAction = actionTransformer(action);
	    var isCollapsed = typeof collapsed === 'function' ? collapsed(function () {
	      return nextState;
	    }, action, logEntry) : collapsed;
	
	    var formattedTime = (0, _helpers.formatTime)(startedTime);
	    var titleCSS = colors.title ? 'color: ' + colors.title(formattedAction) + ';' : null;
	    var title = titleFormatter(formattedAction, formattedTime, took);
	
	    // Render
	    try {
	      if (isCollapsed) {
	        if (colors.title) logger.groupCollapsed('%c ' + title, titleCSS);else logger.groupCollapsed(title);
	      } else {
	        if (colors.title) logger.group('%c ' + title, titleCSS);else logger.group(title);
	      }
	    } catch (e) {
	      logger.log(title);
	    }
	
	    var prevStateLevel = getLogLevel(level, formattedAction, [prevState], 'prevState');
	    var actionLevel = getLogLevel(level, formattedAction, [formattedAction], 'action');
	    var errorLevel = getLogLevel(level, formattedAction, [error, prevState], 'error');
	    var nextStateLevel = getLogLevel(level, formattedAction, [nextState], 'nextState');
	
	    if (prevStateLevel) {
	      if (colors.prevState) logger[prevStateLevel]('%c prev state', 'color: ' + colors.prevState(prevState) + '; font-weight: bold', prevState);else logger[prevStateLevel]('prev state', prevState);
	    }
	
	    if (actionLevel) {
	      if (colors.action) logger[actionLevel]('%c action', 'color: ' + colors.action(formattedAction) + '; font-weight: bold', formattedAction);else logger[actionLevel]('action', formattedAction);
	    }
	
	    if (error && errorLevel) {
	      if (colors.error) logger[errorLevel]('%c error', 'color: ' + colors.error(error, prevState) + '; font-weight: bold', error);else logger[errorLevel]('error', error);
	    }
	
	    if (nextStateLevel) {
	      if (colors.nextState) logger[nextStateLevel]('%c next state', 'color: ' + colors.nextState(nextState) + '; font-weight: bold', nextState);else logger[nextStateLevel]('next state', nextState);
	    }
	
	    if (diff) {
	      (0, _diff2.default)(prevState, nextState, logger, isCollapsed);
	    }
	
	    try {
	      logger.groupEnd();
	    } catch (e) {
	      logger.log('\u2014\u2014 log end \u2014\u2014');
	    }
	  });
	}

/***/ },

/***/ 275:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var repeat = exports.repeat = function repeat(str, times) {
	  return new Array(times + 1).join(str);
	};
	
	var pad = exports.pad = function pad(num, maxLength) {
	  return repeat("0", maxLength - num.toString().length) + num;
	};
	
	var formatTime = exports.formatTime = function formatTime(time) {
	  return pad(time.getHours(), 2) + ":" + pad(time.getMinutes(), 2) + ":" + pad(time.getSeconds(), 2) + "." + pad(time.getMilliseconds(), 3);
	};
	
	// Use performance API if it's available in order to get better precision
	var timer = exports.timer = typeof performance !== "undefined" && performance !== null && typeof performance.now === "function" ? performance : Date;

/***/ },

/***/ 276:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = diffLogger;
	
	var _deepDiff = __webpack_require__(277);
	
	var _deepDiff2 = _interopRequireDefault(_deepDiff);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	// https://github.com/flitbit/diff#differences
	var dictionary = {
	  'E': {
	    color: '#2196F3',
	    text: 'CHANGED:'
	  },
	  'N': {
	    color: '#4CAF50',
	    text: 'ADDED:'
	  },
	  'D': {
	    color: '#F44336',
	    text: 'DELETED:'
	  },
	  'A': {
	    color: '#2196F3',
	    text: 'ARRAY:'
	  }
	};
	
	function style(kind) {
	  return 'color: ' + dictionary[kind].color + '; font-weight: bold';
	}
	
	function render(diff) {
	  var kind = diff.kind,
	      path = diff.path,
	      lhs = diff.lhs,
	      rhs = diff.rhs,
	      index = diff.index,
	      item = diff.item;
	
	
	  switch (kind) {
	    case 'E':
	      return [path.join('.'), lhs, '\u2192', rhs];
	    case 'N':
	      return [path.join('.'), rhs];
	    case 'D':
	      return [path.join('.')];
	    case 'A':
	      return [path.join('.') + '[' + index + ']', item];
	    default:
	      return [];
	  }
	}
	
	function diffLogger(prevState, newState, logger, isCollapsed) {
	  var diff = (0, _deepDiff2.default)(prevState, newState);
	
	  try {
	    if (isCollapsed) {
	      logger.groupCollapsed('diff');
	    } else {
	      logger.group('diff');
	    }
	  } catch (e) {
	    logger.log('diff');
	  }
	
	  if (diff) {
	    diff.forEach(function (elem) {
	      var kind = elem.kind;
	
	      var output = render(elem);
	
	      logger.log.apply(logger, ['%c ' + dictionary[kind].text, style(kind)].concat(_toConsumableArray(output)));
	    });
	  } else {
	    logger.log('\u2014\u2014 no diff \u2014\u2014');
	  }
	
	  try {
	    logger.groupEnd();
	  } catch (e) {
	    logger.log('\u2014\u2014 diff end \u2014\u2014 ');
	  }
	}
	module.exports = exports['default'];

/***/ },

/***/ 277:
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/* WEBPACK VAR INJECTION */(function(global) {/*!
	 * deep-diff.
	 * Licensed under the MIT License.
	 */
	;(function(root, factory) {
	  'use strict';
	  if (true) {
	    // AMD. Register as an anonymous module.
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
	      return factory();
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else if (typeof exports === 'object') {
	    // Node. Does not work with strict CommonJS, but
	    // only CommonJS-like environments that support module.exports,
	    // like Node.
	    module.exports = factory();
	  } else {
	    // Browser globals (root is window)
	    root.DeepDiff = factory();
	  }
	}(this, function(undefined) {
	  'use strict';
	
	  var $scope, conflict, conflictResolution = [];
	  if (typeof global === 'object' && global) {
	    $scope = global;
	  } else if (typeof window !== 'undefined') {
	    $scope = window;
	  } else {
	    $scope = {};
	  }
	  conflict = $scope.DeepDiff;
	  if (conflict) {
	    conflictResolution.push(
	      function() {
	        if ('undefined' !== typeof conflict && $scope.DeepDiff === accumulateDiff) {
	          $scope.DeepDiff = conflict;
	          conflict = undefined;
	        }
	      });
	  }
	
	  // nodejs compatible on server side and in the browser.
	  function inherits(ctor, superCtor) {
	    ctor.super_ = superCtor;
	    ctor.prototype = Object.create(superCtor.prototype, {
	      constructor: {
	        value: ctor,
	        enumerable: false,
	        writable: true,
	        configurable: true
	      }
	    });
	  }
	
	  function Diff(kind, path) {
	    Object.defineProperty(this, 'kind', {
	      value: kind,
	      enumerable: true
	    });
	    if (path && path.length) {
	      Object.defineProperty(this, 'path', {
	        value: path,
	        enumerable: true
	      });
	    }
	  }
	
	  function DiffEdit(path, origin, value) {
	    DiffEdit.super_.call(this, 'E', path);
	    Object.defineProperty(this, 'lhs', {
	      value: origin,
	      enumerable: true
	    });
	    Object.defineProperty(this, 'rhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffEdit, Diff);
	
	  function DiffNew(path, value) {
	    DiffNew.super_.call(this, 'N', path);
	    Object.defineProperty(this, 'rhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffNew, Diff);
	
	  function DiffDeleted(path, value) {
	    DiffDeleted.super_.call(this, 'D', path);
	    Object.defineProperty(this, 'lhs', {
	      value: value,
	      enumerable: true
	    });
	  }
	  inherits(DiffDeleted, Diff);
	
	  function DiffArray(path, index, item) {
	    DiffArray.super_.call(this, 'A', path);
	    Object.defineProperty(this, 'index', {
	      value: index,
	      enumerable: true
	    });
	    Object.defineProperty(this, 'item', {
	      value: item,
	      enumerable: true
	    });
	  }
	  inherits(DiffArray, Diff);
	
	  function arrayRemove(arr, from, to) {
	    var rest = arr.slice((to || from) + 1 || arr.length);
	    arr.length = from < 0 ? arr.length + from : from;
	    arr.push.apply(arr, rest);
	    return arr;
	  }
	
	  function realTypeOf(subject) {
	    var type = typeof subject;
	    if (type !== 'object') {
	      return type;
	    }
	
	    if (subject === Math) {
	      return 'math';
	    } else if (subject === null) {
	      return 'null';
	    } else if (Array.isArray(subject)) {
	      return 'array';
	    } else if (Object.prototype.toString.call(subject) === '[object Date]') {
	      return 'date';
	    } else if (typeof subject.toString !== 'undefined' && /^\/.*\//.test(subject.toString())) {
	      return 'regexp';
	    }
	    return 'object';
	  }
	
	  function deepDiff(lhs, rhs, changes, prefilter, path, key, stack) {
	    path = path || [];
	    var currentPath = path.slice(0);
	    if (typeof key !== 'undefined') {
	      if (prefilter) {
	        if (typeof(prefilter) === 'function' && prefilter(currentPath, key)) { return; }
	        else if (typeof(prefilter) === 'object') {
	          if (prefilter.prefilter && prefilter.prefilter(currentPath, key)) { return; }
	          if (prefilter.normalize) {
	            var alt = prefilter.normalize(currentPath, key, lhs, rhs);
	            if (alt) {
	              lhs = alt[0];
	              rhs = alt[1];
	            }
	          }
	        }
	      }
	      currentPath.push(key);
	    }
	
	    // Use string comparison for regexes
	    if (realTypeOf(lhs) === 'regexp' && realTypeOf(rhs) === 'regexp') {
	      lhs = lhs.toString();
	      rhs = rhs.toString();
	    }
	
	    var ltype = typeof lhs;
	    var rtype = typeof rhs;
	    if (ltype === 'undefined') {
	      if (rtype !== 'undefined') {
	        changes(new DiffNew(currentPath, rhs));
	      }
	    } else if (rtype === 'undefined') {
	      changes(new DiffDeleted(currentPath, lhs));
	    } else if (realTypeOf(lhs) !== realTypeOf(rhs)) {
	      changes(new DiffEdit(currentPath, lhs, rhs));
	    } else if (Object.prototype.toString.call(lhs) === '[object Date]' && Object.prototype.toString.call(rhs) === '[object Date]' && ((lhs - rhs) !== 0)) {
	      changes(new DiffEdit(currentPath, lhs, rhs));
	    } else if (ltype === 'object' && lhs !== null && rhs !== null) {
	      stack = stack || [];
	      if (stack.indexOf(lhs) < 0) {
	        stack.push(lhs);
	        if (Array.isArray(lhs)) {
	          var i, len = lhs.length;
	          for (i = 0; i < lhs.length; i++) {
	            if (i >= rhs.length) {
	              changes(new DiffArray(currentPath, i, new DiffDeleted(undefined, lhs[i])));
	            } else {
	              deepDiff(lhs[i], rhs[i], changes, prefilter, currentPath, i, stack);
	            }
	          }
	          while (i < rhs.length) {
	            changes(new DiffArray(currentPath, i, new DiffNew(undefined, rhs[i++])));
	          }
	        } else {
	          var akeys = Object.keys(lhs);
	          var pkeys = Object.keys(rhs);
	          akeys.forEach(function(k, i) {
	            var other = pkeys.indexOf(k);
	            if (other >= 0) {
	              deepDiff(lhs[k], rhs[k], changes, prefilter, currentPath, k, stack);
	              pkeys = arrayRemove(pkeys, other);
	            } else {
	              deepDiff(lhs[k], undefined, changes, prefilter, currentPath, k, stack);
	            }
	          });
	          pkeys.forEach(function(k) {
	            deepDiff(undefined, rhs[k], changes, prefilter, currentPath, k, stack);
	          });
	        }
	        stack.length = stack.length - 1;
	      }
	    } else if (lhs !== rhs) {
	      if (!(ltype === 'number' && isNaN(lhs) && isNaN(rhs))) {
	        changes(new DiffEdit(currentPath, lhs, rhs));
	      }
	    }
	  }
	
	  function accumulateDiff(lhs, rhs, prefilter, accum) {
	    accum = accum || [];
	    deepDiff(lhs, rhs,
	      function(diff) {
	        if (diff) {
	          accum.push(diff);
	        }
	      },
	      prefilter);
	    return (accum.length) ? accum : undefined;
	  }
	
	  function applyArrayChange(arr, index, change) {
	    if (change.path && change.path.length) {
	      var it = arr[index],
	          i, u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          delete it[change.path[i]];
	          break;
	        case 'E':
	        case 'N':
	          it[change.path[i]] = change.rhs;
	          break;
	      }
	    } else {
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(arr[index], change.index, change.item);
	          break;
	        case 'D':
	          arr = arrayRemove(arr, index);
	          break;
	        case 'E':
	        case 'N':
	          arr[index] = change.rhs;
	          break;
	      }
	    }
	    return arr;
	  }
	
	  function applyChange(target, source, change) {
	    if (target && source && change && change.kind) {
	      var it = target,
	          i = -1,
	          last = change.path ? change.path.length - 1 : 0;
	      while (++i < last) {
	        if (typeof it[change.path[i]] === 'undefined') {
	          it[change.path[i]] = (typeof change.path[i] === 'number') ? [] : {};
	        }
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          applyArrayChange(change.path ? it[change.path[i]] : it, change.index, change.item);
	          break;
	        case 'D':
	          delete it[change.path[i]];
	          break;
	        case 'E':
	        case 'N':
	          it[change.path[i]] = change.rhs;
	          break;
	      }
	    }
	  }
	
	  function revertArrayChange(arr, index, change) {
	    if (change.path && change.path.length) {
	      // the structure of the object at the index has changed...
	      var it = arr[index],
	          i, u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          revertArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'E':
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'N':
	          delete it[change.path[i]];
	          break;
	      }
	    } else {
	      // the array item is different...
	      switch (change.kind) {
	        case 'A':
	          revertArrayChange(arr[index], change.index, change.item);
	          break;
	        case 'D':
	          arr[index] = change.lhs;
	          break;
	        case 'E':
	          arr[index] = change.lhs;
	          break;
	        case 'N':
	          arr = arrayRemove(arr, index);
	          break;
	      }
	    }
	    return arr;
	  }
	
	  function revertChange(target, source, change) {
	    if (target && source && change && change.kind) {
	      var it = target,
	          i, u;
	      u = change.path.length - 1;
	      for (i = 0; i < u; i++) {
	        if (typeof it[change.path[i]] === 'undefined') {
	          it[change.path[i]] = {};
	        }
	        it = it[change.path[i]];
	      }
	      switch (change.kind) {
	        case 'A':
	          // Array was modified...
	          // it will be an array...
	          revertArrayChange(it[change.path[i]], change.index, change.item);
	          break;
	        case 'D':
	          // Item was deleted...
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'E':
	          // Item was edited...
	          it[change.path[i]] = change.lhs;
	          break;
	        case 'N':
	          // Item is new...
	          delete it[change.path[i]];
	          break;
	      }
	    }
	  }
	
	  function applyDiff(target, source, filter) {
	    if (target && source) {
	      var onChange = function(change) {
	        if (!filter || filter(target, source, change)) {
	          applyChange(target, source, change);
	        }
	      };
	      deepDiff(target, source, onChange);
	    }
	  }
	
	  Object.defineProperties(accumulateDiff, {
	
	    diff: {
	      value: accumulateDiff,
	      enumerable: true
	    },
	    observableDiff: {
	      value: deepDiff,
	      enumerable: true
	    },
	    applyDiff: {
	      value: applyDiff,
	      enumerable: true
	    },
	    applyChange: {
	      value: applyChange,
	      enumerable: true
	    },
	    revertChange: {
	      value: revertChange,
	      enumerable: true
	    },
	    isConflict: {
	      value: function() {
	        return 'undefined' !== typeof conflict;
	      },
	      enumerable: true
	    },
	    noConflict: {
	      value: function() {
	        if (conflictResolution) {
	          conflictResolution.forEach(function(it) {
	            it();
	          });
	          conflictResolution = null;
	        }
	        return accumulateDiff;
	      },
	      enumerable: true
	    }
	  });
	
	  return accumulateDiff;
	}));
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },

/***/ 278:
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  level: "log",
	  logger: console,
	  logErrors: true,
	  collapsed: undefined,
	  predicate: undefined,
	  duration: false,
	  timestamp: true,
	  stateTransformer: function stateTransformer(state) {
	    return state;
	  },
	  actionTransformer: function actionTransformer(action) {
	    return action;
	  },
	  errorTransformer: function errorTransformer(error) {
	    return error;
	  },
	  colors: {
	    title: function title() {
	      return "inherit";
	    },
	    prevState: function prevState() {
	      return "#9E9E9E";
	    },
	    action: function action() {
	      return "#03A9F4";
	    },
	    nextState: function nextState() {
	      return "#4CAF50";
	    },
	    error: function error() {
	      return "#F20404";
	    }
	  },
	  diff: false,
	  diffPredicate: undefined,
	
	  // Deprecated options
	  transformer: undefined
	};
	module.exports = exports["default"];

/***/ },

/***/ 279:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("E:\\cnode\\node_modules\\react-hot-api\\modules\\index.js"), RootInstanceProvider = require("E:\\cnode\\node_modules\\react-hot-loader\\RootInstanceProvider.js"), ReactMount = require("react-dom/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _redux = __webpack_require__(174);
	
	var _lib = __webpack_require__(261);
	
	var _actions = __webpack_require__(260);
	
	var _actions2 = _interopRequireDefault(_actions);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
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
		path: {}
	};
	
	/**
	 * 存储用户信息 signIn/signout/Userinfo 相关
	 */
	function postUser() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : JSON.parse(_lib.Lib.getLocalStorge('User')) || {};
		var action = arguments[1];
	
		switch (action.type) {
			case 'SIGN_IN_SUCCESS':
				_lib.Lib.setLocalStorge('User', JSON.stringify(action.data)); //登录进去，添加信息
				return action.data;
			case 'SIGN_OUT':
				_lib.Lib.removeLocalStorge('User'); //退出，删除信息
				return null;
			default:
				return state;
		}
	}
	/**
	 * []
	 * @param  {[type]} defaultState [description]
	 * @param  {[type]} action       [description]
	 * @return {[type]}              [description]
	 */
	function postData() {
		var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
		var action = arguments[1];
	
		switch (action.type) {
			case 'SET_STATE':
				state.path[action.data.path] = action.data;
				return (0, _lib.merged)(state);
			default:
				return state;
		}
	}
	
	exports.default = (0, _redux.combineReducers)({
		User: postUser,
		Data: postData
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("E:\\cnode\\node_modules\\react-hot-loader\\makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 280:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	var flex = __webpack_require__(285);
	var dataFlex = __webpack_require__(287);
	module.exports = { flex: flex, dataFlex: dataFlex };

/***/ },

/***/ 285:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 287:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 289:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 291:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },

/***/ 297:
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }

});