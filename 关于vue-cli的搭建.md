

### 关于Vue项目的搭建与使用

### 一 安装node环境

###### 先进行node检查 看是否安装

###### 为提高工作效率  可以使用淘宝镜像

输入：npm install -g cnpm –registry=https://registry.npm.taobao.org，即可安装npm镜像，以后再用到npm的地方直接用cnpm来代替就好了。

### 搭建vue项目环境

1，全局安装vue-cli 

cnpm install --global vue-cli

![img](https://images2018.cnblogs.com/blog/1389839/201805/1389839-20180502103007605-2060283530.png)

2,进入项目目录，创建一个基于webpack 模版的新项目

![img](https://images2018.cnblogs.com/blog/1389839/201805/1389839-20180502105647212-951832148.png)

说明：

Vue build == 》 打包方式，回车即可

install vue-route == >是否需要安装vue-route，项目中肯定要使用到 所以Y回车；

Use ESLint to lint your code ==》是否需要js语法检测  目前我们不需要  所以n回车；

Set up unit tests ==》是否安装 单元测试工具   目前我们不需要  所以n回车

Set up e2e tests with Nightwatch ==》 是否需要 端到端 测试工具  目前我们不需要 所以n回车

3，进入项目： cd vue-demo，安装依赖

 ![img](https://images2018.cnblogs.com/blog/1389839/201805/1389839-20180502110820591-729403423.png)

安装成功后，项目文件夹中会多出一个目录；node_modules

![img](https://images2018.cnblogs.com/blog/1389839/201805/1389839-20180502111032446-387761987.png)

4,cnpm run dev 启动项目

项目启动成功：

![img](https://images2018.cnblogs.com/blog/1389839/201805/1389839-20180502111357259-2114714639.png)

### 三, vue项目目录讲解

![img](https://images2018.cnblogs.com/blog/1389839/201805/1389839-20180502113321132-349982802.png)

1，build ： 构建脚本目录

1）build.js ==> 生产环境构建脚本；

2）check-versions.js ==> 检查npm ，node.js版本

3）utils.js ==>  构建相关工具方法

4）vue-loader.conf.js ==> 配置了css加载器以及变异css之后自动添加前缀

5）webpack.base.conf.js ==> webpack基本配置；

6）webpack.dev.conf.js ==> webpack 开发环境配置；

7）webpack.pord.conf.js ==> webpack生产环境配置

2、config：项目配置

　　　　1）dev.env.js   ==>  开发环境变量；

　　　　2）index.js   ==>  项目配置文件；

　　　　3）prod.env.js   ==>  生产环境变量；

　　3、node_modules：npm 加载的项目依赖模块

　　4、src：这里是我们要开发的目录，基本上要做的事情都在这个目录里。里面包含了几个目录及文件：

　　　　1）assets：资源目录，放置一些图片或者公共js、公共css。这里的资源会被webpack构建；

　　　　2）components：组件目录，我们写的组件就放在这个目录里面；

　　　　3）router：前端路由，我们需要配置的路由路径写在index.js里面；

　　　　4）App.vue：根组件；

　　　　5）main.js：入口js文件；

　　5、static：静态资源目录，如图片、字体等。不会被webpack构建

　　6、index.html：首页入口文件，可以添加一些 meta 信息等

　　7、package.json：npm包配置文件，定义了项目的npm脚本，依赖包等信息``

　　8、README.md：项目的说明文档，markdown 格式

　　9、.xxxx文件：这些是一些配置文件，包括语法配置，git配置等



### 四   父子组件之间的传值

子组件：

![img](https://images2018.cnblogs.com/blog/1389839/201805/1389839-20180502155344047-907805750.png)



父组件：

![img](https://images2018.cnblogs.com/blog/1389839/201805/1389839-20180502155017265-917246996.png)

### 五  补充

1，解决vue不能自动打开浏览器的问题：当我们输入npm run dev，运行项目，命令行提示我们运行成功，但是浏览器也没有自动打开，只能自己手动输入。

1）打开config  ==> index.js

![img](https://images2018.cnblogs.com/blog/1389839/201805/1389839-20180502125223276-1583391559.png)

2），module.exports配置中找到autoOpenBrowser，默认设置的是false

![img](https://images2018.cnblogs.com/blog/1389839/201805/1389839-20180502125428511-1749228164.png)

3），将autoOpenBrowser改为true

![img](https://images2018.cnblogs.com/blog/1389839/201805/1389839-20180502125549701-1208122588.png)

4），Ctrl+C，然后我们重启一下，就能自动打开浏览器了

![img](https://images2018.cnblogs.com/blog/1389839/201805/1389839-20180502125734359-1833017910.png)

2，为了避免端口冲突，也可以修改port，打开目录同上![img](https://images2018.cnblogs.com/blog/1389839/201805/1389839-20180502130002109-425091913.png)

修改成功：

![img](https://images2018.cnblogs.com/blog/1389839/201805/1389839-20180502130051874-1210873165.png)