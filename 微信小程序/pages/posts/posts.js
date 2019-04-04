// 获取本地数据，post-data.js为模拟的本地数据库
var postsData = require('../../data/posts-data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  // 初始化
  onLoad: function() {
    this.data.postList = postsData.postList;
    this.setData({
      // 为每个文章指定一个特定的keyID
      post_key: postsData.postList,
    });
  },

  // 点击主体文章跳转
  onPostTap: function(event) {
    var postId = event.currentTarget.dataset.postid;
    // console.log("on post id is"+postId);
    wx.navigateTo({
      url: "../posts/post-detail/post-detail?id=" + postId
    })

  },

  // 点击轮播图跳转
  onSwiperTap: function(event) {
    var postId = event.target.dataset.postid;
    // console.log("on post id is"+postId);
    wx.navigateTo({
      url: "../posts/post-detail/post-detail?id=" + postId
    })

  },


})