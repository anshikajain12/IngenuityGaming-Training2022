
var h1 = document.querySelector("h1");
var mainMole = document.getElementById("mole");
var mainMud = document.querySelector("#mud");
var startButton = document.querySelector("#start");

var dirts = document.querySelectorAll(".dirt");
var moles = document.querySelectorAll(".mole");
var points = document.querySelectorAll(".points");

var chance = document.querySelector("#headinggame");
var timing= document.querySelectorAll(".time");


//start button function
function start() {
    var audio = new Audio("./audio/JKL83NH-video-game-win.mp3");
    audio.play();
  h1.style.visibility = "hidden";
  mainMole.style.visibility = "hidden";
  mainMud.style.visibility = "hidden";
  startButton.style.visibility = "hidden";

  for(let i=0;i<timing.length;i++){
    timing[i].style.visibility="visible";
    }

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

    //timer function
    document.getElementById("sec").innerText=timer--;
    if(timer<1){
        for(let i=0;i<timing.length;i++){
        timing[i].style.visibility="hidden";
        }
        
    }
    setTimeout(() => {
      for (var j = 0; j < moles.length; j++) {
        moles[j].style.visibility = "hidden";
      }
    }, 900);
  }, 1000);

  //condition for game win and lose
  setTimeout(() => {
      clearInterval(timerIds);
      for (let i = 0; i < moles.length; i++) {
          moles[i].style.visibility = "hidden";
        }

        for (let i = 0; i < dirts.length; i++) {
            dirts[i].style.visibility = "hidden";
        }
        for (let i = 0; i < points.length; i++) {
            points[i].style.visibility = "visible";
            points[i].style.display = "flex";
            points[i].style.justifyContent = "center";
        }
        if(timer<1){
            for(let i=0;i<timing.length;i++){
            timing[i].style.visibility="hidden";
            }
            
        }
        var audio = new Audio("./audio/UC3CKCR-game-over-a.mp3");
    audio.play();
        if (incpoints < 61) {
            chance.style.visibility = "visible";
            chance.innerText = "You loss the game";
    } else {
      chance.style.visibility = "visible";
      chance.innerText = "You win the game";
    }
    
    
}, 60000);


timeleft();
}

//random number generator
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//increase the points
var incpoints = 0;
function increamentbutton() {
    var audio = new Audio("./audio/mixkit-retro-arcade-casino-notification-211.wav");
    audio.play();
    document.getElementById("currentPoint").innerText = incpoints++;
    
}

//timer

var timer = 59;

    
    
    