var wall;
var bullet;
var width;
var 

function setup() {
  createCanvas(1600,400);
   bullet = createSprite(200, 200, 20, 20);
   bullet.shapeColor = "white";
  
   wall = createSprite(1500, 200, width, 400);
   wall.shapeColor = (80,80,80);
}

function draw() {
background("grey");
  width = Math.round(randomNumber(22,83));
  speed = Math.round(randomNumber(223,321));
  
  drawSprites();
}
