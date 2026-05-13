
let tasks = [];


// Login Function

function loginUser() {

  let userName = document.getElementById("username").value;

  let userPassword = document.getElementById("password").value;

  // Simple Login Validation

  if (userName == "admin" && userPassword == "1234") {

    document.getElementById("loginBox").style.display = "none";

    document.getElementById("taskContainer").style.display = "block";

  } else {

    alert("Invalid Username or Password");

  }

}


let taskForm = document.getElementById("taskForm");

let taskInput = document.getElementById("taskInput");

let taskList = document.getElementById("taskList");




taskForm.addEventListener("submit", function (event) {

  event.preventDefault();

  let taskText = taskInput.value;

  if (taskText == "") {

    alert("Please enter a task");

    return;

  }

  

  let taskObject = {

    text: taskText,

    completed: false

  };



  tasks.push(taskObject);

  // Clear Input Field

  taskInput.value = "";

  // Display Tasks

  displayTasks();

});


function displayTasks() {

  taskList.innerHTML = "";

  for (let i = 0; i < tasks.length; i++) {

    let taskDiv = document.createElement("div");

    taskDiv.classList.add("task");

    // Check Completed Task

    if (tasks[i].completed == true) {

      taskDiv.classList.add("completed");

    }

    taskDiv.innerHTML = `

      <p>${tasks[i].text}</p>

      <button onclick="completeTask(${i})">
        ${tasks[i].completed ? "Pending" : "Complete"}
      </button>

      <button onclick="deleteTask(${i})">
        Delete
      </button>

    `;

    taskList.appendChild(taskDiv);

  }

}

function completeTask(index) {

  tasks[index].completed = !tasks[index].completed;

  displayTasks();

}

function deleteTask(index) {

  tasks.splice(index, 1);

  displayTasks();

}