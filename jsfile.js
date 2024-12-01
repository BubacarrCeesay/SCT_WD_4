const taskName = document.getElementById("task-name");
const taskDate = document.getElementById("task-date");
const taskTime = document.getElementById("task-time");

const container = document.getElementById("task-container");

const addbtn = document.getElementById("addbtn");

function addTask() {
  let name = taskName.value;
  let date = taskDate.value;
  let time = taskTime.value;

  if (name === "" || date === "" || time === "") {
    alert("Please Enter Task Name, Date and Time.");
  } else {
    let li = document.createElement("li");

    li.innerHTML = name;

    container.appendChild(li);

    let p = document.createElement("p");

    p.innerHTML = `Date : ${date}`;

    li.appendChild(p);

    let h = document.createElement("h6");

    h.innerHTML = `Time : ${time}`;

    li.appendChild(h);

    let spanx = document.createElement("span");
    spanx.innerHTML = "\u00d7";

    li.appendChild(spanx);

    let btn = document.createElement("button");
    btn.innerHTML = "\u270E";

    li.appendChild(btn);

    taskName.value = "";
    taskDate.value = "";
    taskTime.value = "";
    addbtn.innerHTML = "Add";
  }

  saveData();
}

container.addEventListener("click", function (e) {
  if (e.target.tagName == "LI") {
    e.target.classList.toggle("checked");
    if (e.target.classList.contains("checked")) {
      showCheckedAnim();
    }
    saveData();
  } else if (e.target.tagName == "SPAN") {
    e.target.parentElement.remove();
    saveData();
  } else if (e.target.tagName == "BUTTON") {
    let edt = e.target.parentElement.innerHTML;

    let inputdata = edt.split("<")[0];

    taskName.value = inputdata;
    addbtn.innerHTML = "Edit";

    e.target.parentElement.remove();
  }
});

function saveData() {
  localStorage.setItem("tododata", container.innerHTML);
}

function getData() {
  container.innerHTML = localStorage.getItem("tododata");
}

getData();

function showCheckedAnim() {
  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  confetti({
    angle: randomInRange(55, 125),
    spread: randomInRange(50, 70),
    particleCount: randomInRange(50, 100),
    origin: { y: 0.6 },
  });
}
