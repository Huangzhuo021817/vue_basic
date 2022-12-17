<template>
  <div id="app">
    <Header />
    <!-- 路由组件出口的地方 -->
     <router-view></router-view>
    <Footer v-show="$route.meta.requiresAuth" />
  </div>
</template>

<script>
import $ from 'jquery'
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  data(){
    return {
    }
  },
  watch:{

  },
  mounted(){
    console.log($('#app'))
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
