// conditionals - statements to help computer make a decision. 
/**
 * What conditions do we look for? true/false
 * 
 * How do we tell computer to make a decision?
 *  if (condition)
 *  else if (condition)
 *  else
 * 
 *  switch (condition)
 */

// constant weather options
const HOT = "hot"
const HOT_MSG = "drink hot tea"
const COLD = "cold"
const COLD_MSG = "drink cold juice"
const BOTH = "both"
const BOTH_MSG = "drink either hot tea or cold juice"


// Get weather condition from user - cold, hot or both
let weather = prompt("Is the weather cold, hot or both?")

/**
 * if weather is hot print drink cold juice
 * if weather is cold print drink hot tea
 * if weather is between print drink either tea or juice
 * if weather is not amongst what we list print invalid option
 */

// Use if | else if | else
// if (weather === HOT) {
//     console.log(HOT_MSG)
// } else if (weather === COLD) {
//     console.log(COLD_MSG)
// } else if (weather === BOTH) {
//     console.log(BOTH_MSG)
// } else {
//     console.log("Invalid option")
// }

// Use switch
switch (weather) {
    case HOT:
        console.log(HOT_MSG)
        break;
    case COLD:
        console.log(COLD_MSG)
        break;
    case BOTH:
        console.log(BOTH_MSG)
        break;
    default:
        console.log("Invalid option")
}