function sum(...args) {
  return args.reduce((acc, curr) => acc + curr, 0)
}

function product(...args) {
  return args.reduce((acc, curr) => acc * curr, 1)
}

let send = module.exports 
send.sum = sum
send.product = product

// module.exports = {
//   sum,
//   product
// }