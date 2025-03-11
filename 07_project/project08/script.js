function addTask() {
    let taskInput = document.getElementById('taskInput');
    let taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== "") {
        let li = document.createElement('li');
        li.textContent = taskInput.value;

        let removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.classList.add('remove');
        removeButton.onclick = function() {
            taskList.removeChild(li);
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        taskInput.value = "";
    }
}
