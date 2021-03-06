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
    errorMsg: ''
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
    /*console.log("click")
    console.log(this.data.pass)
    console.log(this.data.id)*/
   /* this.setData({
      error: '这是一个错误提示'
  })*/
    if(this.data.pass==''||this.data.id==''){
      this.setData({
        errorMsg: '账号或密码不能为空！'
      })
    }
    else{
      wx.showToast({
        title: '登录成功',
        icon: 'success',
        duration: 2000,
        success(){
          setTimeout(function(){
            wx.switchTab({
              url: '../appointment/appointment'
            })
          },1000)
        }
      })
      
      /*wx.switchTab({
        url: '../appointment/appointment'
      })*/
      //为了调试方便将登陆代码注掉
      /*
      wx.request({
        url:'http://localhost:8080/user/login', 
        header: { 'Content-Type': 'application/json;charset=utf-8' },
        data: {
            input: this.data.id,
            password: this.data.pass,
        },
        method: 'post',
        success: function (res) {
              if(res.data == "1"){//跳转到首页
                that.setData({
                  errorMsg: '登录成功'
                })
                getAPP().globalData.userID = this.data.id;
                wx.switchTab({
                  url: '../appointment/appointment'
                })
              }
              else{
                that.setData({
                  errorMsg: '学工号与密码不匹配'
                })
              }
            }
        })*/
     }
  }
})