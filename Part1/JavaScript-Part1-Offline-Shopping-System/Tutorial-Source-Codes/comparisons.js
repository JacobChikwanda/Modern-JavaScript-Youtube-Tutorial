// comparison - comparing information we are working with. 
/**
 * What is the goal of comparison?
 *  to answer the question true/false
 * 
 * how do I compare information?
 *  1 === 1 - is 1 equal to 1? true/false
 *  1 !== 2 - is 1 not equal to 2? true/false
 *  2 > 1 - is 2 greater than 1? true/false
 *  1 < -9 - is 1 less than -9? true/false
 *  10 >= 10 - is 10 greater or equal to 10? true/false
 *  9 <= 20 - is 9 less than or equal to 20? true/false
 * 
 * STRINGS CAN BE COMPARED THE SAME WAY
 *  "subscribe" === "subscribe" is lhs equal to rhs? true/false
 */

// Get two numbers from user
let num1 = Number(prompt("Enter first number"))
let num2 = Number(prompt("Enter second number"))

// print is num1 equal to num2? true/false
console.log(`is ${num1} equal to ${num2}? ${num1 === num2}`)

// print is num1 not equal to num2? true/false
console.log(`is ${num1} not equal to ${num2}? ${num1 !== num2}`)

// print is num1 greater than num2? true/false
console.log(`is ${num1} greater than ${num2}? ${num1 > num2}`)

// print is num1 less than num2? true/false
console.log(`is ${num1} less than ${num2}? ${num1 < num2}`)

// print is num1 greater or equal to num2? true/false
console.log(`is ${num1} greater or equal ${num2}? ${num1 >= num2}`)

// print is num1 less or equal to num2? true/false
console.log(`is ${num1} less or equal to ${num2}? ${num1 <= num2}`)

// Try to compare two words
console.log("Jacob" === "Jacob")