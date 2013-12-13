'use strict';

var githubifieds = document.getElementsByClassName('jsdoc-githubify');
var css = require('fs').readFileSync(__dirname + '/jsdoc-default.css');

for (var i = 0; i < githubifieds.length; i++) {
  var div = githubifieds[i]
  var style = document.createElement('style');
  style.textContent = css;

  var first = div.firstChild;
  div.insertBefore(style, first);
}
