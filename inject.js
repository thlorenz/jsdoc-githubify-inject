'use strict';

var githubifieds = document.getElementsByClassName('jsdoc-githubify');
var css = require('fs').readFileSync(__dirname + '/jsdoc-default.css')
  , widthsNSidebarCss = require('fs').readFileSync(__dirname + '/widths-and-sidebar.css')

function moveSidebar() {
  // move sidebar outside to give wiki content more space
  var sidebar = document.getElementById('wiki-rightbar')
  
  // not on a wiki or DOM changed? --> abort
  if (!sidebar) return;
  var containers = document.querySelectorAll('.wrapper .site .container')
  if (!containers.length) return;
  var container = containers.length > 1 ? containers.item(1) : containers.item(0);

  sidebar.remove();

  var first = container.firstChild;
  container.insertBefore(sidebar, first);

  css = css + '\n\n/* sidebar adjustments */\n' +  widthsNSidebarCss;
}

if (githubifieds.length) {
  moveSidebar();

  var style = document.createElement('style');
  style.textContent = css;

  var first = document.head.firstChild;
  document.head.insertBefore(style, first);
}
