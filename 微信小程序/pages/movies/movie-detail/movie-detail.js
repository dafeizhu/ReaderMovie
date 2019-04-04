
var app = getApp();
var utils = require("../../../utils/utils.js");
Page({
  data: {
    movie: {}
  },
  onLoad: function (options) {
    var movieId = options.id;
    var url = app.globalData.doubanBase + "/v2/movie/subject/" + movieId;
    utils.http(url, this.processDoubanData)
  },

  viewMoviePostImg:function(event){
    var src = event.currentTarget.dataset.src;
    wx.previewImage({
      current: src,
      urls: [src],
    })
  },

  processDoubanData:function(data){
    if(!data){
      return
    }
    var director = {
      avatar:"",
      name:"",
      id:""
    }
    if(data.directors[0] != null){
      if(data.directors[0].avatar != null){
        director.avatar = data.directors[0].avatars.large
      }
      director.name = data.directors[0].name;
      director.id = data.directors[0].id
    }
    var movie = {
      movieImg: data.images ? data.images.large : "",
      country: data.countries[0],
      title: data.title,
      originalTitle: data.original_title,
      wishCount: data.wish_count,
      commentCount:data.comments_count,
      year: data.year,
      generes: data.genres.join("、"),
      stars: utils.convertToStarsArray(data.rating.stars),
      score: data.rating.average,
      director: director,
      casts: utils.convertToCastString(data.casts),
      castsInfo:utils.convertToCastInfos(data.casts),
      summary:data.summary
    }
    this.setData({
      movie: movie
    })

  }  

})