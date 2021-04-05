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

  }
})