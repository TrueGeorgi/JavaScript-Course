let importLocalStorange = localStorage.getItem('jsonString');

const todoList = JSON.parse(importLocalStorange) || [];

renderTodoList();

function updateLocalStorage() {
  let jsonString = JSON.stringify(todoList);
  localStorage.setItem('jsonString', jsonString);
}

function renderTodoList() {
  let todoListHTML = '';

  // for(let i = 0; i < todoList.length; i++)
  // const todoObject = todoList[i];
   todoList.forEach((todoObject, i) => {
    const { name, dueDate } = todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class = "delete-todo-button js-delete-button">
      Delete
    </button>
    `;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;

    document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        todoList.splice(index, 1);
        renderTodoList();
      });
    });

    

    updateLocalStorage();
}

document.querySelector('.js-add-button').addEventListener('click', () => {
  addToList();
});

function addToList() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  
  todoList.push({
    // name: name,
    name,
    // dueDate: dueDate
    dueDate
  });

  inputElement.value = '';

  renderTodoList();
}