import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: { //设置全局访问的对象的初始值
        // token: ''
    },
    mutations: { //放改变state里面的初始值的方法，通过传入参数state或额外的参数，对初始值改变
        // set_token(state, token) {
        //     state.token = token
        //     sessionStorage.token = token
        // },
        // del_token(state) {
        //     state.token = ''
        //     sessionStorage.removeItem('token')
        // }
    },
    actions: { //自定义异步触发mutations里面的方法，context与store实例具有相同方法和属性

    },
    getters: { //监听state里面的属性值变化

    }
})