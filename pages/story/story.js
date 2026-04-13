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
    headerHeight: 0,
    progress: 0,
    chapter: '',
    year: '',
    scenes: [],
    actionType: '',      // 'choice' | 'continue' | 'ending'
    actionPrompt: '',
    options: [],
    actionNext: '',      // continue 时的下一个节点
    choiceDelay: 0,
    flashVisible: false,
    flashText: ''
  },

  onLoad: function (options) {
    var storyId = (options && options.id) || 'su-dongpo'
    var storyData = this._getStoryData(storyId)
    if (!storyData) return

    engine.initSession(storyData)

    // 获取状态栏和胶囊按钮高度，精确适配顶栏
    var sysInfo = wx.getSystemInfoSync()
    var menuRect = wx.getMenuButtonBoundingClientRect()
    var statusBarHeight = sysInfo.statusBarHeight || 44
    // 顶栏底部 = 胶囊底部 + 与顶部相同的间距
    var menuMarginTop = menuRect.top - statusBarHeight
    var headerHeight = menuRect.bottom + menuMarginTop

    this.setData({
      statusBarHeight: statusBarHeight,
      headerHeight: headerHeight
    })

    // 从 start 节点开始
    var startNode = options && options.node ? options.node : 'start'
    this._renderNode(startNode)
  },

  /**
   * 根据 storyId 获取故事数据
   */
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
   * 渲染指定节点
   */
  _renderNode: function (nodeId) {
    var node = engine.goToNode(nodeId)
    if (!node) return

    var progress = engine.getProgress()

    // 检查是否为结局
    if (node.action && node.action.type === 'ending') {
      // 先渲染结局前最后一个节点的内容
      var scenes = this._prepareScenesDelay(node.scenes || [])
      var lastDelay = scenes.length * 200

      this.setData({
        progress: progress,
        chapter: node.chapter,
        year: node.year,
        scenes: scenes,
        actionType: 'continue',
        actionPrompt: '',
        options: [],
        actionNext: '__ending__',
        choiceDelay: lastDelay + 600
      })

      wx.pageScrollTo({ scrollTop: 0, duration: 0 })
      return
    }

    // 为 scenes 添加动画延迟
    var scenes = this._prepareScenesDelay(node.scenes || [])
    var lastDelay = scenes.length * 200

    var actionType = node.action ? node.action.type : ''
    var actionPrompt = ''
    var options = []
    var actionNext = ''

    if (actionType === 'choice') {
      actionPrompt = node.action.prompt || '你的选择'
      options = node.action.options || []
    } else if (actionType === 'continue') {
      actionNext = node.action.next || ''
    }

    this.setData({
      progress: progress,
      chapter: node.chapter,
      year: node.year,
      scenes: scenes,
      actionType: actionType,
      actionPrompt: actionPrompt,
      options: options,
      actionNext: actionNext,
      choiceDelay: lastDelay + 600
    })

    wx.pageScrollTo({ scrollTop: 0, duration: 0 })
  },

  /**
   * 为场景列表添加递增的动画延迟
   */
  _prepareScenesDelay: function (scenes) {
    return scenes.map(function (scene, index) {
      var s = {}
      // 浅拷贝所有属性
      Object.keys(scene).forEach(function (key) {
        s[key] = scene[key]
      })
      s._delay = index * 200
      return s
    })
  },

  /**
   * 返回按钮点击
   */
  onBackTap: function () {
    wx.showModal({
      title: '',
      content: '退出将丢失当前进度，是否确认？',
      confirmText: '确认退出',
      cancelText: '继续体验',
      confirmColor: '#8B7355',
      success: function (res) {
        if (res.confirm) {
          wx.navigateBack({
            fail: function () {
              wx.redirectTo({ url: '/pages/index/index' })
            }
          })
        }
      }
    })
  },

  /**
   * 选择按钮点击
   */
  onChoiceTap: function (e) {
    var index = e.currentTarget.dataset.index
    var state = engine.getState()
    if (!state) return

    var option = this.data.options[index]
    if (!option) return

    // 记录选择
    engine.recordChoice(state.currentNode, index, option.trait, option.value)

    // 显示性格提示
    if (option.flash) {
      this._showFlash(option.flash)
    }

    // 延迟后跳转
    var self = this
    setTimeout(function () {
      self._renderNode(option.next)
    }, 300)
  },

  /**
   * 继续按钮点击
   */
  onContinueTap: function () {
    var next = this.data.actionNext
    if (!next) return

    if (next === '__ending__') {
      // 保存完成记录，跳转结局页
      engine.saveCompletion()
      wx.redirectTo({
        url: '/pages/ending/ending?id=' + engine.getState().storyId
      })
      return
    }

    this._renderNode(next)
  },

  /**
   * 显示性格提示
   */
  _showFlash: function (text) {
    var self = this
    this.setData({
      flashText: text,
      flashVisible: true
    })
    setTimeout(function () {
      self.setData({ flashVisible: false })
    }, 2500)
  },

  /**
   * 转发给好友（体验中分享）
   */
  onShareAppMessage: function () {
    var state = engine.getState()
    var storyData = state ? state.storyData : null
    var title = storyData
      ? '我正在体验「' + storyData.name + '」的故事'
      : '问古人 — 沉浸式历史体验'
    var storyId = state ? state.storyId : 'su-dongpo'
    return {
      title: title,
      path: '/pages/intro/intro?id=' + storyId
    }
  },

  /**
   * 分享到朋友圈
   */
  onShareTimeline: function () {
    var state = engine.getState()
    var storyData = state ? state.storyData : null
    var title = storyData
      ? '问古人 · ' + storyData.name + ' — ' + storyData.subtitle
      : '问古人 — 沉浸式历史体验'
    var storyId = state ? state.storyId : 'su-dongpo'
    return {
      title: title,
      query: 'id=' + storyId
    }
  }
})
