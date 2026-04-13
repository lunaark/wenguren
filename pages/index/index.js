var suDongpo = require('../../utils/stories/su-dongpo.js')
var suShi2 = require('../../utils/stories/su-shi-2.js')
var suShi3 = require('../../utils/stories/su-shi-3.js')
var zhugeLiang = require('../../utils/stories/zhuge-liang.js')
var liQingzhao = require('../../utils/stories/li-qingzhao.js')
var liQingzhao2 = require('../../utils/stories/li-qingzhao-2.js')
var liQingzhao3 = require('../../utils/stories/li-qingzhao-3.js')
var zhangJuzheng = require('../../utils/stories/zhang-juzheng.js')
var zhangJuzheng2 = require('../../utils/stories/zhang-juzheng-2.js')
var comingSoonList = require('../../utils/stories/coming-soon.js')
var engine = require('../../utils/engine.js')

// 人物分组配置：同一人物多篇章合并展示
var characterGroups = [
  {
    name: '苏轼',
    dynasty: '北宋',
    glyph: '苏',
    glyphColor: 'rgba(184, 150, 62, 0.12)',
    stories: [suShi3, suDongpo, suShi2]  // 少年入京 → 乌台诗案 → 岭南纪行
  },
  {
    name: '张居正',
    dynasty: '明',
    glyph: '正',
    glyphColor: 'rgba(200, 75, 49, 0.12)',
    stories: [zhangJuzheng, zhangJuzheng2]
  },
  {
    name: '诸葛亮',
    dynasty: '三国',
    glyph: '亮',
    glyphColor: 'rgba(61, 90, 128, 0.12)',
    stories: [zhugeLiang]
  },
  {
    name: '李清照',
    dynasty: '宋',
    glyph: '照',
    glyphColor: 'rgba(91, 140, 111, 0.12)',
    stories: [liQingzhao2, liQingzhao, liQingzhao3]  // 汴京春早 → 南渡飘零 → 临安晚秋
  }
]

Page({
  data: {
    statusBarHeight: 0,
    characters: [],
    comingSoon: []
  },

  onLoad: function () {
    var sysInfo = wx.getSystemInfoSync()
    this.setData({
      statusBarHeight: sysInfo.statusBarHeight || 44,
      comingSoon: comingSoonList
    })
    this._refreshCharacters()
  },

  onShow: function () {
    this._refreshCharacters()
  },

  _refreshCharacters: function () {
    var characters = characterGroups.map(function (group) {
      var chapters = group.stories.map(function (story, index) {
        var history = engine.getHistory(story.id)
        return {
          id: story.id,
          label: '第' + (index + 1 === 1 ? '一' : index + 1 === 2 ? '二' : index + 1 === 3 ? '三' : '四') + '篇',
          subtitle: story.subtitle,
          duration: story.duration,
          choiceCount: story.choiceCount,
          completed: history ? history.completed : false
        }
      })
      // 单篇人物保持简洁展示
      var isSingle = chapters.length === 1
      return {
        name: group.name,
        dynasty: group.dynasty,
        glyph: group.glyph,
        glyphColor: group.glyphColor,
        isSingle: isSingle,
        // 单篇时直接用故事数据
        id: isSingle ? chapters[0].id : '',
        subtitle: isSingle ? chapters[0].subtitle : '',
        duration: isSingle ? chapters[0].duration : '',
        choiceCount: isSingle ? chapters[0].choiceCount : 0,
        completed: isSingle ? chapters[0].completed : false,
        // 多篇时用篇章列表
        chapters: isSingle ? [] : chapters
      }
    })
    this.setData({ characters: characters })
  },

  onCharTap: function (e) {
    var id = e.currentTarget.dataset.id
    if (!id) return
    wx.navigateTo({
      url: '/pages/intro/intro?id=' + id
    })
  },

  onComingTap: function () {
    wx.showToast({
      title: '敬请期待',
      icon: 'none',
      duration: 1500
    })
  },

  /**
   * 转发给好友
   */
  onShareAppMessage: function () {
    return {
      title: '问古人 — 沉浸式历史体验',
      path: '/pages/index/index'
    }
  },

  /**
   * 分享到朋友圈
   */
  onShareTimeline: function () {
    return {
      title: '问古人 — 沉浸式历史体验'
    }
  }
})
