module.exports = {
  name: 'goldmoring-ui',
  build: {
    css: {
      preprocessor: 'less',
    },
    site: {
      publicPath: '/goldmoring-ui/',
    },
  },
  site: {
    title: 'goldmoring-ui',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'button',
            title: 'GmButton 按钮',
          },
          {
            path: 'order-input',
            title: 'OrderInput 校验输入框',
          },
        ],
      },
    ],
  },
};
