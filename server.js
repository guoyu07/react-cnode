var path = require('path');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

//将所有本地请求代理https://cnodejs.org/api
var proxy = [{
	path: '/api/*',
	target: 'https://cnodejs.org',
	host: 'cnodejs.org'
}];

var server = new WebpackDevServer(webpack(config),{
	publicPath: config.output.publicPath,
	proxy: proxy,
	stats: {
		colors: true
	}
});

//将其他路由全部重定向到 index.html
server.app.get('*',function(req,res){
	res.sendFile(__dirname + '/index.html');
});
server.listen(5000);

