// app.js
App({
  globalData: {
    records: [] // 用于缓存历史记录
  },

  onLaunch() {
    // 冷启动时加载存储到的历史记录到 globalData
    const storedRecords = wx.getStorageSync('bpRecords') || []
    this.globalData.records = storedRecords
  }
})