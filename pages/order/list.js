import { orderRequest } from '../../api/index.js'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    orderList: [],
    activeTab: 'all', // 全部、待支付、待发货、待收货、已完成
    tabs: [
      { id: 'all', name: '全部' },
      { id: 'pending_pay', name: '待支付' },
      { id: 'pending_ship', name: '待发货' },
      { id: 'pending_receive', name: '待收货' },
      { id: 'completed', name: '已完成' }
    ],
    isShowEmpty: true,
    loading: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 如果从其他页面跳转携带了tab参数，则切换到对应tab
    if (options.tab) {
      this.setData({
        activeTab: options.tab
      });
    }
    this.loadOrderList();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.loadOrderList();
  },

  /**
   * 加载订单列表
   */
  loadOrderList: function () {
    if (this.data.loading) return;

    this.setData({ loading: true });

    orderRequest.getOrderList({ status: this.data.activeTab }).then(res => {
      if (res.code == 666) {
        this.setData({
          orderList: res.orders,
          isShowEmpty: res.orders.length == 0
        });
      }
      this.setData({ loading: false });
    }).catch(err => {
      console.log(err);
      this.setData({ loading: false });
    });
  },

  /**
   * 切换订单状态标签
   */
  switchTab: function (e) {
    const tab = e.currentTarget.dataset.tab;
    this.setData({
      activeTab: tab,
      'pagination.pageNum': 1,
      'pagination.hasMore': true,
      orderList: []
    });
    this.loadOrderList();
  },

  /**
   * 查看订单详情
   */
  viewOrderDetail: function (e) {
    const orderId = e.currentTarget.dataset.orderid;
    wx.navigateTo({
      url: `/pages/order/detail?orderId=${orderId}`
    });
  },

  /**
   * 取消订单
   */
  cancelOrder: function (e) {
    const orderId = e.currentTarget.dataset.orderid;
    const index = e.currentTarget.dataset.index;

    wx.showModal({
      title: '提示',
      content: '确定要取消订单吗？',
      success: (res) => {
        if (res.confirm) {
          orderRequest.cancelOrder({ orderId: orderId }).then(res => {
            if (res.code == 666) {
              // 更新订单状态
              let orderList = this.data.orderList;
              orderList[index].status = '已取消';

              this.setData({
                orderList: orderList
              });

              wx.showToast({
                title: '订单取消成功',
                icon: 'success'
              });
            }
          }).catch(err => {
            console.log(err);
            wx.showToast({
              title: '订单取消失败',
              icon: 'none'
            });
          });
        }
      }
    });
  },

  /**
   * 确认收货
   */
  confirmReceipt: function (e) {
    const orderId = e.currentTarget.dataset.orderid;
    const index = e.currentTarget.dataset.index;

    wx.showModal({
      title: '提示',
      content: '确定已收到商品吗？',
      success: (res) => {
        if (res.confirm) {
          orderRequest.confirmReceipt({ orderId: orderId }).then(res => {
            if (res.code == 666) {
              // 更新订单状态
              let orderList = this.data.orderList;
              orderList[index].status = '已完成';

              this.setData({
                orderList: orderList
              });

              wx.showToast({
                title: '确认收货成功',
                icon: 'success'
              });
            }
          }).catch(err => {
            console.log(err);
            wx.showToast({
              title: '确认收货失败',
              icon: 'none'
            });
          });
        }
      }
    });
  },

  /**
   * 去支付
   */
  goToPay: function (e) {
    const orderId = e.currentTarget.dataset.orderid;
    wx.navigateTo({
      url: `/pages/pay/pay?orderId=${orderId}`
    });
  },

  /**
   * 下拉刷新
   */
  onPullDownRefresh: function () {
    this.loadOrderList();
    wx.stopPullDownRefresh();
  }
});