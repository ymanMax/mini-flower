Page({
  data: {
    searchKey: '',
    activeTab: 0,
    showDetail: false,
    selectedItem: {},
    diseases: [
      {
        id: 1,
        name: '白粉病',
        symptom: '叶片出现白色粉末状物质，影响光合作用',
        prevention: '1. 保持通风透光；2. 定期喷洒杀菌剂；3. 及时清除病叶'
      },
      {
        id: 2,
        name: '黑斑病',
        symptom: '叶片出现黑色斑点，逐渐扩大并导致落叶',
        prevention: '1. 避免叶面过湿；2. 喷洒铜制剂；3. 冬季彻底清园'
      },
      {
        id: 3,
        name: '根腐病',
        symptom: '根部腐烂，植株萎蔫，严重时死亡',
        prevention: '1. 改善土壤排水；2. 避免过度浇水；3. 使用抗真菌药剂'
      }
    ],
    pests: [
      {
        id: 1,
        name: '蚜虫',
        symptom: '叶片卷曲、变形，分泌蜜露导致煤污病',
        prevention: '1. 生物防治（瓢虫）；2. 喷洒杀虫剂；3. 定期检查'
      },
      {
        id: 2,
        name: '红蜘蛛',
        symptom: '叶片出现黄色斑点，严重时叶片脱落',
        prevention: '1. 增加空气湿度；2. 喷洒杀螨剂；3. 清除落叶'
      },
      {
        id: 3,
        name: '介壳虫',
        symptom: '植株表面出现白色蜡质蚧壳，吸食汁液',
        prevention: '1. 手动清除；2. 喷洒杀虫剂；3. 保持通风'
      }
    ]
  },

  onClickLeft() {
    wx.navigateBack()
  },

  onSearch(value) {
    console.log('搜索关键词:', value)
  },

  onTabChange(event) {
    this.setData({
      activeTab: event.detail
    })
  },

  viewDetail(e) {
    const item = e.currentTarget.dataset.item
    this.setData({
      selectedItem: item,
      showDetail: true
    })
  },

  onCloseDetail() {
    this.setData({
      showDetail: false
    })
  }
})
