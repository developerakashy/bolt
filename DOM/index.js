const body = document.body;
function getNode(type) {
  return document.createElement(type);
}
const parentContainer = getNode("div");
const title = getNode("h1");
const inputContent1 = getNode("input");
const requestBtn = getNode("button");


requestBtn.textContent = "Get List";


body.appendChild(parentContainer);
title.textContent = "Day 1: DOM";
parentContainer.append(title, inputContent1, requestBtn);
inputContent1.name = "csk";


function getInputValue(event) {
  const { value, name } = event.target;
  if (name === "csk") {
    csk.textContent = value;
  }
}
let allTodos;


function getAllTodo() {
    
    
    
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((json) =>{
        allTodos = json;
        console.log(allTodos)
      removeChild()
      listAllTodo();
    })
    .catch((error) => {
      console.log("error", error);
    })
    ;
}


function listAllTodo() {
  for (let i = 0; i < allTodos.length; i++) {
    const todoName = getNode("h3");
    todoName.classList.add("todo-text")
    todoName.textContent = allTodos[i].title;
    parentContainer.appendChild(todoName);
  }
}


function removeChild () {
  const allTodo = document.querySelectorAll(".todo-text");
  
  if(allTodo.length > 0) {
    for(let i = 0; i < allTodo.length; i++) {
      allTodo[i].remove();
    }
  }
}
inputContent1.addEventListener("input", (event) => {
  getInputValue(event);
});


requestBtn.addEventListener("click", getAllTodo);

