const path = require('path')

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'), // 拼接当前路径 + dist
		filename: 'bundle.js'
	}
}