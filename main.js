window.onload = function () {
  let name = localStorage.setItem("name").value;
  if (name) {
    document.getElementById("title").textContent = `${name}'s list`;
    document.getElementById("myNAME").style.display = "none";
    document.getElementById("myname").style.display = "none";
  }
};

function enterName() {
  let name = document.getElementById("myNAME").value;
  localStorage.setItem("name", name);
  document.getElementById("title").textContent = `${name}'s list`;
  document.getElementById("myNAME").style.display = "none";
  document.getElementById("myname").style.display = "none";
}

function addTask() {
  let task = document.getElementById("task").value;
  if (!task) return;

  let p = document.createElement("p");
  p.textContent = task;
  p.setAttribute("draggable", "true");
  p.id = "task-" + Date.now();

  p.addEventListener("dragstart", function (event) {
    event.dataTransfer.setData("text", event.target.id);
  });

  let deletBtn = document.createElement("button");
  deletBtn.textContent = "🗑️";
  deletBtn.style.marginLeft = "10px";
  deletBtn.style.background = "transparent";
  deletBtn.style.color = "red";
  deletBtn.style.border = "none";
  deletBtn.style.cursor = "pointer";
  deletBtn.addEventListener("click", function () {
    p.remove();
  });

  p.appendChild(deletBtn);
  document.getElementById("started").appendChild(p);
  document.getElementById("task").value = "";
}

function dragover(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();
  let savedId = event.dataTransfer.getData("text");
  let dragged = document.getElementById(savedId);

  let dropZone = event.target;
  while (!dropZone.id || dropZone.tagName === "P") {
    dropZone = dropZone.parentElement;
  }

  dropZone.appendChild(dragged);
}

function redColor() {
  document.body.style.backgroundColor = "#646482";
}

function blueColor() {
  document.body.style.backgroundColor = "hsl(0, 4%, 62%)";
}

function greenColor() {
  document.body.style.backgroundColor = "hwb(120 37% 48%)";
}
