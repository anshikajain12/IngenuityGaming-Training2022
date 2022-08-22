var todoinput= document.querySelector(".todo-input");
var btn= document.querySelector("button");
var todoList= document.querySelector(".todo-list");


btn.onclick= function createToDo(e){
    e.preventDefault();

    var newDiv= document.createElement('div');
    newDiv.classList.add('todo');

    var newLi = document.createElement('li');
    newLi.classList.add('todo_item');
    newLi.innerHTML=todoinput.value;
    newDiv.appendChild(newLi);


    var completebtn = document.createElement('button');
    completebtn.classList.add('cmpbtn');
    completebtn.innerHTML='<i class="fa fa-check"></i>';
    newDiv.appendChild(completebtn);


    var trashbtn = document.createElement('button');
    trashbtn.classList.add('trashbtn');
    trashbtn.innerHTML='<i class="fa fa-trash"></i>';
    newDiv.appendChild(trashbtn);


    todoList.appendChild(newDiv);




}