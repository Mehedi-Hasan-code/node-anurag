const digitsArray = [2, 3, 4, 5, 6, 7, 8, 9];

// const digitsToNumber = (digits) => {
//   let number = 0;
//   digits.forEach((digit, index) => {
//     number += digit * Math.pow(10, index)
//     console.log(typeof digit);
//   })
//   console.log(number);
// }


const digitsToNumber = (digitsArray) => {
  return digitsArray.reduce((acc, digit, index) => {
    console.log(typeof digit);
    return acc + digit * Math.pow(10, digitsArray.length - 1 -index)
  }, 0)
}

console.log(digitsToNumber(digitsArray));