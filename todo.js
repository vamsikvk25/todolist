//selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-Button");
const todoList = document.querySelector(".todo-List");

//event listeners
todoButton.addEventListener("click",addTodo);


//functions
function addTodo(event){
	event.preventDefault();
	//ToDo div
	const todoDiv=document.createElement("div");
	todoDiv.classList.add("todo");
	//create Li
	const newTodo=document.createElement('li');
	newTodo.innerText='hey';
	newTodo.classList.add('todo-item');
	todoDiv.appendChild(newTodo);
	//check mark button
	const completedButton =document.createElement('button');
	completedButton.innerHTML='<i class="fas fa-check"></i>';
	completedButton.classList.add("complete-btn");
	todoDiv.appendChild(completedButton);
	//check trash button
	const trashButton =document.createElement('button');
	trashButton.innerHTML='<i class="fas fa-trash"></i>';
	trashButton.classList.add("complete-btn");
	todoDiv.appendChild(trashButton);
	//APPEND to list
	todoList.appendChild(todoDiv);
}
