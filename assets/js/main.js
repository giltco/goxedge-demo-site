document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.v4-menu-toggle, .mobile-menu-toggle');
  var navShell = document.querySelector('.nav-shell');
  var v4Nav = document.querySelector('.v4-nav.nav-menu');

  if (toggle && navShell) {
    if (!toggle.hasAttribute('aria-expanded')) toggle.setAttribute('aria-expanded', 'false');
    if (v4Nav && !v4Nav.id) v4Nav.id = 'site-nav';
    if (v4Nav) toggle.setAttribute('aria-controls', v4Nav.id);
    toggle.addEventListener('click', function () {
      var open = !navShell.classList.contains('nav-open');
      navShell.classList.toggle('nav-open', open);
      if (v4Nav) v4Nav.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      var gxNav = document.querySelector('.gx-nav.nav-menu');
      if (gxNav) gxNav.classList.toggle('is-open', open);
    });
  }

  document.querySelectorAll('[data-static-form]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      alert('GoxEDGE 出版配套资源预览版：正式下载与订阅功能将在图书出版后开放。');
    });
  });
});
