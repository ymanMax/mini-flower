Page({
  data: {
    logs: [
      {
        id: 1,
        date: '2024-03-15',
        type: 'water',
        typeText: '浇水',
        action: '给多肉植物浇水',
        notes: '少量浇水，避免积水'
      },
      {
        id: 2,
        date: '2024-03-10',
        type: 'fertilizer',
        typeText: '施肥',
        action: '施加有机肥料',
        notes: '使用稀释后的营养液'
      },
      {
        id: 3,
        date: '2024-03-05',
        type: 'trim',
        typeText: '修剪',
        action: '修剪过长枝叶',
        notes: ''
      }
    ],
    showAddLog: false,
    logTypes: [
      { name: '浇水', value: 'water' },
      { name: '施肥', value: 'fertilizer' },
      { name: '修剪', value: 'trim' },
      { name: '防治病虫害', value: 'pest-control' }
    ],
    selectedType: {},
    logAction: '',
    logNotes: ''
  },

  onLoad(options) {
    if (options && options.action === 'add') {
      this.setData({
        showAddLog: true
      })
    }
  },

  onClickLeft() {
    wx.navigateBack()
  },

  addLog() {
    this.setData({
      showAddLog: true
    })
  },

  onCloseAddLog() {
    this.setData({
      showAddLog: false
    })
  },

  onTypeConfirm(event) {
    this.setData({
      selectedType: event.detail
    })
  },

  onActionChange(event) {
    this.setData({
      logAction: event.detail
    })
  },

  onNotesChange(event) {
    this.setData({
      logNotes: event.detail
    })
  },

  confirmAddLog() {
    const { selectedType, logAction } = this.data

    if (!selectedType.value || !logAction) {
      wx.showToast({
        title: '请填写必要信息',
        icon: 'error'
      })
      return
    }

    const newLog = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      type: selectedType.value,
      typeText: selectedType.name,
      action: logAction,
      notes: this.data.logNotes
    }

    this.setData({
      logs: [newLog, ...this.data.logs],
      showAddLog: false,
      selectedType: {},
      logAction: '',
      logNotes: ''
    })

    wx.showToast({
      title: '添加成功',
      icon: 'success'
    })
  }
})
