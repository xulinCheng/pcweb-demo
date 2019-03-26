<template>
    <Button type="primary" @click.native="handlesubmit">点击我</Button>
 </template>
<script>
import api from '../../api/index'
export default {
  name:'index',
  data(){
      return{
          userId:'123456'
      }
  },
  methods:{
      handlesubmit(){
        api.getUserInfo(this.userId).then(res => {
            console.log(1)
        })
      }
  }
}
</script>
<style lang="stylus" scoped>

</style>
