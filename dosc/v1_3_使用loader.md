# 安装使用 loader

## 使用步骤

1. 安装对应的 loader
2. 配置 webpack.config.js 配置

如果对这个插件不熟，可以查找插件对应的官网或者是 github 地址

## 项目配置

项目中要解析以 css 文件，所有要安装解析 css 文件对应的 loader 并配置对应的 module 配置

1. 安装对应的 loader

npm install style-loader css-loader --save-dev

【--save-dev】和【--save】区别 --save-dev 存放开发依赖；--save 存放生产环境依赖

2. 配置 loader

```js
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
```
