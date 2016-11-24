
Page({
  data: {
    logs: [],
    listDate:[]
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://www.bjmwebapi.com/api/yys?a=1',
      data: {},
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res.data)
        // success
        that.setData({
          listDate: res.data
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
