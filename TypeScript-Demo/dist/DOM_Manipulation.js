"use strict";
var heading = document.querySelector("h1");
heading.innerHTML = "DOM MAnipulation Using TypeScript";
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
console.log(input1.value, input2.value);
var form = document.querySelector(".myform");
form.addEventListener('submit', function (e) {
    e.preventDefault;
    let newP = document.createElement('p');
    let res = input1.valueAsNumber + input2.valueAsNumber;
    newP.innerText = res;
    form.appendChild(newP);
});
