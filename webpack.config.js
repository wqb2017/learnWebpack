const path = require('path');

module.exports = {
  // 入口文件
  entry: './src/main.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      //解析css文件
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?minimize'],
      },
    ],
  },
};
