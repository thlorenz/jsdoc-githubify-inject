'use strict';

var bookmarkletify = require('bookmarkletify')
  , fs = require('fs')
  , browserify = require('browserify')
  , updateSection = require('update-section');

var source = fs.readFileSync(__dirname + '/../inject.js', 'utf8')
  , html = fs.readFileSync(__dirname + '/../index.html', 'utf8')

browserify(__dirname + '/../').bundle(function (err, bundled) {
  var xmarkified = bookmarkletify(bundled);
  
  var xmarkhtml = [
      '<!-- START XMARKLET -->'
    , '<a href="' + xmarkified + '"'
    , '   onclick="window.alert(\'Right click on a bookmarklet and select Add to Favorites...\');return false;"'
    , '   class="xmarklet-link">'
    , '   <strong>jsdoc-githubify-inject</strong>'
    , '   bookmarklet'
    , '</a>'
    , '<!-- END XMARKLET -->'
  ].join('\n')

  var updatedHtml = updateSection(
      html
    , xmarkhtml
    , function start(s) { return (/<!-- START XMARKLET/).test(s) }
    , function end(s) { return (/<!-- END XMARKLET/).test(s) }
  )
  fs.writeFileSync(__dirname + '/../index.html', updatedHtml, 'utf8');
});

