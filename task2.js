// Write a JavaScript function that takes an array of numbers as input and returns the square root of the sum of squares of all the numbers. Use the Math object to perform the necessary calculations.



function displaySquareRootOfSumOfSquares(numbers) {
  let sumOfSquares = 0;

  // Calculate the sum of squares
  for (let i = 0; i < numbers.length; i++) {
    sumOfSquares += Math.pow(numbers[i], 2);
  }

  // Calculate the square root of the sum of squares
  const result = Math.sqrt(sumOfSquares);

  // Display the result
  console.log("Square root of sum of squares:", result);
}


const numbers = [3, 4, 5];
displaySquareRootOfSumOfSquares(numbers);
// Output: Square root of sum of squares: 7.0710678118654755
