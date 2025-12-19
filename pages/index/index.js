import {
  homeRequest,
  recommendationRequest
} from "../../api/index"
import FlowerRecommendationAlgorithm from '../../utils/recommendation/algorithm';



Page({
  data: {
    // 轮播图数据
    swiperImg: [],

    // 渲染的商品数据
    goodsList: [],

    // 当前页码
    currPageNum: 1,

    // 当前页展示的数据条数
    pageSize: 10,

    // 显示加载更多文本
    isShowLoadMore: true,

    // 个性化推荐数据
    personalizedRecommendations: [],
    popularRecommendations: [],
    seasonalRecommendations: []
  },


  // 页面显示/切入前台时触发
  onShow() {
    wx.showTabBar();
    wx.showLoading({
      title: '加载中',
    })

    // 当所有数据加载完成关闭 loding 弹窗
    Promise.all([
      this.getSwiperListData(),
      this.getGoodsListData(),
      this.getPersonalizedRecommendations(),
      this.getPopularRecommendations(),
      this.getSeasonalRecommendations()
    ]).then((info) => {
      wx.hideLoading();
    })
  },



  // 获取轮播图数据
  getSwiperListData() {
    return homeRequest.getSwiperList()
      .then(res => {

        if (res.code == 666) {
          this.setData({
            swiperImg: res.banners
          })
        }

      })
      .catch(err => {
        wx.showToast({
          title: '加载失败，请重试~~~',
          icon: 'error',
          duration: 1500
        });
        return err
      })
  },



  // 获取商品列表数据
  getGoodsListData() {
    let params = {
      pageNum: this.data.currPageNum,
      pageSize: this.data.pageSize
    };
    return homeRequest.getGoodsList(params)
      .then(res => {

        if (res.flowers.length == 0) {
          return this.setData({
            isShowLoadMore: false
          })
        }

        if (res.code == 666) {
          this.setData({
            goodsList: this.data.goodsList.concat(res.flowers),
            currPageNum: this.data.currPageNum += 1
          })
        };
      })
      .catch(err => {
        console.log(err)
        wx.showToast({
          title: '加载失败，请重试~~~',
          icon: 'error',
          duration: 1500
        });
        return err = "error";
      })
  },



  // 获取个性化推荐数据
  getPersonalizedRecommendations() {
    return recommendationRequest.getPersonalizedRecommendations()
      .then(res => {
        if (res.code === 666) {
          this.setData({
            personalizedRecommendations: res.recommendations.basedOnPreferences || []
          });
        }
      })
      .catch(err => {
        console.error('加载个性化推荐数据失败:', err);
      });
  },

  // 获取热门推荐数据
  getPopularRecommendations() {
    return recommendationRequest.getPersonalizedRecommendations()
      .then(res => {
        if (res.code === 666) {
          this.setData({
            popularRecommendations: res.recommendations.popular || []
          });
        }
      })
      .catch(err => {
        console.error('加载热门推荐数据失败:', err);
      });
  },

  // 获取季节性推荐数据
  getSeasonalRecommendations() {
    return recommendationRequest.getSeasonalRecommendations()
      .then(res => {
        if (res.code === 666) {
          this.setData({
            seasonalRecommendations: res.recommendations || []
          });
        }
      })
      .catch(err => {
        console.error('加载季节性推荐数据失败:', err);
      });
  },

  // 用户上拉触底事件
  onReachBottom() {
    this.getGoodsListData();
  },

  // 跳转到个性化偏好设置页面
  goToPreferences() {
    wx.navigateTo({
      url: '/pages/preferences/preferences'
    });
  },

  // 跳转到花卉搭配建议页面
  goToMatching() {
    wx.navigateTo({
      url: '/pages/matching/matching'
    });
  },

  // 跳转到季节性推荐页面
  goToSeasonal() {
    wx.showToast({
      title: '季节性推荐功能开发中',
      icon: 'none'
    });
  }
})