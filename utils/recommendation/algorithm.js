// 花卉推荐算法模块
// 基于用户偏好、花卉属性等数据进行智能匹配和推荐

/**
 * 推荐算法核心类
 */
class FlowerRecommendationAlgorithm {
  /**
   * 构造函数
   * @param {Object} userPreferences 用户偏好数据
   * @param {Array} flowerDatabase 花卉数据库
   */
  constructor(userPreferences, flowerDatabase) {
    this.userPreferences = userPreferences || {};
    this.flowerDatabase = flowerDatabase || [];
  }

  /**
   * 设置用户偏好
   * @param {Object} preferences 用户偏好数据
   */
  setUserPreferences(preferences) {
    this.userPreferences = preferences || {};
  }

  /**
   * 设置花卉数据库
   * @param {Array} flowerDatabase 花卉数据库
   */
  setFlowerDatabase(flowerDatabase) {
    this.flowerDatabase = flowerDatabase || [];
  }

  /**
   * 计算单个花卉与用户偏好的匹配度
   * @param {Object} flower 花卉数据
   * @returns {Number} 匹配度分数 (0-100)
   */
  calculateMatchingScore(flower) {
    if (!flower || !flower.attributes) {
      return 0;
    }

    let score = 0;
    const attributes = flower.attributes;

    // 颜色匹配 (20分)
    if (this.userPreferences.favoriteColors &&
        Array.isArray(this.userPreferences.favoriteColors)) {
      if (this.userPreferences.favoriteColors.includes(attributes.color)) {
        score += 20;
      }
    }

    // 花卉类型匹配 (20分)
    if (this.userPreferences.favoriteTypes &&
        Array.isArray(this.userPreferences.favoriteTypes)) {
      if (this.userPreferences.favoriteTypes.includes(attributes.type)) {
        score += 20;
      }
    }

    // 价格范围匹配 (15分)
    if (this.userPreferences.preferredPriceRange &&
        Array.isArray(this.userPreferences.preferredPriceRange) &&
        this.userPreferences.preferredPriceRange.length === 2) {
      const [minPrice, maxPrice] = this.userPreferences.preferredPriceRange;
      if (flower.price >= minPrice && flower.price <= maxPrice) {
        score += 15;
      }
    }

    // 养护难度匹配 (15分)
    if (this.userPreferences.careDifficulty &&
        this.userPreferences.careDifficulty === attributes.careDifficulty) {
      score += 15;
    }

    // 光照需求匹配 (15分)
    if (this.userPreferences.lightRequirement &&
        this.userPreferences.lightRequirement === attributes.lightRequirement) {
      score += 15;
    }

    // 空间大小匹配 (10分)
    if (this.userPreferences.spaceSize &&
        this.userPreferences.spaceSize === attributes.spaceNeeded) {
      score += 10;
    }

    // 确保分数在0-100之间
    return Math.max(0, Math.min(100, score));
  }

  /**
   * 获取基于用户偏好的推荐列表
   * @param {Number} limit 推荐数量限制
   * @returns {Array} 推荐花卉列表
   */
  getRecommendationsBasedOnPreferences(limit = 10) {
    // 计算所有花卉的匹配度
    const flowersWithScores = this.flowerDatabase.map(flower => {
      return {
        ...flower,
        matchingScore: this.calculateMatchingScore(flower)
      };
    });

    // 按匹配度排序并返回前N个
    return flowersWithScores
      .sort((a, b) => b.matchingScore - a.matchingScore)
      .slice(0, limit);
  }

  /**
   * 获取基于浏览历史的推荐
   * @param {Array} browsingHistory 浏览历史记录
   * @param {Number} limit 推荐数量限制
   * @returns {Array} 推荐花卉列表
   */
  getRecommendationsBasedOnBrowsing(browsingHistory, limit = 10) {
    if (!browsingHistory || !Array.isArray(browsingHistory) || browsingHistory.length === 0) {
      return this.getPopularRecommendations(limit);
    }

    // 找到浏览过的花卉
    const browsedFlowers = this.flowerDatabase.filter(flower =>
      browsingHistory.includes(flower.flowerId)
    );

    if (browsedFlowers.length === 0) {
      return this.getPopularRecommendations(limit);
    }

    // 基于浏览过的花卉属性进行推荐
    const recommendedFlowers = [];
    const alreadyRecommended = new Set();

    // 优先推荐相同类型的花卉
    browsedFlowers.forEach(browsedFlower => {
      this.flowerDatabase.forEach(flower => {
        if (flower.flowerId !== browsedFlower.flowerId &&
            !alreadyRecommended.has(flower.flowerId) &&
            flower.attributes.type === browsedFlower.attributes.type) {
          recommendedFlowers.push(flower);
          alreadyRecommended.add(flower.flowerId);
        }
      });
    });

    // 如果推荐数量不足，补充相似颜色的花卉
    if (recommendedFlowers.length < limit) {
      browsedFlowers.forEach(browsedFlower => {
        this.flowerDatabase.forEach(flower => {
          if (flower.flowerId !== browsedFlower.flowerId &&
              !alreadyRecommended.has(flower.flowerId) &&
              flower.attributes.color === browsedFlower.attributes.color) {
            recommendedFlowers.push(flower);
            alreadyRecommended.add(flower.flowerId);
          }
        });
      });
    }

    // 如果还不足，补充热门花卉
    if (recommendedFlowers.length < limit) {
      const popularFlowers = this.getPopularRecommendations(limit * 2);
      popularFlowers.forEach(flower => {
        if (!alreadyRecommended.has(flower.flowerId) &&
            recommendedFlowers.length < limit) {
          recommendedFlowers.push(flower);
          alreadyRecommended.add(flower.flowerId);
        }
      });
    }

    return recommendedFlowers.slice(0, limit);
  }

