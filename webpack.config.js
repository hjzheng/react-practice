var path = require('path');
var eslintFriendlyFormatter = require('eslint-friendly-formatter');
var webpack = require('webpack');

var ROOT_PATH = path.resolve(__dirname);
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var CSS_MODULE_PATH = path.resolve(ROOT_PATH, 'src/app/cssModule');

var APP_PATH = path.resolve(SRC_PATH, 'app');
var NODE_MODULE_PATH = /node_modules/;

module.exports = {
	entry: {
		app: path.resolve(APP_PATH, 'app.js')
	},
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},

	eslint: {
		configFile: '.eslintrc',
		emitError: true,
		emitWarning: true,
		formatter: eslintFriendlyFormatter
	},

	//enable dev source map
	devtool: 'eval-source-map',
	//enable dev server
	devServer: {
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},
	resolve: {
		extensions: ['', '.js'],
		root: APP_PATH
	},
	module: {
		preLoaders: [
			{
				test: /\.js$/,
				loader: 'eslint-loader',
				exclude: NODE_MODULE_PATH,
				include: SRC_PATH
			}
		],
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css']
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css', 'sass?sourceMap=true'],
				exclude: CSS_MODULE_PATH
			},
			{
				test: /\.scss$/,
				loaders: ['style', 'css?modules&camelCase&localIdentName=[path]__[name]_[local]___[hash:base64:5]', 'sass?sourceMap=true'],
				include: CSS_MODULE_PATH
			},
			{
				test: /\.js?$/,
				loaders: ['babel'],
				include: SRC_PATH
			}]
	}
}
