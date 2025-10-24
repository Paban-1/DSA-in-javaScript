// Lesson 3 Recursion

// what is recursion ?
// Recursion means a function calls itself until a certain condition is met.
// The certain condition is called the (base case) - it stops the infinite loop of doom

// There are Two Core Rules of Recursion
// 1) Base Case: When to stop. (To forget the base case the program will never stop running.)
// 2) Recursive Case: When to Keep going (the self call) (and if forget the recursive case the function will be pointless.)

// Example 1
function countdown(n) {
  if (n === 0) {
    console.log("Done !");
    return;
  }
  console.log(`The N is : ${n}`);
  countdown(n - 1);
}

countdown(5);

// The OutPut will like this
// The N is : 5
// The N is : 4
// The N is : 3
// The N is : 2
// The N is : 1
// Done !

// Eatch call goes onto the call stack, which is a line of wo waiting for what ?
