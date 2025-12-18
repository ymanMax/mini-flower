import { collectRequest } from '../../api/index.js'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    collectList: [],
    isShowEmpty: true,
    loading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadCollectList();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.loadCollectList();
  },

  /**
   * 加载收藏列表
   */
  loadCollectList: function () {
    if (this.data.loading) return;

    this.setData({ loading: true });

    collectRequest.getCollectList().then(res => {
      if (res.code == 666) {
        this.setData({
          collectList: res.collects,
          isShowEmpty: res.collects.length == 0
        });
      }
      this.setData({ loading: false });
    }).catch(err => {
      console.log(err);
      this.setData({ loading: false });
    });
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
    wx.showToast({
      title: '已添加到购物车',
      icon: 'success'
    });
  },

  /**
   * 取消收藏
   */
  cancelCollect: function (e) {
    const collectId = e.currentTarget.dataset.collectid;
    const index = e.currentTarget.dataset.index;

    wx.showModal({
      title: '提示',
      content: '确定要取消收藏吗？',
      success: (res) => {
        if (res.confirm) {
          collectRequest.removeCollect({ collectId: collectId }).then(res => {
            if (res.code == 666) {
              // 从列表中移除该商品
              let collectList = this.data.collectList;
              collectList.splice(index, 1);

              this.setData({
                collectList: collectList,
                isShowEmpty: collectList.length == 0
              });

              wx.showToast({
                title: '取消收藏成功',
                icon: 'success'
              });
            }
          }).catch(err => {
            console.log(err);
            wx.showToast({
              title: '取消收藏失败',
              icon: 'none'
            });
          });
        }
      }
    });
  },

  /**
   * 下拉刷新
   */
  onPullDownRefresh: function () {
    this.loadCollectList();
    wx.stopPullDownRefresh();
  }
});