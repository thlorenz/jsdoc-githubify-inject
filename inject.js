'use strict';
/*jshint browser: true */

var css = require('fs').readFileSync(__dirname + '/jsdoc-default.css')
  , widthsNSidebarCss = require('fs').readFileSync(__dirname + '/widths-and-sidebar.css')

function moveSidebar() {
  // move sidebar outside to give wiki content more space
  var sidebar = document.getElementById('wiki-rightbar')
  
  // not on a wiki or DOM changed? --> abort
  if (!sidebar) return;
  var containers = document.querySelectorAll('.wrapper .site .container')
  if (!containers.length) return;
  var container = containers.length > 1 ? containers.item(1) : containers.item(0);

  sidebar.remove();

  var first = container.firstChild;
  container.insertBefore(sidebar, first);

  css = css + '\n\n/* sidebar adjustments */\n' +  widthsNSidebarCss;
}

function injectCss() {
  var style = document.createElement('style');
  style.textContent = css;

  var first = document.head.firstChild;
  document.head.insertBefore(style, first);
}

(function go() {
  var githubifieds = document.getElementsByClassName('jsdoc-githubify');

  if (githubifieds.length) {
    moveSidebar();
    injectCss();
  } else {
    // are we looking at an actual repo with a readme which has been githubified via docme?
    var docme = document.querySelector('p>em>a[href="https://github.com/thlorenz/docme"]');
    if (docme) {

      // if so add the class to the parent article
      //            <a>   <em>          <p>           <article>
      var article = docme.parentElement.parentElement.parentElement;
      article.classList.add("jsdoc-githubify");

      injectCss();
    }
  }
})()
