function addTask() {

    let taskInput = document.getElementById("taskInput");

    if(taskInput.value === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.textContent = taskInput.value;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}