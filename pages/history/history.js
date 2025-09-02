// history.js
Page({
  data: {
    records: []
  },

  onShow() {
    const app = getApp()
    this.setData({
      records: app.globalData.records
    })
  },

  deleteRecord(e) {
    const index = e.currentTarget.dataset.index
    const app = getApp()
    
    app.globalData.records.splice(index, 1)
    wx.setStorageSync('bpRecords', app.globalData.records)
    this.setData({ records: app.globalData.records })
  }
})