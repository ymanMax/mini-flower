// pages/community/index.js
Page({
  data: {
    searchValue: '',
    activeTab: 0,
    latestQuestions: [
      {
        id: 1,
        title: '玫瑰叶子变黄怎么办？',
        desc: '我的玫瑰最近叶子开始变黄，尤其是底部的叶子，不知道是什么原因引起的，应该怎么处理呢？',
        user: {
          name: '花友小王',
          avatar: '/img/user1.jpg'
        },
        postTime: '2小时前',
        views: 128,
        comments: 23,
        likes: 45,
        isHot: false
      },
      {
        id: 2,
        title: '多肉植物怎么养才能爆盆？',
        desc: '我养了几盆多肉植物，但是一直没有爆盆的迹象，想请教一下各位花友，有什么好的方法和技巧吗？',
        user: {
          name: '多肉爱好者',
          avatar: '/img/user2.jpg'
        },
        postTime: '5小时前',
        views: 256,
        comments: 42,
        likes: 89,
        isHot: true
      },
      {
        id: 3,
        title: '绿萝扦插成活率低怎么办？',
        desc: '我尝试了几次扦插绿萝，但是成活率都不高，大部分插穗都烂掉了。请问扦插绿萝有什么关键要点吗？',
        user: {
          name: '新手花农',
          avatar: '/img/user3.jpg'
        },
        postTime: '1天前',
        views: 189,
        comments: 31,
        likes: 56,
        isHot: false
      }
    ],
    hotQuestions: [
      {
        id: 2,
        title: '多肉植物怎么养才能爆盆？',
        desc: '我养了几盆多肉植物，但是一直没有爆盆的迹象，想请教一下各位花友，有什么好的方法和技巧吗？',
        user: {
          name: '多肉爱好者',
          avatar: '/img/user2.jpg'
        },
        postTime: '5小时前',
        views: 256,
        comments: 42,
        likes: 89
      },
      {
        id: 4,
        title: '如何让君子兰开花？',
        desc: '我家的君子兰养了三年了，一直没有开花，请问有什么方法可以促进君子兰开花吗？',
        user: {
          name: '君子兰迷',
          avatar: '/img/user4.jpg'
        },
        postTime: '3天前',
        views: 389,
        comments: 56,
        likes: 123
      },
      {
        id: 5,
        title: '栀子花黄叶掉苞怎么办？',
        desc: '我的栀子花刚买不久，就出现了黄叶掉苞的现象，请问这是什么原因引起的，应该怎么处理？',
        user: {
          name: '花香满屋',
          avatar: '/img/user5.jpg'
        },
        postTime: '1周前',
        views: 523,
        comments: 78,
        likes: 156
      }
    ],
    myQuestions: [
      {
        id: 6,
        title: '兰花怎么浇水才合适？',
        desc: '我刚养了一盆兰花，听说兰花很娇气，尤其是浇水很有讲究，请问兰花应该怎么浇水才合适呢？',
        comments: 12,
        status: '已解答'
      }
    ]
  },

  onSearch: function (value) {
    console.log('搜索:', value);
    wx.showToast({
      title: '搜索功能开发中',
      icon: 'none'
    });
  },

  onTabChange: function (event) {
    this.setData({
      activeTab: event.detail.index
    });
  },

  goToAsk: function () {
    wx.navigateTo({
      url: '/pages/community/ask'
    });
  },

  goToDetail: function (event) {
    const id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/community/detail?id=${id}`
    });
  }
});
