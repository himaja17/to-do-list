function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task === "") {
    alert("Enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.innerText = task;

  // mark as done
  li.onclick = function() {
    li.classList.toggle("done");
  };

  // delete button
  let delBtn = document.createElement("button");
  delBtn.innerText = "❌";
  delBtn.style.marginLeft = "10px";

  delBtn.onclick = function(event) {
    event.stopPropagation();
    li.remove();
  };

  li.appendChild(delBtn);

  document.getElementById("taskList").appendChild(li);

  input.value = "";
}
