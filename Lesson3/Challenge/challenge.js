// 1) -> Print all numbers from n to 1 using recursion
// 2) -> Find the sum of digits of a number
// 3) -> count how many time a letter appears in a string recursively

// 1) -> Print all numbers from n to 1 using recursion
function printAll(n) {
  if (n === 0) {
    return;
  } // Base case
  console.log(n);
  printAll(n - 1);
}

printAll(5);

// 2) -> Find the sum of digits of a number
function sumOfDigits(num) {
  if (num === 0) {
    return 0;
  } // Base case
  return (num % 10) + sumOfDigits(Math.floor(num / 10));
}
console.log("Sum of Digits:", sumOfDigits(12345)); // Output: 15

// 3) -> count how many time a letter appears in a string recursively
