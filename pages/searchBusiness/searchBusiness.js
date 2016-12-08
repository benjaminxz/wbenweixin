// pages/searchBusiness/searchBusiness.js
Page({
  data: {
   
   
    idKey: "",
    businessNameKey: "",
    businessListData:"",
  },
  onLoad: function () {
    var that = this;
    
  },


  idInputEvent: function (e) {
    this.setData({ idKey: e.detail.value });
  },

  idClickEvent: function (e) {

    wx.navigateTo({
      url: '../productList/productList?id=' + this.data.businessNameKey/////////
    });
  },

  businessNameInputEvent: function (e) {
    this.setData({ businessNameKey: e.detail.value });
  },

  businessNameClickEvent: function (e) {

    var that = this;
    wx.request({
      url: 'http://www.bjmwebapi.com/api/BusinessSearch',
      data: { searchBusinessName:that.data.businessNameKey },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res.data)
        // success
        that.setData({
          businessListData: res.data
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
  toProductPage: function (e) {
    var bid = e.currentTarget.dataset.bid; //图书id [data-bid]
    wx.navigateTo({
      url: '../productList/productList?id=' + bid
    });
  },

  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})