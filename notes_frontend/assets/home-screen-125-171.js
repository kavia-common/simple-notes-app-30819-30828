(function () {
  'use strict';

  // PUBLIC_INTERFACE
  function initHomeScreenInteractions() {
    /** Initialize click handlers for interactive elements derived from Figma JSON.
     * Elements:
     *  - Search background button
     *  - Info background button
     *  - Add FAB
     * Behavior: Provide visual feedback (ripple-like outline) and log actions.
     * Accessibility: Buttons already have aria-labels; keyboard focus styles via CSS.
     */
    var btnSearch = document.getElementById('btn-search-bg');
    var btnInfo = document.getElementById('btn-info-bg');
    var btnAdd = document.getElementById('btn-add');

    function pulseOutline(el, color) {
      if (!el) return;
      var prevOutline = el.style.outline;
      var prevOffset = el.style.outlineOffset;
      el.style.outline = '2px solid ' + (color || 'rgba(37,99,235,0.6)');
      el.style.outlineOffset = '2px';
      setTimeout(function () {
        el.style.outline = prevOutline || '';
        el.style.outlineOffset = prevOffset || '';
      }, 180);
    }

    if (btnSearch) {
      btnSearch.addEventListener('click', function () {
        pulseOutline(btnSearch);
        // eslint-disable-next-line no-console
        console.log('Search clicked');
      });
    }
    if (btnInfo) {
      btnInfo.addEventListener('click', function () {
        pulseOutline(btnInfo, 'rgba(245,158,11,0.6)');
        // eslint-disable-next-line no-console
        console.log('Info clicked');
      });
    }
    if (btnAdd) {
      btnAdd.addEventListener('click', function () {
        pulseOutline(btnAdd);
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

  // PUBLIC_INTERFACE
  window.__initHomeScreenInteractions = initHomeScreenInteractions;
})();
