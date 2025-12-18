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

// 导出所有mock数据
module.exports = {
  swiperData,
  goodsListData,
  goodsDetailData,
  cartGoodsListData,
  preOrderData,
  preOrderDetailData,
  userLoginData,
  orderPayData
};