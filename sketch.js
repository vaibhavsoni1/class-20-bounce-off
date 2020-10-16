var movingRect,fixedRect;

function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400, 800, 50, 50);
  movingRect.shapeColor="green";
  movingRect.velocityY=-5;

  fixedRect=createSprite(400,100,70,50);
  fixedRect.shapeColor="green";
  fixedRect.velocityY=5;
}

function draw() {
  background(0);  

  if(fixedRect.x-movingRect.x<=fixedRect.width/2+movingRect.width/2 &&
    movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2){
    movingRect.velocityX=movingRect.velocityX*(-1);
      fixedRect.velocityX=fixedRect.velocityX*(-1);
 }
 if(fixedRect.y-movingRect.y<=fixedRect.height/2+movingRect.height/2 &&
  movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2){
    movingRect.velocityY=movingRect.velocityY*(-1);
    fixedRect.velocityY=fixedRect.velocityY*(-1);
}
  drawSprites();
}