<template lang='pug'>
#app
  transition(name = 'fade')
  Layout(v-if="$route.meta.keepAlive")
  router-view(v-if="!$route.meta.keepAlive") 
</template>

<script>
import Layout from './components/layout/index.vue' 
export default {
  name: 'app',
  components: {
    Layout 
  }
}
</script>
<style lang="stylus">
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
</style>
