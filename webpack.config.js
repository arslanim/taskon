var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	context: __dirname + '/app',
	entry: './app.module.js',
	output: {
		path: __dirname + '/app',
		filename: 'js/bundle.js'
	},
	module: {
		loaders: [
			{ test: /bootstrap.+\.(jsx|js)$/, loader: 'imports-loader?jQuery=jquery,$=jquery,this=>window' },
			{test: /\.html$/, loader:'raw-loader', exclude: /node_modules/},
			{ test: /\.(png|jpg|jpeg)$/, loader: 'url-loader?limit=10000' },
			{test: /\.css$/, loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader'})},
			{ test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?name=[hash].[ext]&outputPath=/fonts/" },
			{ test: /\.(woff|woff2)$/, loader:"url-loader?name=[hash].[ext]&outputPath=/fonts/&prefix=font/&limit=5000" },
			{ test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?name=[hash].[ext]&outputPath=/fonts/&limit=10000&mimetype=application/octet-stream-loader" },
			{ test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?name=[hash].[ext]&outputPath=/fonts/&limit=10000&mimetype=image/svg+xml" }
		]
	},
    plugins: [
        new ExtractTextPlugin('css/bundle.css')
    ],
    devtool: "source-map"
};