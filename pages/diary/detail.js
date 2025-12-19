// pages/diary/detail.js
Page({
  data: {
    diary: {
      id: 1,
      title: '我的玫瑰终于开花了',
      date: '2025-12-18',
      desc: '经过一个月的精心养护，我的玫瑰终于开花了。花朵鲜艳夺目，散发出淡淡的香气，真是让人开心！\n\n这段时间我每天都给它浇水、施肥，还注意保持充足的阳光。功夫不负有心人，终于等到了花开的时刻。\n\n看着这朵美丽的玫瑰花，我感到非常满足和幸福。养花不仅能美化环境，还能培养人的耐心和爱心。',
      images: ['/img/rose-bloom.jpg', '/img/rose-care.jpg'],
      tags: ['玫瑰', '开花', '养护']
    }
  },

  onLoad: function (options) {
    const id = options.id;
    console.log('加载日记详情:', id);
  },

  onBack: function () {
    wx.navigateBack();
  },

  previewImage: function (event) {
    const index = event.currentTarget.dataset.index;
    wx.previewImage({
      urls: this.data.diary.images,
      current: this.data.diary.images[index]
    });
  },

  editDiary: function () {
    wx.showToast({
      title: '编辑功能开发中',
      icon: 'none'
    });
  },

  deleteDiary: function () {
    wx.showModal({
      title: '确认删除',
      content: '您确定要删除这篇日记吗？',
      success: (res) => {
        if (res.confirm) {
          wx.showLoading({
            title: '删除中...'
          });
          // 模拟删除
          setTimeout(() => {
            wx.hideLoading();
            wx.showToast({
              title: '删除成功',
              icon: 'success'
            });
            setTimeout(() => {
              wx.navigateBack();
            }, 1500);
          }, 1000);
        }
      }
    });
  }
});
