/**
 * 首页：人物卡片 + 即将上线
 */
(function () {
  // 与小程序 pages/index/index.js 完全一致的人物分组
  var characterGroups = [
    {
      name: '苏轼', dynasty: '北宋', glyph: '苏',
      glyphColor: 'rgba(184, 150, 62, 0.12)',
      storyIds: ['su-shi-3', 'su-dongpo', 'su-shi-2']
    },
    {
      name: '张居正', dynasty: '明', glyph: '正',
      glyphColor: 'rgba(200, 75, 49, 0.12)',
      storyIds: ['zhang-juzheng', 'zhang-juzheng-2']
    },
    {
      name: '诸葛亮', dynasty: '三国', glyph: '亮',
      glyphColor: 'rgba(61, 90, 128, 0.12)',
      storyIds: ['zhuge-liang']
    },
    {
      name: '李清照', dynasty: '宋', glyph: '照',
      glyphColor: 'rgba(91, 140, 111, 0.12)',
      storyIds: ['li-qingzhao-2', 'li-qingzhao', 'li-qingzhao-3']
    }
  ];

  function chineseLabel(n) {
    var map = ['', '一', '二', '三', '四', '五', '六'];
    return '第' + (map[n] || n) + '篇';
  }

  function buildCharacters() {
    return characterGroups.map(function (group) {
      var chapters = group.storyIds.map(function (sid, idx) {
        var story = window.STORIES[sid];
        var hist = window.engine.getHistory(sid);
        return {
          id: story.id,
          label: chineseLabel(idx + 1),
          subtitle: story.subtitle,
          duration: story.duration,
          choiceCount: story.choiceCount,
          completed: hist ? !!hist.completed : false
        };
      });
      var isSingle = chapters.length === 1;
      return {
        name: group.name,
        dynasty: group.dynasty,
        glyph: group.glyph,
        glyphColor: group.glyphColor,
        isSingle: isSingle,
        single: isSingle ? chapters[0] : null,
        chapters: isSingle ? [] : chapters
      };
    });
  }

  function renderCard(c) {
    var esc = window.h.esc;
    if (c.isSingle) {
      var s = c.single;
      var badge = s.completed ? '<div class="card-badge"><span>已体验</span></div>' : '';
      return ''
        + '<div class="main-card" data-id="' + esc(s.id) + '">'
        +   '<span class="card-glyph" style="color:' + esc(c.glyphColor) + '">' + esc(c.glyph) + '</span>'
        +   '<span class="card-dynasty">' + esc(c.dynasty) + '</span>'
        +   '<span class="card-name">' + esc(c.name) + '</span>'
        +   '<span class="card-subtitle">' + esc(s.subtitle) + '</span>'
        +   '<div class="card-meta">'
        +     '<span class="meta-item">' + esc(s.duration) + '</span>'
        +     '<span class="meta-dot">·</span>'
        +     '<span class="meta-item">' + esc(s.choiceCount) + '次抉择</span>'
        +   '</div>'
        +   badge
        + '</div>';
    }
    var chaptersHtml = c.chapters.map(function (ch) {
      var b = ch.completed ? '<div class="chapter-badge"><span>已体验</span></div>' : '';
      return ''
        + '<div class="chapter-item" data-id="' + esc(ch.id) + '">'
        +   '<div class="chapter-left">'
        +     '<span class="chapter-label">' + esc(ch.label) + '</span>'
        +     '<span class="chapter-subtitle">' + esc(ch.subtitle) + '</span>'
        +   '</div>'
        +   '<div class="chapter-right">'
        +     '<div class="chapter-meta">'
        +       '<span class="meta-item">' + esc(ch.duration) + '</span>'
        +       '<span class="meta-dot">·</span>'
        +       '<span class="meta-item">' + esc(ch.choiceCount) + '次抉择</span>'
        +     '</div>'
        +     b
        +   '</div>'
        + '</div>';
    }).join('');
    return ''
      + '<div class="main-card multi-card">'
      +   '<span class="card-glyph" style="color:' + esc(c.glyphColor) + '">' + esc(c.glyph) + '</span>'
      +   '<span class="card-dynasty">' + esc(c.dynasty) + '</span>'
      +   '<span class="card-name">' + esc(c.name) + '</span>'
      +   '<div class="chapter-list">' + chaptersHtml + '</div>'
      + '</div>';
  }

  function renderComing() {
    return (window.COMING_SOON || []).map(function (c) {
      var esc = window.h.esc;
      return ''
        + '<div class="coming-card" data-coming="1">'
        +   '<span class="coming-dynasty">' + esc(c.dynasty) + '</span>'
        +   '<span class="coming-name">' + esc(c.name) + '</span>'
        +   '<span class="coming-subtitle">' + esc(c.subtitle) + '</span>'
        + '</div>';
    }).join('');
  }

  // 简单的 toast
  function showToast(text) {
    var t = document.createElement('div');
    t.className = 'toast';
    t.textContent = text;
    document.body.appendChild(t);
    requestAnimationFrame(function () { t.classList.add('show'); });
    setTimeout(function () {
      t.classList.remove('show');
      setTimeout(function () { t.remove(); }, 400);
    }, 1500);
  }

  window.pages.index = function (root) {
    var characters = buildCharacters();
    var html = ''
      + '<div class="index-page page-frame">'
      +   '<div class="safe-area">'
      +     '<div class="header">'
      +       '<span class="title">问古人</span>'
      +       '<span class="slogan">沉浸式历史体验</span>'
      +     '</div>'
      +     characters.map(renderCard).join('')
      +     '<div class="section-label"><span>即将上线</span></div>'
      +     '<div class="coming-grid">' + renderComing() + '</div>'
      +   '</div>'
      + '</div>';
    root.innerHTML = html;

    // 绑定单篇卡片点击
    root.querySelectorAll('.main-card[data-id]').forEach(function (el) {
      el.addEventListener('click', function () {
        window.navigate('/intro', { id: el.dataset.id });
      });
    });
    // 绑定多篇章节点击
    root.querySelectorAll('.chapter-item').forEach(function (el) {
      el.addEventListener('click', function () {
        window.navigate('/intro', { id: el.dataset.id });
      });
    });
    // 即将上线
    root.querySelectorAll('[data-coming]').forEach(function (el) {
      el.addEventListener('click', function () { showToast('敬请期待'); });
    });
  };
})();
