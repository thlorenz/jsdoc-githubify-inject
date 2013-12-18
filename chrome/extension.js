;(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
/*jshint browser: true */

var css = ".jsdoc-githubify html {\n  overflow: auto;\n  background-color: #fff;\n}\n\n.jsdoc-githubify body {\n  font: 14px \"DejaVu Sans Condensed\", \"Liberation Sans\", \"Nimbus Sans L\", Tahoma, Geneva, \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  line-height: 130%;\n  color: #000;\n  background-color: #fff;\n}\n\n.jsdoc-githubify a {\n  color: #444;\n}\n\n.jsdoc-githubify a:visited {\n  color: #444;\n}\n\n.jsdoc-githubify a:active {\n  color: #444;\n}\n\n.jsdoc-githubify header {\n  display: block;\n  padding: 6px 4px;\n}\n\n.jsdoc-githubify .class-description {\n  font-style: italic;\n  font-family: Palatino, 'Palatino Linotype', serif;\n  font-size: 130%;\n  line-height: 140%;\n  margin-bottom: 1em;\n  margin-top: 1em;\n}\n\n.jsdoc-githubify #main {\n  float: left;\n  width: 100%;\n}\n\n.jsdoc-githubify section {\n  display: block;\n  background-color: #fff;\n  padding: 12px 24px;\n  border-bottom: 1px solid #ccc;\n  margin-right: 240px;\n}\n\n.jsdoc-githubify .variation {\n  display: none;\n}\n\n.jsdoc-githubify .optional:after {\n  content: \"opt\";\n  font-size: 60%;\n  color: #aaa;\n  font-style: italic;\n  font-weight: lighter;\n}\n\n.jsdoc-githubify nav {\n  display: block;\n  float: left;\n  margin-left: -230px;\n  margin-top: 28px;\n  width: 220px;\n  border-left: 1px solid #ccc;\n  padding-left: 9px;\n}\n\n.jsdoc-githubify nav ul {\n  font-family: 'Lucida Grande', 'Lucida Sans Unicode', arial, sans-serif;\n  font-size: 100%;\n  line-height: 17px;\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n}\n\n.jsdoc-githubify nav h2 a,\n.jsdoc-githubify nav h2 a:visited {\n  color: #A35A00;\n  text-decoration: none;\n}\n\n.jsdoc-githubify nav h3 {\n  margin-top: 12px;\n}\n\n.jsdoc-githubify nav li {\n  margin-top: 6px;\n}\n\n.jsdoc-githubify nav a {\n  color: #5C5954;\n}\n\n.jsdoc-githubify nav a:visited {\n  color: #5C5954;\n}\n\n.jsdoc-githubify nav a:active {\n  color: #5C5954;\n}\n\n.jsdoc-githubify footer {\n  display: block;\n  padding: 6px;\n  margin-top: 12px;\n  font-style: italic;\n  font-size: 90%;\n}\n\n.jsdoc-githubify h1 {\n  font-size: 200%;\n  font-weight: bold;\n  letter-spacing: -0.01em;\n  margin: 6px 0 9px 0;\n}\n\n.jsdoc-githubify h2 {\n  font-size: 170%;\n  font-weight: bold;\n  letter-spacing: -0.01em;\n  margin: 6px 0 3px 0;\n}\n\n.jsdoc-githubify h3 {\n  font-size: 150%;\n  font-weight: bold;\n  letter-spacing: -0.01em;\n  margin-top: 16px;\n  margin: 6px 0 3px 0;\n}\n\n.jsdoc-githubify h4 {\n  font-size: 130%;\n  font-weight: bold;\n  letter-spacing: -0.01em;\n  margin-top: 16px;\n  margin: 18px 0 3px 0;\n  color: #A35A00;\n}\n\n.jsdoc-githubify h5,\n.jsdoc-githubify .container-overview .subsection-title {\n  font-size: 120%;\n  font-weight: bold;\n  letter-spacing: -0.01em;\n  margin: 8px 0 3px -16px;\n}\n\n.jsdoc-githubify h6 {\n  font-size: 100%;\n  letter-spacing: -0.01em;\n  margin: 6px 0 3px 0;\n  font-style: italic;\n}\n\n.jsdoc-githubify .ancestors {\n  color: #999;\n}\n\n.jsdoc-githubify .ancestors a {\n  color: #999 !important;\n  text-decoration: none;\n}\n\n.jsdoc-githubify .important {\n  font-weight: bold;\n  color: #950B02;\n}\n\n.jsdoc-githubify .yes-def {\n  text-indent: -1000px;\n}\n\n.jsdoc-githubify .type-signature {\n  color: #aaa;\n}\n\n.jsdoc-githubify .name,\n.jsdoc-githubify .signature {\n  font-family: Consolas, \"Lucida Console\", Monaco, monospace;\n}\n\n.jsdoc-githubify .details {\n  margin-top: 14px;\n  border-left: 2px solid #DDD;\n}\n\n.jsdoc-githubify .details dt {\n  width: 100px;\n  float: left;\n  padding-left: 10px;\n  padding-top: 6px;\n}\n\n.jsdoc-githubify .details dd {\n  margin-left: 50px;\n}\n\n.jsdoc-githubify .details ul {\n  margin: 0;\n}\n\n.jsdoc-githubify .details ul {\n  list-style-type: none;\n}\n\n.jsdoc-githubify .details li {\n  margin-left: 30px;\n  padding-top: 6px;\n}\n\n.jsdoc-githubify .details pre.prettyprint {\n  margin: 0;\n}\n\n.jsdoc-githubify .details .object-value {\n  padding-top: 0;\n}\n\n.jsdoc-githubify .description {\n  margin-bottom: 1em;\n  margin-left: -16px;\n  margin-top: 1em;\n}\n\n.jsdoc-githubify .code-caption {\n  font-style: italic;\n  font-family: Palatino, 'Palatino Linotype', serif;\n  font-size: 107%;\n  margin: 0;\n}\n\n.jsdoc-githubify .prettyprint {\n  border: 1px solid #ddd;\n  width: 80%;\n  overflow: auto;\n}\n\n.jsdoc-githubify .prettyprint.source {\n  width: inherit;\n}\n\n.jsdoc-githubify .prettyprint code {\n  font-family: Consolas, 'Lucida Console', Monaco, monospace;\n  font-size: 100%;\n  line-height: 18px;\n  display: block;\n  padding: 4px 12px;\n  margin: 0;\n  background-color: #fff;\n  color: #000;\n}\n\n.jsdoc-githubify .prettyprint code span.line {\n  display: inline-block;\n}\n\n.jsdoc-githubify .prettyprint.linenums {\n  padding-left: 70px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.jsdoc-githubify .prettyprint.linenums ol {\n  padding-left: 0;\n}\n\n.jsdoc-githubify .prettyprint.linenums li {\n  border-left: 3px #ddd solid;\n}\n\n.jsdoc-githubify .prettyprint.linenums li.selected,\n.jsdoc-githubify .prettyprint.linenums li.selected * {\n  background-color: lightyellow;\n}\n\n.jsdoc-githubify .prettyprint.linenums li * {\n  -webkit-user-select: text;\n  -moz-user-select: text;\n  -ms-user-select: text;\n  user-select: text;\n}\n\n.jsdoc-githubify .params,\n.jsdoc-githubify .props {\n  border-spacing: 0;\n  border: 0;\n  border-collapse: collapse;\n}\n\n.jsdoc-githubify .params .name,\n.jsdoc-githubify .props .name,\n.jsdoc-githubify .name code {\n  color: #A35A00;\n  font-family: Consolas, 'Lucida Console', Monaco, monospace;\n  font-size: 100%;\n}\n\n.jsdoc-githubify .params td,\n.jsdoc-githubify .params th,\n.jsdoc-githubify .props td,\n.jsdoc-githubify .props th {\n  border: 1px solid #ddd;\n  margin: 0px;\n  text-align: left;\n  vertical-align: top;\n  padding: 4px 6px;\n  display: table-cell;\n}\n\n.jsdoc-githubify .params thead tr,\n.jsdoc-githubify .props thead tr {\n  background-color: #ddd;\n  font-weight: bold;\n}\n\n.jsdoc-githubify .params .params thead tr,\n.jsdoc-githubify .props .props thead tr {\n  background-color: #fff;\n  font-weight: bold;\n}\n\n.jsdoc-githubify .params th,\n.jsdoc-githubify .props th {\n  border-right: 1px solid #aaa;\n}\n\n.jsdoc-githubify .params thead .last,\n.jsdoc-githubify .props thead .last {\n  border-right: 1px solid #ddd;\n}\n\n.jsdoc-githubify .disabled {\n  color: #454545;\n}"
  , widthsNSidebarCss = "#wiki-rightbar {\n  margin-right: -210px;\n  width: 200px;\n}\n\n.wrap.has-rightbar #wiki-body {\n  margin-right: 10px; \n}\n"

injectCss();
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
    } else {
      if (document.addEventListener) document.addEventListener('DOMContentLoaded', go, false);
      else window.onload = go;
    }
  }
})()

},{}]},{},[1])
;