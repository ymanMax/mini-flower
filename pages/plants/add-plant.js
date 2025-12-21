Page({
  data: {
    plantName: '',
    plantVariety: '',
    buyDate: '',
    careRequirements: '',
    fileList: [],
    currentDate: new Date().getTime(),
    showDatePickerVisible: false
  },

  onClickLeft() {
    wx.navigateBack()
  },

  onPlantNameChange(event) {
    this.setData({
      plantName: event.detail
    })
  },

  onPlantVarietyChange(event) {
    this.setData({
      plantVariety: event.detail
    })
  },

  showDatePicker() {
    this.setData({
      showDatePickerVisible: true
    })
  },

  onDateConfirm(event) {
    const date = new Date(event.detail)
    const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`

    this.setData({
      buyDate: formattedDate,
      showDatePickerVisible: false
    })
  },

  onDateCancel() {
    this.setData({
      showDatePickerVisible: false
    })
  },

  onCareRequirementsChange(event) {
    this.setData({
      careRequirements: event.detail
    })
  },

  afterRead(event) {
    const { file } = event.detail
    this.setData({
      fileList: [{ url: file.url }]
    })
  },

  submitPlant() {
    const { plantName, plantVariety, buyDate, careRequirements, fileList } = this.data

    if (!plantName || !plantVariety || !buyDate) {
      wx.showToast({
        title: '请填写必要信息',
        icon: 'error'
      })
      return
    }

    // Mock提交成功
    wx.showLoading({
      title: '添加中...'
    })

    setTimeout(() => {
      wx.hideLoading()
      wx.showToast({
        title: '添加成功',
        icon: 'success'
      })

      setTimeout(() => {
        wx.navigateBack()
      }, 1500)
    }, 1000)
  }
})
