// pages/deleteFromList/deleteFromList.js

Page({
  data: {
    logs: [],
    listDate: [],
  },
  deleteItem: function (e) {
    var that = this;
    wx.request({
      url: 'http://www.bjmwebapi.com/api/object/' + e.target.dataset.key,
      data: {},
      method: 'DELETE', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res.data)

        var listTemp = that.data.listDate
        //    listTemp.push({apiCrudID:333,apiName:222})/////
        var index = listTemp.indexOf(e.target.dataset.key);
        listTemp.splice(index, 1);
        that.setData({
          listDate: listTemp
        });
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },
  onLoad: function () {
    var that = this;
    wx.request({
      url: 'http://www.bjmwebapi.com/api/object',
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
