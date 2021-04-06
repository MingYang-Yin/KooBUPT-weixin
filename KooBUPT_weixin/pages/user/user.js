// pages/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tableColumns:[{
      title: "日期",
      key: "date",
    }, {
      title: "校区",
      key: "campus",
    }, {
      title: "机房号",
      key: "roomID",
    }, {
      title: "节次",
      key: "classNum",
    }, {
      title: "状态",
      key: "status",
   }],
    dataList:[{
      "date": '09/29',
      "campus": '沙河校区',
      "roomID": 'S504',
      "classNum": '1至3',
      "status": '已完成',
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.fresh()
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
    this.fresh()
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

  },

    /**
   * 刷新页面函数
   */
  fresh:function(){
    var that = this
    wx.showToast({title: '加载中', icon: 'loading', duration: 10000});
    wx.request({
      url:'http://localhost:8080/user/login',  //需要修改
      header: { 'Content-Type': 'application/json;charset=utf-8' },
      data: {
          userID: getApp().globalData.userID, //登录页面传递的参数（用户学工号）
          status: 1,
      },
      method: 'post',
      success: function (res) {
        string1 = res.data //储存数据
        var dataNum = string1.length //储存数据条数
        for(var i=0;i<dataNum;i++){ //接收后端传递的信息
          var objectToInsert = JSON.parse(string1[i]);
          if(objectToInsert.campus === "S"){
            objectToInsert.campus = "沙河校区"
          }
          if(objectToInsert.campus === "H"){
            objectToInsert.campus = "校本部"
          }
          that.dataList.push(objectToInsert);
        }
        wx.hideLoading()
      },
      fail: function(){
        wx.hideLoading()
        wx.showToast({
          title: '加载失败',
          icon: 'error',
          duration: 2000,
        })
      },
    })
  }
})