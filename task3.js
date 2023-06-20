// Write a JavaScript function that takes a positive integer as input and returns true if it is a prime number, otherwise returns false.


function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  const sqrt = Math.sqrt(number);
  for (let i = 2; i <= sqrt; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

const number = 2;
console.log(isPrime(number));

 // Output: true


