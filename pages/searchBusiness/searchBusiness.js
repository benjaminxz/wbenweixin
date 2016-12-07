// pages/searchBusiness/searchBusiness.js
Page({
 data: {
    logs: [],
    oneDate: "",
    idKey:"",
    businessNameKey:""
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://www.bjmwebapi.com/api/yys',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res.data)
        // success
        that.setData({
          oneDate: res.data
        });
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },


  idInputEvent: function (e) {
    this.setData({ businessNameKey: e.detail.value });
  },

  idClickEvent: function (e) {
    
    wx.navigateTo({
      url: '../productList/productList?id=' + this.data.businessNameKey/////////
    });
  },

    businessNameInputEvent: function (e) {
    this.setData({ idKey: e.detail.value });
  },

  businessNameClickEvent: function (e) {
    
    wx.navigateTo({
      url: '../productList/productList?id=' + this.data.idKey
    });
  },

  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})