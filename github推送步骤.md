github上传步骤：

###### 本地仓库的建立

1.创建文件夹

2.创建可管理仓库  

 $ git init

3.把文件加如仓库（等待区） 

  $ git add readme.txt

4.把文件加如仓库   

$ git commit -m "wrote a readme file" //引号内为提交说明 内容任意 不可没有

###### 远程仓库的建立

因为本地git仓库和github仓库之间的传输是通过SSH加密的  所以：

5.创建一个SSH Key  （在用户主目录下先查看有没有.ssh目录,id_rsa 和id_rsa.pub这两个文件）如果没有  打开SHell（windows下打开 Git Bash）创建SSH Key  

 $ ssh-keygen -t rsa -C "youremail@example.com"

你需要把邮件地址换成你自己的邮件地址，然后一路回车，使用默认值即可  无需设置密码

在主目录下查找.ssh目录  里面有id_rsa 和 id_rsa.pub两个文件    这两个就是SSH Key的密匙对   id_rsa是私钥 不能泄露出去   id_rsa.pub是公钥  可以多人使用

6.登录github   打开“Account settings”，“SSH Keys”页面：

然后，点“Add SSH Key”，填上任意Title，在Key文本框里粘贴`id_rsa.pub`文件的内容：



![github-addkey-1](https://www.liaoxuefeng.com/files/attachments/919021379029408/0)



点Add Key  看到已经添加的Key

![github-addkey-2](https://www.liaoxuefeng.com/files/attachments/919021395420160/0)

SSH Key 的作用：GitHub用来识别身份   git支持SSh协议

GitHub允许添加多个key  即可以在多台电脑提交



7.在github上面创建一个git仓库  然后将本地仓库与之相关联

 ![github-create-repo-1](https://www.liaoxuefeng.com/files/attachments/919021631860000/0)



```
$ git remote add origin git@github.com:yyjoke/learngit.git
```

8.将本地库中的内容推向远程库上

```
$ git push -u origin master
```

 



git clone url --下载一个项目和他的整个代码历史

git pull -- 命令用于从另一个存储库或本地分支获取并集成  作用：取回远程主机某个分支的更新 再与本机的指定分支合并  