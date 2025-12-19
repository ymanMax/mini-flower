import { memberRequest, pointsGoodsRequest } from '../../api/index.js'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    memberInfo: {},
    pointsRecord: [],
    pointsGoodsList: [],
    activeTab: 'info', // info:会员信息, points:积分记录, exchange:积分兑换
    tabs: [
      { id: 'info', name: '会员信息' },
      { id: 'points', name: '积分记录' },
      { id: 'exchange', name: '积分兑换' }
    ],
    loading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMemberInfo();
    this.loadPointsRecord();
    this.loadPointsGoodsList();
  },

  /**
   * 加载会员信息
   */
  loadMemberInfo: function () {
    memberRequest.getMemberInfo().then(res => {
      if (res.code == 666) {
        this.setData({
          memberInfo: res.result
        });
      }
    }).catch(err => {
      console.log(err);
    });
  },

  /**
   * 加载积分记录
   */
  loadPointsRecord: function () {
    memberRequest.getPointsRecord().then(res => {
      if (res.code == 666) {
        this.setData({
          pointsRecord: res.records
        });
      }
    }).catch(err => {
      console.log(err);
    });
  },

  /**
   * 加载积分兑换商品列表
   */
  loadPointsGoodsList: function () {
    pointsGoodsRequest.getPointsGoodsList().then(res => {
      if (res.code == 666) {
        this.setData({
          pointsGoodsList: res.goods
        });
      }
    }).catch(err => {
      console.log(err);
    });
  },

  /**
   * 切换标签页
   */
  switchTab: function (e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      activeTab: tab
    });
  },

  /**
   * 积分兑换
   */
  exchangePoints: function (e) {
    const goodsId = e.currentTarget.dataset.goodsid;
    const points = e.currentTarget.dataset.points;

    // 检查积分是否足够
    if (this.data.memberInfo.points < points) {
      wx.showToast({
        title: '积分不足',
        icon: 'none'
      });
      return;
    }

    wx.showModal({
      title: '积分兑换',
      content: `确定要兑换该商品吗？将消耗${points}积分。`,
      success: (res) => {
        if (res.confirm) {
          memberRequest.exchangePoints({ goodsId: goodsId }).then(res => {
            if (res.code == 666) {
              wx.showToast({
                title: '兑换成功',
                icon: 'success'
              });
              // 刷新会员信息和积分记录
              this.loadMemberInfo();
              this.loadPointsRecord();
            }
          }).catch(err => {
            console.log(err);
            wx.showToast({
              title: '兑换失败',
              icon: 'none'
            });
          });
        }
      }
    });
  }
});