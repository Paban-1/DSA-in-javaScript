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

// The Call Stack: Where Recursion Lives

// Call stack is like stack of plates.
// evevry time a function start it gets added on top
// when it finishes it get removed.

// Function for greeting bob at first time
function greet(name) {
  console.log(`Hi ${name}`);
  greetAgain(name);
}

// Function for greet bob again
function greetAgain(name) {
  console.log(`Nice to meet you ${name}`);
}

// Call the first function for greeting bob
greet("Bob");





// Example 2 : Recursive Sum

// Let's Sum number from 1 to n.


// Iterative way
let sum = 0;
for (let i = 0; i <= 5; i++) {
  sum += i;
}
console.log("The Iterative Way:", sum);



// Recursive way
function sumN(n) {
  if (n === 1) return 1; // Base Case
  return n + sumN(n - 1); // Recursive Case
}

console.log("The Recursive Way:", sumN(5)); // Output: 15

// Here What Happen ?
// Call           |        What is return ?
// sumN(5)        ->        5 + sumN(4) 4 cause the n - 1
// sumN(4)        ->        4 + sumN(3)
// sumN(3)        ->        3 + sumN(2)
// sumN(2)        ->        2 + sumN(1)
// sumN(1)        ->        1 (Base Case reached here)
// Then they all unroll backwards, adding up to 15


// Example 3: Factorial (Classic DSA Question)
// n! = n * (n-1) * (n-2) * ... * 1

function factorial(n) {
  if (n === 1) return 1; // Base Case
  return n * factorial(n - 1); // Recursive Case
}

console.log("The Factorial is :",factorial(5)); // 120
// Note: -> This will see again when we do divide & conquer alfroithm like merge sort , quick sort etc.


// What Happen if we forget Base ?
function recurse(n){
  console.log(n);
  recurse(n - 1)
}
// recurse(1)
// This will caused an infinite recursion which overflows the call stack
