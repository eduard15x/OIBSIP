// form inputs by user
const form = document.querySelector(".task-form");
const taskTitle = document.querySelector(".form-title");
const taskDescription = document.querySelector(".form-description");
const addTaskBtn = document.querySelector(".form-submit");
// tasks list
let tasksArray = [];
let tasksList = document.querySelector(".tasks-list");
// list items
const listItems = document.querySelectorAll(".list-item");

// submit event
form.addEventListener("submit", handleSubmit);
tasksList.addEventListener("click", deleteTask);

function handleSubmit(e) {
  e.preventDefault();
  tasksArray.push({
    taskTitle: taskTitle.value,
    taskDescription: taskDescription.value,
  });
  resetForm();
  updateTasksList();
}

function resetForm() {
  taskTitle.value = "";
  taskDescription.value = "";
}

function updateTasksList() {
  tasksList.innerHTML = "";
  for (let task of tasksArray) {
    tasksList.innerHTML += `
    <li class="list-item">
        <p class="list-item-title">${task.taskTitle}</p>
        <p class="list-item-description">${task.taskDescription}</p>
        <button class="list-item-btn">X</button>
    </li>
    `;
  }
}

function deleteTask(e) {
  if (e.target.classList.value === "list-item-btn") {
    const parent = e.target.parentElement;
    const taskTItleInList =
      parent.querySelector(".list-item-title").textContent;

    // get index of the clicked item, from array
    const indexOfTask = tasksArray.findIndex(
      (item) => item.taskTitle === taskTItleInList
    );

    tasksArray.splice(indexOfTask, 1);
    updateTasksList();
  }
}
