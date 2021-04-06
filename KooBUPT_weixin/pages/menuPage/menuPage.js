// pages/menuPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['首页', '我'],
    currentTab: 0,
    listData:[],
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
    var that = this
    //加载list长度
    console.log(that.data.listData.length)
    for (var i=1;i<=100;i++){
       var obj = { "termNo": i, "prinAmt": 1000, "intAmt": 1000, "totAmt": 2000 }
       that.data.listData.push(obj);
      }
    //将list值展示
    that.setData({listData : that.data.listData})
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

  },

  navbarTap: function(e){
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  }
})