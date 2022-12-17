<template>
    <div class="main">
        <div class="header">
            <router-link to="/home"><img src="./images/logo.png" alt="" /></router-link>
            <div class="right_demo">
                <!-- 声明式导航 必须要有to属性 -->
                <div><router-link to="/login">登录</router-link></div>
                <div><router-link to="register">免费注册</router-link></div>
                <div><input type="text" v-model="keywords" placeholder="请输入关键字"><button @click="getSearch">搜索</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            keywords: '',
            sex: 'man',
            username: 'huangzhuo'
        }
    },
    methods: {
        getSearch() {

            // 路由传参
            // 第一种 字符串形式     /search/213?username=HUANGZHUO
            // this.$router.push('/search/' + this.keywords + '?username=' + this.username.toUpperCase())

            // 第二种 模板字符串
            // this.$router.push(`/search/${this.keywords}?username=${this.userneme}`)

            // 第三种 对象的写法
            this.$router.push({
                name: 'search',
                params: {
                    keywords: this.keywords || undefined,
                    sex: this.sex || undefined
                },
                query: {
                    username: this.username
                }
            })
        }
    }
}
</script>

<style lang="less" scoped>
.main {
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 0 auto;
        max-width: 1200px;
        height: 45px;
        padding: 10px 20px;

        img {
            height: 45px;
            object-fit: cover;
        }

        .right_demo {
            display: flex;
            align-items: center;

            div {
                margin: 0 20px;
            }
        }
    }
}
</style>>
