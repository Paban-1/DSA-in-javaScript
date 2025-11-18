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
//let age = prompt("What is your age ? "); // The value is a string
// but if we need to convert to number then Two way have we are
// Number(age);
//let year = Number(prompt("What's The age  ? "));
// console.log(year);
// console.log(age);

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

// Time 40:06 end

// Aracmatic Oprators
let o = 7;
let r = 2;

// Qustion for /
// console.log(Math.floor(o/r));
// Mod for % reminder
console.log(r % o); // 2
console.log(o % r); // 1

// Some of degite
let pa = 69;
console.log(pa % 10);
// In that case 10 make the calculation of 456 time and at the end 10 reach the 456 but now the reminder or last digit is remaining so he give back the last number (what ever it is )
// so if we need last number form any number just do mod 10
// but if we need two number from last just do the 10 to 100

// Let's assume we have this number 1234 but we need just pic the number 123 not the last one so we need to do
let mo = 1234;
console.log(mo / 10);
// In devide by 10 always give . with last number 123.4 so now just do Math.floor
console.log(Math.floor(mo / 10)); // and we got 123
// but if we want to remove last 2 digite just / by 100 not 10

// Relation oprator
// >< <= >= !=
// != not strict !== strict
// = asignment oprator
// == check left and right have same value ? 12 == "12" is true don't check type
// === is check type 12 === "12" false
console.log(10 < 5);
console.log(10 !== 11);

// Logical Oprator
// && ||
console.log(10 > 6 && 5 < 6); // All condition need to be true
console.log(10 > 4 && 5 < 8 && 30 > 20); // If any of those get false the js engine stop check and give false.

console.log(10 < 6 || 15 < 6 || 18 > 9); // If any of condition have true then it give true.
console.log(10 < 6 || 15 < 9); // give us false

// Unari Oprator
