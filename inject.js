'use strict';

var githubifieds = document.getElementsByClassName('jsdoc-githubify');
var css = require('fs').readFileSync(__dirname + '/jsdoc-default.css');

if (githubifieds.length) {
  var style = document.createElement('style');
  style.textContent = css;

  var first = document.head.firstChild;
  document.head.insertBefore(style, first);
}
