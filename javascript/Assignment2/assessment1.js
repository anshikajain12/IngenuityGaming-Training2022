// document.body.style.backgroundColor="#e6e670";
document.body.style.background="linear-gradient(90deg, rgba(84,100,124,1) 0%, rgba(177,167,110,1) 0%, rgba(225,230,112,1) 100%, rgba(128,210,147,0.9433656957928802) 100%)";
document.body.style.justifyContent="center";
document.body.style.textAlign="center";
document.body.style.fontFamily="sans-serif"
document.body.style.fontSize="27px";
document.body.style.fontWeight="bold";
var sum=0;
var n = 0;
var number = prompt("Enter the number");
while(number>0){
    document.write(`Entered number is: ${number} <br><br>`);
    sum=sum+Number(number);
    number = prompt("Enter the number");
    n++;
}
document.write(` Sum of ${n} natural number is : ${sum}`);

if(n>3){
    document.body.style.marginTop="100px";
}
else{
    document.body.style.marginTop="246px";
}