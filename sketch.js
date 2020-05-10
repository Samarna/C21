var wall;
var bullet;

var width;
var speed;

var weight;
var damage;

function setup() {
  createCanvas(1600,400);

  width = Math.round(random(22,83));
  weight = Math.round(random(30,52));
  speed = Math.round(random(223,321));

  wall = createSprite(1200, 200, width, 400);
  console.log(width);
  wall.shapeColor = color(80,80,80);

  bullet = new Bullet(weight,speed);
}

function draw() {
background("grey");
  damage = 0.5*bullet.weight*bullet.speed*bullet.speed/width*width*width;
  console.log(damage);
  
  if(damage<10){
    wall.shapeColor = "green";
  }
  if(damage>10){
    wall.shapeColor = "red";
  }
  drawSprites();
}
