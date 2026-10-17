let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

let tasks = [];
let taskIdCounter = 1;

function render() {
  taskList.innerHTML = "";
  tasks.forEach((task) => {
    let li = document.createElement("li");
    li.classList.add("task-item");

    let span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = task.text;

    let buttonWrapper = document.createElement("div");
    buttonWrapper.classList.add("task-button");

    let cmpltBtn = document.createElement("button");
    cmpltBtn.textContent = "✅";

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    buttonWrapper.appendChild(cmpltBtn);
    buttonWrapper.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(buttonWrapper);
    taskList.appendChild(li);
  });
}
function addTask() {
  let taskText = taskInput.value.trim();
  console.log("taskText", taskText);
  if (taskText == "") {
    return;
  }
  let newTask = {
    id: taskIdCounter++,
    text: taskText,
    completed: false,
  };

  tasks.push(newTask);
  taskInput.value = "";
  render();
}
addBtn.addEventListener("click", addTask);
