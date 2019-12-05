# 易车无忧后台管理

## 打包     

```sh

yarn 

yarn prod

```

把打包后的build文件提交到svn后再在Jenkins发布

jenkins 地址
http://jenkins.xiaositv.com:8080/view/rgzz/job/prod-ycwy-admin/

run

```
yarn & yarn start

```

目录结构示意图

```
src     需要打包的所有代码目录
|
|
|---- component  组件目录 
|    
|---- routes  各个路由页面 
|
|---- http    接口目录
|
|---- image   图片目录
|
|---- store   mobx 仓库
|
|---- utils   工具类
|
|---- app.js   路由
|
|---- index.js  入口文件

```

### 开发部署

1. 本地打包
- yarn dev  （测试）
- yarn build  （正式）

### 开发代理

hosts 192.168.17.12 dev.rgzz.com
hosts 192.168.17.12 dev.rgzz.com

本地调试域名    rgzz.local
"http://dev.rgzz.com"


前端页面地址
      
- 正式   https://yczd.51easycar.com/
- 测试   http://test-yczd.51easycar.com/

## 
登陆账号 15350731795   


邀请码
6494371
1085685
7432627
4431889


## 迭代记录

1. 上架 平安和车多多 （后来平安上架）
2. 车多多流程修改
3. 上架平安、易鑫

产品列表  

车多多 产品ID 1  平安2  易鑫 3