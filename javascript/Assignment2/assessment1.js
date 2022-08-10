document.body.style.background="linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(182,182,221,1) 46%, rgba(148,187,233,1) 100%)";
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