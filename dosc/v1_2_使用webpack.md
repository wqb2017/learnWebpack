# 使用 webpack

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

4. 根据项目结构创建对应的文件

```js
src / main.js;
import { show } from './show';
console.log('main.js');
show();
```

```js
src / show.js;
require('./show.css');
export function show(params) {
  document.getElementById('box').innerHTML = 'show';
  console.log('show!');
}
```

```css
src/show.css;
#box {
  font-size: 20px;
}
```

```html
./index.html;
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

5. 创建 webpack.config.js 文件并配置

```js
./webpack.config.js
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
```

6. 安装对应的 loader

npm install style-loader css-loader --save-dev

【--save-dev】和【--save】区别 --save-dev 存放开发依赖；--save 存放生产环境依赖

7. 在 package.json 文件中配置 scripts 环境脚本执行 webpack

```js
  "scripts": {
    "start": "webpack --config webpack.config.js"
  },
```

8. 运行 webpack
   npm run start

上面的【npm run start】和执行【webpack --config webpack.config.js"】结果是一样的
