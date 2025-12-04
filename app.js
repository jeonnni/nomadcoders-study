const loginForm = document.getElementById("login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.getElementById("greeting")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

const saveUserName = localStorage.getItem(USERNAME_KEY)

function onLoginSubmit(e){
    e.preventDefault()

    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    printGreetings(username)
}

function printGreetings (uername){
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello, ${uername}`;
}

if (saveUserName == null){ 
    // user 정보가 없을 경우(null)
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    // user 정보가 있을 경우
    printGreetings(saveUserName)
}