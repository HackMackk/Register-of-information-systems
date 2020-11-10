<template>
<div id="app">
  <component :is="auth"></component>
  <component :is="view">
  </component>
</div>
</template>

<script>
import top from '@/components/top'
import mainView from '@/components/mainView'
import passport from '@/components/passport'
import guide from '@/components/guide'
import manual from '@/components/manual'
import auth from '@/components/auth'

export default {
  components:{
    top, mainView, passport, guide, manual, auth
  },
  computed:{
    view(){
      return (this.$route.meta.view)
    },
    auth(){
      return ((this.$route.meta.auth == true) ? 'auth' : 'top')
    }
  },
  mounted() {
    let bootstrap = document.createElement('script')
    bootstrap.setAttribute('src', '/bootstrap.min.js')
    document.head.appendChild(bootstrap)
  },
 }
    
</script>

<style>
  @import "assets/style.css";
  @import "assets/bootstrap.min.css";
  @import "assets/fontawesome-free-5.15.1-web/css/all.min.css";
</style>
