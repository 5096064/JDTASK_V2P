## 简介

JDTASK_V2P - 搭建elecV2P用Nodejs执行JDTASK的环境

![](https://raw.githubusercontent.com/elecV2/elecV2P-dei/master/docs/res/overview.png)

### 基础功能

- 一键配置安装
- 后期定时拉库,更新脚本和任务
- 后期定时更新脚本所需NodeJS依赖
- 后期定时更新脚本所需NodeJS依赖
- 使用原V2P内的JDCookie:CookieJD/CookieJD2/CookiesJD
- TGBOT交互(开发中...)
- 其他功能（到时候看看）

## 安装/INSTALL

**程序开放权限极大，建议局域网使用。网络部署，风险自负**

TASK → 添加订阅任务  
→ 添加订阅JDTASK_V2P:[https://raw.githubusercontent.com/CenBoMin/JDTASK_V2P/main/jdtaskv2p.json]
→ 获取内容 → 全部添加 (会自动执行JDTASK_V2P初始化和JDTASKV2P模块的安装）
→ 保存当前任务列表

根据提示操作,然后等待10min...或者JDTASKV2P模块的安装完成,刷新页面即可享用。

## JDcookie
以上环境以及搭建好了，需要添加JDcookie值（即CookieJD/CookieJD2/CookiesJD这三个),由于有许多种方式,只介绍自己目前使用的两种

### 第一种方式:V2P上传BOXJS Cookie脚本
打开重写获取京东Cookie：
1.微信访问含有会员机制的京东自营店会员页面
2.访问京东APP内嵌了H5页面：后台杀京东APP后再进入或进首页的免费水果都可获取
3.复制 https://bean.m.jd.com/bean/signIndex.action 或 https://home.m.jd.com/myJd/newhome.action 地址到浏览器打开，登录后可自动获取Cookie，没成功就登录后再次访问下之前复制的地址

然后在添加定时脚本，建议每天一次cron
   
- ztxtop多账号重写订阅:[https://raw.githubusercontent.com/ztxtop/x/main/subscribe/rewrite-jd.plugin]
- 脚本:[https://raw.githubusercontent.com/CenBoMin/GithubSync/main/ELECV2PJS/PushBoxjsCookie_elecV2p.js]

### 第二种方式:本地JD扫码服务

定时
### 第二种方式:本地JD扫码服务

执行定时


## 通知

## DOCUMENTS&EXAMPLES

elecV2P说明文档及一些例程: [https://github.com/elecV2/elecV2P-dei](https://github.com/elecV2/elecV2P-dei)


## 致谢

