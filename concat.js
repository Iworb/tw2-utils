const fs = require('fs');
const path = './dist/tw2-utils';
(function build() {
  let res = `// ==UserScript==
// @name         TW2 Utils
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Few useful utils
// @author       Iworb
// @match        https://*.tribalwars2.com/*
// @grant        none
// @noframes
// @run-at document-end
// ==/UserScript==

(function() {
`;
  const files = [
    path + '/polyfills.js',
    path + '/runtime.js',
    path + '/main.js',
    path + '/styles.js',
  ];
  files.forEach(file => {
    res += fs.readFileSync(file, 'utf8') + '\n';
  });
  res += `
})();`;
  fs.writeFileSync(path + '/bundle.js', res);
})();
