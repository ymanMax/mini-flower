import {
  homeRequest
} from "../../api/index"



Page({
  data: {
    // 轮播图数据
    swiperImg: [],

    // 功能导航列表
    functionList: [
      {
        id: 1,
        name: '花卉知识库',
        icon: '/img/knowledge.png',
        url: '/pages/knowledge/base'
      },
      {
        id: 2,
        name: '问答社区',
        icon: '/img/community.png',
        url: '/pages/community/index'
      },
      {
        id: 3,
        name: '花卉识别',
        icon: '/img/identify.png',
        url: '/pages/identify/index'
      },
      {
        id: 4,
        name: '花卉日记',
        icon: '/img/diary.png',
        url: '/pages/diary/index'
      }
    ],

    // 渲染的商品数据
    goodsList: [],

    // 当前页码
    currPageNum: 1,

    // 当前页展示的数据条数
    pageSize: 10,

    // 显示加载更多文本
    isShowLoadMore: true,
  },


  // 页面显示/切入前台时触发
  onShow() {
    wx.showTabBar();
    wx.showLoading({
      title: '加载中',
    })

    // 当所有数据加载完成关闭 loding 弹窗
    Promise.all([this.getSwiperListData(), this.getGoodsListData()]).then((info) => {
      if (Object.values(info).every(item => item == undefined)) {
        wx.hideLoading();
      }
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



  // 用户上拉触底事件
  onReachBottom() {
    this.getGoodsListData();
  },

  // 跳转到对应功能页面
  goToFunction: function (event) {
    const id = event.currentTarget.dataset.id;
    const functionItem = this.data.functionList.find(item => item.id === id);

    if (functionItem && functionItem.url) {
      wx.navigateTo({
        url: functionItem.url
      });
    }
  }
})