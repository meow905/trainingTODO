// const inputBox = document.querySelector("#input_box");
// const listContainer = document.querySelector(".task_list");
// const needToDo = document.querySelector("#NeedToDo");

// function addTask() {
//   if (inputBox.value == "") {
//     alert("You must write something");
//   } else {
//     let li = document.createElement("li");
//     li.textContent = inputBox.value;
//     listContainer.appendChild(li);
//     const priority = needToDo.value;
//     // Категоризация по степени важности каждой записи
//     if (priority === "A") {
//       li.style.backgroundColor = "red";
//       li.style.opacity = 0.8;
//     } else if (priority === "B") {
//       li.style.backgroundColor = "blue";
//       li.style.opacity = 0.8;
//     } else if (priority === "C") {
//       li.style.backgroundColor = "green";
//       li.style.opacity = 0.8;
//     } else if (priority === "D") {
//       li.style.backgroundColor = "gold";
//       li.style.opacity = 0.8;
//     }

//     let span = document.createElement("span");
//     span.textContent = "\u00d7";
//     li.appendChild(span);
//   }

//   inputBox.value = "";
//   saveData();
// }

// listContainer.addEventListener(
//   "click",
//   function (elem) {
//     if (elem.target.tagName === "LI") {
//       elem.target.classList.toggle("active");
//       saveData();
//     } else if (elem.target.tagName === "SPAN") {
//       elem.target.parentElement.remove();
//       saveData();
//     }
//   },
//   false
// );
// // Записать данные в локальное хранилище
// function saveData() {
//   localStorage.setItem("Data", listContainer.innerHTML);

//   //Получить данные из локального хранилища
// }
// function getData() {
//   listContainer.innerHTML = localStorage.getItem("Data");
// }

// getData();

// window.addEventListener("keypress", newFunc, false);

// function newFunc(event) {
//   console.log(event.charCode);
//   if (event.charCode == "13") {
//     addTask();
//   }
// }

const input = document.getElementById("inputId");
const btn = document.getElementById("btn1");
const ulSection = document.querySelector("ul");
const select = document.querySelector("#selectSect")


console.log(localStorage.getItem("ulSection"));


console.dir(select.value);


console.dir(input);


btn.addEventListener("click",handleClick)

function handleClick() {
  if (input.value !== "") {
    console.dir(input);
    
    const elem = document.createElement("li")
    const span = document.createElement("span")
    span.textContent = "\u00d7";
    elem.textContent = input.value
    if (select.value == "A") {
      elem.style.background = "red"
    } else if (select.value == "B") {
      elem.style.background = "yellow";
    } else if (select.value == "C") {
      elem.style.background = "blue";
    } else if (select.value == "D") {
        elem.style.background = "green";
    } 
    ulSection.appendChild(elem);
    elem.appendChild(span)
    input.value = ""
    saveData();
  }   else alert("Write some text")
}

function saveData() {
  localStorage.setItem("Data", ulSection.innerHTML);

}
function getData() {
  ulSection.innerHTML = localStorage.getItem("Data");
}

getData();


ulSection.addEventListener("click",(event)=>{
 if (event.target.tagName == "LI") {
    event.target.classList.toggle("done")
    saveData();
    
 } else if (event.target.tagName == "SPAN") {
   event.target.parentElement.remove()
   saveData();
   
 }
 
})

document.addEventListener("keydown",handleKey)

function handleKey(e) {
  if (e.code == "Enter") {
    handleClick()
  }
}










