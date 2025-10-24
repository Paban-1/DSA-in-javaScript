// Try Building a multiplier factory using closures.
// Goal: return a function that multiplies a number by a given x.

function createMultiplier(x) {
  let num;
  return function multiplier(y) {
    num = x * y;
    console.log(num);
  };
}


const double = createMultiplier(2)
const triple = createMultiplier(3)

double(5); // Output: 10
triple(5); // Output: 15