import { designRequest } from '../../api/index'

Page({
  data: {
    designServices: []
  },

  onLoad: function (options) {
    this.getDesignServices()
  },

  // 获取花艺设计服务列表
  async getDesignServices() {
    try {
      const res = await designRequest.getDesignServices()
      if (res.code === 666) {
        this.setData({
          designServices: res.designServices
        })
      }
    } catch (error) {
      console.error('获取花艺设计服务列表失败:', error)
    }
  },

  // 定制服务
  orderService(e) {
    const designId = e.currentTarget.dataset.designid
    wx.showToast({
      title: '定制功能开发中',
      icon: 'none'
    })
  }
})
