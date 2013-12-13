'use strict';
/* global suite, test */

var assert = require('assert');

suite('one jsdoc githubified')

function setup() {
  var div = document.createElement('div');
  div.classList.add('jsdoc-githubify');

  var span = document.createElement('span');
  span.classList.add('type-signature');
  span.textContent = '<private, static>';

  div.appendChild(span);
  document.body.appendChild(div);
}

test('styles the one jsdoc-githubify element in the page', function (done) {
  setup();
  require('../');
  
  // TODO
  assert.ok(true);
  done();
})
