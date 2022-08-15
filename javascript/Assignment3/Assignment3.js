document.body.style.background="linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(182,182,221,1) 46%, rgba(148,187,233,1) 100%)";
document.body.style.fontFamily="cursive";
document.body.style.fontSize="20px";
document.body.style.textAlign="center";
document.body.style.marginTop="150px";
document.body.style.textShadow="10px 10px 10px grey";

document.write(`<h1> Assignment-3</h1>`)
// remove extra white space from the string
var x = prompt("Enter a String with whitespaces");
var sentence = x.replace(/\s+/g,' ').trim();
document.write(`string without extra whitespaces: ${sentence} <br>`);


//Write a code to Copy an array into another using forEach()
var arr= [1,2,3,4,5,6];
var copy=[];
arr.forEach(element => {
    copy.push(element);
    document.write(`Element of Array is: ${element} <br>`);
});
document.write(`New array is: [${copy}]`);
document.write("<br>");

//Write a code in JavaScript to Check all Students passed  (not passing elements one by one to function)
var marks=[10,20,30,80,50,60];
var count=0;
marks.forEach(element => {
    if(element<30){
        count++;
    }  
});
if(count>0){
    document.write(`All Students are not passed because marks of a student is [${marks}] <br>`);
}
else{
    document.write(`All Students are passed because marks of a student is [${marks}] <br>`);
}

//Write a code to add an Element at a particular List inside an array
var array = ["Html","Css","Javascript"];
array.push(prompt("Enter a string element to add inside the array"));
document.write(`Array is :${array}`);
document.write("<br>")

//Write a code to sort the string in descending order.
document.write(`sorted string array in descending order ${array.sort().reverse()}`)
document.write("<br>")