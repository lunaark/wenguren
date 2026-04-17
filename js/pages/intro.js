/**
 * 介绍页：人物简介 + 开始按钮
 */
(function () {
  window.pages.intro = function (root, storyId) {
    storyId = storyId || 'su-dongpo';
    var story = window.STORIES[storyId];
    if (!story) {
      window.navigateReplace('/');
      return;
    }
    var esc = window.h.esc;

    root.innerHTML = ''
      + '<div class="intro-page page-frame">'
      +   '<div class="intro-container">'
      +     '<span class="intro-dynasty">' + esc(story.dynasty) + '</span>'
      +     '<span class="intro-name">' + esc(story.name) + '</span>'
      +     '<div class="intro-divider"></div>'
      +     '<span class="intro-quote">「' + esc(story.quote) + '」</span>'
      +     '<span class="intro-desc">' + esc(story.intro) + '</span>'
      +     '<div class="intro-meta">'
      +       '<span class="meta-item">' + esc(story.duration) + '</span>'
      +       '<span class="meta-dot">·</span>'
      +       '<span class="meta-item">' + esc(story.choiceCount) + '次抉择</span>'
      +     '</div>'
      +     '<div class="btn-start" id="btn-start"><span>开 始 体 验</span></div>'
      +     '<div class="btn-back" id="btn-back"><span>返回</span></div>'
      +   '</div>'
      + '</div>';

    document.getElementById('btn-start').addEventListener('click', function () {
      // 用 replace 让"返回"跳过 story 直接回首页（与小程序 redirectTo 一致）
      window.navigateReplace('/story', { id: storyId });
    });
    document.getElementById('btn-back').addEventListener('click', function () {
      if (history.length > 1) history.back();
      else window.navigate('/');
    });
  };
})();
