import { signUp, login, Menu, switchStates } from "./JavaScript-Dependencies/helper-functions.js"

let response = null
let signInSuccess = false

document.addEventListener('keyup', e => {
    if (e.code === "KeyM" && signInSuccess) {
        response = Menu()
        switchStates(response)
    } else if (!localStorage.getItem("email") && !localStorage.getItem("password")) {
        signUp()
    } else {
        signInSuccess = login()
    }
})