const fs = require('fs');
const path = './dist/tw2-utils';
(function build() {
  let res = `
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
