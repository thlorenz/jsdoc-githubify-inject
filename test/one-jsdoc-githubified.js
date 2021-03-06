'use strict';
/* global suite, test */

var assert = require('assert')
  , getStyleProperty = require('get-style-property')
  , addJsdocSpan = require('./util/add-jsdoc-span')

suite('one jsdoc githubified')

test('styles the one jsdoc-githubify element in the page', function () {
  var span = addJsdocSpan();
  assert.equal(getStyleProperty(span, 'color'), 'rgb(0, 0, 0)');
  require('../');
  assert.equal(getStyleProperty(span, 'color'), 'rgb(170, 170, 170)');
})
