Page({
  onTap:function () {
    wx.switchTab({
      url: '../posts/posts',
    })

    // wx.navigateTo({
    //   url:'../posts/posts',
    // })
  }
})