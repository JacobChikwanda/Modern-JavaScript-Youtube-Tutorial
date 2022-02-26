// Objects, Arrays And Loops

// Start by importing objects from shop.js module
import { FruitSection, MeatSection } from "./shop.js";

// Loop through Objects and print Contents
for (let item in FruitSection) {
    console.log(`${item} costs k${FruitSection[item]}`)
}

// Store Objects in Array
const Shop = [FruitSection, MeatSection]

console.log("************************")

// Loop through Array And Print Contents
for (let section of Shop) {
    for (let item in section) {
        console.log(`${item} costs k${section[item]}`)
    }
}