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
//  itemTask = taskInput.charAt(0).toUpperCase() + taskInput.slice(1);
   // creating a list item from Task 
   const listItem = document.createElement('li');
   listItem.textContent = itemTask ;  
//append the list item to the \tasklist
taskList.appendChild(listItem) ;
// save tasks to local storage
saveTasks();
// to clear the input 
taskInput.value = " " ;
}

//function to save tasks to local storage
function saveTasks() {
   //get all the task from the task list
   const tasks = Array.from(taskList.children).map(itemTask => itemTask.textContent) ;
   //store the tasks in local storage as a JSON string
   localStorage.setItem('tasks', JSON.stringify(tasks));
}

//function to load tasks from local storage 
function loadTasks(){
   //get the tasks from local storage
   const savedTasks = localStorage.getItem('tasks');
   //return if there are no saved tasks
   if (!savedTasks) {
     return
   }
   //parse the JSONString & create a list items 
   const tasks = JSON.parse(saveTasks) ;
   //LOOP through tasks
   tasks.forEach(itemTask => {
       const listItem = document.createElement('li');
       listItem.textContent = listItem;
       taskList.appendChild(listItem);
   });
}
function sort() {
 let sortArray = sortArray.sort() ;
 sortArray.forEach(itemTask => {
  if (listItem === style.line.line("Line-through")) { continue } {


 
  }
 
  
 });

}
