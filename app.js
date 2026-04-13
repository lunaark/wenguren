App({
  onLaunch() {
    // 初始化本地存储
    if (!wx.getStorageSync('wengurenHistory')) {
      wx.setStorageSync('wengurenHistory', {})
    }
  }
})
