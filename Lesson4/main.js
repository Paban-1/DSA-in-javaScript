// Lesson4 Array and Data manipulation

// What is array ?
let arr = [1, 2, 3]; // This is a  array

// Each box (called an index) has:
// index        value
// 0            1
// 1            2
// 2            3

// so access array arr[2] is 0(1) (constant time)

// How array works?
// unlike lower-level lan js array aren't pure fixed-length blocks.
// there dynamic lists under the hood (basically object pretending to be arrays)

// EX 1
let fruits = ["apple", "banana", "moango"];

fruits.push("grapes");
// ["apple","banana","moango", "grepes"]

fruits.pop();
// ["apple","banana","moango"] Delete the last one

fruits.shift();
// ["banana","moango"] Delete the 0th index

fruits.unshift("kiwi");
// ["kiwi","banana","moango"] Added on the 0th index.

console.log(fruits);



// UnderStanding Copy VS Reference.
let arr1 = [1,2,3]
let arr2 = arr1; // arr2 is reference to arr1
arr2.push(4);

console.log(arr1); // arr1 is also changed [1,2,3,4]
// why it happen ? cause the arrays are reference type.

// If we don't want to create reference then 
// let arr2 =[...arr1] By this the arr2 have made a copy of arr1.



