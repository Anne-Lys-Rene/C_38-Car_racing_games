var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;
var track, ground, car1_img, car2_img, car3_img, car4_img
var cars, car1, car2, car3, car4;

function preload(){
  // we will use absolute path for the image files
         //track = loadImage("C:\Users\elève\Desktop\White Hat Jr\Class_38\images\track.jpg");
         //car1_img = loadImage("C:\Users\elève\Desktop\White Hat Jr\Class_38\images\car1.png");
         //car2_img = loadImage("C:\Users\elève\Desktop\White Hat Jr\Class_38\images\car2.png");
         //car3_img = loadImage("C:\Users\elève\Desktop\White Hat Jr\Class_38\images\car3.png");
         //car4_img = loadImage("C:\Users\elève\Desktop\White Hat Jr\Class_38\images\car4.png");
         //ground = loadImage("C:\Users\elève\Desktop\White Hat Jr\Class_38\images\ground.png");
         track = loadImage("../images/track.jpg");
         car1_img = loadImage("../images/car1.png");
         car2_img = loadImage("../images/car2.png");
         car3_img = loadImage("../images/car3.png");
         car4_img = loadImage("../images/car4.png");
         ground = loadImage("../images/ground.png");
}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  } 
}
