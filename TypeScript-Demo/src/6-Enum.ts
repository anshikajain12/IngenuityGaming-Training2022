//it is basically used to create a constant 
enum directions{
    North,East,West,South
}
console.log(directions.East); // 1

enum directions1{
    North=1,East,West,South
}
console.log(directions1.East); // 2

enum directions11{
    North=11,East=22,West=33,South=44
}
console.log(directions11.East); // 22

enum directionstring{
    North="north",East="east",West="west",South="south"
}
console.log(directionstring.East); // east