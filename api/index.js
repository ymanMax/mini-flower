import {
  swiperData,
  goodsListData,
  goodsDetailData,
  cartGoodsListData,
  preOrderData,
  preOrderDetailData,
  userLoginData,
  orderPayData,
  collectGoodsListData,
  orderListData,
  memberInfoData,
  pointsGoodsData,
  goodsCommentsData
} from './mockData'

// 模拟异步请求延迟
const mockDelay = (data, delay = 500) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
};

// 首页的请求
export const homeRequest = {

  // 获取轮播图列表
  getSwiperList() {
    return mockDelay(swiperData);
  },

  /**
   * 获取商品分页列表
   * @params ={pageNum, pageSize}, params 非必须
   * */
  getGoodsList(params) {
    // 模拟分页逻辑
    const pageNum = params?.pageNum || 1;
    const pageSize = params?.pageSize || 10;
    const startIndex = (pageNum - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    
    const paginatedData = {
      ...goodsListData,
      flowers: goodsListData.flowers.slice(startIndex, endIndex)
    };
    
    return mockDelay(paginatedData);
  },

  /**
   * 获取商品详情
   * @params ={flowerId}
   * 
   * */
  getGoodsDetail(params) {
    // 根据flowerId返回对应的商品详情
    const flowerId = params?.flowerId;
    const detailData = {
      ...goodsDetailData,
      flower: {
        ...goodsDetailData.flower,
        flowerId: flowerId || 1
      }
    };
    
    return mockDelay(detailData);
  },
}

// 购物车的请求
export const cartRequest = {
  /**
   * 添加商品到购物车
   * @params ={flowerId}
   * */
  addCartList(params) {
    // 模拟添加成功
    return mockDelay({ code: 666, message: '添加成功' });
  },

  // 获取购物车商品列表
  getCartGoodsList() {
    return mockDelay(cartGoodsListData);
  },

  /**
   * 修改商品数量
   * @params ={cartId, buyNum}
   * */
  changeGoodsNumInfo(params) {
    // 模拟修改成功
    return mockDelay({ code: 666, message: '修改成功' });
  },

  /**
   * 删除商品
   * @params ={cartId}, cartId 为数组
   * */
  delCartGoods(params) {
    // 模拟删除成功
    return mockDelay({ code: 666, message: '删除成功' });
  },
}


// 预订单页面请求
export const preOrderRequest = {
  /**
   * 添加预订单
   * @params ={cartId, totalPrice}
   * */
  addPreOrder(params) {
    return mockDelay(preOrderData);
  },

  /**
   * 获取预订单详情
   * @params ={preOrderId }
   * */
  getPreOrderDetail(params) {
    return mockDelay(preOrderDetailData);
  },


  // 获取预订单列表
  getPreOrderList() {
    return mockDelay({
      code: 666,
      preOrders: [preOrderData.result]
    });
  }
}



// 个人中心页请求
export const userRequest = {

  /**
   * 微信登录
   * @code 
   * 
   * */
  wxLogin(params) {
    return mockDelay(userLoginData);
  }

}



// 收藏功能请求
export const collectRequest = {
  // 添加商品到收藏夹
  addCollect(params) {
    return mockDelay({ code: 666, message: '收藏成功' });
  },

  // 从收藏夹删除商品
  removeCollect(params) {
    return mockDelay({ code: 666, message: '取消收藏成功' });
  },

  // 获取收藏商品列表
  getCollectList() {
    return mockDelay(collectGoodsListData);
  },

  // 检查商品是否已收藏
  checkCollect(params) {
    return mockDelay({ code: 666, isCollected: false });
  }
}

// 订单管理请求
export const orderRequest = {
  // 创建订单
  createOrder() {
    return mockDelay(orderPayData);
  },

  // 获取订单列表
  getOrderList(params) {
    return mockDelay(orderListData);
  },

  // 获取订单详情
  getOrderDetail(params) {
    return mockDelay(orderListData);
  },

  // 取消订单
  cancelOrder(params) {
    return mockDelay({ code: 666, message: '订单取消成功' });
  },

  // 确认收货
  confirmReceipt(params) {
    return mockDelay({ code: 666, message: '确认收货成功' });
  }
}

// 会员系统请求
export const memberRequest = {
  // 获取会员信息
  getMemberInfo() {
    return mockDelay(memberInfoData);
  },

  // 获取积分记录
  getPointsRecord() {
    return mockDelay({
      code: 666,
      records: [
        { id: 1, type: '购物', points: -100, createTime: '2024-01-10' },
        { id: 2, type: '签到', points: +10, createTime: '2024-01-11' }
      ]
    });
  },

  // 积分兑换
  exchangePoints(params) {
    return mockDelay({ code: 666, message: '兑换成功' });
  }
}

// 商品评价请求
export const commentRequest = {
  // 获取商品评价列表
  getComments(params) {
    return mockDelay(goodsCommentsData);
  },

  // 提交商品评价
  submitComment(params) {
    return mockDelay({ code: 666, message: '评价提交成功' });
  },

  // 点赞评价
  likeComment(params) {
    return mockDelay({ code: 666, message: '点赞成功' });
  }
}

// 积分商品请求
export const pointsGoodsRequest = {
  // 获取积分兑换商品列表
  getPointsGoodsList() {
    return mockDelay(pointsGoodsData);
  }
}