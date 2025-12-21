Page({
  data: {
    fileList: [],
    diagnosisResult: null
  },

  onClickLeft() {
    wx.navigateBack()
  },

  afterRead(event) {
    const { file } = event.detail
    this.setData({
      fileList: [{ url: file.url }],
      diagnosisResult: null
    })
  },

  startDiagnosis() {
    if (this.data.fileList.length === 0) {
      wx.showToast({
        title: '请先上传照片',
        icon: 'error'
      })
      return
    }

    wx.showLoading({
      title: '诊断中...'
    })

    setTimeout(() => {
      wx.hideLoading()

      // Mock诊断结果
      const mockResult = {
        title: '叶片黄化问题',
        status: '轻度异常',
        type: 'warning',
        description: '您的植物出现轻微的叶片黄化现象，可能是由于浇水过多或光照不足导致的。',
        solution: '1. 减少浇水频率，保持土壤适度干燥；2. 增加植物的光照时间，每天至少4小时；3. 可适当施加少量氮肥帮助恢复。'
      }

      this.setData({
        diagnosisResult: mockResult
      })
    }, 2000)
  }
})
