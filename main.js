let add = document.querySelector(".add");
let input = document.querySelector(".inp");
const todoList = document.querySelector(".list");
let time = document.querySelector("#time");



let showList = () => {
  if (input.value != "") {
    let list = document.createElement("li");
    let del = document.createElement("button");
    let time = document.createElement("input")
    time.setAttribute("type","time");
    
    todoList.appendChild(list);
    todoList.appendChild(del);
    
    
    list.innerText = input.value;
    input.value = "";
    del.innerText = "Remove";
    del.classList.add("del");
    list.appendChild(time);
    time.classList.add("date");
    
    del.addEventListener("click", () => {
      todoList.removeChild(list);
      todoList.removeChild(del);
      list.removeChild(time);
    })
  }
  else {
    alert("List can't be empty")
  }
}  

add.addEventListener("click",showList);
input.addEventListener("keypress",
  function(event) {
    
      if (event.key === "Enter") {
        
        event.preventDefault();
      }
  })
