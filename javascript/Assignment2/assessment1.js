document.body.style.backgroundColor="#e6e670";
var sum=0;
var n = 0;
var number = prompt("Enter the number");
while(number>0){
    sum=sum+Number(number);
    number = prompt("Enter the number");
    n++;
}
document.getElementById("code").innerHTML=`<h3> Sum of ${n} natural number is : ${sum}</h3>`