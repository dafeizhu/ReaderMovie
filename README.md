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
### 分享功能效果图
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/post-detail-share.PNG)
### 点击分享按钮，屏幕底部出现选择菜单，再选择，屏幕正中间会出线对话框。下边为其实现代码
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/post-detail-share-js.PNG)
### 该功能其实实用性不强，如果想要真正要做小程序的分享功能，应该使用另一个小程序自带的组件<code>wx.showShareMenu</code>来实现
### 音乐播放功能效果图
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/post-detail-playmusic.PNG)
### 点击上半部图片正中间的音乐播放按钮，改变背景图，使用的音乐为网络的音乐流链接，该部分涉及到较多内容，这里仅作效果展示不放代码
<br><br>
## 三、文章详情数据源
### 文章详情的数据源，是来自posts-data.js（js文件中），通过小程序的数据绑定动态地将数据绑定到其中。下边为posts-data.js中部分代码截图
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/posts-data-js.PNG)
<br><br>
## 四、Movie主界面
### Movie板块中，应用得最多的便是<code>template</code>模板的嵌套使用，例如其中的星星评分组件，单个Movie的图片标题加文字的组件，都是使用了<code>template</code>模板的嵌套
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/MovieUI.PNG)
### Movie主界面中，顶部为搜索栏，主体部分分为3部分，分别为正在热映、即将上映和豆瓣Top250。下边为其wxml代码
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/movies-wxml.PNG)
### 可以看到，主界面中还有一层被隐藏掉的searchPanel，它是通过<code>wx:if</code>数据绑定的方式来控制显隐的，根据业务逻辑，只有当点击使用搜索栏的时候，searchPanel才会出现。同时，我们还注意到了中间三大主体模块，均是使用<code>template</code>模板的嵌套，由传递不同的数据来展示不同的页面效果
<br><br>
## 五、Movie板块中的数据来源及数据的清洗筛选
### 本项目中，Movie板块中的数据来源，均是由豆瓣官网提供的外接Api获取的，其实现是由我们用户去清洗筛选数据，选择我们需要的数据。下图为Movie主界面的js文件onLoad函数中的代码
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/movies-js-onLoad.PNG)
### 可以看到，因为我们主界面需要的数据，每个模块中只有3个，所以在url的最后是<code>start=0&count=3</code>用于实现仅需要的3个movie数据。下图为其数据清洗函数代码
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/movies-js-processDoubanData.PNG)
### 根据业务逻辑，我们需要的是该电影的名称、星星个数、评分、封面还有一个必须的，就是电影的ID，这是区分每部电影的标识
<br><br>
## 六、Movie详情界面
### 上半部为电影的详细信息，包括贴图海报，往下走为电影的剧情简介，头部的背景图是添加了模糊效果
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/movie-detail1.PNG)
### 底部则是影人介绍的一个case，可用手指向左滑动看更多的影人信息
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/movie-detail2.PNG)
### 详情界面中，评分的星星组件依旧是直接引用的template模板，可以看到模板的使用在本项目中体现得淋漓尽致
<br><br>
## 七、searchPanel界面
### searchPanel界面的实现，我们需要先捋一捋业务逻辑。首先用户点击搜索栏，原有的三大模块隐藏，再显示搜索界面；然后，输入关键字，检索数据，再通过数据绑定的方式展示出来，这里我们又将用到template模板的应用。
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/searchPanelUI1.PNG)
### 首先点击搜索栏，显示搜索界面，隐藏原有界面
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/searchPanelUI2.PNG)
### 输入关键字回车，显示出搜索结果。下边我们来看下具体实现代码
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/onBindFocus.PNG)
### 首先为光标聚焦在搜索栏时，通过小程序特有的数据绑定来控制组件显隐的方式隐藏原有界面并调出搜索界面
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/onBindBlur.PNG)
### 然后，便是输出搜索关键字，在模拟器上回车或者点击搜索栏外的地方，执行检索
![](https://github.com/dafeizhu/ReaderMovie/blob/master/images/getMovieListData.PNG)
### 这里的getMovieListData为上边onBindBlur函数中的一个结果回调函数，通过向豆瓣提供的Api发送request请求来获取搜索结果。
<br><br>
## 项目总结：本项目为本人初入小程序的第一个项目，在项目中，我学习到了如何去捋清楚实现业务逻辑的顺序，体验到小程序特有的数据绑定的便捷，以及template模板文件的嵌套应用。稍显遗憾的是，本项目没有后台数据库，阅读模块的数据，仅仅是简单的使用一个js文件来当数据库存放，这个有待后期学习了如何调用数据库，再进行完善。












