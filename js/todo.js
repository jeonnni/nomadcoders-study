const todoForm = document.getElementById("todo-form")
const todoInput = todoForm.querySelector("input")
const todoList = document.getElementById("todo-list")


function paintToDo(newTodo){
    const liToDo = document.createElement("li");
    const spanToDo = document.createElement("span");

    liToDo.appendChild(spanToDo)
    spanToDo.innerText = newTodo;

    todoList.appendChild(liToDo)
}

function handleTodoSubmit(e){
    e.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = ""
    paintToDo(newTodo)
}

todoForm.addEventListener("submit",handleTodoSubmit)