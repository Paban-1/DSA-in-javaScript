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