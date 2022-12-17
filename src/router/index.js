
// 配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'

// 使用插件
Vue.use(VueRouter)
import Home from '@/views/Home'
import Login from '@/views/Login'
import Register from '@/views/Register'
import Search from '@/views/Search'

// 配置路由
export default new VueRouter({
    mode: 'history',  // 去掉路由上的   #/
    routes: [
        {
            path: '/home',
            component: Home,
            meta: { requiresAuth : true }
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/register',
            component: Register
        },
        {
            path: '/search/:keywords?/:sex?', // 参数后面带问号，表示可传可不传
            component: Search,
            name: 'search',
            meta: { requiresAuth : true },
        },
        { 
            path: '*', // 重定向,默认打开页面
            redirect: '/home'
        }
    ]
})


// ----------------开始------------------------------路由重复点击，抛出NavigationDuplicated的错误警告---------------------------------------
//1先把vueRouter原型对象的push保存一份
let originPush = VueRouter.prototype.push         // originPush(翻译：前)   大概意思就是把人家vue的vueRouter原型对象的push方法备份了一份
let originReplace = VueRouter.prototype.replace


//2重写push 和 replace 方法
VueRouter.prototype.push = function(location, resolve, reject){ //location：告诉原来的push方法，往哪里跳（传递什么参数）  resolve: 成功的回调   reject： 失败的回调
    if(resolve && reject){
        // call 和allly区别： 
            // 相同点：都可以调用函数一次，都可以篡改函数的上下文一次
            // 不同点：call与apply传递参数，call用逗号隔开，而apply方法执行没传递数组
        originPush.call(this, location ,resolve, reject);
    } else {
        originPush.call(this, location, ()=>{},()=>{});
    }
}
VueRouter.prototype.replace = function(location, resolve, reject){
    if(resolve && reject){
        originReplace.call(this, location, resolve, reject);
    } else {
        originReplace.call(this, location, ()=>{},()=>{});
    }
}
// ------------------结束----------------------------路由重复点击，抛出NavigationDuplicated的错误警告---------------------------------------
