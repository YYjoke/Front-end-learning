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