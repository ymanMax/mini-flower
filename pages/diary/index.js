// pages/diary/index.js
Page({
  data: {
    diaries: [
      {
        id: 1,
        title: '我的玫瑰终于开花了',
        date: '2025-12-18',
        desc: '经过一个月的精心养护，我的玫瑰终于开花了。花朵鲜艳夺目，散发出淡淡的香气，真是让人开心！',
        images: ['/img/rose-bloom.jpg', '/img/rose-care.jpg'],
        tags: ['玫瑰', '开花', '养护']
      },
      {
        id: 2,
        title: '新入手的多肉植物',
        date: '2025-12-15',
        desc: '今天在花市买了几盆多肉植物，它们看起来都很可爱。我已经给它们上盆了，希望它们能健康成长。',
        images: ['/img/succulent-new.jpg'],
        tags: ['多肉', '新入手', '上盆']
      },
      {
        id: 3,
        title: '绿萝修剪记录',
        date: '2025-12-10',
        desc: '绿萝长得太茂盛了，今天给它进行了修剪。剪下来的枝条我也进行了扦插，希望能繁殖出更多的绿萝。',
        images: ['/img/pothos-trim.jpg'],
        tags: ['绿萝', '修剪', '扦插']
      }
    ]
  },

  onLoad: function (options) {

  },

  onBack: function () {
    wx.navigateBack();
  },

  addDiary: function () {
    wx.navigateTo({
      url: '/pages/diary/add'
    });
  },

  goToDetail: function (event) {
    const id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/diary/detail?id=${id}`
    });
  }
});
