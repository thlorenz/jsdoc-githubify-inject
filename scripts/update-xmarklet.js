'use strict';

var bookmarkletify = require('bookmarkletify')
  , fs = require('fs')

var source = fs.readFileSync(__dirname + '/../inject.js', 'utf8');

var xmarkjs = bookmarkletify(source)
fs.writeFileSync(__dirname + '/../jsdoc-githubify-inject.xmarklet.js', xmarkjs, 'utf8');
