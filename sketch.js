var wall;
var bullet;

var width;
var speed;

var weight;
var damage;

function setup() {
  createCanvas(1600,400);
   wall = createSprite(1500, 200, width, 400);
   wall.shapeColor = (80,80,80);

  width = Math.round(random(22,83));
  weight = Math.round(random(30,52));
  speed = Math.round(random(223,321));
    
  bullet = new Bullet(weight,speed);
}

function draw() {
background("grey");
  damage = 0.5*weight*speed*speed/width*width*width;
  
  if(damage<10){
    wall.shapeColor = "green";
  }
  if(damage>10){
    wall.shapeColor = "red";
  }
  drawSprites();
}
