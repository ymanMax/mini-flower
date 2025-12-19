Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 商品列表
    goodsList: [],
    // 筛选条件
    filters: {
      category: 'all', // 商品分类
      sort: 'default', // 排序方式
      priceRange: [0, 500], // 价格范围
      isHot: false, // 是否热门
      isNew: false // 是否新品
    },
    // 分类选项
    categories: [
      { id: 'all', name: '全部' },
      { id: 'rose', name: '玫瑰' },
      { id: 'lily', name: '百合' },
      { id: 'tulip', name: '郁金香' },
      { id: 'carnation', name: '康乃馨' },
      { id: 'orchid', name: '兰花' }
    ],
    // 排序选项
    sortOptions: [
      { id: 'default', name: '默认排序' },
      { id: 'price-asc', name: '价格从低到高' },
      { id: 'price-desc', name: '价格从高到低' },
      { id: 'sales-desc', name: '销量从高到低' },
      { id: 'newest', name: '最新上架' }
    ],
    // 分页信息
    pagination: {
      pageNum: 1,
      pageSize: 10,
      total: 0,
      hasMore: true
    },
    // 加载状态
    loading: false,
    // 筛选面板显示状态
    showFilterPanel: false,
    showSortPanel: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 获取分类参数
    if (options.category) {
      this.setData({
        'filters.category': options.category
      });
    }
    // 加载商品列表
    this.loadGoodsList();
  },

  /**
   * 加载商品列表
   */
  loadGoodsList: function (isRefresh = false) {
    if (this.data.loading) return;

    this.setData({ loading: true });

    // 模拟API请求
    setTimeout(() => {
      const mockGoods = this.generateMockGoods();
      let goodsList = [];

      if (isRefresh) {
        goodsList = mockGoods;
      } else {
        goodsList = this.data.goodsList.concat(mockGoods);
      }

      this.setData({
        goodsList: goodsList,
        'pagination.total': 50,
        'pagination.hasMore': goodsList.length < 50,
        loading: false
      });
    }, 800);
  },

  /**
   * 生成模拟商品数据
   */
  generateMockGoods: function () {
    const categories = ['rose', 'lily', 'tulip', 'carnation', 'orchid'];
    const goods = [];

    for (let i = 0; i < this.data.pagination.pageSize; i++) {
      const index = (this.data.pagination.pageNum - 1) * this.data.pagination.pageSize + i;
      const category = categories[Math.floor(Math.random() * categories.length)];

      goods.push({
        flowerId: index + 1,
        goodName: this.getGoodName(category, index),
        price: parseFloat((Math.random() * 300 + 50).toFixed(2)),
        originPrice: parseFloat((Math.random() * 200 + 100).toFixed(2)),
        imgUrl: `/img/goods/${category}${Math.floor(Math.random() * 3) + 1}.png`,
        flowerLanguage: this.getFlowerLanguage(category),
        saleNum: Math.floor(Math.random() * 500) + 10,
        stock: Math.floor(Math.random() * 100) + 20,
        category: category,
        isHot: Math.random() > 0.7,
        isNew: Math.random() > 0.8
      });
    }

    return goods;
  },

  /**
   * 获取商品名称
   */
  getGoodName: function (category, index) {
    const names = {
      rose: ['热情红玫瑰', '浪漫粉玫瑰', '纯洁白玫瑰', '香槟金玫瑰'],
      lily: ['香水百合', '东方百合', '亚洲百合', '麝香百合'],
      tulip: ['红色郁金香', '黄色郁金香', '紫色郁金香', '白色郁金香'],
      carnation: ['红色康乃馨', '粉色康乃馨', '白色康乃馨', '紫色康乃馨'],
      orchid: ['蝴蝶兰', '文心兰', '石斛兰', '卡特兰']
    };
    return names[category][index % names[category].length] + '花束';
  },

  /**
   * 获取花语
   */
  getFlowerLanguage: function (category) {
    const languages = {
      rose: '爱情、热情、浪漫',
      lily: '纯洁、庄严、心心相印',
      tulip: '爱的表白、荣誉、祝福永恒',
      carnation: '热情、魅力、使人柔弱的爱',
      orchid: '高雅、博学、美丽'
    };
    return languages[category];
  },

  /**
   * 切换分类
   */
  switchCategory: function (e) {
    const category = e.currentTarget.dataset.category;
    this.setData({
      'filters.category': category,
      'pagination.pageNum': 1,
      'pagination.hasMore': true,
      goodsList: []
    });
    this.loadGoodsList();
  },

  /**
   * 切换排序
   */
  switchSort: function (e) {
    const sort = e.currentTarget.dataset.sort;
    this.setData({
      'filters.sort': sort,
      'pagination.pageNum': 1,
      'pagination.hasMore': true,
      goodsList: []
    });
    this.loadGoodsList();
  },

  /**
   * 打开筛选面板
   */
  openFilterPanel: function () {
    this.setData({ showFilterPanel: true });
  },

  /**
   * 关闭筛选面板
   */
  closeFilterPanel: function () {
    this.setData({ showFilterPanel: false });
  },

  /**
   * 打开排序面板
   */
  openSortPanel: function () {
    this.setData({ showSortPanel: true });
  },

  /**
   * 关闭排序面板
   */
  closeSortPanel: function () {
    this.setData({ showSortPanel: false });
  },

  /**
   * 切换热门筛选
   */
  toggleHotFilter: function () {
    this.setData({
      'filters.isHot': !this.data.filters.isHot
    });
  },

  /**
   * 切换新品筛选
   */
  toggleNewFilter: function () {
    this.setData({
      'filters.isNew': !this.data.filters.isNew
    });
  },

  /**
   * 应用筛选
   */
  applyFilters: function () {
    this.setData({
      'pagination.pageNum': 1,
      'pagination.hasMore': true,
      goodsList: [],
      showFilterPanel: false
    });
    this.loadGoodsList();
  },

  /**
   * 重置筛选
   */
  resetFilters: function () {
    this.setData({
      filters: {
        category: 'all',
        sort: 'default',
        priceRange: [0, 500],
        isHot: false,
        isNew: false
      }
    });
  },

  /**
   * 下拉刷新
   */
  onPullDownRefresh: function () {
    this.setData({
      'pagination.pageNum': 1,
      'pagination.hasMore': true,
      goodsList: []
    });
    this.loadGoodsList(true);
    wx.stopPullDownRefresh();
  },

  /**
   * 上拉加载更多
   */
  onReachBottom: function () {
    if (this.data.pagination.hasMore && !this.data.loading) {
      this.setData({
        'pagination.pageNum': this.data.pagination.pageNum + 1
      });
      this.loadGoodsList();
    }
  },

  /**
   * 跳转到商品详情
   */
  goToDetail: function (e) {
    const flowerId = e.currentTarget.dataset.flowerid;
    wx.navigateTo({
      url: `/pages/detail/detail?flowerId=${flowerId}`
    });
  },

  /**
   * 添加到购物车
   */
  addToCart: function (e) {
    const flowerId = e.currentTarget.dataset.flowerid;
    const goods = this.data.goodsList.find(item => item.flowerId === flowerId);

    // 模拟添加到购物车
    wx.showToast({
      title: '已添加到购物车',
      icon: 'success'
    });
  },

  /**
   * 收藏商品
   */
  collectGoods: function (e) {
    const flowerId = e.currentTarget.dataset.flowerid;
    wx.showToast({
      title: '已收藏',
      icon: 'success'
    });
  }
});