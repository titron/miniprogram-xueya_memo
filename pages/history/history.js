Page({
  data: {
    records: [] // 当前页面显示的数据
  },

  onShow() {
    this.loadRecords() // 加载时刷新数据
  },

  loadRecords() {
    const storedRecords = wx.getStorageSync('bpRecords') || [] // 从本地存储中加载
    this.setData({ records: storedRecords }) // 更新页面数据
  },

  deleteRecord(e) {
    const index = e.currentTarget.dataset.index
    const updatedRecords = this.data.records
    updatedRecords.splice(index, 1) // 从数组中移除对应记录

    // 更新本地存储和页面
    wx.setStorage({
      key: 'bpRecords',
      data: updatedRecords,
      success: () => {
        wx.showToast({ title: '删除成功' })
        this.setData({ records: updatedRecords }) // 更新页面
      },
      fail: () => {
        wx.showToast({ title: '删除失败', icon: 'none' })
      }
    })
  }
})