// pages/upload/upload.js
var network = require("../../utils/request.js")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    audioList:[]
  },
  upload(e){
    const downloadTask = wx.downloadFile({
      url: e.currentTarget.dataset.src, 
      success(res) {
        if (res.statusCode === 200) {
          wx.playVoice({
            filePath: res.tempFilePath
          })
        }
      }
    })
    downloadTask.onProgressUpdate((res) => {
      console.log('下载进度', res.progress)
      console.log('已经下载的数据长度', res.totalBytesWritten)
      console.log('预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
      if (res.progress ==100){
        wx.showToast({
          title: '下载音乐成功',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    network.requestLoading('/audio', 'get', '', '正在加载数据', function (res) {
      that.setData({
        audioList: res.data,
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