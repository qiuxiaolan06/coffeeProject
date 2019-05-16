// pages/templates/foot.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    //我的
    goMine: function (event) {
      console.log("1111")
      wx.navigateTo({
        url: '../mine/mine'
      })
    },

    //首页
    goHome: function (event) {
      console.log("cuowu")
      wx.navigateTo({
        url: '../index/index'
      })
    }
  },
  
})
