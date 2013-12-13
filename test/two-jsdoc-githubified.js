'use strict';
/* global suite, test */

var assert = require('assert')
  , getStyleProperty = require('get-style-property')
  , addJsdocSpan = require('./util/add-jsdoc-span')

suite('two jsdoc githubified')

test('styles the two jsdoc-githubify elements in the page', function () {
  var spanUno = addJsdocSpan();
  var spanDos = addJsdocSpan();

  assert.equal(getStyleProperty(spanUno, 'color'), 'rgb(0, 0, 0)');
  assert.equal(getStyleProperty(spanDos, 'color'), 'rgb(0, 0, 0)');
  require('../');
  assert.equal(getStyleProperty(spanUno, 'color'), 'rgb(170, 170, 170)');
  assert.equal(getStyleProperty(spanDos, 'color'), 'rgb(170, 170, 170)');
})
