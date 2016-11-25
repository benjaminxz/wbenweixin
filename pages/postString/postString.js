
Page({
    data: {
        logs: [],
        postOneDate: "",
        currentInputData:""
    },
    
    bindPostButtonTap: function () {
       //  this.setData({
                   // postOneDate:this.data.currentInputData
              //  });
               var that = this;
        wx.request({
            url: 'http://www.bjmwebapi.com/api/yys',
            data: {NAME:"sss"},
            method: 'POST', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
            // header: {}, // 设置请求的 header
            success: function (res) {
                console.log(res.data)
                // success
                that.setData({
                    postOneDate: res.data
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
     bindKeyInput:function(e){
    this.data.currentInputData = e.detail.value//双向绑定？
  },
    onLoad: function () {
       
    }
})
