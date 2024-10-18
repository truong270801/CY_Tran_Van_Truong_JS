const buttonElement = document.querySelector('.btn-add');
const divElement = document.querySelector('.todo-list');
const inputTitleElement = document.getElementsByTagName('input')[0];
const inputContentElement = document.getElementsByTagName('textarea')[0];
const ulElement = document.getElementsByTagName('ul')[0];
let todos = JSON.parse(localStorage.getItem('todo')) || [];
let isEditing = false;
let currentTodoIndex = null;



document.querySelector('.close').addEventListener('click', () => {
    document.querySelector('.pop-add').style.display = 'none';
    resetForm();
});

document.getElementsByTagName('button')[0].addEventListener('click', () => {
    document.querySelector('.pop-add').style.display = 'flex';
    resetForm();
});

buttonElement.addEventListener('click', () => {
    const title = inputTitleElement.value.trim();
    const content = inputContentElement.value.trim();

    if (title === '' || content === '') {
        alert('Vui lòng nhập đầy đủ các trường!!!!');
    } else {
        if (isEditing) {
            todos[currentTodoIndex] = { title, content };
            isEditing = false;
            currentTodoIndex = null;
        } else {
            todos.push({ title, content });
        }
        localStorage.setItem("todo", JSON.stringify(todos));
        document.querySelector('.pop-add').style.display = 'none';
        displayTodo();
        resetForm();
    }
});

function displayTodo() {
    ulElement.innerHTML = '';

    todos.forEach((item, index) => {
        const liNew = document.createElement('li');
        liNew.innerHTML = `
            <div class="content-list">
                <b>${item.title}</b>
                <p>${item.content}</p>
            </div>
            <div class="action">
                <button onclick="updateTodo(${index})" class="button btn-edit">EDIT</button>
                <button onclick="deleteTodo(${index})" class="button btn-delete">DELETE</button>
            </div>
        `;
        ulElement.appendChild(liNew);
    });
}

function deleteTodo(index) {
    todos.splice(index, 1);
    localStorage.setItem("todo", JSON.stringify(todos));
    displayTodo();
}

function updateTodo(index) {
    const item = todos[index];
    inputTitleElement.value = item.title;
    inputContentElement.value = item.content;
    document.querySelector('.pop-add').style.display = 'flex';
    isEditing = true;
    currentTodoIndex = index;
}

function resetForm() {
    inputTitleElement.value = '';
    inputContentElement.value = '';
    isEditing = false;
    currentTodoIndex = null;
}

displayTodo();
