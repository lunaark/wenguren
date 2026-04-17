/**
 * 结局页：尾声 + 性格分析 + 分享
 */
(function () {
  function shareSite(story) {
    var title = '问古人 · 我刚走完' + story.name + '的一生，你呢？';
    var url = location.origin + location.pathname + '#/intro?id=' + story.id;
    if (navigator.share) {
      navigator.share({ title: title, text: title, url: url }).catch(function () {});
      return;
    }
    // 降级：复制链接
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url).then(function () {
        alert('链接已复制：' + url);
      }, function () {
        prompt('复制此链接分享给好友：', url);
      });
    } else {
      prompt('复制此链接分享给好友：', url);
    }
  }

  window.pages.ending = function (root, storyId) {
    storyId = storyId || 'su-dongpo';
    var story = window.STORIES[storyId];
    if (!story) {
      window.navigateReplace('/');
      return;
    }
    var esc = window.h.esc;
    var ending = story.ending;
    var analysis = window.engine.generateAnalysis();

    var epilogueHtml = ending.epilogue.split('\n').map(function (l) {
      return '<span class="epilogue-line">' + esc(l) + '</span>';
    }).join('');
    var statsHtml = ending.stats.map(function (s) {
      return '<div class="stat-item">'
        +   '<span class="stat-num">' + esc(s.num) + '</span>'
        +   '<span class="stat-label">' + esc(s.label) + '</span>'
        + '</div>';
    }).join('');
    var analysisHtml = analysis.map(function (a) {
      return '<div class="analysis-item"><span class="analysis-text">' + esc(a.text) + '</span></div>';
    }).join('');
    var reflectionHtml = ending.reflection.split('\n').map(function (l) {
      return '<span class="reflection-line">' + esc(l) + '</span>';
    }).join('');
    var comingHtml = ending.comingSoon.split('\n').map(function (l) {
      return '<span class="coming-soon-line">' + esc(l) + '</span>';
    }).join('');

    root.innerHTML = ''
      + '<div class="ending-page page-frame">'
      +   '<div class="ending-container">'
      +     '<span class="ending-label">尾 声</span>'
      +     '<div class="ending-epilogue">' + epilogueHtml + '</div>'
      +     '<div class="ending-divider">'
      +       '<div class="divider-line"></div>'
      +       '<span class="divider-diamond">◆</span>'
      +       '<div class="divider-line"></div>'
      +     '</div>'
      +     '<div class="ending-stats">' + statsHtml + '</div>'
      +     '<div class="ending-analysis">'
      +       '<span class="analysis-title">— 你的选择映射 —</span>'
      +       analysisHtml
      +     '</div>'
      +     '<div class="ending-reflection">' + reflectionHtml + '</div>'
      +     '<div class="ending-share">'
      +       '<button class="btn-share" id="btn-share">分享给好友</button>'
      +     '</div>'
      +     '<div class="ending-actions">'
      +       '<div class="btn-action btn-restart" id="btn-restart"><span>重新体验</span></div>'
      +       '<div class="btn-action btn-home" id="btn-home"><span>返回首页</span></div>'
      +     '</div>'
      +     '<div class="ending-coming-soon">' + comingHtml + '</div>'
      +     '<div class="bottom-spacer"></div>'
      +   '</div>'
      + '</div>';

    document.getElementById('btn-share').addEventListener('click', function () { shareSite(story); });
    document.getElementById('btn-restart').addEventListener('click', function () {
      window.engine.clearHistory(storyId);
      window.navigateReplace('/story', { id: storyId });
    });
    document.getElementById('btn-home').addEventListener('click', function () {
      window.navigateReplace('/');
    });
  };
})();
