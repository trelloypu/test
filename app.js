function addTask() {
  const input = document.getElementById("taskInput");
  const value = input.value.trim();

  if (value === "") {
    alert("Task cannot be empty");
    return;
  }

  const li = document.createElement("li");
  li.textContent = value;

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}