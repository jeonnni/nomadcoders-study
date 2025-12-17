// 할 일

const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"; 
let toDos = [];


// 저장 localStorage
function saveToDos(){
    // string data type 으로 저장 됨. (예: "[a,b,c,d,e]")
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}


// 삭제
function deleteToDo(e){
    const li = e.composedPath()[0].parentElement;
    li.remove();
    toDos = toDos.filter((item)=> item.id !== Number(li.id));
    saveToDos();
}


// 화면에 아이템 추가
function paintToDo(newTodo){
    const liToDo = document.createElement("li");
    liToDo.id = newTodo.id;
    
    const spanToDo = document.createElement("span");
    spanToDo.innerText = newTodo.text;

    const buttonToDo = document.createElement("button");
    buttonToDo.innerText = "🗑️";
    buttonToDo.addEventListener("click",deleteToDo)

    liToDo.appendChild(buttonToDo);
    liToDo.appendChild(spanToDo);
    todoList.appendChild(liToDo);
}


// 작성 & 저장
function handleTodoSubmit(e){
    e.preventDefault();

    const newTodo = todoInput.value;
    todoInput.value = "";
    
    const newToDoObj = {
        text:newTodo,
        id:Date.now()
    }

    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos()
}
todoForm.addEventListener("submit",handleTodoSubmit);


// localStorage → 배열 복원 → 화면 렌더
const savedToDos = localStorage.getItem(TODOS_KEY);
// console.log(savedToDos);
if(!(savedToDos == null)){
    // JSON.parse()를 통해 string data type "[a,b,c,d]" -> array [a, b, c, d] 로 변환
    const parsedToDos = JSON.parse(savedToDos);
    toDos =  parsedToDos;
    // array의 item들에 대해 한 개의 function만 실행할 수 있게 해줌
    // parsedToDos.forEach((e)=>{console.log(`item : ${e}`)}); 
    toDos.forEach(paintToDo); 
}