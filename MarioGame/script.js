//global scope
var bg, bgImage;
var mario, mario_running;
var ground;


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

  //create ground
  ground= createSprite(200,580,400,10);
}

//used to redraw the objects on the canvas
function draw() {
  //background("black");

  // Make background move and repeat
  bg.velocityX= -5;
  if(bg.x < 100){
    bg.x= bg.width/4;
  }

  //mario flying
  if(keyDown('space')){
    mario.velocityY= -10;
  }

  //add gravity
  mario.velocityY = mario.velocityY+ 0.5;


  //mario stuck on ground
  mario.collide(ground);
  ground.visible=false;
  //redraw objects
  drawSprites();
}
