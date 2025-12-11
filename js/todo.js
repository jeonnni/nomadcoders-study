const todoForm = document.getElementById("todo-form")
const todoInput = todoForm.querySelector("input")
const todoList = document.getElementById("todo-list")
const TODOS_KEY = "todos";

const toDos = [];
// To-Do-List 작성시 localStorage 에 저장 됨. 
function saveToDos(){
    // string data type 으로 저장 됨. (예: "[a,b,c,d,e]")
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

function deleteToDo(e){
    const liDel = e.composedPath()[0].parentElement;
    liDel.remove()
}

function paintToDo(newTodo){
    const liToDo = document.createElement("li");

    const spanToDo = document.createElement("span");
    spanToDo.innerText = newTodo;

    const buttonToDo = document.createElement("button");
    buttonToDo.innerText = "❌";
    buttonToDo.addEventListener("click",deleteToDo)

    liToDo.appendChild(spanToDo);
    liToDo.appendChild(buttonToDo);
    todoList.appendChild(liToDo);
}

function handleTodoSubmit(e){
    e.preventDefault();

    const newTodo = todoInput.value;
    todoInput.value = "";

    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos()
}
todoForm.addEventListener("submit",handleTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if(!(savedToDos == null)){
    // JSON.parse()를 통해 string data type -> array 로 변환 (예: "[a,b,c,d]" (string) => [a, b, c, d] (array))
    const parsedToDos = JSON.parse(savedToDos);
    // array의 item들에 대해 한 개의 function만 실행할 수 있게 해줌
    parsedToDos.forEach((e)=>{console.log(`item : ${e}`)}); 
}