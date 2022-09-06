// var heading = document.querySelector("h1")!;
// // heading.innerText="Anshika Jain";
// heading.innerHTML="Anshika Jain";
// console.log(heading);
//  ! - means not null 



var heading = document.querySelector("h1") as HTMLHeadElement;
// heading.innerText="Anshika Jain";
heading.innerHTML="DOM MAnipulation Using TypeScript";
// console.log(heading);
//  HTMLHeadElement - means not null and doing casting 


// var heading1 = document.querySelector("h1")!;
// if(heading1){
//     heading1.innerHTML="Anshika Jain";
// }
// console.log(heading1);



// let anchor = document.querySelector("a") as HTMLAnchorElement;
// console.log(anchor.href);

var input1= document.getElementById("num1") as HTMLInputElement;
var input2= <HTMLInputElement>document.getElementById("num2");
console.log(input1.value, input2.value);

var form = document.querySelector(".myform")as HTMLFormElement;

form.addEventListener('submit',function(e:Event){
    e.preventDefault;
    let newP= document.createElement('p');
    let res:number= input1.valueAsNumber + input2.valueAsNumber;
    newP.innerText=<string><unknown>res;
    form.appendChild(newP);
})



















// exports{}
