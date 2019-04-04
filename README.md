# ReaderMovie
## 本项目为本人学习微信小程序，通过视频学习同步开发的一个微信小程序项目，项目有两大板块，Reader文章板块和Movie豆瓣电影板块，仅供初学小程序者学习参考
## 登录界面（其实就是一个界面，中间的按钮可以跳转至主界面）
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/LoginUI.PNG)
<br><br>
# 项目介绍
## 本项目分两大板块介绍，先是Reader文章板块
<br><br>
## 一、Reader主界面
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/MainUI.PNG)
### 主界面顶部为一个swiper轮播图组件，主体部分为各个文章的列表，底部是底部导航栏tabBar。下图为其wxml文件
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/posts-wxml.PNG)
<br><br>
## 二、文章详情界面
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/post-detail.PNG)
### 文章详情界面分为上半部的背景图，背景图垂直居中有个播放音乐按钮，下边为文章的详情，全文。下图为其wxml文件
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/post-detail-wxml.PNG)
### 下边我们再来看一下其展示的效果
### 首先为收藏功能效果图
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/post-detail-collected.PNG)
### 点击收藏按钮，屏幕正中间提示收藏成功。下边为其实现代码
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/post-detail-collected-js.PNG)
### 该收藏功能使用的是小程序的缓存设置<code>wx.setStorageSync</code>实现的
<br>
### 分享功能效果图
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/post-detail-share.PNG)
### 点击分享按钮，屏幕底部出现选择菜单，再选择，屏幕正中间会出线对话框。下边为其实现代码
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/post-detail-share-js.PNG)
### 该功能其实实用性不强，真正要做到小程序的分享，应该使用另一个小程序自带的组件<code>wx.showShareMenu</code>
<br>
### 音乐播放功能效果图
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/post-detail-playmusic.PNG)
### 点击上半部图片正中见的音乐播放按钮，改变背景图，使用的音乐为网络的音乐流链接，该部分涉及到较多内容，这里仅作效果展示不放代码



