function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0)
}

function product(...args) {
  return args.reduce((acc, curr) => acc * curr, 1)
}



// let send = module.exports 
// send.sum = sum
// send.product = product

send.a = 5
// module.exports = {
//   sum,
//   product
// }

console.log('hi from math.js');