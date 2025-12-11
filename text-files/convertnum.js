const digitsArray = [2, 3, 4, 5, 6, 7, 8, 9];

const digitsToNumber = (digits) => {
  let number = 0;
  digits.forEach((digit, index) => {
    number += digit * Math.pow(10, index)
  })
  console.log(number);
}

digitsToNumber(digitsArray);