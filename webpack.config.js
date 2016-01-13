var ExtractTextPlugin = require("extract-text-webpack-plugin")
var webpack = require('webpack')
module.exports = {
	entry: {
		index:'./src/app.js',
  },
	output: {
		path: __dirname + "/dist/js/",
		filename: "[name].App.js"
	},
	
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: "vue"
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract("style-loader", "css-loader")
			},
			{
				test: /\.(png|jpg)$/,
				loader: "url-loader?mimetype=image/png"
			},
			{
				test: /\.json$/,
				loader: "json"
			}
		]
	},
	plugins: [
		new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
		new ExtractTextPlugin("App.css")
	],
	devtool: "source-map"
}
