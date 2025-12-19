import { enterpriseRequest } from '../../api/index'

Page({
  data: {
    enterpriseServices: []
  },

  onLoad: function (options) {
    this.getEnterpriseServices()
  },

  // 获取企业定制服务列表
  async getEnterpriseServices() {
    try {
      const res = await enterpriseRequest.getEnterpriseServices()
      if (res.code === 666) {
        this.setData({
          enterpriseServices: res.enterpriseServices
        })
      }
    } catch (error) {
      console.error('获取企业定制服务列表失败:', error)
    }
  },

  // 咨询服务
  orderService(e) {
    const enterpriseId = e.currentTarget.dataset.enterpriseid
    wx.showToast({
      title: '咨询功能开发中',
      icon: 'none'
    })
  }
})
