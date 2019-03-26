# tio

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

基于vue-cli3.0脚手架 vuex、vue-router、axios、iviewUI 搭建的网站通用模板

2019-03-21
1.路由控制：用户未登录不可进入个人中心和设置 routes--->meta标签-->requireAuth属性控制
2.退出时：清除用户信息和token
3.通过对token的判断，限制用户在登录的状态下 不能退回到登陆界面
4.跨域配置在vue.config.js里面 -- proxy配置

疑问 axios的axios.defaults.headers和axios.headers 区别是什么？？？
