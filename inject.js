'use strict';

var githubifieds = document.getElementsByClassName('jsdoc-githubify');
var css = require('fs').readFileSync(__dirname + '/jsdoc-default.css')

  // make wiki page a bit wider (980px -> 1200px and 920px -> 1155px) in order to render docs better
  , widthsCss = '.wrapper .container { width: 1200px; }\n.wrapper .repository-with-sidebar .repository-content { width: 1155px; }\n'

if (githubifieds.length) {
  var style = document.createElement('style');
  style.textContent = widthsCss + css;

  var first = document.head.firstChild;
  document.head.insertBefore(style, first);
}
