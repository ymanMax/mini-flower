// Mock数据文件 - 模拟后端接口返回的数据
// 个性化推荐与智能匹配系统数据

// 用户画像和偏好数据
const userProfileData = {
  code: 666,
  userProfile: {
    userId: 1,
    nickname: '微信用户',
    avatar: '/img/my.png',
    preferences: {
      favoriteColors: ['红色', '粉色', '白色'],
      favoriteTypes: ['玫瑰', '百合', '康乃馨'],
      preferredPriceRange: [50, 200],
      careDifficulty: '中等', // 简单、中等、困难
      lightRequirement: '阳光充足', // 阳光充足、半阴、阴生
      spaceSize: '中等' // 小（桌面）、中等（阳台）、大（庭院）
    },
    browsingHistory: [1, 3, 5, 2], // 浏览过的花卉ID
    purchaseHistory: [1, 3], // 购买过的花卉ID
    favoriteFlowers: [1, 2, 5] // 收藏的花卉ID
  }
};

// 花卉详细属性数据（包含推荐系统所需的所有属性）
const flowerAttributesData = {
  code: 666,
  flowers: [
    {
      flowerId: 1,
      goodName: '红玫瑰花束',
      price: 128.00,
      imgUrl: '/img/bg.png',
      attributes: {
        color: '红色',
        type: '玫瑰',
        season: ['春季', '夏季', '秋季'],
        careDifficulty: '中等',
        lightRequirement: '阳光充足',
        waterRequirement: '适量浇水',
        spaceNeeded: '中等',
        suitableLocations: ['阳台', '客厅', '卧室'],
        flowerLanguage: '热情与爱情',
        popularity: 95,
        matchingScore: 88
      }
    },
    {
      flowerId: 2,
      goodName: '百合花束',
      price: 98.00,
      imgUrl: '/img/bg.png',
      attributes: {
        color: '白色',
        type: '百合',
        season: ['春季', '夏季'],
        careDifficulty: '简单',
        lightRequirement: '半阴',
        waterRequirement: '保持湿润',
        spaceNeeded: '中等',
        suitableLocations: ['客厅', '卧室', '书房'],
        flowerLanguage: '百年好合',
        popularity: 90,
        matchingScore: 92
      }
    },
    {
      flowerId: 3,
      goodName: '康乃馨花束',
      price: 68.00,
      imgUrl: '/img/bg.png',
      attributes: {
        color: '粉色',
        type: '康乃馨',
        season: ['春季', '秋季'],
        careDifficulty: '简单',
        lightRequirement: '阳光充足',
        waterRequirement: '适量浇水',
        spaceNeeded: '小',
        suitableLocations: ['桌面', '窗台', '阳台'],
        flowerLanguage: '感恩之情',
        popularity: 85,
        matchingScore: 85
      }
    },
    {
      flowerId: 4,
      goodName: '向日葵花束',
      price: 88.00,
      imgUrl: '/img/bg.png',
      attributes: {
        color: '黄色',
        type: '向日葵',
        season: ['夏季', '秋季'],
        careDifficulty: '中等',
        lightRequirement: '阳光充足',
        waterRequirement: '充足浇水',
        spaceNeeded: '大',
        suitableLocations: ['阳台', '庭院', '客厅'],
        flowerLanguage: '温暖与希望',
        popularity: 88,
        matchingScore: 78
      }
    },
    {
      flowerId: 5,
      goodName: '满天星花束',
      price: 58.00,
      imgUrl: '/img/bg.png',
      attributes: {
        color: '白色',
        type: '满天星',
        season: ['春季', '夏季', '秋季', '冬季'],
        careDifficulty: '简单',
        lightRequirement: '半阴',
        waterRequirement: '适量浇水',
        spaceNeeded: '小',
        suitableLocations: ['桌面', '窗台', '卧室'],
        flowerLanguage: '浪漫点缀',
        popularity: 82,
        matchingScore: 90
      }
    },
    {
      flowerId: 6,
      goodName: '郁金香花束',
      price: 108.00,
      imgUrl: '/img/bg.png',
      attributes: {
        color: '紫色',
        type: '郁金香',
        season: ['春季'],
        careDifficulty: '中等',
        lightRequirement: '阳光充足',
        waterRequirement: '保持湿润',
        spaceNeeded: '中等',
        suitableLocations: ['阳台', '客厅', '庭院'],
        flowerLanguage: '高贵气质',
        popularity: 89,
        matchingScore: 82
      }
    },
    {
      flowerId: 7,
      goodName: '紫罗兰花束',
      price: 78.00,
      imgUrl: '/img/bg.png',
      attributes: {
        color: '紫色',
        type: '紫罗兰',
        season: ['春季', '秋季'],
        careDifficulty: '中等',
        lightRequirement: '半阴',
        waterRequirement: '适量浇水',
        spaceNeeded: '小',
        suitableLocations: ['桌面', '窗台', '卧室'],
        flowerLanguage: '永恒的爱',
        popularity: 80,
        matchingScore: 75
      }
    },
    {
      flowerId: 8,
      goodName: '雏菊花束',
      price: 48.00,
      imgUrl: '/img/bg.png',
      attributes: {
        color: '白色',
        type: '雏菊',
        season: ['春季', '夏季'],
        careDifficulty: '简单',
        lightRequirement: '阳光充足',
        waterRequirement: '适量浇水',
        spaceNeeded: '小',
        suitableLocations: ['桌面', '窗台', '阳台'],
        flowerLanguage: '纯真与快乐',
        popularity: 83,
        matchingScore: 80
      }
    },
    {
      flowerId: 9,
      goodName: '兰花盆栽',
      price: 158.00,
      imgUrl: '/img/bg.png',
      attributes: {
        color: '绿色',
        type: '兰花',
        season: ['春季', '夏季', '秋季', '冬季'],
        careDifficulty: '困难',
        lightRequirement: '半阴',
        waterRequirement: '保持湿润',
        spaceNeeded: '中等',
        suitableLocations: ['客厅', '书房', '卧室'],
        flowerLanguage: '高雅气质',
        popularity: 78,
        matchingScore: 70
      }
    },
    {
      flowerId: 10,
      goodName: '多肉植物组合',
      price: 38.00,
      imgUrl: '/img/bg.png',
      attributes: {
        color: '多彩',
        type: '多肉',
        season: ['春季', '夏季', '秋季', '冬季'],
        careDifficulty: '简单',
        lightRequirement: '阳光充足',
        waterRequirement: '少量浇水',
        spaceNeeded: '小',
        suitableLocations: ['桌面', '窗台', '阳台'],
        flowerLanguage: '可爱易养',
        popularity: 92,
        matchingScore: 85
      }
    }
  ]
};

