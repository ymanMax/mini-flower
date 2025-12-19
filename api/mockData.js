// Mock数据文件 - 模拟后端接口返回的数据

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

// 花卉知识库数据
const knowledgeData = {
  code: 666,
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
};

// 花卉详情数据
const flowerDetailData = {
  code: 666,
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
};

// 社区问答数据
const communityData = {
  code: 666,
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
};

// 问题详情数据
const questionDetailData = {
  code: 666,
  question: {
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
    images: ['/img/rose-yellow-leaf.jpg'],
    answers: [
      {
        id: 1,
        user: {
          name: '老花农',
          avatar: '/img/user6.jpg'
        },
        postTime: '1小时前',
        content: '玫瑰叶子变黄可能有几种原因：1. 浇水过多，导致根部缺氧腐烂；2. 施肥不当，缺少铁元素；3. 光照不足；4. 病虫害。建议先检查土壤湿度，适当减少浇水，同时可以施一些含铁的肥料。如果情况严重，可以考虑换土。',
        likes: 28,
        isLiked: false,
        isBest: true
      },
      {
        id: 2,
        user: {
          name: '玫瑰爱好者',
          avatar: '/img/user7.jpg'
        },
        postTime: '30分钟前',
        content: '我之前也遇到过类似的问题，后来发现是浇水太多了。玫瑰其实不需要太多水，尤其是在室内养殖的话，一周浇一次水就差不多了。另外，要注意通风，避免闷热的环境。',
        likes: 15,
        isLiked: false,
        isBest: false
      }
    ]
  }
};

// 花卉日记数据
const diaryData = {
  code: 666,
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
};

// 日记详情数据
const diaryDetailData = {
  code: 666,
  diary: {
    id: 1,
    title: '我的玫瑰终于开花了',
    date: '2025-12-18',
    desc: '经过一个月的精心养护，我的玫瑰终于开花了。花朵鲜艳夺目，散发出淡淡的香气，真是让人开心！\n\n这段时间我每天都给它浇水、施肥，还注意保持充足的阳光。功夫不负有心人，终于等到了花开的时刻。\n\n看着这朵美丽的玫瑰花，我感到非常满足和幸福。养花不仅能美化环境，还能培养人的耐心和爱心。',
    images: ['/img/rose-bloom.jpg', '/img/rose-care.jpg'],
    tags: ['玫瑰', '开花', '养护']
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
  knowledgeData,
  flowerDetailData,
  communityData,
  questionDetailData,
  diaryData,
  diaryDetailData
};