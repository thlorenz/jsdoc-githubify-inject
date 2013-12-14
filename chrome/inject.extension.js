'use strict';

var script = document.createElement('script');
script.src = 'https://raw.github.com/thlorenz/jsdoc-githubify-inject/master/chrome/extension.js'; 
document.querySelector('script').parentNode.insertBefore(script);
