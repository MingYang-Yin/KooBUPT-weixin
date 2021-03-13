// pages/login/login.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 密码
    pass:'',
    //学工号
    id:'',
    // 表单类型
    inputType:"password",
    // 是否显示密码
    show_pass:false,
    //错误提示
    error: ''
  },

  /**
   * 点击显示隐藏密码
   */
  seeTap:function(){
    var that=this;
    that.setData({
      // 切换图标
      show_pass:!that.data.show_pass,
      // 切换表单type属性
      inputType:that.data.inputType==='password'?'text':'password',
    })
  },
  /**
   * 设置密码表单事件
   */
  setPassInput:function(e){
    var that=this;
    // 存储输入的密码
    that.setData({
      pass:e.detail.value,
    })
  },
  
  //储存输入的账号
  setIdInput:function(e){
    this.setData({
      id:e.detail.value,
    })
  },

  clickLogin:function(){
    var that = this
    console.log("click")
    console.log(this.data.pass)
    console.log(this.data.id)
    this.setData({
      error: '这是一个错误提示'
  })
    wx.request({
      url:'', 
      header: { 'Content-Type': 'application/json;charset=utf-8' },
      data: {
          id: this.data.id,
          pass: this.data.pass,
       },
       method: 'post',
       success: function (res) {
            console.log("成功");
            console.log(res);
            if(res.data.data == 1){//跳转到首页

            }
            else{
              that.setData({
                error: '这是一个错误提示'
            })
            }
       }
  })
  }
})