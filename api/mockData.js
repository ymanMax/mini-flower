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

// 租赁服务数据
const rentServicesData = {
  code: 666,
  rentServices: [
    {
      rentId: 1,
      serviceName: '长期花卉租赁',
      price: 299.00,
      period: '月',
      imgUrl: '/img/bg.png',
      description: '适合办公室、酒店等长期租赁，提供定期养护服务',
      minPeriod: 3,
      plants: ['绿萝', '发财树', '散尾葵'],
      features: ['免费配送', '定期养护', '品种更换']
    },
    {
      rentId: 2,
      serviceName: '短期花卉租赁',
      price: 99.00,
      period: '天',
      imgUrl: '/img/bg.png',
      description: '适合活动、展会等短期租赁，灵活便捷',
      minPeriod: 1,
      plants: ['玫瑰', '百合', '郁金香'],
      features: ['快速响应', '多样选择', '专业布置']
    },
    {
      rentId: 3,
      serviceName: '盆栽租赁套餐',
      price: 499.00,
      period: '月',
      imgUrl: '/img/bg.png',
      description: '组合盆栽租赁，打造绿色空间',
      minPeriod: 2,
      plants: ['多肉组合', '蕨类植物', '观叶植物'],
      features: ['定制组合', '专业设计', '全程养护']
    }
  ]
};

// 企业绿植定制数据
const enterpriseServicesData = {
  code: 666,
  enterpriseServices: [
    {
      enterpriseId: 1,
      serviceName: '办公室绿植定制',
      price: 1999.00,
      area: '50-100㎡',
      imgUrl: '/img/bg.png',
      description: '根据办公室空间定制绿植方案',
      plants: 10,
     养护: '每月2次'
    },
    {
      enterpriseId: 2,
      serviceName: '企业绿植养护',
      price: 599.00,
      area: '任意面积',
      imgUrl: '/img/bg.png',
      description: '专业养护团队，确保植物健康生长',
      plants: '不限',
     养护: '按需服务'
    },
    {
      enterpriseId: 3,
      serviceName: '大型绿植工程',
      price: 9999.00,
      area: '1000㎡以上',
      imgUrl: '/img/bg.png',
      description: '商场、酒店等大型空间绿植规划',
      plants: 50,
     养护: '每周1次'
    }
  ]
};

// 花艺设计服务数据
const designServicesData = {
  code: 666,
  designServices: [
    {
      designId: 1,
      serviceName: '婚礼花艺设计',
      price: 5999.00,
      style: '浪漫梦幻',
      imgUrl: '/img/bg.png',
      description: '为您打造完美的婚礼花艺布置',
      items: ['新娘手捧花', '婚车装饰', '舞台布置']
    },
    {
      designId: 2,
      serviceName: '商务花艺设计',
      price: 2999.00,
      style: '简约大气',
      imgUrl: '/img/bg.png',
      description: '提升企业形象的商务花艺',
      items: ['前台装饰', '会议桌花', '开业花篮']
    },
    {
      designId: 3,
      serviceName: '家居花艺设计',
      price: 1299.00,
      style: '温馨自然',
      imgUrl: '/img/bg.png',
      description: '打造舒适宜居的家居花艺环境',
      items: ['客厅花艺', '餐厅布置', '卧室点缀']
    }
  ]
};

// 节日花礼数据
const festivalGiftsData = {
  code: 666,
  festivalGifts: [
    {
      giftId: 1,
      giftName: '情人节玫瑰礼盒',
      price: 399.00,
      festival: '情人节',
      imgUrl: '/img/bg.png',
      description: '精选红玫瑰，表达浓浓爱意',
      delivery: '全国配送',
     预售: true
    },
    {
      giftId: 2,
      giftName: '中秋节赏月花礼',
      price: 299.00,
      festival: '中秋节',
      imgUrl: '/img/bg.png',
      description: '团圆佳节的精美花礼',
      delivery: '同城配送',
     预售: false
    },
    {
      giftId: 3,
      giftName: '新年祈福花束',
      price: 499.00,
      festival: '春节',
      imgUrl: '/img/bg.png',
      description: '新年新气象，吉祥如意',
      delivery: '全国配送',
     预售: true
    },
    {
      giftId: 4,
      giftName: '教师节感恩花礼',
      price: 199.00,
      festival: '教师节',
      imgUrl: '/img/bg.png',
      description: '感谢恩师，师恩难忘',
      delivery: '同城配送',
     预售: false
    }
  ]
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
  rentServicesData,
  enterpriseServicesData,
  designServicesData,
  festivalGiftsData
};