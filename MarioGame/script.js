//global scope
var bg, bgImage;
var mario, mario_running;

//load assests
function preload() {
  bgImage = loadImage("Assests/bgnew.jpg");
  mario_running = loadAnimation(
    "Assests/mar1.png",
    "Assests/mar2.png",
    "Assests/mar3.png",
    "Assests/mar4.png",
    "Assests/mar5.png",
    "Assests/mar6.png"
  );
}

//create  basic scaleton with their required credentials
function setup() {
    //create canvas
  createCanvas(1000, 650);

  //create objects
  bg = createSprite(600, 300, 50, 50);
  mario = createSprite(200, 520, 50, 50);


  //add pictures on objects
  bg.addImage(bgImage);
  mario.addAnimation("running",mario_running);

  
  //scale objects
  bg.scale = 0.5;
  mario.scale=0.2;
//   bg.x=bg.x-200;
}

//used to redraw the objects on the canvas
function draw() {
  //background("black");

  //redraw objects
  drawSprites();
}
