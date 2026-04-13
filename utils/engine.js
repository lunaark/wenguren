/**
 * 问古人 — 状态管理引擎
 * 管理故事进度、trait 计算、本地存储
 */

const STORAGE_KEY = 'wengurenHistory'

// 当前会话状态（非持久化，页面间通过该模块共享）
let _state = null

/**
 * 初始化一个新的故事会话
 */
function initSession(storyData) {
  _state = {
    storyId: storyData.id,
    storyData: storyData,
    currentNode: null,
    choices: [],
    traits: {},
    nodeCount: 0,
    totalNodes: storyData.totalNodes
  }
  // 初始化所有 trait 为 0
  const traitKeys = Object.keys(storyData.traits)
  traitKeys.forEach(function (key) {
    _state.traits[key] = 0
  })
  return _state
}

/**
 * 获取当前会话状态
 */
function getState() {
  return _state
}

/**
 * 前进到指定节点
 */
function goToNode(nodeId) {
  if (!_state) return null
  const node = _state.storyData.nodes[nodeId]
  if (!node) return null
  _state.currentNode = nodeId
  _state.nodeCount++
  return node
}

/**
 * 记录一次选择
 */
function recordChoice(nodeId, optionIndex, trait, value) {
  if (!_state) return
  _state.choices.push({
    node: nodeId,
    optionIndex: optionIndex,
    trait: trait,
    value: value
  })
  if (trait && typeof value === 'number') {
    _state.traits[trait] = (_state.traits[trait] || 0) + value
  }
}

/**
 * 获取进度百分比
 */
function getProgress() {
  if (!_state) return 0
  return Math.min((_state.nodeCount / _state.totalNodes) * 100, 100)
}

/**
 * 性格分析等级判断
 */
function getTraitLevel(score) {
  if (score >= 3) return 'high'
  if (score >= 1) return 'mid'
  return 'low'
}

/**
 * 生成性格分析结果
 */
function generateAnalysis() {
  if (!_state) return []
  const storyData = _state.storyData
  const analysis = storyData.ending.traitAnalysis
  const result = []

  Object.keys(_state.traits).forEach(function (traitKey) {
    const score = _state.traits[traitKey]
    const level = getTraitLevel(score)
    const traitInfo = storyData.traits[traitKey]
    if (analysis[traitKey] && analysis[traitKey][level]) {
      result.push({
        name: traitInfo.name,
        level: level,
        text: analysis[traitKey][level]
      })
    }
  })

  return result
}

/**
 * 保存完成记录到本地存储
 */
function saveCompletion() {
  if (!_state) return
  var history = wx.getStorageSync(STORAGE_KEY) || {}
  history[_state.storyId] = {
    completed: true,
    completedAt: new Date().toISOString(),
    choices: _state.choices,
    traits: Object.assign({}, _state.traits)
  }
  wx.setStorageSync(STORAGE_KEY, history)
}

/**
 * 获取某个故事的历史记录
 */
function getHistory(storyId) {
  var history = wx.getStorageSync(STORAGE_KEY) || {}
  return history[storyId] || null
}

/**
 * 清除某个故事的历史记录
 */
function clearHistory(storyId) {
  var history = wx.getStorageSync(STORAGE_KEY) || {}
  delete history[storyId]
  wx.setStorageSync(STORAGE_KEY, history)
}

module.exports = {
  initSession: initSession,
  getState: getState,
  goToNode: goToNode,
  recordChoice: recordChoice,
  getProgress: getProgress,
  getTraitLevel: getTraitLevel,
  generateAnalysis: generateAnalysis,
  saveCompletion: saveCompletion,
  getHistory: getHistory,
  clearHistory: clearHistory
}
