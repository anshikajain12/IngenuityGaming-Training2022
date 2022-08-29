
//global scope
var bg, bgImage;
var mario, mario_running;
var ground;
var brickImage, brickGroup;
var coinsImage, coinsGroup;
var coinScore = 0;
var coinSound;
var jumpSound;
var mushImage, mushGroup;
var turImage, turGroup;
var dead, diedImage;
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
  brickImage = loadImage("Assests/brick.png");
  coinsImage = loadAnimation(
    "Assests/con1.png",
    "Assests/con2.png",
    "Assests/con3.png",
    "Assests/con4.png",
    "Assests/con5.png",
    "Assests/con6.png"
  );
  coinSound = loadSound("Audio/coinSound.mp3");
  jumpSound = loadSound("Audio/jump.mp3");
  mushImage = loadAnimation(
    "Assests/mush1.png",
    "Assests/mush2.png",
    "Assests/mush3.png",
    "Assests/mush4.png",
    "Assests/mush5.png",
    "Assests/mush6.png"
  );
  turImage = loadAnimation(
    "Assests/tur1.png",
    "Assests/tur2.png",
    "Assests/tur3.png",
    "Assests/tur4.png",
    "Assests/tur5.png"
  );
  diedImage = loadImage("Assests/dead.png");
}

//create  basic scaleton with their required credentials
function setup() {
  //create canvas
  createCanvas(1000, 650);

  //create objects
  bg = createSprite(600, 300, 50, 50);
  mario = createSprite(200, 520, 50, 50);
  dead= createSprite(600,530,50,50);

  //add pictures on objects
  bg.addImage(bgImage);
  mario.addAnimation("running", mario_running);
  dead.addImage(diedImage);

  //scale objects
  bg.scale = 0.5;
  mario.scale = 0.2;
  dead.scale=0.5;

  //create ground
  ground = createSprite(200, 580, 400, 10);
  brickGroup = new Group();
  coinsGroup = new Group();
  mushGroup = new Group();
  turGroup = new Group();
}

//used to redraw the objects on the canvas
function draw() {
  //background("black");

  // Make background move and repeat
  bg.velocityX = -5;
  if (bg.x < 100) {
    bg.x = bg.width / 4;
  }

  //mario flying
  if (keyDown("space")) {
    mario.velocityY = -10;
    jumpSound.play();
  }

  //add gravity
  mario.velocityY = mario.velocityY + 0.5;

  //mario stuck on ground
  mario.collide(ground);
  ground.visible = false;
  dead.visible= false;

  //call generate bricks
  generateBricks();
  for (var i = 0; i < brickGroup.length; i++) {
    var temp = brickGroup.get(i);
    if (mario.isTouching(temp)) {
      mario.collide(temp);
    }
  }
  if (mario.x < 200) {
    mario.x = 200;
  }
  if (mario.y < 50) {
    mario.y = 50;
  }

  //generate coins
  generateCoins();
  for (var i = 0; i < coinsGroup.length; i++) {
    var temp = coinsGroup.get(i);
    if (mario.isTouching(temp)) {
      temp.destroy();
      coinSound.play();
      coinScore++;
      temp = null;
      console.log(coinScore);
    }
  }
  if (mario.x < 200) {
    mario.x = 200;
  }
  if (mario.y < 50) {
    mario.y = 50;
  }

  //random
  let r = Math.floor(Math.random() *2);
//   console.log(r);
  if (r == 1) {
    generateMush();
  } else if (r == 0) {
    generateTur();
  }
  // generateMush
  for (var i = 0; i < mushGroup.length; i++) {
    var temp = mushGroup.get(i);
    if (mario.isTouching(temp)) {
    //   mario.stop();
      mario.visible = false;
      dead.visible=true;

    }
  }
  if (mario.x < 200) {
    mario.x = 200;
  }
  if (mario.y < 50) {
    mario.y = 50;
  }

  //generateTur

  for (var i = 0; i < coinsGroup.length; i++) {
    var temp = coinsGroup.get(i);
    if (mario.isTouching(temp)) {
        // mario.stop();
        mario.visible = false;
        dead.visible=true;
  
    }
  }
  if (mario.x < 200) {
    mario.x = 200;
  }
  if (mario.y < 50) {
    mario.y = 50;
  }

  //coins collected
  textSize(20);
  fill("brown");
  text("Coin Collected: " + coinScore, 400, 50);

  //redraw objects
  drawSprites();
}

function generateBricks() {
  if (frameCount % 80 == 0) {
    var brick = createSprite(1200, 100, 40, 10);
    brick.y = random(50, 450);
    brick.addImage(brickImage);
    brick.scale = 0.5;
    brick.velocityX = -5;
    brick.lifetime = 250;
    brickGroup.add(brick);
  }
}
function generateCoins() {
  if (frameCount % 50 == 0) {
    var coin = createSprite(1200, 100, 40, 10);
    coin.y = random(50, 450);
    coin.addAnimation("rotate", coinsImage);
    coin.scale = 0.1;
    coin.velocityX = -5;
    coin.lifetime = 250;
    coinsGroup.add(coin);
  }
}
function generateMush() {
  if (frameCount % 60 == 0) {
    var mush = createSprite(200, 565, 400, 10);
    mush.addAnimation("rotate", mushImage);
    mush.scale = 0.1;
    mush.velocityX = -5;
    mush.lifetime = 250;
    mushGroup.add(mush);
  }
}
function generateTur() {
  if (frameCount % 60 == 0) {
    var tur = createSprite(200, 565, 400, 10);
    tur.addAnimation("rotate", turImage);
    tur.scale = 0.1;
    tur.velocityX = -5;
    tur.lifetime = 250;
    turGroup.add(tur);
  }
}
