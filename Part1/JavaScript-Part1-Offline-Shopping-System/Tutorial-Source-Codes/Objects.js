// objects - an entity with a key(s)/property(s) and value(s). 
/**
 * Why use Objects?
 *  1. They help us create real world objects
 *  2. They help us store several pieces data that are related in one place
 * 
 * How do I create an object?
 *  objectName = {property1:value, property2:value, ...}
 */

// Create an object of a car - name, color and getCarDetails function
const Car = {
    car_name: "BMW",
    color: "red",
    getCarDetails: function() {
        console.log("Car Name is", Car["car_name"])
        console.log("Car Color is", this.color)
    }
}


// Print Details About the Car Object Above
Car.getCarDetails()

// See All Keys in Object
console.log(Object.keys(Car))