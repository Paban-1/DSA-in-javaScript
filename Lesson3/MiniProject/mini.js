// Mini Project: Reverse a String Using Recursion.
function reverseString(str) {
  if (str === "") return ""; // Base case
return reverseString(str.slice(1)) + str[0]
}

console.log(reverseString("Lima"));

console.log("Paban");
