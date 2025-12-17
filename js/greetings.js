// 로그인

const loginForm = document.getElementById("login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.getElementById("greeting")
const logoutBtn = document.getElementById("logout-btn"); 
// todo
const todoSection = document.getElementById("todo-section");

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

const saveUserName = localStorage.getItem(USERNAME_KEY)

function onLoginSubmit(e){
    e.preventDefault()

    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    loginInput.value = "";
    localStorage.setItem(USERNAME_KEY,username);
    printGreetings(username) // input username

    // todo
    todoSection.classList.remove(HIDDEN_CLASSNAME);
    // 로그아웃 버튼 
    logoutBtn.classList.remove(HIDDEN_CLASSNAME); 
}

// 로그아웃
function onLogout(){
    localStorage.removeItem(USERNAME_KEY); // localStorage에서 username 삭제

    greeting.classList.add(HIDDEN_CLASSNAME); 
    logoutBtn.classList.add(HIDDEN_CLASSNAME);

    todoSection.classList.add(HIDDEN_CLASSNAME);

    loginForm.classList.remove(HIDDEN_CLASSNAME);
}

/**
 * 화면에 텍스트 출력 용도 함수
 * 빈 h1 에 Text 추가하고 "hidden" 클래스명 제거
 */
function printGreetings (uername){
    const userName = localStorage.getItem(USERNAME_KEY)
    greeting.innerText = `Hello, ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if (saveUserName == null){ 
    // user 정보가 없을 경우(null)
    loginForm.classList.remove(HIDDEN_CLASSNAME);

    // todo
    todoSection.classList.add(HIDDEN_CLASSNAME); 

    loginForm.addEventListener("submit", onLoginSubmit)
} else {
    // user 정보가 있을 경우
    printGreetings(saveUserName) // localStorage username

    // todo
    todoSection.classList.remove(HIDDEN_CLASSNAME); 

    // 로그아웃 버튼
    logoutBtn.classList.remove(HIDDEN_CLASSNAME); 
}

// 로그아웃 버튼
logoutBtn.addEventListener("click", onLogout);