// pages/community/detail.js
Page({
  data: {
    isLiked: false,
    commentContent: '',
    question: {
      id: 1,
      title: '玫瑰叶子变黄怎么办？',
      desc: '我的玫瑰最近叶子开始变黄，尤其是底部的叶子，不知道是什么原因引起的，应该怎么处理呢？',
      user: {
        name: '花友小王',
        avatar: '/img/user1.jpg'
      },
      postTime: '2小时前',
      views: 128,
      comments: 23,
      likes: 45,
      images: ['/img/rose-yellow-leaf.jpg'],
      answers: [
        {
          id: 1,
          user: {
            name: '老花农',
            avatar: '/img/user6.jpg'
          },
          postTime: '1小时前',
          content: '玫瑰叶子变黄可能有几种原因：1. 浇水过多，导致根部缺氧腐烂；2. 施肥不当，缺少铁元素；3. 光照不足；4. 病虫害。建议先检查土壤湿度，适当减少浇水，同时可以施一些含铁的肥料。如果情况严重，可以考虑换土。',
          likes: 28,
          isLiked: false,
          isBest: true
        },
        {
          id: 2,
          user: {
            name: '玫瑰爱好者',
            avatar: '/img/user7.jpg'
          },
          postTime: '30分钟前',
          content: '我之前也遇到过类似的问题，后来发现是浇水太多了。玫瑰其实不需要太多水，尤其是在室内养殖的话，一周浇一次水就差不多了。另外，要注意通风，避免闷热的环境。',
          likes: 15,
          isLiked: false,
          isBest: false
        }
      ]
    }
  },

  onLoad: function (options) {
    const id = options.id;
    console.log('加载问题详情:', id);
  },

  onBack: function () {
    wx.navigateBack();
  },

  onLike: function () {
    const isLiked = !this.data.isLiked;
    const likes = isLiked ? this.data.question.likes + 1 : this.data.question.likes - 1;

    this.setData({
      isLiked,
      'question.likes': likes
    });
  },

  onAnswerLike: function (event) {
    const id = event.currentTarget.dataset.id;
    const answers = [...this.data.question.answers];
    const answerIndex = answers.findIndex(item => item.id === id);

    if (answerIndex !== -1) {
      answers[answerIndex].isLiked = !answers[answerIndex].isLiked;
      answers[answerIndex].likes = answers[answerIndex].isLiked
        ? answers[answerIndex].likes + 1
        : answers[answerIndex].likes - 1;

      this.setData({
        'question.answers': answers
      });
    }
  },

  previewImage: function (event) {
    const index = event.currentTarget.dataset.index;
    wx.previewImage({
      urls: this.data.question.images,
      current: this.data.question.images[index]
    });
  },

  onCommentChange: function (event) {
    this.setData({
      commentContent: event.detail
    });
  },

  onCommentSubmit: function () {
    if (!this.data.commentContent.trim()) {
      return;
    }

    wx.showLoading({
      title: '提交中...'
    });

    // 模拟提交
    setTimeout(() => {
      wx.hideLoading();
      wx.showToast({
        title: '回答成功',
        icon: 'success'
      });

      // 更新本地数据
      const newAnswer = {
        id: Date.now(),
        user: {
          name: '我',
          avatar: '/img/user-default.jpg'
        },
        postTime: '刚刚',
        content: this.data.commentContent,
        likes: 0,
        isLiked: false,
        isBest: false
      };

      this.setData({
        commentContent: '',
        'question.answers': [newAnswer, ...this.data.question.answers],
        'question.comments': this.data.question.comments + 1
      });
    }, 1000);
  }
});
