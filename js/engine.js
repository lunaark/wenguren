/**
 * 问古人 — 状态管理引擎（H5 版）
 */
(function () {
  var STORAGE_KEY = 'wengurenHistory';
  var _state = null;

  function readStorage() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function writeStorage(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {}
  }

  function initSession(storyData) {
    _state = {
      storyId: storyData.id,
      storyData: storyData,
      currentNode: null,
      choices: [],
      traits: {},
      nodeCount: 0,
      totalNodes: storyData.totalNodes
    };
    Object.keys(storyData.traits).forEach(function (key) {
      _state.traits[key] = 0;
    });
    return _state;
  }

  function getState() {
    return _state;
  }

  function goToNode(nodeId) {
    if (!_state) return null;
    var node = _state.storyData.nodes[nodeId];
    if (!node) return null;
    _state.currentNode = nodeId;
    _state.nodeCount++;
    return node;
  }

  function recordChoice(nodeId, optionIndex, trait, value) {
    if (!_state) return;
    _state.choices.push({
      node: nodeId,
      optionIndex: optionIndex,
      trait: trait,
      value: value
    });
    if (trait && typeof value === 'number') {
      _state.traits[trait] = (_state.traits[trait] || 0) + value;
    }
  }

  function getProgress() {
    if (!_state) return 0;
    return Math.min((_state.nodeCount / _state.totalNodes) * 100, 100);
  }

  function getTraitLevel(score) {
    if (score >= 3) return 'high';
    if (score >= 1) return 'mid';
    return 'low';
  }

  function generateAnalysis() {
    if (!_state) return [];
    var storyData = _state.storyData;
    var analysis = storyData.ending.traitAnalysis;
    var result = [];
    Object.keys(_state.traits).forEach(function (traitKey) {
      var score = _state.traits[traitKey];
      var level = getTraitLevel(score);
      var traitInfo = storyData.traits[traitKey];
      if (analysis[traitKey] && analysis[traitKey][level]) {
        result.push({
          name: traitInfo.name,
          level: level,
          text: analysis[traitKey][level]
        });
      }
    });
    return result;
  }

  function saveCompletion() {
    if (!_state) return;
    var history = readStorage();
    history[_state.storyId] = {
      completed: true,
      completedAt: new Date().toISOString(),
      choices: _state.choices,
      traits: Object.assign({}, _state.traits)
    };
    writeStorage(history);
  }

  function getHistory(storyId) {
    var history = readStorage();
    return history[storyId] || null;
  }

  function clearHistory(storyId) {
    var history = readStorage();
    delete history[storyId];
    writeStorage(history);
  }

  window.engine = {
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
  };
})();
