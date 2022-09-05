let arr1:number[]=[1,2,3,4,5,6];
arr1.push(11);
console.log(arr1);

let arr2:String[]=["Anshika","Jain"];
arr2[2]="Aa";
console.log(arr2);
arr2.forEach((i)=>console.log(i));

//mixed array
let arr3:(number | String)[]= [1,2,3,4,"abc","def"];
arr3.push(20);
arr3.push("fgh");
console.log(arr3);

//const array no updation available in this array
let arr4: readonly number[]=[1,2,3,4,5];
// arr4.push(30); not allowed 
// arr4[2]=20; not allowed

// Assignment 2:
// let assignmentArray:number[]=[1,2,3,4,5];
// output: [5,10,15,20,25]