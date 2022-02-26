// arrays - single variable that stores different things. 
// Loops - Helps us perform a single action until certain condition is met
/**
 * How do we make arrays
 *                0      1      2    ...
 * arrayName = [item1, item2, item3, ...]
 */

// Create an array of colors - red, green, blue
const colors = ["red", "green", "blue"]

// Manually Print the Colors
console.log(colors[0])
console.log(colors[1])
console.log(colors[2])

// You can change content
colors[0] = "white"

// Automatically Print the Colors

// Method 1
for (let x = 0; x < 3; x++) {
    console.log(colors[x])
}
// Method 2
let start = 0
while (start < 3) {
    console.log(colors[start])
    start = start + 1
}
// Method 3
for (let x in colors) {
    console.log(x)
}
// Method 4
for (let x of colors) {
    console.log(x)
}