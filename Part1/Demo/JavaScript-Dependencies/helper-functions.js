import { fruits, cars, utensils, shopping_cart } from "./shopping-cart-data.js"

const itemsInShop = [fruits, cars, utensils]
let total_cost = 0;

let email = localStorage.getItem("email")
let password = localStorage.getItem("password")
let money = Number(localStorage.getItem("ac_money")) || 100000

export function signUp() {
    if (!email && !password) {
        alert("SIgn Up")
        email = prompt("Enter your email")
        password = prompt("Enter your password")

        if (email && password) {
            localStorage.setItem("email", email)
            localStorage.setItem("password", password)
            alert("Sign Up Success")
        } else {
            alert("You havent signed up")
        }
    }
}

export function login() {
    const user_email = prompt("Sign In \nEnter your email")
    const user_password = prompt("Enter your password")

    if (user_email === email && user_password === password) {
        alert("Sign In Success")
        return true;
    } else {
        alert("Incorrect Email & Password")
        return false;
    }
}

/* Menu */
export const Menu = () => {
    return prompt(`
Welcome ${email}
Your Current Shopping A/C Balance -: k${money}

No. of Items in Shopping Cart -: ${shopping_cart.length}
Total Cost of Items -: K${total_cost}

1. Show All Items In Shop
2. Add Item to Your Shopping Cart
3. Show Items In Cart
4. Pay For All Items In Shopping Cart
5. Deposit Funds
6. Close Account
`)
}

const showObjectContent = () => {
    for (let item of itemsInShop) {
        for (let key in item) {
            console.log(`${key} costs K${item[key]}`)
        }
    }
}

// Handle States
export const switchStates = response => {
    console.clear()
    switch (response) {
        case "1":
            showObjectContent()
            break;
        case "2":
            addItem()
            break;
        case "3":
            console.clear()
            console.log("ITEMS IN CART")
            if (shopping_cart.length === 0) {
                console.log("Your Cart Is Empty")
            } else {
                for (let item of shopping_cart) {
                    console.log(item)
                }
            }
            break;
        case "4":
            pay()
            break;
        case "5":
            depositFunds()
            break;
        case "6":
            closeAc()
            location = "http://127.0.0.1:5500/"
            break;
        default:
            console.log("Invalid Option Pressed")
            break;
    }
}

/* Close Account */
function closeAc() {
    const confirmClose = confirm("Are you sure you want to close account?")
    if (confirmClose) {
        localStorage.clear()
        alert("Account closed permanently")
    } else {
        alert("Close Account Cancled")
    }
}

/* Add item */
function addItem() {
    console.clear()
    const searchQuery = prompt("What item are you looking for?")

    for (let item of itemsInShop) {
        for (let key in item) {
            if (key.search(`${searchQuery}`) !== -1) {
                const itemToBuy = confirm(`Add ${searchQuery} to Cart?`)
                if (itemToBuy) {
                    shopping_cart.push(searchQuery)
                    total_cost += item[key]
                    alert(`${searchQuery} added to cart`)
                    return;
                } else {
                    alert(`${searchQuery} not added to cart`)
                    return;
                }
            }
        }
    }

    alert(`${searchQuery} Not Available`)
}

/* pay */
function pay() {
    let diff = money - total_cost;

    if (diff < 0) {
        alert("Not enough money to process transaction")
    } else {
        alert("Purchase successful all items are been sent to you")
        shopping_cart.splice(0, shopping_cart.length)
        total_cost = 0
        money = diff
        localStorage.setItem("ac_money", String(money))
    }
}

function depositFunds() {
    const ammount = Number(prompt("How much are you despositing"))
    if (ammount > 0) {
        money += ammount
        localStorage.setItem("ac_money", String(money))
        alert("Funds Deposited Successfully")
    } else {
        alert("Funds Not Deposited Successfully")
    }
}