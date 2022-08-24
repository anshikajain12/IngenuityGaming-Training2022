//dom reference
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.title);

// var x= document.getElementById("head1");
// console.log(x);
// var y= document.getElementsByClassName("para");
// console.log(y);
// var z= document.getElementsByTagName("ul");
// console.log(z);
// var q= document.querySelector("#head2");
// console.log(q);
// var r= document.querySelectorAll(".para");
// console.log(r);
// var selectsecond= document.querySelectorAll(".para");
// console.log(selectsecond[1]);
// var h2= document.getElementById("head2");


//DOM MANIPULATION
// document.title= "New Title";
// x.style.backgroundColor="yellow";
// x.innerText="This is new Heading";
// h2.style.display="none";
// h2.style.visibility="hidden";
// selectsecond[1].style.fontFamily="arial";
// selectsecond[1].style.color="red";
// selectsecond[1].style.border="2px solid blue";



// for(var i=0;i<y.length;i++){
//     y[i].style.color="blue";
// }

// var newLi = document.createElement("li");
// newLi.textContent="New Item";


//Event Handling
/*1. Inline Event Handling
2. Handle Event using its Reference
3. using addEventListener */

//1. Inline Event Handling
function performTask(){
    alert("btn clicked");
    console.log("some statement is going to be executed")
}


//2. Handle Event using its Reference
var btn = document.querySelector('button');
// btn.onmouseover= performTask;
btn.onmouseover=function(){
    document.querySelector('p').style.backgroundColor="pink";
};
btn.onmouseleave=()=> document.querySelector('p').style.backgroundColor="skyblue";


//3. using addEventListener
btn.addEventListener("click",task1);
function task1(){
    document.getElementById("head1").style.display="none";
}

btn.removeEventListener('click',task1);