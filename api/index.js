import {
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

// 花卉知识库请求
export const knowledgeRequest = {
  // 获取知识库数据
  getKnowledgeData() {
    return mockDelay(knowledgeData);
  },

  // 获取花卉详情
  getFlowerDetail(params) {
    const flowerId = params?.id;
    const detailData = {
      ...flowerDetailData,
      flower: {
        ...flowerDetailData.flower,
        id: flowerId || 1
      }
    };
    return mockDelay(detailData);
  }
}

// 社区问答请求
export const communityRequest = {
  // 获取社区数据
  getCommunityData() {
    return mockDelay(communityData);
  },

  // 获取问题详情
  getQuestionDetail(params) {
    const questionId = params?.id;
    const detailData = {
      ...questionDetailData,
      question: {
        ...questionDetailData.question,
        id: questionId || 1
      }
    };
    return mockDelay(detailData);
  },

  // 提交问题
  submitQuestion(params) {
    return mockDelay({ code: 666, message: '提交成功' });
  },

  // 提交回答
  submitAnswer(params) {
    return mockDelay({ code: 666, message: '回答成功' });
  }
}

// 花卉日记请求
export const diaryRequest = {
  // 获取日记列表
  getDiaryList() {
    return mockDelay(diaryData);
  },

  // 获取日记详情
  getDiaryDetail(params) {
    const diaryId = params?.id;
    const detailData = {
      ...diaryDetailData,
      diary: {
        ...diaryDetailData.diary,
        id: diaryId || 1
      }
    };
    return mockDelay(detailData);
  },

  // 添加日记
  addDiary(params) {
    return mockDelay({ code: 666, message: '添加成功' });
  },

  // 编辑日记
  editDiary(params) {
    return mockDelay({ code: 666, message: '编辑成功' });
  },

  // 删除日记
  deleteDiary(params) {
    return mockDelay({ code: 666, message: '删除成功' });
  }
}

// 花卉识别请求
export const identifyRequest = {
  // 识别花卉
  identifyFlower(params) {
    return mockDelay({
      code: 666,
      result: {
        image: params?.image || '/img/rose.jpg',
        name: '玫瑰',
        confidence: 95,
        desc: '玫瑰是蔷薇科蔷薇属植物，是世界著名的观赏花卉之一。'
      }
    });
  }
}