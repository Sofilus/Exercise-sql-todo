const todoListContainer = document.querySelector('#todo-list');

export default function printTodo() {

    fetch("http://localhost:3000/todo/all")
    .then(res => res.json())
    .then(data => {

        const ul = document.createElement('ul')
        
        for (let i = 0; i < data.length; i++) {

            const li = document.createElement('li');
            li.innerText = data[i].todoName
            ul.appendChild(li)
        }
        
        todoListContainer.innerHTML = ""
        todoListContainer.appendChild(ul)
    })
}