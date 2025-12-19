// pages/preferences/preferences.js
import { recommendationRequest } from '../../api/index';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userProfile: null,
    // 偏好选项数据
    colorOptions: [
      { name: '红色', value: '红色', checked: false },
      { name: '粉色', value: '粉色', checked: false },
      { name: '白色', value: '白色', checked: false },
      { name: '黄色', value: '黄色', checked: false },
      { name: '紫色', value: '紫色', checked: false },
      { name: '绿色', value: '绿色', checked: false }
    ],
    typeOptions: [
      { name: '玫瑰', value: '玫瑰', checked: false },
      { name: '百合', value: '百合', checked: false },
      { name: '康乃馨', value: '康乃馨', checked: false },
      { name: '向日葵', value: '向日葵', checked: false },
      { name: '满天星', value: '满天星', checked: false },
      { name: '郁金香', value: '郁金香', checked: false },
      { name: '多肉', value: '多肉', checked: false }
    ],
    careDifficultyOptions: [
      { name: '简单', value: '简单', checked: false },
      { name: '中等', value: '中等', checked: false },
      { name: '困难', value: '困难', checked: false }
    ],
    lightRequirementOptions: [
      { name: '阳光充足', value: '阳光充足', checked: false },
      { name: '半阴', value: '半阴', checked: false },
      { name: '阴生', value: '阴生', checked: false }
    ],
    spaceSizeOptions: [
      { name: '小（桌面）', value: '小', checked: false },
      { name: '中等（阳台）', value: '中等', checked: false },
      { name: '大（庭院）', value: '大', checked: false }
    ],
    priceRange: [50, 200],
    priceRangeText: '50-200元'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadUserProfile();
  },

  /**
   * 加载用户画像数据
   */
  loadUserProfile: function() {
    wx.showLoading({
      title: '加载中...'
    });

    recommendationRequest.getUserProfile()
      .then(res => {
        wx.hideLoading();
        if (res.code === 666) {
          this.setData({
            userProfile: res.userProfile
          });
          this.initPreferenceOptions(res.userProfile.preferences);
        }
      })
      .catch(err => {
        wx.hideLoading();
        console.error('加载用户画像失败:', err);
        wx.showToast({
          title: '加载失败',
          icon: 'error'
        });
      });
  },

  /**
   * 初始化偏好选项
   */
  initPreferenceOptions: function(preferences) {
    // 初始化颜色偏好
    let colorOptions = this.data.colorOptions.map(option => {
      return {
        ...option,
        checked: preferences.favoriteColors.includes(option.value)
      };
    });

    // 初始化花卉类型偏好
    let typeOptions = this.data.typeOptions.map(option => {
      return {
        ...option,
        checked: preferences.favoriteTypes.includes(option.value)
      };
    });

    // 初始化养护难度偏好
    let careDifficultyOptions = this.data.careDifficultyOptions.map(option => {
      return {
        ...option,
        checked: option.value === preferences.careDifficulty
      };
    });

    // 初始化光照需求偏好
    let lightRequirementOptions = this.data.lightRequirementOptions.map(option => {
      return {
        ...option,
        checked: option.value === preferences.lightRequirement
      };
    });

    // 初始化空间大小偏好
    let spaceSizeOptions = this.data.spaceSizeOptions.map(option => {
      return {
        ...option,
        checked: option.value === preferences.spaceSize
      };
    });

    this.setData({
      colorOptions,
      typeOptions,
      careDifficultyOptions,
      lightRequirementOptions,
      spaceSizeOptions,
      priceRange: preferences.preferredPriceRange,
      priceRangeText: `${preferences.preferredPriceRange[0]}-${preferences.preferredPriceRange[1]}元`
    });
  },

  /**
   * 颜色选择变化
   */
  onColorChange: function(e) {
    // 更新颜色选项的选中状态
    let colorOptions = this.data.colorOptions.map(option => {
      return {
        ...option,
        checked: e.detail.value.includes(option.value)
      };
    });
    this.setData({ colorOptions });
  },

  /**
   * 花卉类型选择变化
   */
  onTypeChange: function(e) {
    // 更新花卉类型选项的选中状态
    let typeOptions = this.data.typeOptions.map(option => {
      return {
        ...option,
        checked: e.detail.value.includes(option.value)
      };
    });
    this.setData({ typeOptions });
  },

  /**
   * 养护难度选择变化
   */
  onCareDifficultyChange: function(e) {
    let careDifficultyOptions = this.data.careDifficultyOptions.map(option => {
      return {
        ...option,
        checked: option.value === e.detail.value
      };
    });
    this.setData({ careDifficultyOptions });
  },

  /**
   * 光照需求选择变化
   */
  onLightRequirementChange: function(e) {
    let lightRequirementOptions = this.data.lightRequirementOptions.map(option => {
      return {
        ...option,
        checked: option.value === e.detail.value
      };
    });
    this.setData({ lightRequirementOptions });
  },

  /**
   * 空间大小选择变化
   */
  onSpaceSizeChange: function(e) {
    let spaceSizeOptions = this.data.spaceSizeOptions.map(option => {
      return {
        ...option,
        checked: option.value === e.detail.value
      };
    });
    this.setData({ spaceSizeOptions });
  },

  /**
   * 价格范围变化
   */
  onPriceRangeChange: function(e) {
    this.setData({
      priceRange: e.detail.value,
      priceRangeText: `${e.detail.value[0]}-${e.detail.value[1]}元`
    });
  },

  /**
   * 保存用户偏好
   */
  savePreferences: function() {
    // 收集用户偏好
    let preferences = {
      favoriteColors: this.data.colorOptions.filter(option => option.checked).map(option => option.value),
      favoriteTypes: this.data.typeOptions.filter(option => option.checked).map(option => option.value),
      preferredPriceRange: this.data.priceRange,
      careDifficulty: this.data.careDifficultyOptions.find(option => option.checked)?.value || '中等',
      lightRequirement: this.data.lightRequirementOptions.find(option => option.checked)?.value || '阳光充足',
      spaceSize: this.data.spaceSizeOptions.find(option => option.checked)?.value || '中等'
    };

    wx.showLoading({
      title: '保存中...'
    });

    recommendationRequest.updateUserPreferences(preferences)
      .then(res => {
        wx.hideLoading();
        if (res.code === 666) {
          wx.showToast({
            title: '保存成功',
            icon: 'success'
          });
          // 返回上一页
          setTimeout(() => {
            wx.navigateBack();
          }, 1500);
        } else {
          wx.showToast({
            title: '保存失败',
            icon: 'error'
          });
        }
      })
      .catch(err => {
        wx.hideLoading();
        console.error('保存用户偏好失败:', err);
        wx.showToast({
          title: '保存失败',
          icon: 'error'
        });
      });
  },

  /**
   * 重置偏好设置
   */
  resetPreferences: function() {
    wx.showModal({
      title: '确认重置',
      content: '您确定要重置所有偏好设置吗？',
      success: (res) => {
        if (res.confirm) {
          this.loadUserProfile();
        }
      }
    });
  }
});
