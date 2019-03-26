import api from "../plugins/axios";

export default {
    // 登录并获取用户信息
    getUserInfo(data) {
        return api({
            url: '/prm-os-srv-sys/sys/login',
            method: 'post',
            data: { username: data.username, password: data.password }
        }).catch(err => {
            console.log(err)
        })
    },
    // 退出登录并清除token值
    clearUserInfo() {
        sessionStorage.removeItem('token')
        sessionStorage.removeItem('path')
    }
}