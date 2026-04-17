/**
 * 公共 helper
 */
window.h = {
  esc: function (str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  },

  // 把 \n 转成 <br>，用于结局文案
  nl2br: function (str) {
    return window.h.esc(str).replace(/\n/g, '<br>');
  }
};

window.pages = window.pages || {};
