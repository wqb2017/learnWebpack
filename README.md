# webpack

## 项目结构

```js
  learnWebpack
    |-src 源码
      |-main.js 入口js
      |-show.js
      |-show.css
    |-package.json 依赖
    |-webpack.config.js webpack配置文件
    |-readme.md 说明文件
```

## 步骤

1. 全局安装 webpack
   npm install webpack<@versions> -g

2. 初始化项目
   npm init

3. 项目中安装 webpack
   npm install webpack@3 --save-dev  
   我这里安装的是 webpack 3 点几版本的，截止目前【20180428】webpack 最新版本为 webpack4.

4. 创建 webpack.config.js 文件并配置

```js
const path = require('path');

module.exports = {
  // JavaScript 执行入口文件
  entry: './src/main.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放到 dist 目录下
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader?minimize'],
      },
    ],
  },
};
```

5. 根据项目结构创建对应的文件

```js
main.js;
import { show } from './show';
console.log('main.js');
show();
```

```js
show.js;
require('./show.css');
export function show(params) {
  document.getElementById('box').innerHTML = 'show';
  console.log('show!');
}
```

```css
show.css;
#box {
  font-size: 20px;
}
```

```html
index.html;
<!DOCTYPE html>
<html lang="en">
<head>
  <title>learnWebpack</title>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
  <div id="box"></div>
  <!--导入 Webpack 输出的 JavaScript 文件-->
  <script src="./dist/bundle.js"></script>
</body>
</html>
```

6. 在 package.json 文件中配置 scripts 环境脚本执行 webpack

```js
  "scripts": {
    "start": "webpack --config webpack.config.js"
  },
```

7. 运行 webpack
   npm run start
