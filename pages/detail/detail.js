import {
  homeRequest,
  cartRequest,
  commentRequest
} from '../../api/index.js'

Page({
  data: {
    flowerId: "",
    goodsInfo: {},
    comments: [], // 商品评价列表
    showCommentModal: false, // 是否显示评价提交弹窗
    commentContent: "", // 评价内容
    commentScore: 5, // 评价分数
    commentImages: [], // 评价图片

    // 购物车里的商品总件数
    cartGoodsListAllNum: 0
  },

  // 页面开始加载时执行
  onLoad(options) {
    this.setData({
      flowerId: options.flowerId
    })
  },


  onShow() {
    // 初始化购物车里的商品总件数
    let num = wx.getStorageSync('cartGoodsListAllNum');
    if (!num) {
      wx.setStorage({
        key: "cartGoodsListAllNum",
        data: this.data.cartGoodsListAllNum,
      })
    } else {
      this.setData({
        cartGoodsListAllNum: num
      })
    }

    // 加载中弹窗
    wx.showLoading({
      title: '加载中',
    });
    this.getGoodsDetailData();
  },


  // 请求商品详情
  getGoodsDetailData() {
    homeRequest.getGoodsDetail({
      flowerId: this.data.flowerId
    }).then(res => {

      if (res.code == 666) {
        wx.hideLoading();
        this.setData({
          goodsInfo: res.flower
        });
        // 获取商品评价
        this.getGoodsComments();
      }
    }).catch(err => {
      console.log(err);
    })
  },

  // 获取商品评价
  getGoodsComments() {
    commentRequest.getComments({
      flowerId: this.data.flowerId
    }).then(res => {
      if (res.code == 666) {
        this.setData({
          comments: res.comments
        });
      }
    }).catch(err => {
      console.log(err);
    });
  },

  // 打开评价提交弹窗
  openCommentModal() {
    this.setData({
      showCommentModal: true
    });
  },

  // 关闭评价提交弹窗
  closeCommentModal() {
    this.setData({
      showCommentModal: false,
      commentContent: "",
      commentScore: 5,
      commentImages: []
    });
  },

  // 评价内容输入
  onCommentContentInput(e) {
    this.setData({
      commentContent: e.detail.value
    });
  },

  // 评价分数选择
  onCommentScoreChange(e) {
    this.setData({
      commentScore: e.detail
    });
  },

  // 选择评价图片
  chooseCommentImages() {
    wx.chooseImage({
      count: 4, // 最多可以选择4张图片
      sizeType: ['compressed'], // 压缩图片
      sourceType: ['album', 'camera'], // 可以从相册或相机选择
      success: (res) => {
        this.setData({
          commentImages: this.data.commentImages.concat(res.tempFilePaths)
        });
      }
    });
  },

  // 删除评价图片
  deleteCommentImage(e) {
    const index = e.currentTarget.dataset.index;
    const commentImages = this.data.commentImages;
    commentImages.splice(index, 1);
    this.setData({
      commentImages: commentImages
    });
  },

  // 提交评价
  submitComment() {
    if (!this.data.commentContent.trim()) {
      wx.showToast({
        title: '请输入评价内容',
        icon: 'none'
      });
      return;
    }

    commentRequest.submitComment({
      flowerId: this.data.flowerId,
      content: this.data.commentContent,
      score: this.data.commentScore,
      imgUrls: this.data.commentImages
    }).then(res => {
      if (res.code == 666) {
        wx.showToast({
          title: '评价提交成功',
          icon: 'success'
        });
        // 关闭弹窗并刷新评价列表
        this.closeCommentModal();
        this.getGoodsComments();
      }
    }).catch(err => {
      console.log(err);
      wx.showToast({
        title: '评价提交失败',
        icon: 'none'
      });
    });
  },

  // 点赞评价
  likeComment(e) {
    const commentId = e.currentTarget.dataset.commentid;
    commentRequest.likeComment({
      commentId: commentId
    }).then(res => {
      if (res.code == 666) {
        wx.showToast({
          title: '点赞成功',
          icon: 'success'
        });
        // 刷新评价列表
        this.getGoodsComments();
      }
    }).catch(err => {
      console.log(err);
      wx.showToast({
        title: '点赞失败',
        icon: 'none'
      });
    });
  },

  // 分享商品
  shareGoods() {
    wx.showShareMenu({
      withShareTicket: true,
      menus: ['shareAppMessage', 'shareTimeline']
    });
  },

  // 自定义分享内容
  onShareAppMessage() {
    return {
      title: this.data.goodsInfo.ad || '花卉商品',
      path: `/pages/detail/detail?flowerId=${this.data.flowerId}`,
      imageUrl: this.data.goodsInfo.imgUrls && this.data.goodsInfo.imgUrls[0] || '/img/bg.png'
    };
  },

  // 分享到朋友圈
  onShareTimeline() {
    return {
      title: this.data.goodsInfo.ad || '花卉商品',
      query: `flowerId=${this.data.flowerId}`,
      imageUrl: this.data.goodsInfo.imgUrls && this.data.goodsInfo.imgUrls[0] || '/img/bg.png'
    };
  },


  // 添加商品到购物车
  addCart() {
    cartRequest.addCartList({
      flowerId: this.data.flowerId
    }).then(res => {
      if (res.code == 666) {
        wx.showToast({
          title: '添加成功',
          icon: 'success',
          duration: 1000
        });





        // 更新购物车里的商品总件数
        this.setData({
          cartGoodsListAllNum: this.data.cartGoodsListAllNum - 0 + 1
        })

        // 更新 Storage 的数据
        wx.setStorage({
          key: "cartGoodsListAllNum",
          data: this.data.cartGoodsListAllNum,
        })
      }
    }).catch(err => {
      console.log(err);
    })
  }
})