'use strict';

var fs = require('fs')
  , browserify = require('browserify');

var extensionFile = __dirname + '/../chrome/extension.js';
browserify(__dirname + '/../')
  .bundle()
  .pipe(fs.createWriteStream(extensionFile));
