//index.js
//获取应用实例
var network = require("../../utils/request.js")
const app = getApp()
Page({
  data: {
    shoplist: [],
    btnList:[
      {name:'美食类型'},{name:'地区筛选'}
    ],
    taste:['火锅','自助餐','烧烤','面食','早餐','小吃'],
    flag:-1,
    locationList:['余杭区','拱墅区','滨江区','萧山区']

  },
  //事件处理函数
  goDetail: function() {
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  onLoad: function () {
    var that = this;
    network.requestLoading('/shop', 'get', '', '正在加载数据', function (res) {
      that.setData({
        shoplist: res.data,
      })
    }, function () {
      wx.showToast({
        title: '加载数据失败',
      })
    })
  },
})
