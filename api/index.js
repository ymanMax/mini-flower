import {
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



export const orderRequest = {

  // 创建订单
  createOrder() {
    return mockDelay(orderPayData);
  }
}

// 租赁服务请求
export const rentRequest = {
  /**
   * 获取租赁服务列表
   */
  getRentServices() {
    return mockDelay(rentServicesData);
  }
}

// 企业定制服务请求
export const enterpriseRequest = {
  /**
   * 获取企业定制服务列表
   */
  getEnterpriseServices() {
    return mockDelay(enterpriseServicesData);
  }
}

// 花艺设计服务请求
export const designRequest = {
  /**
   * 获取花艺设计服务列表
   */
  getDesignServices() {
    return mockDelay(designServicesData);
  }
}

// 节日花礼服务请求
export const festivalRequest = {
  /**
   * 获取节日花礼列表
   */
  getFestivalGifts() {
    return mockDelay(festivalGiftsData);
  }
}