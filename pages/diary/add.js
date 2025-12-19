// pages/diary/add.js
Page({
  data: {
    title: '',
    content: '',
    flowerName: '',
    fileList: [],
    tagsInput: '',
    canSubmit: false
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

  onFlowerNameChange: function (event) {
    this.setData({
      flowerName: event.detail
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

  onTagsInputChange: function (event) {
    this.setData({
      tagsInput: event.detail
    });
  },

  checkCanSubmit: function () {
    const { title, content } = this.data;
    const canSubmit = title.trim() !== '' && content.trim() !== '';
    this.setData({
      canSubmit
    });
  },

  onSubmit: function () {
    if (!this.data.canSubmit) {
      return;
    }

    wx.showLoading({
      title: '保存中...'
    });

    // 处理标签
    const tags = this.data.tagsInput
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag !== '');

    // 如果有花卉名称，添加到标签
    if (this.data.flowerName.trim()) {
      const flowerTag = this.data.flowerName.trim();
      if (!tags.includes(flowerTag)) {
        tags.push(flowerTag);
      }
    }

    // 模拟保存
    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({
        title: '保存成功',
        icon: 'success'
      });
      setTimeout(() => {
        wx.navigateBack();
      }, 1500);
    }, 1000);
  }
});
