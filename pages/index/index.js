//index.js
//获取应用实例
var network = require("../../utils/request.js")
const app = getApp()
Page({
  data: {
    shoplist: [],
    btnList:[
      {name:'功能'},{name:'API'}
    ],
    taste:['','自助餐','烧烤','面食','早餐','小吃'],
    flag:-1,
    locationList:['下载','相机','滨江区','萧山区']

  },
  //事件处理函数
  goDetail: function() {
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  show(e){
    if (e.currentTarget.dataset.index==0){
      this.setData({
        flag:1
      })
    }else{
      this.setData({
        flag: 2
      })
    }
  },
  selectApi(e){
    switch (e.currentTarget.dataset.index){
      case 0: 
        wx.navigateTo({
          url: '../upload/upload'
        });
        this.close();
      break;
      case 1 :
        wx.navigateTo({
          url: '../camera/camera'
        });
        this.close();
        break;
      default: this.close()
    }
  },
  close(){
    this.setData({flag:-1})
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
        mask:true
      })
    })
  },
})
