(function () {
  'use strict';

  function approvedItems() {
    var list = window.ENDORSEMENTS_CONFIG || [];
    return list.filter(function (item) {
      return item && item.approvedForWebsite === true && String(item.quote || '').trim();
    }).sort(function (a, b) {
      return (a.order || 0) - (b.order || 0);
    });
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderItem(item) {
    var byline = escapeHtml(item.name || '');
    if (item.title) byline += ' · ' + escapeHtml(item.title);
    return (
      '<article class="trust-quote">' +
        '<blockquote><p>' + escapeHtml(item.quote) + '</p></blockquote>' +
        '<p class="trust-quote__by">' + byline + '</p>' +
      '</article>'
    );
  }

  document.querySelectorAll('[data-endorsements]').forEach(function (section) {
    var mode = section.getAttribute('data-endorsements');
    var items = approvedItems();
    if (mode === 'home') {
      items = items.filter(function (item) { return item.featured === true; }).slice(0, 3);
      if (!items.length) items = approvedItems().slice(0, 3);
    } else {
      items = items.slice(0, 5);
    }
    var list = section.querySelector('[data-endorsements-list]');
    if (!items.length || !list) {
      section.hidden = true;
      return;
    }
    list.innerHTML = items.map(renderItem).join('');
    section.hidden = false;
  });
})();
