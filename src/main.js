import Vue from 'vue'
import App from './App.vue'
import router from '@/router' // 引入路由

new Vue({
  render: h => h(App),
  router // 注册路由
}).$mount('#app')
