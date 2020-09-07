const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'), // 拼接当前路径 + dist
		filename: 'bundle.js'
		// publicPath: 'dist/'
	},
	module: {
		rules: [{
				test: /\.css$/,
				// css-loader 负责加载css
				// style-loader 负责加载样式到 dom
				// 使用多个loader的时候，从右向左读取
				use: ['style-loader', 'css-loader']
			},
			{
				test: /\.less$/,
				use: [{
					loader: "style-loader" // creates style nodes from JS strings
				}, {
					loader: "css-loader" // translates CSS into CommonJS
				}, {
					loader: "less-loader" // compiles Less to CSS
				}]
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [{
					loader: 'url-loader',
					options: {
						// 图片小于 limit 会转换成 base64 文件
						// 大于的时候 需要 file-loader
						limit: 8192,
						// [变量名称原始名字] .连接 hash 8位 最后扩展名(原始)
						name: 'img/[name].[hash:8].[ext]'
					}
				}]
			},
			{
				test: /\.vue$/,
				use: ['vue-loader']
			}
		]
	},
	resolve: {
		// 别名
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	plugins: [
		new VueLoaderPlugin(),
		new webpack.BannerPlugin('最终版权归 Ryan 所有'),
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	],
	devServer: {
		contentBase: './dist',
		inline: true
	}
}
