// getting from the HTML
const taskInput = document.getElementById("insert") ;
const addBtn = document.getElementById("add");
const taskList = document.getElementById("display") ;
//adding the event listener to button
addBtn.addEventListener('click', addTask) ;
//load task from Local Storage when the page loads  - from the HTML
document.addEventListener('DOMContentLoaded', loadToDo) ;
// function to add the to-do 
function addTask() {
  // gets my task from the input 
   const itemTask = taskInput.value.trim() ;
   // then return the task if theres none
   if (itemTask === ' ') {
     return
   }
   // creating a list item from Task 
   const listItem = document.createElement('li');
   listItem.textContent = itemTask ;  
//append the list item to the \tasklist
taskList.appendChild(listItem) ;
// save tasks to local storage
saveTask();
// to clear the input 
taskInput.value = " " ;
}