// 个性化推荐数据
const personalizedRecommendationsData = {
  code: 666,
  recommendations: {
    basedOnPreferences: [2, 1, 5, 3], // 基于用户偏好的推荐
    basedOnBrowsing: [5, 2, 6, 4], // 基于浏览历史的推荐
    basedOnPurchase: [3, 1, 2, 5], // 基于购买历史的推荐
    popular: [1, 2, 10, 4], // 热门推荐
    newArrivals: [6, 7, 9, 8] // 新品推荐
  }
};

// 花卉搭配建议数据
const flowerMatchingSuggestionsData = {
  code: 666,
  suggestions: [
    {
      combinationId: 1,
      title: '浪漫爱情组合',
      flowers: [1, 5],
      price: 186.00,
      description: '红玫瑰搭配满天星，象征热情浪漫的爱情',
      scenario: '情人节、求婚、纪念日',
      popularity: 95
    },
    {
      combinationId: 2,
      title: '温馨感恩组合',
      flowers: [3, 2],
      price: 166.00,
      description: '康乃馨搭配百合，表达温馨的感恩之情',
      scenario: '母亲节、教师节、感谢恩师',
      popularity: 90
    },
    {
      combinationId: 3,
      title: '阳光希望组合',
      flowers: [4, 8],
      price: 136.00,
      description: '向日葵搭配雏菊，带来阳光与希望',
      scenario: '鼓励、祝福、新居入伙',
      popularity: 88
    },
    {
      combinationId: 4,
      title: '优雅高贵组合',
      flowers: [6, 7],
      price: 186.00,
      description: '郁金香搭配紫罗兰，展现优雅高贵气质',
      scenario: '商务馈赠、高端场合、庆典',
      popularity: 85
    },
    {
      combinationId: 5,
      title: '多肉植物组合',
      flowers: [10],
      price: 38.00,
      description: '多种可爱多肉植物组合，易于养护',
      scenario: '桌面装饰、办公室绿化、小礼物',
      popularity: 92
    }
  ]
};

