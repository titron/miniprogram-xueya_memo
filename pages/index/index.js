Page({
  saveRecord(e) {
    // 获取表单数据
    const formData = e.detail.value
    if (!formData.systolic || !formData.diastolic) {
      wx.showToast({ title: '请填写完整数据', icon: 'none' })
      return
    }

    // 新建记录
    const record = {
      date: new Date().toLocaleString(),
      systolic: parseInt(formData.systolic),
      diastolic: parseInt(formData.diastolic),
      heartRate: formData.heartRate ? parseInt(formData.heartRate) : null,
      note: formData.note.trim() || ''
    }

    // 获取全局和本地存储的数据
    const app = getApp()
    app.globalData.records = wx.getStorageSync('bpRecords') || [] // 重新加载本地存储数据

    // 新记录追加到数组开头（倒序排列）
    app.globalData.records.unshift(record)

    // 保存到本地存储
    wx.setStorage({
      key: 'bpRecords',
      data: app.globalData.records,
      success: () => {
        wx.showToast({ title: '保存成功' })
      },
      fail: () => {
        wx.showToast({ title: '保存失败', icon: 'none' })
      }
    })
  }
})