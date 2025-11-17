// a = 12
// console.log(a);
// var a
// Var can use before initial

// Sum of Two intizer
let a = 10;
let b = 20;
console.log(a + b);

// Defarent between number and string
// 10 + 1 = 11
// but
// "10"+"1"= 101
let c = "12";
let d = 13;
console.log(typeof (c + d));
// This situation is called concatination not adition

// Sum with massege
let e = 10;
let f = 20;
console.log("Sum of 10 and 20 is " + e + f);
// "Sum of 10 and 20 is " this is a oprent e is a oprent f is a also oprent
// and + this is a oprator
console.log("Sum of 10 and 20 is " + (e + f));

console.log(e + f + " is Sum of 10 and 20 ");

// Typecortion
console.log("1" + 1); // But the + have two work addition and concatination
console.log("1" - 1); // In this case js engine conver the string to number (1-1) - have just one work just extraction
console.log("1" * 1);
console.log("1" / 1);

// Accept and print the answer (TypeCasting or Typeconvertion)
let age = prompt("What is your age ? "); // The value is a string
// but if we need to convert to number then Two way have we are
Number(age);
let year = Number(prompt("What's The age  ? "));
console.log(year);
console.log(age);

// Swape
let l = 10;
let m = 20;
let p;

p = l; // p = 10 Copy, l = 10;
l = m; // l = 20 Copy, m = 20;
m = p; // m = 10

console.log("This is a ", l);
console.log("This is b ", m);
// Swaping without 3rd variable
l = l + m; // 30
m = l - m; // 10
l = l - m; // 20

console.log(l, m); // 20, 10

// Another type
[l, m] = [m, l];
console.log(l, m);
