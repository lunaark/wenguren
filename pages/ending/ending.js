var engine = require('../../utils/engine.js')
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
    storyId: '',
    epilogueLines: [],
    stats: [],
    analysis: [],
    reflectionLines: [],
    comingSoonLines: []
  },

  onLoad: function (options) {
    var sysInfo = wx.getSystemInfoSync()
    var statusBarHeight = sysInfo.statusBarHeight || 44

    var storyId = (options && options.id) || 'su-dongpo'
    var storyData = this._getStoryData(storyId)
    if (!storyData) return

    var ending = storyData.ending

    // 生成性格分析
    var analysis = engine.generateAnalysis()

    this.setData({
      statusBarHeight: statusBarHeight,
      storyId: storyId,
      epilogueLines: ending.epilogue.split('\n'),
      stats: ending.stats,
      analysis: analysis,
      reflectionLines: ending.reflection.split('\n'),
      comingSoonLines: ending.comingSoon.split('\n')
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

  /**
   * 重新体验
   */
  onRestart: function () {
    var storyId = this.data.storyId
    engine.clearHistory(storyId)
    wx.redirectTo({
      url: '/pages/story/story?id=' + storyId
    })
  },

  /**
   * 返回首页
   */
  onGoHome: function () {
    wx.redirectTo({
      url: '/pages/index/index'
    })
  },

  /**
   * 转发给好友
   */
  onShareAppMessage: function () {
    var storyData = this._getStoryData(this.data.storyId)
    var name = storyData ? storyData.name : '古人'
    return {
      title: '我刚体验完「' + name + '」的人生抉择，你也来试试？',
      path: '/pages/intro/intro?id=' + this.data.storyId
    }
  },

  /**
   * 分享到朋友圈
   */
  onShareTimeline: function () {
    var storyData = this._getStoryData(this.data.storyId)
    var name = storyData ? storyData.name : '古人'
    return {
      title: '问古人 · 我刚走完' + name + '的一生，你呢？',
      query: 'id=' + this.data.storyId
    }
  }
})
