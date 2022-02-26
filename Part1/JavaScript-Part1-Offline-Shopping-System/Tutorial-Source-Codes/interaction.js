// interaction - two entities exchanging information 
/**
 * how do we show information to user?
 *  console.log() - black screen
 *  window.alert() - popup
 * 
 * How do we get information from user?
 *  window.prompt()
 */

// Get name and age from user
let username = window.prompt("What is your name?")
let age = window.prompt("What is your age?")

// Print out users name and age
// console.log("Your name is", username)
// console.log("Your age is", age)

console.log("Your name is " + username + "\n" + "Your age is " + age)