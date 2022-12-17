node_modules 文件夹：项目依赖文件
    public文件夹：一般放置一些静态资源(图片)，需要注意，放在public下的文件夹中的静态资源，webpack进行打包的时候会原封不动的打包到dist文件夹中

src文件夹(程序员源代码文件夹)：
    assets：一般是静态文件夹（一般是多个组件共用的静态资源），需要注意，放置在assets文件里面的静态资源，在webpack打包的时候，webpack会把静态资源当做一个模块 ，打包到JS文件夹中
    components：一般放置的是非路由文件（常用的全局组件）
    App.vue：唯一的根组件
    main.js：入口文件、整个程序最先执行的文件

babel.config.js：（babel相关）

package.json：记录项目信息

package-lock.json：缓存文件

README.md：说明性文件