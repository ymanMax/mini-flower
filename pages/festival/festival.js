import { festivalRequest } from '../../api/index'

Page({
  data: {
    festivalGifts: []
  },

  onLoad: function (options) {
    this.getFestivalGifts()
  },

  // 获取节日花礼列表
  async getFestivalGifts() {
    try {
      const res = await festivalRequest.getFestivalGifts()
      if (res.code === 666) {
        this.setData({
          festivalGifts: res.festivalGifts
        })
      }
    } catch (error) {
      console.error('获取节日花礼列表失败:', error)
    }
  },

  // 预订花礼
  orderGift(e) {
    const giftId = e.currentTarget.dataset.giftid
    wx.showToast({
      title: '预订功能开发中',
      icon: 'none'
    })
  }
})
