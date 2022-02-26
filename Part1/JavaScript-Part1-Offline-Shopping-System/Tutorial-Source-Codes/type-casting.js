// type casting - changing type of information 
/**
 * how do I see type of information?
 *  typeof
 * 
 * How do I type cast?
 *  Number()
 *  String()
 */

// Get two numbers from user
let num1 = prompt("Enter first number")
let num2 = prompt("Enter second number")

// Print out type of information you got from user
console.log("First number is", typeof num1)
console.log("Second number is", typeof num2)

// Add information you got from user. What do you see?
console.log(num1 + num2)

// Change type of information you got from user to number
num1 = Number(num1)
num2 = Number(num2)

// Add information you got from user. What do you see?
console.log(num1 + num2)

console.log(typeof num1)

num1 = String(num1)

console.log(typeof num1)