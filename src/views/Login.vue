<template>
    <div class="swipper">
        <div class="login">
            <h2 v-if="id == 1">登陆</h2><h2 v-if="id == 0">注册</h2>
            <Form ref="formInline" :model="formInline" :rules="ruleInline">
                <FormItem prop="user">
                    <Input type="text" v-model="formInline.username" placeholder="Username">
                        <Icon type="ios-person-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="password">
                    <Input type="password" v-model="formInline.password" placeholder="Password">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem prop="gpassword" v-if="id == 0">
                    <Input type="password" v-model="formInline.password" placeholder="Password">
                        <Icon type="ios-lock-outline" slot="prepend"></Icon>
                    </Input>
                </FormItem>
                <FormItem>
                    <Button v-if="id == 1" type="primary" @click="handleSubmit('formInline')" @keyup.enter.native="handleSubmit('formInline')">确定</Button>
                    <Button v-if="id == 0" type="success" @click="handleSubmitagain('formInline')" @keyup.enter.native="handleSubmit('formInline')">确定</Button>
                </FormItem>
            </Form>
            <div class="info">
                <div style="display:inline-block">
                    <router-link :to="{name:'home'}"><a>首页</a></router-link>
                </div>
                <div style="display:inline-block">
                    <a v-if="id == 0" @click="changeId()">已有账号去，登陆>>></a>
                    <a v-if="id == 1" @click="changeId1()">没有账号去？注册>>>></a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import api from "@/api/index";
    export default {
        name:'login',
        data () {
            return {
                formInline: {
                    username: '',
                    password: '',
                    gpassword: ''
                },
                ruleInline: {
                    username: [
                        { required: true, message: 'Please fill in the user name', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ],
                    gpassword: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                },
                lablewidth: "30px",
                id: 1
            }
        },
        created(){
            this.id = this.$route.query.id || 1
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        // this.$Message.success('Success!');
                        if(sessionStorage.getItem('path')){
                            this.$router.push(sessionStorage.getItem('path'))
                        }else{
                            this.$router.push('/')
                        }
                        // this.$router.push({name:'doc'});
                        sessionStorage.setItem('token','as15s2s5x5sa5das52sda53587d8a2')
                        //模块化接口管理写法
                        api.getUserInfo(this.formInline).then(res => {
                            console.log(res);
                        })
                        //自由接口管理写法
                        // this.$post('/getUserInfo',{
                        //     name: this.formInline.user,
                        //     password: this.formInline.password
                        // }).then(res => {
                        //     console.log(res)
                        // })

                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleSubmitagain(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        if(sessionStorage.getItem('path')){
                            this.$router.push(sessionStorage.getItem('path'))
                        }else{
                            this.$router.push('/')
                        }
                        sessionStorage.setItem('token','as15s2s5x5sa5das52sda53587d8a2')
                        //模块化接口管理写法
                        api.getUserInfo(this.formInline).then(res => {
                            console.log(res);
                        })
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            changeId(){ this.id = 1 },
            changeId1(){ this.id = 0 }
        }
    }
</script>
<style lang='scss'>
.swipper{
    position: absolute;
    top:0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    &:before{
        position: fixed;
        top: 0;
        left: 0;
        z-index: -1;
        width: 100%;
        height: 100%;
        content: '';
        background:url('../assets/bg2.jpg');
        background-size: contain; 
        opacity: 0.8;
    }
}
    .login {
        // height: 320px;
        width: 400px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        background: white;
        border-radius: 10px;
        padding:20px 0;
        box-sizing: border-box;
        text-align: center;
        // border: 1px solid gray;
        /* background: linear-gradient(to top right, #CDDC39 0%, #8BC34A 25%, #FFEB3B 100%); */
    }
    .ivu-input-group{
        width: 60%;
    }
    .ivu-form-item-content{
        text-align: -webkit-center;
    }
    .ivu-input-group-prepend{
        background: rgba(0, 0,  0, .2)
    }
    .ivu-icon{
        color: red;
    }
    .ivu-form-item-error-tip{
        left: 20%;
    }
    h2{
        margin-bottom: 10px;
        display: inline-block;
        color: rgb(48, 46, 46);
    }
    p{
        padding-right: 20px;
        box-sizing: border-box;
        text-align: right;
    }
    .info{
        padding: 0 20px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
    }
</style>

