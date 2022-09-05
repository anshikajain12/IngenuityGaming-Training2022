"use strict";
var directions;
(function (directions) {
    directions[directions["North"] = 0] = "North";
    directions[directions["East"] = 1] = "East";
    directions[directions["West"] = 2] = "West";
    directions[directions["South"] = 3] = "South";
})(directions || (directions = {}));
console.log(directions.East);
var directions1;
(function (directions1) {
    directions1[directions1["North"] = 1] = "North";
    directions1[directions1["East"] = 2] = "East";
    directions1[directions1["West"] = 3] = "West";
    directions1[directions1["South"] = 4] = "South";
})(directions1 || (directions1 = {}));
console.log(directions1.East);
var directions11;
(function (directions11) {
    directions11[directions11["North"] = 11] = "North";
    directions11[directions11["East"] = 22] = "East";
    directions11[directions11["West"] = 33] = "West";
    directions11[directions11["South"] = 44] = "South";
})(directions11 || (directions11 = {}));
console.log(directions11.East);
var directionstring;
(function (directionstring) {
    directionstring["North"] = "north";
    directionstring["East"] = "east";
    directionstring["West"] = "west";
    directionstring["South"] = "south";
})(directionstring || (directionstring = {}));
console.log(directionstring.East);
