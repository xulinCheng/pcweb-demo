import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/iview.js'
import axios from "axios"

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');


/*第一层if判断生产环境和开发环境*/
if (process.env.NODE_ENV === 'production') {
    /*第二层if，根据.env文件中的VUE_APP_FLAG判断是生产环境还是测试环境*/
    if (process.env.VUE_APP_FLAG === 'pro') {
        //production 生产环境
        axios.defaults.publicPath = 'http://10.100.3.99';

    } else {
        //test 测试环境
        axios.defaults.publicPath = 'http://10.100.3.99';
    }
} else {
    //dev 开发环境
    axios.defaults.publicPath = 'http://10.100.3.99';
}
router.beforeEach((to, from, next) => {
    // console.log(to, from, next);
    if (to.meta.requireAuth) { //  判断该路由是否需要登录权限
        if (sessionStorage.getItem('token')) { //判断本地是否存在token
            next();
        } else {
            if (to.path === '/login') {
                next();
            } else {
                sessionStorage.setItem('path', to.name)
                next({ path: '/login' })
            }
        }
    } else {
        next();
    }
    // 如果本地存在token则不允许直接跳转到登陆页面
    if (to.fullPath == '/login') {
        if (sessionStorage.getItem('token')) {
            next({
                path: from.fullPath
            })
        } else {
            next();
        }
    }
})