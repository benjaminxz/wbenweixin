Page( {
  data: {
    id: null,
    loadidngHidden: false,

    productData:""
  },
  onLoad: function( option ) {
    console.log(option)
    this.setData({
      id: option.id
    });
  },
  onReady: function() {
    var id = this.data.id;
   
    var that = this;
    wx.request({
      url: 'http://www.bjmwebapi.com/api/ProductList',
      data: { id: that.data.id },
      method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
      // header: {}, // 设置请求的 header
      success: function (res) {
        console.log(res.data)
        // success
        that.setData({
          productData: res.data
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
});