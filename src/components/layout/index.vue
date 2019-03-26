
<template>
    <div class="layout">
        <Layout>
            <Header :style="{position: 'fixed', width: '100%'}">
                <Menu mode="horizontal" theme="dark" ref="Activename" :active-name="Activename" @on-select="showName">
                    <div class="layout-logo">
                      <router-link :to="({name:'home'})"><img src="../../assets/w.png" alt></router-link>
                    </div>
                    <div class="layout-nav">
                        <MenuItem name="doc">
                            <Icon type="ios-paper" :style="{color:'#fff'}"></Icon>文档
                        </MenuItem>
                        <MenuItem name="download">
                            <Icon type="ios-cloud-done" :style="{color:'#fff'}"></Icon>下载中心
                        </MenuItem>
                        <MenuItem name="blog">
                            <Icon type="ios-leaf" :style="{color:'#fff'}"></Icon>博客
                        </MenuItem>
                        <MenuItem name="case">
                            <Icon type="ios-flame" :style="{color:'#fff'}"></Icon>案例
                        </MenuItem>
                        <MenuItem name="social">
                            <Icon type="ios-chatbubbles" :style="{color:'#fff'}" />纯IM
                        </MenuItem>
                        <MenuItem name="donation">
                            <Icon type="ios-analytics" :style="{color:'#fff'}"></Icon>监控
                        </MenuItem>
                        <MenuItem name="monitoring">
                            <Icon type="ios-thumbs-up" :style="{color:'#fff'}"></Icon>捐赠
                        </MenuItem>
                    </div>
                    <div class="regist" v-if="token == null">
                      <router-link :to="{name:'login',query: {id: '0'}}"><span>注册</span></router-link> |
                      <router-link :to="{name:'login',query: {id: '1'}}"><span>登录</span></router-link>
                    </div>
                    <div class="userInfo" v-if="token !== null">
                      <Dropdown>
                          <div class="demo-avatar" :style="{display:'inline-block','padding-right':'20px'}">
                          <Avatar :src="userImg"/>
                      </div>
                          <a href="javascript:void(0)" :style="{color:'#fff'}">
                              {{userName}}
                              <Icon type="ios-arrow-down" :style="{color:'#fff'}"></Icon>
                          </a>
                          <DropdownMenu slot="list">
                              <router-link :to="{name:'personal'}"><DropdownItem>个人中心</DropdownItem></router-link>
                              <router-link :to="{name:'setting'}"><DropdownItem>设置</DropdownItem></router-link>
                              <DropdownItem @click.native="clearUserInfo">退出</DropdownItem>
                          </DropdownMenu>
                      </Dropdown>
                  </div>
                </Menu>
            </Header>
            <Content :style="{margin: '88px 10% 0', background: '#fff', minHeight: '1500px'}">
                <router-view/>
            </Content>
            <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
            <ScrollTop/>
        </Layout>
    </div>
</template>
<script>
import ScrollTop from './scrollTop.vue'
import api from '../../api/index'
    export default {
        name:'index',
        components:{
          ScrollTop
        },
        data() {
          return {
            theme1: "dark",
            userImg: 'https://i.loli.net/2017/08/21/599a521472424.jpg',
            userName:'佛爷',
            Activename: '',
            token: ''
          }
        },
        created(){
          this.token = sessionStorage.getItem('token')
        },
        methods:{
          showName(e){
            if(e == 'doc'){
              this.$router.push({name:'doc'});
              this.name = e;
            }
            else if(e == '404'){
              this.$router.push({name:'404'});
              this.name = e;
            }
            else if(e == 'blog'){
              this.$router.push({name:"blog"})
            }
            else if(e == 'case'){
              this.$router.push({name:'case'})
            }
            else if(e == 'social'){
              this.$router.push({name:'social'})
            }
            else if(e == 'donation'){
              this.$router.push({name:'donation'})
            }
            else if(e == 'monitoring'){
              this.$router.push({name:'monitoring'})
            }
            else if(e == 'download'){
              this.$router.push({name:'download'})
            }
          },
          menuList(){
            this.$nextTick(()=>{
              this.Activename = this.$route.path.slice(1);
              this.$refs.Activename.updateActiveName();
            })
          },
          clearUserInfo(){
            this.token = null
            api.clearUserInfo()
            if(this.$route.path == '/personal'|| this.$route.path == '/setting'){
              this.$router.push('/')
            }
            else{
              this.$router.push(this.$route.fullPath)
            }
          }
        },
        mounted(){
          this.menuList()
        }
    }
</script>
<style scoped>
    .layout{
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-logo{
        width: 100px;
        height: 30px; 
        border-radius: 3px;
        float: left;
        position: relative;
        top: 10px;
        left: 20px;
    }
    .layout-logo img{
      display: block;
      width: 70px;
      height: 40px;
    }
    .layout-nav{
        width: 80%;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-footer-center{
        text-align: center;
    }
    .ivu-layout-header{
      padding: 0 10%;
    }
    .regist,.regist a{
      color: #f5f7f9;
    }
</style>