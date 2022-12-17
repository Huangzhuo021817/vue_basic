1、项目运行起来时，项目自动打开
    packge.json文件
"scripts": {
    "serve": "vue-cli-service serve --open",  ----------------------> vue-cli-service serve --open
    "build": "vue-cli-service build",
    "lint": "vue-cli-service lint"
}

2、eslint校验工具功能关闭
    在根目录下的vue.config.js文件
modules.exports = {
    // 关闭eslint
    lintOnSave: false,
}

3、src文件夹配置别名  @的简写方式
    项目根目录下创建jsconfig.json文件
{
  "compilerOptions": {
    "target": "es5",
    "module": "esnext",
    "baseUrl": "./",
    "moduleResolution": "node",
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  }
}

        