// pages/identify/index.js
Page({
  data: {
    selectedImage: '',
    identifyResult: null
  },

  onLoad: function (options) {

  },

  onBack: function () {
    wx.navigateBack();
  },

  chooseImage: function () {
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        this.setData({
          selectedImage: res.tempFilePaths[0],
          identifyResult: null
        });
      }
    });
  },

  identifyFlower: function () {
    if (!this.data.selectedImage) {
      wx.showToast({
        title: '请先选择图片',
        icon: 'none'
      });
      return;
    }

    wx.showLoading({
      title: '识别中...'
    });

    // 模拟识别过程
    setTimeout(() => {
      wx.hideLoading();

      // 模拟识别结果
      const result = {
        image: this.data.selectedImage,
        name: '玫瑰',
        confidence: 95,
        desc: '玫瑰是蔷薇科蔷薇属植物，是世界著名的观赏花卉之一。玫瑰象征着爱情、美丽和浪漫，常被用于情人节、婚礼等场合。'
      };

      this.setData({
        identifyResult: result
      });
    }, 2000);
  },

  viewDetail: function () {
    wx.showToast({
      title: '查看详情功能开发中',
      icon: 'none'
    });
  },

  saveToDiary: function () {
    wx.showToast({
      title: '保存到日记功能开发中',
      icon: 'none'
    });
  }
});
