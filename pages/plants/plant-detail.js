Page({
  data: {
    plant: {
      id: 1,
      name: '多肉植物',
      variety: '仙人掌科',
      status: '健康',
      buyDate: '2024-01-15',
      careDays: 45,
      careRequirements: '喜阳耐旱，每周浇水一次',
      image: '/img/flower1.jpg',
      reminders: [
        {
          type: 'water',
          title: '浇水提醒',
          description: '您的多肉植物已经5天没有浇水了',
          icon: 'droplet-o'
        },
        {
          type: 'fertilizer',
          title: '施肥提醒',
          description: '距离上次施肥已经2周，建议施肥',
          icon: 'notes-o'
        },
        {
          type: 'trim',
          title: '修剪提醒',
          description: '植物枝叶生长过密，建议修剪',
          icon: 'scissor-o'
        }
      ]
    }
  },

  onLoad(options) {
    const plantId = options.id
    console.log('Plant ID:', plantId)
  },

  onClickLeft() {
    wx.navigateBack()
  },

  goToCareLog() {
    wx.navigateTo({
      url: '/pages/plants/care-log'
    })
  },

  goToDiagnosis() {
    wx.navigateTo({
      url: '/pages/diagnosis/diagnosis'
    })
  },

  addCareLog() {
    wx.navigateTo({
      url: '/pages/plants/care-log?action=add'
    })
  },

  completeTask(e) {
    const taskType = e.currentTarget.dataset.type
    wx.showToast({
      title: '任务已完成',
      icon: 'success'
    })
  }
})