// 季节性推荐和养护提醒数据
const seasonalRecommendationsData = {
  code: 666,
  currentSeason: '春季',
  recommendations: [2, 6, 3, 1],
  careTips: [
    {
      tipId: 1,
      title: '春季花卉养护要点',
      content: '春季是花卉生长的旺季，需要注意以下几点：1. 增加浇水频率，但避免积水；2. 定期施肥，提供充足养分；3. 注意病虫害防治，及时发现并处理；4. 根据花卉种类调整光照时间。',
      applicableFlowers: [1, 2, 3, 6]
    },
    {
      tipId: 2,
      title: '玫瑰春季养护',
      content: '春季玫瑰生长迅速，需要及时修剪枯枝败叶，保持植株通风透光。每两周施一次复合肥，促进花芽分化。注意防治白粉病和蚜虫。',
      applicableFlowers: [1]
    },
    {
      tipId: 3,
      title: '百合春季养护',
      content: '春季百合开始萌芽，需要充足的阳光和水分。保持土壤湿润但不积水，每半个月施一次磷钾肥。注意防治叶枯病和根腐病。',
      applicableFlowers: [2]
    }
  ]
};

// 空间大小推荐数据
const spaceBasedRecommendationsData = {
  code: 666,
  recommendations: {
    small: [3, 5, 7, 8, 10], // 小空间（桌面）推荐
    medium: [1, 2, 6, 9], // 中等空间（阳台）推荐
    large: [4] // 大空间（庭院）推荐
  }
};

// 轮播图数据
const swiperData = {
  code: 666,
  banners: [
    {
      bannerId: 1,
      imgUrl: '/img/bg.png',
      title: '春日花语'
    },
    {
      bannerId: 2,
      imgUrl: '/img/background.png',
      title: '浪漫花束'
    },
    {
      bannerId: 3,
      imgUrl: '/img/bg.png',
      title: '节日特惠'
    }
  ]
};

// 商品列表数据
const goodsListData = {
  code: 666,
  flowers: [
    {
      flowerId: 1,
      goodName: '红玫瑰花束',
      price: 128.00,
      originPrice: 168.00,
      imgUrl: '/img/bg.png',
      flowerLanguage: '经典红玫瑰，象征热情与爱情',
      saleNum: 156,
      stock: 50
    },
    {
      flowerId: 2,
      goodName: '百合花束',
      price: 98.00,
      originPrice: 128.00,
      imgUrl: '/img/bg.png',
      flowerLanguage: '纯洁百合，寓意百年好合',
      saleNum: 89,
      stock: 30
    },
    {
      flowerId: 3,
      goodName: '康乃馨花束',
      price: 68.00,
      originPrice: 88.00,
      imgUrl: '/img/bg.png',
      flowerLanguage: '温馨康乃馨，表达感恩之情',
      saleNum: 234,
      stock: 80
    },
    {
      flowerId: 4,
      goodName: '向日葵花束',
      price: 88.00,
      originPrice: 108.00,
      imgUrl: '/img/bg.png',
      flowerLanguage: '阳光向日葵，带来温暖与希望',
      saleNum: 67,
      stock: 25
    },
    {
      flowerId: 5,
      goodName: '满天星花束',
      price: 58.00,
      originPrice: 78.00,
      imgUrl: '/img/bg.png',
      flowerLanguage: '浪漫满天星，点缀美好生活',
      saleNum: 178,
      stock: 60
    },
    {
      flowerId: 6,
      goodName: '郁金香花束',
      price: 108.00,
      originPrice: 138.00,
      imgUrl: '/img/bg.png',
      flowerLanguage: '优雅郁金香，展现高贵气质',
      saleNum: 92,
      stock: 35
    },
    {
      flowerId: 7,
      goodName: '紫罗兰花束',
      price: 78.00,
      originPrice: 98.00,
      imgUrl: '/img/bg.png',
      flowerLanguage: '神秘紫罗兰，象征永恒的爱',
      saleNum: 145,
      stock: 45
    },
    {
      flowerId: 8,
      goodName: '雏菊花束',
      price: 48.00,
      originPrice: 68.00,
      imgUrl: '/img/bg.png',
      flowerLanguage: '清新雏菊，带来纯真与快乐',
      saleNum: 201,
      stock: 70
    },
    {
      flowerId: 9,
      goodName: '兰花盆栽',
      price: 158.00,
      originPrice: 198.00,
      imgUrl: '/img/bg.png',
      flowerLanguage: '高雅兰花，适合室内装饰',
      saleNum: 56,
      stock: 20
    },
    {
      flowerId: 10,
      goodName: '多肉植物组合',
      price: 38.00,
      originPrice: 58.00,
      imgUrl: '/img/bg.png',
      flowerLanguage: '可爱多肉，易于养护',
      saleNum: 312,
      stock: 100
    }
  ]
};

