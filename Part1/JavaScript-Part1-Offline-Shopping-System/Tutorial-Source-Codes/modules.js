// modules - a file(s) containing related code. 
/**
 * Why use modules?
 *  FreeCodeCamp Says -:
 *      Good authors divide their books into chapters and sections; 
 *      good programmers divide their programs into modules.
 *  
 *  1. Make Maintenance Easier
 *  2. Reusablility (Share across your project aswell as with others)
 * 
 * How do I make a Module and use it?
 *  1. Create a new JavaScript file and use keywords like export and import
 *  2. Remember to include type="module" in script tag of main.js
 */

// Create a function that says 'modules are cool' in myModule.js and then use it here
import { msg, PI } from "./myModule.js"

msg()

// Create a varible in myModule.js and print it here
console.log(PI)