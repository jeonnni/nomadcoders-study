const loginForm = document.getElementById("login-form")
const loginInput = document.querySelector("#login-form input")

function onLoginSubmit(e){
    e.preventDefault()
    const username = loginInput.value;
    loginForm.classList.add("hidden");
}
loginForm.addEventListener("submit", onLoginSubmit)