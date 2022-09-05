"use strict";
document.body.style.background = "url('https://media.istockphoto.com/photos/orange-podium-and-minimal-abstract-background-for-halloween-picture-id1337094115?b=1&k=20&m=1337094115&s=170667a&w=0&h=NMNJ_9pu_xo6LiBs7ctZNjdudGJXoDF8-ehqJa1OQd4=')";
document.body.style.backgroundRepeat = "noRepeat";
document.body.style.backgroundSize = "cover";
document.body.style.color = "rgb(23 9 60)";
document.body.style.fontFamily = "sans-serif";
document.body.style.fontSize = "20px";
document.body.style.marginTop = "124px";
document.body.style.justifyContent = "center";
document.body.style.textAlign = "center";
document.write(`<h2>Perform commulative sum using rest Operator on passing variable length to a function</h2>`);
function addFunc(x, ...y) {
    let sum = 0;
    for (let i = 0; i < y.length; i++) {
        sum = sum + y[i];
    }
    return x + sum;
}
let func = addFunc(2, 3, 4, 5, 6, 7, 8, 9);
document.write(`<h3> sum of variables using rest operator ${func} </h3>`);
