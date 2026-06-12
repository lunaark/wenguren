/**
 * Hash 路由
 *   #/                       → 首页
 *   #/intro?id=su-dongpo     → 介绍页
 *   #/story?id=su-dongpo     → 故事页
 *   #/ending?id=su-dongpo    → 结局页
 */
(function () {
  var app = document.getElementById('app');

  function parseHash() {
    var hash = location.hash || '#/';
    var parts = hash.replace(/^#/, '').split('?');
    var path = parts[0] || '/';
    var query = {};
    if (parts[1]) {
      parts[1].split('&').forEach(function (kv) {
        var pair = kv.split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
      });
    }
    return { path: path, query: query };
  }

  function render() {
    var route = parseHash();
    app.innerHTML = '';
    window.scrollTo(0, 0);

    if (route.path === '/' || route.path === '') {
      window.pages.index(app);
    } else if (route.path === '/intro') {
      window.pages.intro(app, route.query.id);
    } else if (route.path === '/story') {
      window.pages.story(app, route.query.id, route.query.node);
    } else if (route.path === '/ending') {
      window.pages.ending(app, route.query.id);
    } else {
      window.pages.index(app);
    }
  }

  // 公共导航 helper（页面里调用 navigate 而不是直接改 hash）
  window.navigate = function (path, query) {
    var qs = '';
    if (query) {
      qs = '?' + Object.keys(query).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(query[k]);
      }).join('&');
    }
    location.hash = '#' + path + qs;
  };

  // 替换当前路由（不留历史）
  window.navigateReplace = function (path, query) {
    var qs = '';
    if (query) {
      qs = '?' + Object.keys(query).map(function (k) {
        return encodeURIComponent(k) + '=' + encodeURIComponent(query[k]);
      }).join('&');
    }
    location.replace('#' + path + qs);
  };

  window.addEventListener('hashchange', render);
  window.addEventListener('DOMContentLoaded', render);
  if (document.readyState !== 'loading') render();
})();
