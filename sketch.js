var forestImg,forest;
var parrotImg, parrot;
var crowImg,crow,crowsGroup;
var sound;
var gameOverS
var gameState="play";
var gameOverImg;
var cloud,cloudImg;
var bg1Img,bg2Img,bg3Img,bg4Img,bg5Img,bg6Img;
var bg1,bg2,bg3,bg4,bg5,bg6;

function preload(){
  bg1Img=loadImage("forest.jpg");
  parrotImg=loadAnimation("parrot1.png","parrot1.png","parrot2.png","parrot2.png");
  crowImg=loadAnimation("eagle1.png","eagle2.png");
  gameOverImg=loadAnimation("gameOver.png");
  sound=loadSound("chirp.wav");
  gameOverS=loadSound("moan.wav");
  cloudImg=loadImage("cloud.png");
}

function setup() {
  createCanvas(displayWidth-50,displayHeight-150);
  
  bg1=createSprite(displayWidth/2,displayHeight/2);
  bg1.addImage("forest",bg1Img);
  bg1.velocityX=4;
  bg1.scale=4;

  parrot=createSprite(displayWidth/2,200);
  parrot.addAnimation("parrot",parrotImg);
  parrot.scale=0.25;
  parrot.setCollider("circle",0,0,40);
  sound.play();
  crowsGroup=new Group();
}

function draw() {
  
  background("bg1");
  if(bg1.x>displayWidth/2){
         bg1.x=displayWidth/3;
  }
  clouds1();
  clouds2();
  clouds3();
 
  if (gameState === "play") {
   
    
    if(keyDown("DOWN_ARROW")){
      parrot.y = parrot.y+5;
    }
   
    if(keyDown("UP_ARROW")){
      parrot.y = parrot.y -5;
    }
    if(keyDown("RIGHT_ARROW")){
      parrot.x = parrot.x + 5;
    }
    if(keyDown("LEFT_ARROW")){
      parrot.x = parrot.x - 5;
    }
    //edges= createEdgeSprites();
    //edges.Visibility=0 ;
  //  parrot.collide(edges);
    crows();
    
  }
  
  camera.position.x = parrot.x;
  camera.position.y = parrot.y;
  
  if (crowsGroup.isTouching(parrot)){
    parrot.addAnimation("parrot",gameOverImg);
    parrot.scale=0.3;
    parrot.x=displayWidth/2;
    parrot.y=displayHeight/2;
    gameState="end";
     gameOverS.play();
    gameOverS.loop = false;
  
    
    
  }
  drawSprites();
}

function crows(){
  if (frameCount%70===0){
    crow=createSprite(0,random(10,590));
    crow.addAnimation("crow",crowImg);
    crow.velocityX=5;
    crow.scale=0.27;
    crow.lifetime=600;
    crowsGroup.add(crow);
  }
}

function clouds1(){
  if (frameCount%190===0){
    cloud=createSprite(-5,random(10,250));
    cloud.addAnimation("cloud",cloudImg);
    cloud.velocityX=5;
   
    cloud.lifetime=600;
    parrot.depth = cloud.depth;
    parrot.depth +=1;
    crow.depth = cloud.depth;
    crow.depth +=1;
    
  }
}
function clouds2(){
  if (frameCount%150===0){
    cloud=createSprite(-5,random(10,250));
    cloud.addAnimation("cloud",cloudImg);
    cloud.velocityX=5;
    cloud.scale=1.3;
    cloud.lifetime=600;
     parrot.depth = cloud.depth;
    parrot.depth +=1;
    crow.depth = cloud.depth;
    crow.depth +=1;
    
  }
}
function clouds3(){
  if (frameCount%210===0){
    cloud=createSprite(-5,random(10,250));
    cloud.addAnimation("cloud",cloudImg);
    cloud.velocityX=5;
    cloud.scale=0.7;
    cloud.lifetime=600;
    parrot.depth = cloud.depth;
    parrot.depth +=1;
    crow.depth = cloud.depth;
    crow.depth +=1;
  }
}