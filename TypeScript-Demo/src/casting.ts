let a1:any="1";
let data:number=a;
console.log(typeof a);

let str:string="22";
// let numvar:number= str as unknown as number;
let numvar:number= <number><unknown>str;
let x1= 20;
console.log(numvar+x);
console.log(typeof numvar);