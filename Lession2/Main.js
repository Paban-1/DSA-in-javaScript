// Function and Scope

// Declaring a function
function greet() {
  let name = "Paban";
  console.log("Hello, " + name + "!");
}
greet(); // This will print Hello Paban!
// But i we try to access the name variable outside the function the variable will not exist for us like:
console.log(name); // This will Show Error: name is not defined.

// Why ?
// Because the name is lives inside the greet() function local scope. Once the function execution is comleted the local scope is destroyed or cleared form the memory. So we can not access the local scope variable outside the function.

// The layers of scope
let x = 10; // Global Scope
function outer() {
  let y = 20; // Outer box
  function inner() {
    let z = 30; // Inner box
    console.log(x, y, z); // Accessing all three variabless
  }
  inner(); // Calling inner function
}

outer(); // Calling outer function
// inner() can see everything : z, y, and x
// but global scope cannot see y and z.
// This is called lexical scoping - a function can use variables from where it was defined, not nessarily where it is called.

// Closures Memory That Refuses to die
function createCounter() {
  let count = 0; // Local Scope Variable this variable lives in clousure memory.
  return function () {
    count++; // Incrementing the count variable
    console.log(count); // Printing the count variable
  };
}

const counter1 = createCounter(); // Hold the function in a variable
counter1(); // Output is : 1
counter1(); // Output is : 2
counter1(); // Output is : 3

// Now what happens here ?
// The count is a inner scope and scence after use the scope the scope dies but here the createCounter function called 3 times so unless the function end use the variable count it will keep alive. but after end of use the count will remove from the memory. or dies.
// So this will called clouser memory

// Closure Example 2 - Independent Memories
const counterA = createCounter();
const counterB = createCounter();

counterA(); // Output is : 1
counterA(); // Output is : 2
counterB(); // Output is : 1

// Now what happens here ?
// The counterA will called 2 times and the inner function will keep the count variable in its clouser memory and increment it 2 times. and the dies or remove from memory.
// But when The counterB will called the function ones to run so the inner function or i would say the counter will run again but totally independent memory so the count variable will start from 0 and increment it to 1. and then the inner function will remove from the memory.

// **************** That's basically enxapsulation - the backbone of data privacy and modular programming. ****************

