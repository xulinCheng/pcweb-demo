import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

const Login = () =>
    import ('./views/Login.vue') //登录
const notPage = () =>
    import ('./views/common/404.vue') //404
const doc = () =>
    import ('./views/doc/index.vue') //文档
const blog = () =>
    import ('./views/blog/index.vue') //博客
const Case = () =>
    import ('./views/case/index.vue') //案例
const donation = () =>
    import ('./views/donation/index.vue') //监控
const download = () =>
    import ('./views/download/index.vue') //下载
const monitoring = () =>
    import ('./views/monitoring/index.vue') //捐赠
const social = () =>
    import ('./views/social/index.vue') //IM
const personal = () =>
    import ('./views/personal/index.vue') //个人中心
const setting = () =>
    import ('./views/setting/index.vue') //设置


Vue.use(Router)

export default new Router({
        mode: 'hash',
        base: process.env.BASE_URL,
        routes: [
            { path: '/', name: 'home', component: Home, meta: { keepAlive: true } },
            { path: '/login', name: 'login', component: Login, meta: { keepAlive: false } },
            { path: '/404', name: '404', component: notPage, meta: { keepAlive: true } },
            { path: '/doc', name: 'doc', component: doc, meta: { keepAlive: true } },
            { path: '/blog', name: 'blog', component: blog, meta: { keepAlive: true } },
            { path: '/case', name: 'case', component: Case, meta: { keepAlive: true } },
            { path: '/donation', name: 'donation', component: donation, meta: { keepAlive: true } },
            { path: '/download', name: 'download', component: download, meta: { keepAlive: true } },
            { path: '/monitoring', name: 'monitoring', component: monitoring, meta: { keepAlive: true } },
            { path: '/social', name: 'social', component: social, meta: { keepAlive: true } },
            { path: '/personal', name: 'personal', component: personal, meta: { keepAlive: true, requireAuth: true } },
            { path: '/setting', name: 'setting', component: setting, meta: { keepAlive: true, requireAuth: true } },
        ]
    })
    // if (sessionStorage.getItem('token')) {
    //     store.commit('set_token', sessionStorage.getItem('token'))
    // }
    // Router.beforeEach((to, from, next) => {
    //     if (to.matched.some(r => r.meta.requireAuth)) {
    //         if (sessionStorage.getItem('token')) {
    //             next();
    //         } else {
    //             next({
    //                 path: '/',
    //                 query: { redirect: to.fullPath }
    //             })
    //         }
    //     } else {
    //         next();
    //     }
    // })