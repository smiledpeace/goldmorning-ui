# 快速上手

### 安装

```bash
# 通过 npm 安装
npm i goldmorning-ui -S

# 通过 yarn 安装
yarn add goldmorning-ui
```

## 引入组件

### 通过 babel 插件按需引入组件

[babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 是一款 babel 插件，它会在编译过程中将 import 语句自动转换为按需引入的方式。

```bash
# 安装插件
npm i babel-plugin-import -D
```

在.babelrc 或 babel.config.js 中添加配置：

```json
{
  "plugins": [
    [
      "import",
      {
        "libraryName": "goldmorning-ui",
        "libraryDirectory": "es",
        "style": true
      },
      "goldmorning-ui"
    ]
  ]
}
```
