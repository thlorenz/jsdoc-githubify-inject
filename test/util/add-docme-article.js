'use strict';

module.exports = function () {
  var div = document.createElement('div');
  var article = document.createElement('article');
  div.appendChild(article);

  var span = document.createElement('span');
  span.classList.add('type-signature');
  span.textContent = '<private, static>';
  article.appendChild(span);

  var p = document.createElement('p');
  var em = document.createElement('em');
  var a = document.createElement('a');
  a.setAttribute('href', 'https://github.com/thlorenz/docme');
  em.appendChild(a);
  p.appendChild(em);
  div.appendChild(p);

  document.body.appendChild(div);
  return span;
}
