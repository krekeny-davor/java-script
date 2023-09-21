/*Retrieve radio buttons and add event listeners to them so only one of them is/can be checked/selected */
const radioBtnAll = document.querySelector("#all");
const radioBtnOpen = document.querySelector("#open");
const radioBtnDone = document.querySelector("#done");

radioBtnAll.addEventListener("change", () => {
  if (radioBtnAll.checked) {
    radioBtnOpen.checked = false;
    radioBtnDone.checked = false;
  }
});

radioBtnOpen.addEventListener("change", () => {
  if (radioBtnOpen.checked) {
    radioBtnAll.checked = false;
    radioBtnDone.checked = false;
  }
});

radioBtnDone.addEventListener("change", () => {
  if (radioBtnDone.checked) {
    radioBtnAll.checked = false;
    radioBtnOpen.checked = false;
  }
});

/* Retrieve the input element, add button and the list */
const todoInput = document.querySelector(".js-todo-input");
const addButton = document.querySelector(".js-add-todo-button");
const todoList = document.querySelector(".js-todo-list");

/*Retrieve the list from the local storage*/
const storedTodos = JSON.parse(localStorage.getItem("todoList")) || [];
const arrOfTodos = storedTodos;

function showTodoList() {
  for (const todoItem of arrOfTodos) {
    const newTodo = document.createElement("li");
    const checkBox = document.createElement("input");
    checkBox.type = "checkbox";

    const newTodoText = document.createTextNode(todoItem);
    checkBox.addEventListener("change", function () {
      if (checkBox.checked) {
        newTodoText.parentElement.classList.add("crossed-todo");
      } else {
        newTodoText.parentElement.classList.remove("crossed-todo");
      }
    });

    newTodo.appendChild(newTodoText);
    newTodo.appendChild(checkBox);
    todoList.appendChild(newTodo);
  }
}

showTodoList();

/* Add the new todos function */
function addTodo() {
  const newTodoInput = todoInput.value;

  /* This code below prevents the duplicates */
  let isDuplicate = false;
  for (const todo of arrOfTodos) {
    if (todo.toLowerCase() === newTodoInput) {
      isDuplicate = true;
      break;
    }
  }

  if (isDuplicate) {
    return;
  }

  const newTodo = document.createElement("li");
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  const newTodoText = document.createTextNode(newTodoInput);
  checkBox.addEventListener("change", function () {
    if (checkBox.checked) {
      newTodoText.parentElement.classList.add("crossed-todo");
    } else {
      newTodoText.parentElement.classList.remove("crossed-todo");
    }
  });

  newTodo.appendChild(newTodoText);
  newTodo.appendChild(checkBox);
  todoList.appendChild(newTodo);

  arrOfTodos.push(newTodoInput);
  localStorage.setItem("todoList", JSON.stringify(arrOfTodos));

  todoInput.value = "";
}

addButton.addEventListener("click", addTodo);

todoInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    addTodo();
  }
});

/* Filtering function based on the selected radio button*/
function filterTodos() {
  const selectedRadio = document.querySelector("input[name='filter']:checked");
  let filter = "all";

  if (selectedRadio) {
    filter = selectedRadio.value;
  }

  const todos = document.querySelectorAll(".js-todo-list li");

  for (let i = 0; i < todos.length; i++) {
    const todo = todos[i];
    const isCompleted = todo.classList.contains("crossed-todo");

    if (filter === "all") {
      todo.style.display = "list-item";
    } else if (filter === "open" && !isCompleted) {
      todo.style.display = "list-item";
    } else if (filter === "done" && isCompleted) {
      todo.style.display = "list-item";
    } else {
      todo.style.display = "none";
    }
  }
}

const radioButtons = document.querySelectorAll("input[name='filter']");

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("change", filterTodos);
});

/* The delete function for removing the done todos */
function deleteDoneTodos() {
  const todos = document.querySelectorAll(".js-todo-list li");
  let todo;
  const updatedTodos = [];

  for (let i = 0; i < todos.length; i++) {
    todo = todos[i];
    const isCompleted = todo.classList.contains("crossed-todo");
    if (!isCompleted) {
      updatedTodos.push(todo.innerText);
    }
  }

  /* Removes the completed todos from the HTML list */
  for (let i = 0; i < todos.length; i++) {
    todo = todos[i];
    const isCompleted = todo.classList.contains("crossed-todo");
    if (isCompleted === true) {
      todo.remove();
    }
  }

  /* Updates the local storage without the deleted todo */
  localStorage.setItem("todoList", JSON.stringify(updatedTodos));
}

const removeTodosButton = document.querySelector(".js-remove-done-todos");
removeTodosButton.addEventListener("click", deleteDoneTodos);
