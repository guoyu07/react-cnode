var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
var WebpackMd5Hash = require('webpack-md5-hash');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


// 开发环境
var isDev = function() {
  return process.env.NODE_ENV.trim() === 'development';
};
// 生产环境
var isProd = function() {
  return process.env.NODE_ENV.trim() === 'production';
};


module.exports = {
    devtool: isProd() ? false : 'inline-source-map',
    entry: {
        index: [
          './src/index.js'
        ],
        vendor: [
          'react',
          'react-dom',
          'react-router',
          'react-redux',
          'redux',
          'redux-thunk'
        ]
    },
    output: {
        path: __dirname + '/dist/',
        filename: isProd() ? '[name].[chunkhash:8].js' : '[name].js',
        chunkFilename: isProd() ? '[name].chunk.[chunkhash:8].js' : '[name].chunk.js',
        publicPath: isProd() ? './dist/' : '/dist/'
    },
    module: { 
        loaders:[
            {
                test: /\.css$/,
                exclude: /^node_modules$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader')
            },   
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader!less-loader')
            },
            {
                test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
                exclude: /^node_modules$/,
                loader: 'file?name=[name].[ext]'
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url?limit=20000&name=[name].[ext]'
            }, 
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ['react-hot', 'babel']
            }
        ],
    },
    plugins: getPlugins(),
    resolve: {
        extensions: ['', '.js', '.jsx'], //后缀名自动补全
    }
};



// 配置插件
function getPlugins() {
    var plugins = [
    new webpack.DefinePlugin({
        __DEV__ : isDev(),
        __PROD__: isProd(),
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV.trim())
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', isProd() ? 'vendor.[chunkhash:8].js' : 'vendor.js'),
    new ExtractTextPlugin(isProd() ? '[name].[chunkhash:8].css' : '[name].css'),
    ];

    if (isDev()) {
        plugins.push(
          new OpenBrowserPlugin({ url: 'http://localhost:5000/' })
        );
    }

    if (isProd()) {
        plugins.push(
            new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            output: {
              comments: false,
            },
            compress: {
              warnings: false
            }
            }),
            new HtmlWebpackPlugin({
            title: 'react-node',
            filename: '../index.html',
            template: './src/template/index.html'
            }),
            new WebpackMd5Hash()
        );
    }
    return plugins
}