'use strict';

module.exports = function (notjsdoc) {
  var div = document.createElement('div');
  if (!notjsdoc) div.classList.add('jsdoc-githubify');

  var span = document.createElement('span');
  span.classList.add('type-signature');
  span.textContent = '<private, static>';

  div.appendChild(span);
  document.body.appendChild(div);
  return span;
}
