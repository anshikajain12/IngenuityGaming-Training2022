//Rest operator | Pack data
function display(...data){
console.log(data);
}
// display(1,2,3,4,5,6,7,8,9,10);

function display(x,y,...data){
    
    console.log(x+" "+y);

    console.log(data);
}
// display(1,2,3,4,5,6,7,8,9,10);

//Spread operator | unpack data

let arr1=[1,2,3,4,5,6];
let arr2=[7,8,9,10,...arr1];
console.log(arr2)