  /**
   * 获取基于购买历史的推荐
   * @param {Array} purchaseHistory 购买历史记录
   * @param {Number} limit 推荐数量限制
   * @returns {Array} 推荐花卉列表
   */
  getRecommendationsBasedOnPurchase(purchaseHistory, limit = 10) {
    if (!purchaseHistory || !Array.isArray(purchaseHistory) || purchaseHistory.length === 0) {
      return this.getPopularRecommendations(limit);
    }

    // 基于购买历史的推荐逻辑可以与浏览历史类似，但权重更高
    // 这里简化处理，直接调用浏览历史的推荐逻辑
    return this.getRecommendationsBasedOnBrowsing(purchaseHistory, limit);
  }

  /**
   * 获取热门推荐
   * @param {Number} limit 推荐数量限制
   * @returns {Array} 热门花卉列表
   */
  getPopularRecommendations(limit = 10) {
    // 按 popularity 字段排序
    return [...this.flowerDatabase]
      .sort((a, b) => b.attributes.popularity - a.attributes.popularity)
      .slice(0, limit);
  }

  /**
   * 获取季节性推荐
   * @param {String} season 当前季节
   * @param {Number} limit 推荐数量限制
   * @returns {Array} 季节性推荐花卉列表
   */
  getSeasonalRecommendations(season, limit = 10) {
    if (!season) {
      return this.getPopularRecommendations(limit);
    }

    // 筛选适合当前季节的花卉
    const seasonalFlowers = this.flowerDatabase.filter(flower =>
      flower.attributes.season &&
      Array.isArray(flower.attributes.season) &&
      flower.attributes.season.includes(season)
    );

    // 按 popularity 排序
    return seasonalFlowers
      .sort((a, b) => b.attributes.popularity - a.attributes.popularity)
      .slice(0, limit);
  }

  /**
   * 获取基于空间大小的推荐
   * @param {String} spaceSize 空间大小（小、中等、大）
   * @param {Number} limit 推荐数量限制
   * @returns {Array} 空间大小推荐花卉列表
   */
  getSpaceBasedRecommendations(spaceSize, limit = 10) {
    if (!spaceSize) {
      return this.getPopularRecommendations(limit);
    }

    // 筛选适合指定空间大小的花卉
    const spaceSuitableFlowers = this.flowerDatabase.filter(flower =>
      flower.attributes.spaceNeeded === spaceSize
    );

    // 按 popularity 排序
    return spaceSuitableFlowers
      .sort((a, b) => b.attributes.popularity - a.attributes.popularity)
      .slice(0, limit);
  }

  /**
   * 获取花卉搭配建议
   * @param {Number} limit 推荐数量限制
   * @returns {Array} 花卉搭配建议列表
   */
  getFlowerMatchingSuggestions(limit = 5) {
    // 这里可以实现更复杂的搭配算法
    // 目前简化处理，返回预设的搭配组合
    const suggestions = [
      {
        combinationId: 1,
        title: '浪漫爱情组合',
        flowers: [1, 5],
        price: 186.00,
        description: '红玫瑰搭配满天星，象征热情浪漫的爱情',
        scenario: '情人节、求婚、纪念日',
        popularity: 95
      },
      {
        combinationId: 2,
        title: '温馨感恩组合',
        flowers: [3, 2],
        price: 166.00,
        description: '康乃馨搭配百合，表达温馨的感恩之情',
        scenario: '母亲节、教师节、感谢恩师',
        popularity: 90
      },
      {
        combinationId: 3,
        title: '阳光希望组合',
        flowers: [4, 8],
        price: 136.00,
        description: '向日葵搭配雏菊，带来阳光与希望',
        scenario: '鼓励、祝福、新居入伙',
        popularity: 88
      },
      {
        combinationId: 4,
        title: '优雅高贵组合',
        flowers: [6, 7],
        price: 186.00,
        description: '郁金香搭配紫罗兰，展现优雅高贵气质',
        scenario: '商务馈赠、高端场合、庆典',
        popularity: 85
      },
      {
        combinationId: 5,
        title: '多肉植物组合',
        flowers: [10],
        price: 38.00,
        description: '多种可爱多肉植物组合，易于养护',
        scenario: '桌面装饰、办公室绿化、小礼物',
        popularity: 92
      }
    ];

    return suggestions.slice(0, limit);
  }

  /**
   * 获取所有推荐类型的综合推荐
   * @param {Object} options 推荐选项
   * @returns {Object} 综合推荐结果
   */
  getComprehensiveRecommendations(options = {}) {
    const limit = options.limit || 4;

    return {
      basedOnPreferences: this.getRecommendationsBasedOnPreferences(limit),
      basedOnBrowsing: this.getRecommendationsBasedOnBrowsing(options.browsingHistory, limit),
      basedOnPurchase: this.getRecommendationsBasedOnPurchase(options.purchaseHistory, limit),
      popular: this.getPopularRecommendations(limit),
      seasonal: this.getSeasonalRecommendations(options.season, limit)
    };
  }
}

// 导出推荐算法类
module.exports = FlowerRecommendationAlgorithm;
