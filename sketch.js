var mario,marioImg;
var ground,groundImg;

function preload(){
 marioImg=loadAnimation("assets/mario/mario1.png","assets/mario/mario2.png","assets/mario/mario3.png","assets/mario/mario4.png","assets/mario/mario5.png","assets/mario/mario6.png","assets/mario/mario7.png","assets/mario/mario8.png","assets/mario/mario9.png","assets/mario/mario10.png","assets/mario/mario11.png","assets/mario/mario12.png");
 groundImg=loadImage("assets/ground.png")
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  mario=createSprite(100,height-280);
  mario.addAnimation("running",marioImg);
  mario.scale=0.2;

  ground=createSprite(width/2,height-50,width,100);
  ground.addImage(groundImg);

}

function draw() {
  background("lightblue");
  if(keyDown("space")&&mario.y>height/2){
    mario.velocityY=-10;
  }
  mario.velocityY+=0.8;
  ground.velocityX=-4;
  if(ground.x<width/4){
    ground.x=ground.width/2;
  }

 mario.collide(ground);
  drawSprites();
}