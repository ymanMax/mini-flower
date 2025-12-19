// pages/knowledge/base.js
Page({
  data: {
    searchValue: '',
    activeTab: 0,
    hotFlowers: [
      {
        id: 1,
        name: '玫瑰',
        desc: '爱情的象征，养护简单，适合室内摆放',
        image: '/img/rose.jpg'
      },
      {
        id: 2,
        name: '多肉植物',
        desc: '耐旱易养，形态可爱，适合懒人养护',
        image: '/img/succulent.jpg'
      },
      {
        id: 3,
        name: '绿萝',
        desc: '净化空气，水培土培均可，生命力顽强',
        image: '/img/pothos.jpg'
      },
      {
        id: 4,
        name: '君子兰',
        desc: '花中君子，四季常青，观赏价值高',
        image: '/img/clivia.jpg'
      }
    ],
    careCategories: [
      {
        id: 1,
        name: '浇水指南'
      },
      {
        id: 2,
        name: '施肥技巧'
      },
      {
        id: 3,
        name: '光照要求'
      },
      {
        id: 4,
        name: '病虫害防治'
      },
      {
        id: 5,
        name: '繁殖方法'
      }
    ],
    faqs: [
      {
        id: 1,
        question: '为什么我的花卉叶子变黄了？',
        answer: '叶子变黄可能是由于浇水过多、光照不足、营养不良或病虫害等原因引起的。需要根据具体情况进行分析和处理。'
      },
      {
        id: 2,
        question: '如何判断花卉是否需要浇水？',
        answer: '可以通过观察土壤湿度、重量或使用 moisture meter 来判断。一般来说，土壤表面干燥时即可浇水，但要避免积水。'
      },
      {
        id: 3,
        question: '花卉施肥有什么讲究？',
        answer: '施肥应根据花卉种类、生长阶段和季节进行。一般来说，生长期应多施氮肥，开花期应多施磷肥，冬季应减少施肥。'
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

  goToDetail: function (event) {
    const id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: `/pages/knowledge/detail?id=${id}`
    });
  },

  goToCareDetail: function (event) {
    const id = event.currentTarget.dataset.id;
    wx.showToast({
      title: `养护分类 ${id} 开发中`,
      icon: 'none'
    });
  },

  goToFaqDetail: function (event) {
    const id = event.currentTarget.dataset.id;
    wx.showToast({
      title: `常见问题 ${id} 开发中`,
      icon: 'none'
    });
  }
});
