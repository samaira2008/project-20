var car,wall,speed,weight;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,50,50);
car.shapeColor="white";

  wall=createSprite(1500,200,60,height/2);
wall.shapeColor(80,80,80);

  car.velocityX=speed;
}

function draw() {
  background(255,255,255);  

  if(wall.x-car.x<<(car.width+wall.width)/2)
  {
       car.shapeColor=color(230,230,0);

  }
  if(deformation<100)
  {
       car.setup=color(0,230,0);
  }
  drawSprites();
}