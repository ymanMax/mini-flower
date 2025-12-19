// pages/matching/matching.js
import { recommendationRequest } from '../../api/index';
import FlowerRecommendationAlgorithm from '../../utils/recommendation/algorithm';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    matchingSuggestions: [],
    loading: true,
    currentSeason: '春季',
    seasonalTips: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMatchingSuggestions();
    this.loadSeasonalTips();
  },

  /**
   * 加载花卉搭配建议
   */
  loadMatchingSuggestions: function() {
    recommendationRequest.getFlowerMatchingSuggestions()
      .then(res => {
        if (res.code === 666) {
          this.setData({
            matchingSuggestions: res.suggestions
          });
        }
        this.setData({ loading: false });
      })
      .catch(err => {
        console.error('加载花卉搭配建议失败:', err);
        this.setData({ loading: false });
        wx.showToast({
          title: '加载失败',
          icon: 'error'
        });
      });
  },

  /**
   * 加载季节性养护提醒
   */
  loadSeasonalTips: function() {
    recommendationRequest.getSeasonalRecommendations()
      .then(res => {
        if (res.code === 666) {
          this.setData({
            currentSeason: res.currentSeason,
            seasonalTips: res.careTips
          });
        }
      })
      .catch(err => {
        console.error('加载季节性养护提醒失败:', err);
      });
  },

  /**
   * 查看花卉详情
   */
  viewFlowerDetail: function(e) {
    const flowerId = e.currentTarget.dataset.flowerId;
    wx.navigateTo({
      url: `/pages/detail/detail?flowerId=${flowerId}`
    });
  },

  /**
   * 查看搭配详情
   */
  viewMatchingDetail: function(e) {
    const combinationId = e.currentTarget.dataset.combinationId;
    // 这里可以跳转到搭配详情页面
    wx.showToast({
      title: `查看搭配 ${combinationId}`,
      icon: 'none'
    });
  },

  /**
   * 添加到购物车
   */
  addToCart: function(e) {
    const flowerId = e.currentTarget.dataset.flowerId;
    // 这里可以调用添加到购物车的API
    wx.showToast({
      title: '已添加到购物车',
      icon: 'success'
    });
  },

  /**
   * 立即购买
   */
  buyNow: function(e) {
    const flowerId = e.currentTarget.dataset.flowerId;
    // 这里可以跳转到立即购买页面
    wx.showToast({
      title: '正在跳转购买页面',
      icon: 'none'
    });
  },

  /**
   * 分享搭配
   */
  shareMatching: function(e) {
    const combinationId = e.currentTarget.dataset.combinationId;
    return {
      title: `推荐一个很棒的花卉搭配`,
      path: `/pages/matching/matching`
    };
  }
});
