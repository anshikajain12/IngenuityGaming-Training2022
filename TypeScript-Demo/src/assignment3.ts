// document.body.style.background="linear-gradient(to right, deeppink, blue)";
document.body.style.background ="url('https://media.istockphoto.com/photos/orange-podium-and-minimal-abstract-background-for-halloween-picture-id1337094115?b=1&k=20&m=1337094115&s=170667a&w=0&h=NMNJ_9pu_xo6LiBs7ctZNjdudGJXoDF8-ehqJa1OQd4=')";
document.body.style.backgroundRepeat = "noRepeat";
document.body.style.backgroundSize = "cover";

document.body.style.color = "rgb(23 9 60)";
document.body.style.fontFamily = "sans-serif";
document.body.style.fontSize = "20px";
document.body.style.marginTop = "124px";
document.body.style.justifyContent = "center";
document.body.style.textAlign = "center";
document.body.style.textShadow = "-1px 1px 4px #672d2d";

document.write(
  `<h2>Perform commulative sum using rest Operator on passing variable length to a function</h2>`
);

function addFunc(...y:number[]) {
  let sum: number = 0;

  let enterValue: any = prompt("Enter the number for sum");
  let p:number=parseInt(enterValue);

  for(let i:number=1;i<=p;i++){

    let enterValueOfY:any=prompt(`Enter the values ${p} times`);
    y.push(parseInt(enterValueOfY));
    sum=sum+y[i];
  }
  
  console.log(y);
   
  return sum;
}
let func: number = addFunc(0);
document.write(`<h3> sum of variables using rest operator ${func} </h3>`);
