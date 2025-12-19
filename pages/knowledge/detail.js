// pages/knowledge/detail.js
Page({
  data: {
    activeTab: 0,
    collapseValues: ['watering', 'light', 'fertilizer', 'soil'],
    flower: {
      id: 1,
      name: '玫瑰',
      desc: '爱情的象征，美丽而优雅',
      image: '/img/rose.jpg',
      family: '蔷薇科',
      origin: '中国',
      bloomingSeason: '夏季',
      temperature: '15-25℃',
      care: {
        watering: '玫瑰喜欢湿润的环境，但不耐积水。夏季高温时每天浇水一次，冬季减少浇水频率，保持土壤微湿即可。',
        light: '玫瑰需要充足的阳光，每天至少6小时的光照。应放置在阳光充足的阳台或庭院。',
        fertilizer: '生长期每两周施一次稀薄的液肥，花期前增施磷钾肥，以促进花芽分化和开花。',
        soil: '玫瑰适合生长在肥沃、排水良好的微酸性土壤中。可选用腐叶土、园土和河沙混合配制。'
      },
      faqs: [
        {
          id: 1,
          question: '玫瑰为什么不开花？',
          answer: '玫瑰不开花可能是由于光照不足、施肥不当、修剪不及时或病虫害等原因引起的。需要根据具体情况进行调整。'
        },
        {
          id: 2,
          question: '如何延长玫瑰的花期？',
          answer: '可以通过以下方法延长玫瑰的花期：1. 及时摘除凋谢的花朵；2. 保持充足的光照和适宜的温度；3. 定期施肥；4. 防治病虫害。'
        },
        {
          id: 3,
          question: '玫瑰容易感染哪些病虫害？',
          answer: '玫瑰常见的病虫害有白粉病、黑斑病、蚜虫、红蜘蛛等。应注意定期检查，及时防治。'
        }
      ]
    }
  },

  onLoad: function (options) {
    const id = options.id;
    // 这里可以根据id从服务器获取数据，目前使用mock数据
    console.log('加载花卉详情:', id);
  },

  onTabChange: function (event) {
    this.setData({
      activeTab: event.detail.index
    });
  },

  onCollapseChange: function (event) {
    this.setData({
      collapseValues: event.detail
    });
  }
});
