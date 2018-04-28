const path = require('path');

module.exports = {
  // 入口文件
  entry: './src/main.js',
  //输出文件
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  //各模块文件采用对应的loader解析
  module: {
    rules: [
      //解析css文件
      {
        test: /\.css$/,
        //解析顺序又右到左，后面的【?minimize】是参数表示压缩css
        use: ['style-loader', 'css-loader?minimize'],
      },
    ],
  },
};
