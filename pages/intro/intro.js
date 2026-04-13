var suDongpo = require('../../utils/stories/su-dongpo.js')
var suShi2 = require('../../utils/stories/su-shi-2.js')
var suShi3 = require('../../utils/stories/su-shi-3.js')
var zhugeLiang = require('../../utils/stories/zhuge-liang.js')
var liQingzhao = require('../../utils/stories/li-qingzhao.js')
var liQingzhao2 = require('../../utils/stories/li-qingzhao-2.js')
var liQingzhao3 = require('../../utils/stories/li-qingzhao-3.js')
var zhangJuzheng = require('../../utils/stories/zhang-juzheng.js')
var zhangJuzheng2 = require('../../utils/stories/zhang-juzheng-2.js')

Page({
  data: {
    statusBarHeight: 0,
    name: '',
    dynasty: '',
    quote: '',
    intro: '',
    duration: '',
    choiceCount: 0,
    storyId: ''
  },

  onLoad: function (options) {
    var sysInfo = wx.getSystemInfoSync()
    var storyId = (options && options.id) || 'su-dongpo'
    var storyData = this._getStoryData(storyId)
    if (!storyData) return

    this.setData({
      statusBarHeight: sysInfo.statusBarHeight || 44,
      storyId: storyId,
      name: storyData.name,
      dynasty: storyData.dynasty,
      quote: storyData.quote,
      intro: storyData.intro,
      duration: storyData.duration,
      choiceCount: storyData.choiceCount
    })
  },

  _getStoryData: function (storyId) {
    if (storyId === 'su-dongpo') return suDongpo
    if (storyId === 'su-shi-2') return suShi2
    if (storyId === 'su-shi-3') return suShi3
    if (storyId === 'zhuge-liang') return zhugeLiang
    if (storyId === 'li-qingzhao') return liQingzhao
    if (storyId === 'li-qingzhao-2') return liQingzhao2
    if (storyId === 'li-qingzhao-3') return liQingzhao3
    if (storyId === 'zhang-juzheng') return zhangJuzheng
    if (storyId === 'zhang-juzheng-2') return zhangJuzheng2
    return null
  },

  onStartTap: function () {
    wx.redirectTo({
      url: '/pages/story/story?id=' + this.data.storyId
    })
  },

  onBackTap: function () {
    wx.navigateBack()
  },

  /**
   * 转发给好友
   */
  onShareAppMessage: function () {
    return {
      title: '问古人 · ' + this.data.name + ' — ' + this.data.quote,
      path: '/pages/intro/intro?id=' + this.data.storyId
    }
  },

  /**
   * 分享到朋友圈
   */
  onShareTimeline: function () {
    return {
      title: '问古人 · ' + this.data.name + ' — ' + this.data.quote,
      query: 'id=' + this.data.storyId
    }
  }
})
