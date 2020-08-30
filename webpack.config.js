const path = require('path');

module.exports = {
	mode: 'development',
	devtool: 'source-map',
	entry: {
		"app": './src/main.js',
		"editor.worker": 'monaco-editor/esm/vs/editor/editor.worker.js',
		"ts.worker": 'monaco-editor/esm/vs/language/typescript/ts.worker',
	},
	output: {
		globalObject: 'self',
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: ['style-loader', 'css-loader']
		}, {
			test: /\.ttf$/,
			use: ['file-loader']
		}, {
			test: /\.(html|svelte)$/,
			exclude: /node_modules/,
			use: {
				loader: 'svelte-loader',
				options: {
					emitCss: true,
				},
			},
		}]
	},
};
