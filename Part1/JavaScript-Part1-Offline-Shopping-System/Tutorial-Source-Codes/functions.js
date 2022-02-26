// functions - reusable instructions. 
/**
 * Why do we need functions?
 *  To help us perfrom repetitive tasks
 *  To help us organize our code better
 *  To make testing easier
 *  
 *  Abstraction - Avoid Knowing How Everything works
 *  name, input, output and where it is.
 *  Example - prompt(string) - output = string 
 */

// Get two number and a Math Symbol from user
let num1 = Number(prompt("Enter first number"))
let symbol = prompt("Enter +, -, *, / or %")
let num2 = Number(prompt("Enter second number"))

// // Add them and print answer
// console.log(`${num1} + ${num2} = ${num1 + num2}`)

// // Subtract them and print answer
// console.log(`${num1} - ${num2} = ${num1 - num2}`)

// // Multiply them and print answer
// console.log(`${num1} * ${num2} = ${num1 * num2}`)

// // Divide them and print answer
// console.log(`${num1} / ${num2} = ${num1 / num2}`)

// // Find the remainder of numbers and print answer
// console.log(`${num1} % ${num2} = ${num1 % num2}`)

// Call function to do Math
console.log(`${num1} ${symbol} ${num2} = ${solveMath(num1, num2, symbol)}`)

/**
 * solveMath Does Some Math Operation on Two Numbers
 * @param {number} num1 is the first number
 * @param {number} num2 is the second number
 * @param {string} symbol is the math operation to be performed on num1 and num2
 * @returns {number} sum, difference, remainder, quotient or product of num1 and num2
 */
function solveMath(num1, num2, symbol) {
    let answer = 0

    switch (symbol) {
        case "+":
            answer = num1 + num2
            break;
        case "-":
            answer = num1 - num2
            break;
        case "*":
            answer = num1 * num2
            break;
        case "%":
            answer = num1 % num2
            break;
        case "/":
            answer = num1 / num2
            break;
    }

    return answer
}