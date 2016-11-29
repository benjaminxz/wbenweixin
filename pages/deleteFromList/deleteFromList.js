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
        var index = e.target.dataset.index;
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
    setTimeout(function () {//12\\
      if (that.data.listDate.length == 0) {//12\\
        wx.showToast({//12\\
          title: '加载中',
          icon: 'loading',
          duration: 6000
        })
      }

    }, 1000)
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
        wx.hideToast()//12\\
      },
      fail: function () {
        // fail
        wx.showToast({
          title: '获取数据失败',
          icon: 'success',
          duration: 2000
        })
      },
      complete: function () {
        // complete
      }
    })
  }
})
