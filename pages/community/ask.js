// pages/community/ask.js
Page({
  data: {
    title: '',
    content: '',
    category: '',
    fileList: [],
    canSubmit: false,
    categories: ['玫瑰', '多肉', '绿萝', '君子兰', '栀子花', '其他']
  },

  onLoad: function (options) {

  },

  onBack: function () {
    wx.navigateBack();
  },

  onTitleChange: function (event) {
    this.setData({
      title: event.detail
    });
    this.checkCanSubmit();
  },

  onContentChange: function (event) {
    this.setData({
      content: event.detail
    });
    this.checkCanSubmit();
  },

  showCategoryPicker: function () {
    wx.showActionSheet({
      itemList: this.data.categories,
      success: (res) => {
        this.setData({
          category: this.data.categories[res.tapIndex]
        });
        this.checkCanSubmit();
      }
    });
  },

  afterRead: function (event) {
    const { file } = event.detail;
    this.setData({
      fileList: [...this.data.fileList, file]
    });
  },

  deleteImage: function (event) {
    const { index } = event.detail;
    const fileList = this.data.fileList;
    fileList.splice(index, 1);
    this.setData({
      fileList
    });
  },

  checkCanSubmit: function () {
    const { title, content, category } = this.data;
    const canSubmit = title.trim() !== '' && content.trim() !== '' && category.trim() !== '';
    this.setData({
      canSubmit
    });
  },

  onSubmit: function () {
    if (!this.data.canSubmit) {
      return;
    }

    wx.showLoading({
      title: '提交中...'
    });

    // 模拟提交
    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({
        title: '提问成功',
        icon: 'success'
      });
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
    }, 1000);
  }
});
