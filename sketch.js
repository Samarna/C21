var wall;
var bullet;

var thickness;
var speed;

var weight;

function setup() {
  createCanvas(1600,400);

  thickness = Math.round(random(22,83));
  weight = Math.round(random(30,52));
  speed = Math.round(random(223,321));

  wall = createSprite(1200, 200, thickness, 400);
  console.log(thickness);
  wall.shapeColor = color(80,80,80);

  bullet = new Bullet(weight,speed);
}

function draw() {
background("grey");
  if(hasCollided(bullet,wall)){
    var damage = 0.5*bullet.weight*bullet.speed*bullet.speed/(thickness*thickness*thickness);
  
    bullet.sprite.velocityX = 0;
    
    if(damage<10){
      wall.shapeColor = color(255,0,0);
    }
    if(damage>10){
      wall.shapeColor = color(0,255,0);
    }
}
  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.sprite.x + lbullet.sprite.width
  wallLeftEdge = lwall.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
  return false;
}
