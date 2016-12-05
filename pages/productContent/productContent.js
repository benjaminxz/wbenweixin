
Page({
  data: {
    logs: [],
    contentData: "",
    productGuid: "45c9dade-fbcb-4251-a74d-fd880057aa12",
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://www.bjmwebapi.com/api/ProductContent',
      data: { productGuid: that.data.productGuid },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res.data)
        // success
        that.setData({
          contentData: res.data
        });
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  }
})
