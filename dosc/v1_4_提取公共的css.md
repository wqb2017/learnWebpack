# 提取公共样式

```js
//1. 引入extract-text-webpack-plugin'
let ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

//2. 配置plugin
module.exports = {
  module: {
    rules: [
      //解析css文件
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          // 转换 .css 文件需要使用的 Loader
          use: ['css-loader?minimize'],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextWebpackPlugin({
      // 从 .js 文件中提取出来的 .css 文件的名称
      filename: `[name]_[contenthash:8].css`,
    }),
  ],
};
// 注意：记得修改css loader的解析方式
```
