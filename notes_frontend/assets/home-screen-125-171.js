(function () {
  'use strict';

  // PUBLIC_INTERFACE
  function initHomeScreenInteractions() {
    /** Initialize click handlers for interactive elements defined in the Figma JSON.
     *  - Search background button (no-op, highlight demo)
     *  - Info background button (no-op, highlight demo)
     *  - Add FAB (shows a basic action)
     */
    var btnSearch = document.getElementById('btn-search-bg');
    var btnInfo = document.getElementById('btn-info-bg');
    var btnAdd = document.getElementById('btn-add');

    function ripple(el) {
      if (!el) return;
      el.style.transition = 'box-shadow .2s ease';
      var prev = el.style.boxShadow;
      el.style.boxShadow = '0 0 0 4px rgba(37,99,235,0.20)';
      setTimeout(function () {
        el.style.boxShadow = prev || '';
      }, 180);
    }

    if (btnSearch) {
      btnSearch.addEventListener('click', function () {
        ripple(btnSearch);
      });
    }
    if (btnInfo) {
      btnInfo.addEventListener('click', function () {
        ripple(btnInfo);
      });
    }
    if (btnAdd) {
      btnAdd.addEventListener('click', function () {
        ripple(btnAdd);
        // Example action: announce addition (placeholder for future integration)
        // eslint-disable-next-line no-console
        console.log('Add action triggered');
      });
    }
  }

  // Initialize on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHomeScreenInteractions);
  } else {
    initHomeScreenInteractions();
  }

  // Expose for potential tests
  // PUBLIC_INTERFACE
  window.__initHomeScreenInteractions = initHomeScreenInteractions;
})();
