let count =0;
function addTask() {
  let menu = document.getElementById("completed-task");
  let input = document.getElementById("input").value;
  let li = document.createElement("li");
  if (input === null || input === "") {
    alert("Input Something, Blank is not executable");
  } else {
    count++;
    li.innerText = count+". "+input;
    li.style.listStyleType = "none";
    li.style.padding = "12px";
    li.style.fontSize = "25px";
    menu.appendChild(li);
  }
}
function deleteBtn() {
  let menu = document.getElementById("completed-task");
  let lastChild = menu.lastElementChild;
  if (!lastChild) {
    alert("No Items are available here");
  } else {
    menu.removeChild(menu.lastElementChild);
  }
}
