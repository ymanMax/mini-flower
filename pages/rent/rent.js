import { rentRequest } from '../../api/index'

Page({
  data: {
    rentServices: []
  },

  onLoad: function (options) {
    this.getRentServices()
  },

  // 获取租赁服务列表
  async getRentServices() {
    try {
      const res = await rentRequest.getRentServices()
      if (res.code === 666) {
        this.setData({
          rentServices: res.rentServices
        })
      }
    } catch (error) {
      console.error('获取租赁服务列表失败:', error)
    }
  },

  // 预订服务
  orderService(e) {
    const rentId = e.currentTarget.dataset.rentid
    wx.showToast({
      title: '预订功能开发中',
      icon: 'none'
    })
  }
})
