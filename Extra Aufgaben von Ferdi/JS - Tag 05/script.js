/* Du erstellst eine Todo-App für das Terminal.

Die Todos werden in einem Array todos gespeichert:
const todos = ["CSS lernen", "JS lernen"];
Erstelle eine Funktion listTodos(), die alle Todos nacheinander in der Konsole auflistet:
listTodos();
// Ausgabe:
// "CSS lernen"
// "JS lernen"
Erstelle eine Funktion addTodo(todo), die einen Parameter besitzt, über den ein 
neues Todo in das todos-Array hinzugefügt werden kann.
Stelle sicher, dass kein leeres Todo oder "undefined" hinzugefügt wird
Bonus
Erstelle eine Funktion deleteTodo(todo), mit der über einen reingegebenen Parameter 
ein Todo gelöscht werden kann */

const todos = ["CSS lernen", "JS lernen"];

function listTodos() {
  for (let i = 0; i < todos.length; i++) {
    console.log(todos[i]);
  }
}

function addTodo(todo) {
  todos.push(todo);
}

function deleteTodo(todo) {
  for (let i = todos.length - 1; i >= 0; i--) {
    if (todo === todos[i]) {
      todos.splice(todos[i], 1);
    }
  }
}

/* Bonus mit Objects*/

const todos2 = [
  { description: "HTML lernen", done: false },
  { description: "CSS lernen", done: false },
  { description: "JS lernen", done: false },
];

function listTodos2() {
  for (let i = 0; i < todos2.length; i++) {
    if (todos2[i].done === false) {
      console.log("[ ] " + i + ": " + todos2[i].description);
    } else {
      console.log("[x] " + i + ": " + todos2[i].description);
    }
  }
}

function addTodo(todo) {
  if (todo === "" || todo === undefined) {
    return "please enter a todo";
  } else {
    todos2.push({ description: todo, done: false });
  }
}

function doneTodo(todo) {
  for (let i = 0; i < todos2.length; i++) {
    if (todo === todos2[i].description) {
      return (todos2[i].done = true);
    } else {
      ("please enter correct todo name");
    }
  }
}

function showOpenTodos() {
  for (let i = 0; i < todos2.length; i++) {
    if (todos2[i].done === false) {
      console.log("[ ] " + todos2[i].description);
    }
  }
}

function deleteDoneTodos() {
  for (let i = todos2.length - 1; i >= 0; i--) {
    if (todos2[i].done === true) {
      todos2.splice(i, 1);
    }
  }
  listTodos2();
}
