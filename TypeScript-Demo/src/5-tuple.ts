//it follows array's properties

let tuple:[number,String,number]=[123,"Abc",456];
//length is fixed and if we add some items using push method then we can add the items in this case length of tuple is increased
tuple.push(10);
console.log(tuple);

let tuple1:readonly [number,String,number]=[123,"Abc",456];

// tuple1.push(10);
console.log(tuple1);

