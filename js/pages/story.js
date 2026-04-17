/**
 * 故事页：场景渲染 + 选择/继续 + 性格 flash
 */
(function () {
  var currentStoryId = null;
  var flashTimer = null;

  function renderScene(scene, idx) {
    var esc = window.h.esc;
    var delay = 'style="animation-delay:' + (idx * 200) + 'ms"';
    switch (scene.type) {
      case 'atmosphere':
        return '<div class="scene-atmosphere anim-fade" ' + delay + '><span>' + esc(scene.text) + '</span></div>';
      case 'narration':
        return '<div class="scene-narration anim-fade" ' + delay + '><span>' + esc(scene.text) + '</span></div>';
      case 'dialogue':
        return ''
          + '<div class="scene-dialogue anim-fade" ' + delay + '>'
          +   '<span class="dialogue-speaker">' + esc(scene.speaker) + '</span>'
          +   '<span class="dialogue-text">' + esc(scene.text) + '</span>'
          + '</div>';
      case 'transition':
        return ''
          + '<div class="scene-transition anim-fade" ' + delay + '>'
          +   '<span class="transition-year">' + esc(scene.year) + '</span>'
          +   '<span class="transition-desc">' + esc(scene.desc) + '</span>'
          + '</div>';
      case 'divider':
        return ''
          + '<div class="scene-divider anim-fade" ' + delay + '>'
          +   '<div class="divider-line"></div>'
          +   '<span class="divider-diamond">◆</span>'
          +   '<div class="divider-line"></div>'
          + '</div>';
      case 'poem':
        var lines = (scene.lines || []).map(function (l) {
          return '<span class="poem-line">' + esc(l) + '</span>';
        }).join('');
        var note = scene.note ? '<span class="poem-note">' + esc(scene.note) + '</span>' : '';
        return ''
          + '<div class="scene-poem anim-fade" ' + delay + '>'
          +   '<span class="poem-title">' + esc(scene.title) + '</span>'
          +   '<div class="poem-lines">' + lines + '</div>'
          +   note
          + '</div>';
      default:
        return '';
    }
  }

  function showFlash(text) {
    var el = document.getElementById('personality-flash');
    if (!el) return;
    el.textContent = text;
    el.classList.add('show');
    if (flashTimer) clearTimeout(flashTimer);
    flashTimer = setTimeout(function () {
      el.classList.remove('show');
    }, 2500);
  }

  function renderNode(nodeId) {
    var node = window.engine.goToNode(nodeId);
    if (!node) return;

    var progress = window.engine.getProgress();
    var isEnding = node.action && node.action.type === 'ending';
    var actionType = isEnding ? 'continue' : (node.action ? node.action.type : '');
    var scenes = node.scenes || [];
    var lastDelay = scenes.length * 200;
    var choiceDelay = lastDelay + 600;
    var esc = window.h.esc;

    var scenesHtml = scenes.map(renderScene).join('');

    var actionHtml = '';
    if (actionType === 'choice') {
      var prompt = esc(node.action.prompt || '你的选择');
      var optsHtml = (node.action.options || []).map(function (opt, i) {
        return '<div class="choice-btn" data-index="' + i + '"><span>' + esc(opt.text) + '</span></div>';
      }).join('');
      actionHtml = ''
        + '<div class="choices-container anim-fade" style="animation-delay:' + choiceDelay + 'ms">'
        +   '<span class="choices-prompt">— ' + prompt + ' —</span>'
        +   optsHtml
        + '</div>';
    } else if (actionType === 'continue') {
      var nextNode = isEnding ? '__ending__' : (node.action.next || '');
      actionHtml = ''
        + '<div class="continue-container anim-fade" style="animation-delay:' + choiceDelay + 'ms">'
        +   '<div class="btn-continue" data-next="' + esc(nextNode) + '"><span>继 续</span></div>'
        + '</div>';
    }

    var yearTag = node.year ? '<div class="year-tag anim-fade"><span>' + esc(node.year) + '</span></div>' : '';

    document.getElementById('progress-bar').style.width = progress + '%';
    document.getElementById('header-chapter').textContent = node.chapter || '';
    document.getElementById('story-body').innerHTML = ''
      + yearTag
      + scenesHtml
      + actionHtml
      + '<div class="bottom-spacer"></div>';

    bindNodeActions();
    window.scrollTo(0, 0);
  }

  function bindNodeActions() {
    var body = document.getElementById('story-body');
    body.querySelectorAll('.choice-btn').forEach(function (el) {
      el.addEventListener('click', function () {
        var idx = parseInt(el.dataset.index, 10);
        var state = window.engine.getState();
        if (!state) return;
        var node = state.storyData.nodes[state.currentNode];
        var option = node.action.options[idx];
        if (!option) return;
        window.engine.recordChoice(state.currentNode, idx, option.trait, option.value);
        if (option.flash) showFlash(option.flash);
        setTimeout(function () { renderNode(option.next); }, 300);
      });
    });
    body.querySelectorAll('.btn-continue').forEach(function (el) {
      el.addEventListener('click', function () {
        var next = el.dataset.next;
        if (!next) return;
        if (next === '__ending__') {
          window.engine.saveCompletion();
          var sid = window.engine.getState().storyId;
          window.navigateReplace('/ending', { id: sid });
          return;
        }
        renderNode(next);
      });
    });
  }

  function confirmExit() {
    if (confirm('退出将丢失当前进度，是否确认？')) {
      window.navigate('/');
    }
  }

  window.pages.story = function (root, storyId, startNode) {
    storyId = storyId || 'su-dongpo';
    var story = window.STORIES[storyId];
    if (!story) {
      window.navigateReplace('/');
      return;
    }
    currentStoryId = storyId;
    window.engine.initSession(story);

    root.innerHTML = ''
      + '<div class="story-page page-frame">'
      +   '<div class="progress-bar" id="progress-bar"></div>'
      +   '<div class="header">'
      +     '<div class="header-inner">'
      +       '<div class="header-back" id="header-back"><span class="back-arrow">‹</span></div>'
      +       '<span class="header-chapter" id="header-chapter"></span>'
      +     '</div>'
      +   '</div>'
      +   '<div class="body" id="story-body"></div>'
      +   '<div class="personality-flash" id="personality-flash"></div>'
      + '</div>';

    document.getElementById('header-back').addEventListener('click', confirmExit);

    renderNode(startNode || 'start');
  };
})();
