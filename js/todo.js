var todoinput= document.querySelector(".todo-input");
var btn= document.querySelector("button");
var todoList= document.querySelector(".todo-list");


btn.onclick= function createToDo(e){
    e.preventDefault();

    var newDiv= document.createElement('div');
    newDiv.classList.add('todo');

    var newLi = document.createElement('li');
    newLi.classList.add('todo_item');

    if(todoinput.value===''){
        alert("You must write something");
    }
    else{
        
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
    // Local Storage

    localStorage.setItem("Information", JSON.stringify([...JSON.parse(localStorage.getItem("Information") || "[]"), { tasks: todoinput.value}]));
    
    todoinput.value="";
    // localStorage.clear();
    
};

todoList.onclick=function checkbtn(e){
    var check = e.target;
    // console.log(check);

    if(check.classList[0] == 'trashbtn'){
        // console.log("Delete button pressed");
        var parentNode = check.parentElement;
        // console.log(parentNode);

        // remove from the localstorage
        window.localStorage.removeItem("Information");

        //remove from the session storage
        window.sessionStorage.removeItem("Information");

        parentNode.remove();
    }
    else if(check.classList[0] ==  'cmpbtn'){
        // console.log("tick button pressed");
        var parentNode = check.parentElement;
        parentNode.classList.toggle("checked");
    }
}



