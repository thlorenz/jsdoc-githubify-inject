'use strict';
/* global suite, test */

var assert = require('assert')
  , getStyleProperty = require('get-style-property')
  , addJsdocSpan = require('./util/add-jsdoc-span')

suite('no jsdoc githubified')

test('does not style non-jsdoc element in the page', function () {
  var span = addJsdocSpan(true);
  assert.equal(getStyleProperty(span, 'color'), 'rgb(0, 0, 0)');
  require('../');
  assert.equal(getStyleProperty(span, 'color'), 'rgb(0, 0, 0)');
})
