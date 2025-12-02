const fs = require('fs');

function loadModule(path) {
  const fileContent = fs.readFileSync(path).toString();

  return (function (send, require, module, __filename, __dirname) {
    eval(fileContent);
    return send;
  })({}, require, module, __filename, __dirname);
}

const b = loadModule('./math.js');
console.log(b);

// const maths = require('./math');
// const { sum, product } = maths;
// // console.log(sum(1, 2, 3, 4, 5));
// // console.log(product(1, 2, 3, 4, 5));
// // console.log(maths);

// exports.num1 = 5
