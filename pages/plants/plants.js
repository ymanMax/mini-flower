Page({
  data: {
    plants: []
  },

  onLoad() {
    this.loadPlants()
  },

  loadPlants() {
    // Mock数据
    const mockPlants = [
      {
        id: 1,
        name: '多肉植物',
        variety: '仙人掌科',
        buyDate: '2024-01-15',
        image: '/img/flower1.jpg',
        reminders: [
          { type: 'water', content: '今天需要浇水' },
          { type: 'fertilizer', content: '下周需要施肥' }
        ]
      },
      {
        id: 2,
        name: '绿萝',
        variety: '天南星科',
        buyDate: '2024-02-20',
        image: '/img/flower2.jpg',
        reminders: [
          { type: 'trim', content: '需要修剪枝叶' }
        ]
      }
    ]

    this.setData({
      plants: mockPlants
    })
  },

  onClickLeft() {
    wx.navigateBack()
  },

  goToAddPlant() {
    wx.navigateTo({
      url: '/pages/plants/add-plant'
    })
  },

  goToPlantDetail(e) {
    const plantId = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/plants/plant-detail?id=${plantId}`
    })
  }
})
