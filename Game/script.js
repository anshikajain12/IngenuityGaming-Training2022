var h1 = document.querySelector("h1");
var mainMole = document.getElementById("mole");
var mainMud = document.querySelector("#mud");
var startButton = document.querySelector("#start");

var dirts = document.querySelectorAll(".dirt");
var moles = document.querySelectorAll(".mole");
var points = document.querySelectorAll(".points");



var chance = document.querySelector("#headinggame");
//start button function
function start() {
  h1.style.visibility = "hidden";
  mainMole.style.visibility = "hidden";
  mainMud.style.visibility = "hidden";
  startButton.style.visibility = "hidden";

  for (let i = 0; i < points.length; i++) {
    points[i].style.visibility = "visible";
  }

  for (let i = 0; i < dirts.length; i++) {
    dirts[i].style.visibility = "visible";
  }
  let timerIds = setInterval(() => {
    var i = randomIntFromInterval(1, 6);
    document.getElementById("mole" + i).style.visibility = "visible";
    document.getElementById("mole" + i).onmouseover = increamentbutton;
    setTimeout(() => {
      for (var j = 0; j < moles.length; j++) {
        moles[j].style.visibility = "hidden";
      }
    }, 900);
  }, 1000);

  setTimeout(() => {
    clearInterval(timerIds);
    for (let i = 0; i < moles.length; i++) {
      moles[i].style.visibility = "hidden";
    }

    for (let i = 0; i < dirts.length; i++) {
      dirts[i].style.visibility = "hidden";
    }
    for (let i = 0; i < points.length; i++) {
      points[i].style.visibility="visible";
      points[i].style.display="flex";
      points[i].style.justifyContent="center";
    }
    if(incpoints<30){
        chance.style.visibility="visible";
        chance.innerText="You loss the game";

    }
    else{
        chance.style.visibility="visible";
        chance.innerText="You win the game";
    }
  }, 60000);
}

//random number generator
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//increase the points
var incpoints = 0;
function increamentbutton() {
  document.getElementById("currentPoint").innerText = incpoints++;
}
