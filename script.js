function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  // Task complete on click
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Task delete on right-click
  li.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    li.remove();
  });

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}