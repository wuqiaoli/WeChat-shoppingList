//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    shoplist: [
      { img:'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',title:'咕噜咕噜小火锅',location:'杭州市余杭区恒盛科技园',count:'8.7'},
      { img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', title: '牛焱', location: '杭州市余杭区恒盛科技园1', count: '7.7' },
      { img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', title: '咕噜咕噜小火锅电饭锅地方', location: '杭州市余杭区恒盛科技园2', count: '5' },
      { img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', title: '咕噜咕噜小火锅', location: '杭州市余杭区恒盛科技园', count: '8.7' },
      { img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', title: '牛焱', location: '杭州市余杭区恒盛科技园1', count: '7.7' },
      { img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', title: '咕噜咕噜小火锅梵蒂冈刚发的大幅度发那地方地方', location: '杭州市余杭区恒盛科技园2', count: '5' },
      { img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', title: '咕噜咕噜小火锅', location: '杭州市余杭区恒盛科技园', count: '8.7' },
      { img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', title: '牛焱', location: '杭州市余杭区恒盛科技园1', count: '7.7' },
      { img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', title: '咕噜咕噜小火锅放的地方', location: '杭州市余杭区恒盛科技园2', count: '5' },
      { img: 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg', title: '牛焱', location: '杭州市余杭区恒盛科技园1', count: '7.7' },
      { img: 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', title: '咕噜咕噜小火锅放的地方', location: '杭州市余杭区恒盛科技园2', count: '5' },
    ],
    btnList:[
      {name:'美食类型'},{name:'地区筛选'}
    ],
    taste:['火锅','自助餐','烧烤','面食','早餐','小吃'],
    flag:-1,
    locationList:['余杭区','拱墅区','滨江区','萧山区']

  },
  // 轮播图
  show:function(e){
    let index = e.currentTarget.dataset.index; 
    if(index==0){
      this.setData({flag: 1})
    }else{
      this.setData({ flag: 2 })
    }
  },
  close(){
    this.setData({flag:-1})
  },

  //事件处理函数
  goDetail: function() {
    wx.navigateTo({
      url: '../detail/detail'
    })
  },
  onLoad: function () {
   
  },
  // getUserInfo: function(e) {
  //   console.log(e)
  //   app.globalData.userInfo = e.detail.userInfo
  //   this.setData({
  //     userInfo: e.detail.userInfo,
  //     hasUserInfo: true
  //   })
  // }
})
