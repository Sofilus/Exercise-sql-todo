import printTodo from "./printTodo.js";

const addTodoContainer = document.querySelector('#add-todo');
const newTodoName = document.querySelector('#todo-name');
const saveTodoBtn = document.querySelector('#save-todo-btn');
saveTodoBtn.innerHTML = "Lägg till"

export default saveTodoBtn.addEventListener('click', () => {

    fetch("http://localhost:3000/todo/add", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({todoName: newTodoName.value})
    })
    .then(res => res.json())
    .then(data => {

        printTodo();
    
    })
})