var car,wall;
var speed,weight;

function setup() {
  createCanvas(1300,400);
  speed=random(55,90);
  weight=random(400,1500);
  car=createSprite(50, 200, 50, 50);
  wall=createSprite(1200,200,60,height/2);
}

function draw() {
  background("black");  
  drawSprites();
  car.velocityX=speed;

  if(wall.x-car.x<(car.width+wall.width)/2){
car.velocityX=0;
var deformation=0.5*weight*speed*speed/22509;
console.log("deformation="+deformation);
if (deformation>100){
  car.shapeColor=color("green");
  console.log(green);
}
if (deformation<180 && deformation<100){
  car.shapeColor=color("yellow");
}
if(deformation>180){
  car.shapeColor=color("red");
}
  }
}