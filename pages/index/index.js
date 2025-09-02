// index.js
Page({
  data: {},

  saveRecord(e) {
    const formData = e.detail.value
    if (!formData.systolic || !formData.diastolic) {
      wx.showToast({ title: '请填写完整数据', icon: 'none' })
      return
    }

    const record = {
      date: new Date().toLocaleString(),
      systolic: formData.systolic,
      diastolic: formData.diastolic,
      heartRate: formData.heartRate || '无',
      note: formData.note || '无'
    }

    const app = getApp()
    app.globalData.records.unshift(record)
    wx.setStorageSync('bpRecords', app.globalData.records)
    wx.showToast({ title: '保存成功' })
  }
})