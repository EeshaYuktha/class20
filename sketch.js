var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 100, 50, 50);
  movingRect = createSprite(400, 350, 30, 30);

  fixedRect.velocityY = 2;
  movingRect.velocityY = -2;

}

function draw() {
  background(255,255,255);  

  edges = createEdgeSprites();
  fixedRect.bounceOff(edges);
  movingRect.bounceOff(edges);

  // movingRect.x = mouseX; 
  // movingRect.y = mouseY;

  if( movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 && 
    fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2 ){
      fixedRect.velocityY = fixedRect.velocityY*(-1);
      movingRect.velocityY = movingRect.velocityY*(-1);
    }

    if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && 
      fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2){
        fixedRect.velocityX = fixedRect.velocityX*(-1);
      movingRect.velocityX = movingRect.velocityX*(-1);
      }

  

  drawSprites();
}

function isTouching(){
  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2 && 
    fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2 ){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "purple";
    fixedRect.shapeColor = "purple";
  }
}