
const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");

// Load saved tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("day10Tasks")) || [];

// Save tasks
function save() {
    localStorage.setItem("day10Tasks", JSON.stringify(tasks));
}

// Display tasks
function render() {
    taskList.innerHTML = "";

    tasks.forEach(function (task, index) {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = task.text;

        li.dataset.index = index;

        if (task.done) {
            li.classList.add("done");
        }

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.type = "button";

        li.append(span, deleteButton);
        taskList.append(li);
    });
}

// Add a new task
form.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskText = input.value.trim();

    if (taskText === "") {
        return;
    }

    tasks.push({
        text: taskText,
        done: false
    });

    save();
    render();

    form.reset();
});

// Handle complete and delete actions
taskList.addEventListener("click", function (event) {
    const li = event.target.closest("li");

    if (!li) {
        return;
    }

    const index = Number(li.dataset.index);

    if (event.target.matches(".delete-btn")) {
        tasks.splice(index, 1);
    } else {
        tasks[index].done = !tasks[index].done;
    }

    save();
    render();
});

// Display saved tasks when page loads
render();
