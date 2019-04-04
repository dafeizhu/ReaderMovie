// 获取本地数据，post-data.js为模拟的本地数据库
var postsData = require('../../../data/posts-data.js')
var app = getApp();
Page({
  data: {
    // 音乐播放状态初始化
    isPlayingMusic: false
  },
  onLoad: function(options) {
    var postId = options.id;
    this.data.currentPostId = postId;
    var postData = postsData.postList[postId];
    this.setData({
      postData: postsData.postList[postId],
    });

    var postsCollected = wx.getStorageSync('posts_collected');
    if (postsCollected) {
      var postCollected = postsCollected[postId];
      this.setData({
        collected: postCollected
      })
    } else {
      var postsCollected = {};
      postsCollected[postId] = false;
      wx.setStorageSync('posts_collected', postsCollected);
    }

    if (app.globalData.g_isPlayMusic && app.globalData.g_currentMusicPostId == postId){
      this.setData({
        isPlayingMusic: true
      })
    }

    this.setMusicMonitor();
  },

  // 判断音乐播放的监听函数
  setMusicMonitor: function() {
    var that = this;
    wx.onBackgroundAudioPlay(function() {
      that.setData({
        isPlayingMusic: true
      })
      app.globalData.g_isPlayMusic = true;
      app.globalData.g_currentMusicPostId = that.data.currentPostId;
    })
    wx.onBackgroundAudioPause(function() {
      that.setData({
        isPlayingMusic: false
      })
      app.globalData.g_isPlayMusic = false; 
      app.globalData.g_currentMusicPostId = null;
    })
    wx.onBackgroundAudioStop(function () {
      that.setData({
        isPlayingMusic: false
      })
      app.globalData.g_isPlayMusic = false;
      app.globalData.g_currentMusicPostId = null;
    })
  },

  // 收藏Tap
  onCollectionTap: function(event) {
    var postsCollected = wx.getStorageSync('posts_collected');
    var postCollected = postsCollected[this.data.currentPostId];
    postCollected = !postCollected;
    postsCollected[this.data.currentPostId] = postCollected;
    this.showToast(postsCollected, postCollected)
  },

  // 收藏按钮触发函数
  showToast: function(postsCollected, postCollected) {
    wx.setStorageSync('posts_collected', postsCollected)
    this.setData({
      collected: postCollected
    })
    // 显示点击收藏后的反馈信息
    wx.showToast({
      title: postCollected ? "收藏成功" : "取消成功",
      duration: 1000,
      icon: "success"
    })
  },

  // 分享Tap
  onShareTap: function(event) {
    var List = [
      "分享给微信好友",
      "分享到朋友圈",
      "分享到QQ好友",
      "分享到微博"
    ]
    // 显示信息 此功能仅可观而无实用性
    wx.showActionSheet({
      itemList: List,
      success(res) {
        wx.showModal({
          title: "用户" + List[res.tapIndex],
          content: "用户是否取消？现在还无法实现分享功能",
        })
      }
    })
  },

  // 音乐Tap
  onMusicTap: function(event) {
    var isPlayingMusic = this.data.isPlayingMusic;
    if (isPlayingMusic) {
      wx.pauseBackgroundAudio();
      this.setData({
        isPlayingMusic: false
      })
    } else {
      wx.playBackgroundAudio({
        dataUrl: postsData.postList[this.data.currentPostId].music.url,
        title: postsData.postList[this.data.currentPostId].music.title,
        coverImgUrl: postsData.postList[this.data.currentPostId].music.coverImg,
      })
      this.setData({
        isPlayingMusic: true
      })
    }
  }

})