// 商品详情数据
const goodsDetailData = {
  code: 666,
  flower: {
    flowerId: 1,
    ad: '红玫瑰花束',
    price: 128.00,
    originPrice: 168.00,
    imgUrls: ['/img/bg.png', '/img/bg.png', '/img/bg.png'],
    flowerLanguage: '经典红玫瑰，象征热情与爱情。精选优质红玫瑰，搭配精美包装，适合各种浪漫场合。',
    saleNum: 156,
    stock: 50
  }
};

// 购物车商品列表数据
const cartGoodsListData = {
  code: 666,
  carts: [
    {
      cartId: 1,
      flowerId: 1,
      goodName: '红玫瑰花束',
      price: 128.00,
      imgUrl: '/img/bg.png',
      buyNum: 2,
      stock: 50,
      material: '精选红玫瑰12支，搭配精美包装'
    },
    {
      cartId: 2,
      flowerId: 3,
      goodName: '康乃馨花束',
      price: 68.00,
      imgUrl: '/img/bg.png',
      buyNum: 1,
      stock: 80,
      material: '温馨康乃馨8支，表达感恩之情'
    },
    {
      cartId: 3,
      flowerId: 5,
      goodName: '满天星花束',
      price: 58.00,
      imgUrl: '/img/bg.png',
      buyNum: 3,
      stock: 60,
      material: '浪漫满天星，点缀美好生活'
    }
  ]
};

// 预订单数据
const preOrderData = {
  code: 666,
  result: {
    preOrderId: 'PRE2024001',
    totalPrice: 542.00,
    carts: [
      {
        cartId: 1,
        flowerId: 1,
        goodName: '红玫瑰花束',
        price: 128.00,
        imgUrl: '/img/bg.png',
        buyNum: 2,
        subtotal: 256.00
      },
      {
        cartId: 2,
        flowerId: 3,
        goodName: '康乃馨花束',
        price: 68.00,
        imgUrl: '/img/bg.png',
        buyNum: 1,
        subtotal: 68.00
      },
      {
        cartId: 3,
        flowerId: 5,
        goodName: '满天星花束',
        price: 58.00,
        imgUrl: '/img/bg.png',
        buyNum: 3,
        subtotal: 174.00
      }
    ]
  }
};

// 预订单详情数据
const preOrderDetailData = {
  code: 666,
  result: {
    preOrderId: 'PRE2024001',
    totalPrice: 542.00,
    carts: [
      {
        cartId: 1,
        flowerId: 1,
        goodName: '红玫瑰花束',
        price: 128.00,
        imgUrl: '/img/bg.png',
        buyNum: 2,
        subtotal: 256.00
      },
      {
        cartId: 2,
        flowerId: 3,
        goodName: '康乃馨花束',
        price: 68.00,
        imgUrl: '/img/bg.png',
        buyNum: 1,
        subtotal: 68.00
      },
      {
        cartId: 3,
        flowerId: 5,
        goodName: '满天星花束',
        price: 58.00,
        imgUrl: '/img/bg.png',
        buyNum: 3,
        subtotal: 174.00
      }
    ]
  }
};

// 用户登录数据
const userLoginData = {
  code: 666,
  result: {
    token: 'mock_token_1234567890',
    userInfo: {
      nickname: '微信用户',
      avatar: '/img/my.png'
    }
  }
};

// 订单支付数据
const orderPayData = {
  code: 666,
  result: {
    timeStamp: '1700000000',
    nonceStr: 'mock_nonce_str',
    package: 'prepay_id=mock_prepay_id',
    signType: 'MD5',
    paySign: 'mock_pay_sign',
    total_fee: 54200
  }
};

// 导出所有mock数据
module.exports = {
  swiperData,
  goodsListData,
  goodsDetailData,
  cartGoodsListData,
  preOrderData,
  preOrderDetailData,
  userLoginData,
  orderPayData,
  // 个性化推荐系统数据
  userProfileData,
  flowerAttributesData,
  personalizedRecommendationsData,
  flowerMatchingSuggestionsData,
  seasonalRecommendationsData,
  spaceBasedRecommendationsData
};