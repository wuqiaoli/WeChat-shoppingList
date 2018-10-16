// pages/detail/detail.js
var network = require("../../utils/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
      src:{},
      menuList:[],
      count:0,
      totalMoney:0
  },
  selectFood(e){
    let index = e.currentTarget.dataset.key
    if (this.data.menuList[index].state == 0){
       this.data.menuList[index].state = 1 ;
    }else{
      this.data.menuList[index].state = 0 
    }
    this.setData({ menuList: this.data.menuList}) ;
    this.order();
  },
  order(){
    let arr = [] ;
    let allCount = []
    for (let [index, value] of this.data.menuList.entries()) {
      if(value.state == 1){
        arr.push(value.id) ;
        allCount.push(value.price)
      }
    }
    this.setData({count : arr.length});
    let a = 0 ;
    for (let value of allCount){
        a += value 
    }
    this.setData({ totalMoney:a})
  },
  checkOut(){
      wx.navigateTo({
        url: '../check/check?money=' + this.data.totalMoney
      })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    var that = this;
    network.requestLoading('/food', 'get', '', '正在加载数据', function (res) {
      that.setData({
        src: res.data[0],
        menuList: res.data
      })
    }, function () {
      wx.showToast({
        title: '加载数据失败',
      })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})