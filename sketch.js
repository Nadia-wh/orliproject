const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world
var duck, bear1
var movingrock1, obstaclegroup


//create a variable and give it a beginning value
let gameState = 'start';


function preload(){
duckIMG=loadImage("pictures/duckframe.png")
duckWalkingIMG=loadAnimation("pictures/walkingframe1.png", "pictures/walkingframe2.png")
duckFlyingIMG=loadAnimation("pictures/flyingframe1.png", "pictures/flyingframe2.png")
cowIMG=loadImage("pictures/cow.png")
bearIMG=loadImage("pictures/BadBear.png")
backgroundIMG=loadImage("pictures/Backdrop2.png")
backdrop1=loadImage("pictures/Backdrop1.png")
}

function setup() {
  engine = Engine.create();
  world = engine.world;
 
  score=0;
 
  createCanvas(800,1000);
  
  ground=createSprite(400,990,800,20)
  ground.shapeColor=rgb(145, 171, 201)

 duck=createSprite(400,930,200,200);
 duck.addAnimation("duckFlyingIMG", duckFlyingIMG)
 duck.addAnimation("duckWalkingIMG", duckWalkingIMG)
 duck.scale=0.25;
 duck.debug=true;
 duck.setCollider("circle",0,0,100)
 
  section1=createSprite(250,750,500,20)
  section2=createSprite(575,400,600,20)
  section3=createSprite(100,200,600,20)


  section1.shapeColor=rgb(145, 171, 201)
  section2.shapeColor=rgb(145, 171, 201)
  section3.shapeColor=rgb(145, 171, 201)


  block1=createSprite(650,965,300,20)
  block2=createSprite(680,900,240,20)
  block3=createSprite(720,835,200,20)

  block1.shapeColor=rgb(145, 171, 201)
  block2.shapeColor=rgb(145, 171, 201)
  block3.shapeColor=rgb(145, 171, 201)
 
  block4=createSprite(650,375,300,20);
  block5=createSprite(680,320,240,20)
  block6=createSprite(720,265,200,20)

  block4.shapeColor=rgb(145, 171, 201)
  block5.shapeColor=rgb(145, 171, 201)
  block6.shapeColor=rgb(145, 171, 201)

  
  block7=createSprite(10,-300,200,20)
  block8=createSprite(500,-650,600,20)

  block7.shapeColor=rgb(145, 171, 201)
  block8.shapeColor=rgb(145, 171, 201)

  movingrock1=createSprite(70,700,150,20);
  movingrock1.velocityY=-1;

  movingrock1.shapeColor=rgb(145, 171, 201)

  
  side1=createSprite(1,500,10,1000000)
  side2=createSprite(800,500,10,1000000);

  side1.shapeColor=rgb(145, 171, 201)
  side2.shapeColor=rgb(145, 171, 201)
  
  invisible1=createSprite(400,-100,1,1)
  invisible2=createSprite(400,-400,1,1)
  invisible3=createSprite(400,-1000,1,1)
  invisible4=createSprite(400,-1500,1,1)
  invisible5=createSprite(400,-2000,1,1)

  cow=createSprite(400,-2260,30,30)
  cow.addImage(cowIMG)
  cow.scale=1.5;
  cow.debug=true
  
  bear1=createSprite(200,-400,10,10)
  bear1.addImage(bearIMG)
  bear1.scale=0.5
  bear1.velocityX=-3
  bear1.setCollider("rectangle", 0,0, 50,150);

  bear2=createSprite(200,-1600,10,10)
  bear2.addImage(bearIMG)
  bear2.scale=0.5
  bear2.velocityX=-3
  bear2.setCollider("rectangle", 0,0, 50,150);

  bear3=createSprite(700,-1800,10,10)
  bear3.addImage(bearIMG)
  bear3.scale=0.5
  bear3.velocityX=3
  bear3.setCollider("rectangle", 0,0, 50,150);

  bear4=createSprite(200,-2000,10,10)
  bear4.addImage(bearIMG)
  bear4.scale=0.5
  bear4.velocityX=-3
  bear4.setCollider("rectangle", 0,0, 50,150);

  movingblock1=createSprite(300,-900,600,20)
  movingblock1.velocityX=5
  movingblock2=createSprite(700,-1050,600,20)
  movingblock2.velocityX=-5
  movingblock3=createSprite(300,-1200,600,20)
  movingblock3.velocityX=5
  movingblock4=createSprite(700,-1350,600,20)
  movingblock4.velocityX=-5


  movingblock1.shapeColor=rgb(145, 171, 201)
  movingblock2.shapeColor=rgb(145, 171, 201)
  movingblock3.shapeColor=rgb(145, 171, 201)
  movingblock4.shapeColor=rgb(145, 171, 201)
 

 block9=createSprite(100,-1500,300,20)
 block10=createSprite(400,-2200,300,20)
 
 block9.shapeColor=rgb(145, 171, 201)
 block10.shapeColor=rgb(145, 171, 201)
 play = createSprite(400,500,800,1000);
 play.addImage(backdrop1)
 play.visible=false
}


function draw() {

  background(220);

  if (gameState === 'start') {
    fill('purple');
    textAlign(CENTER);
    textSize(20)
    text("rescue the cow ",width/2,height/2-100);
    text('click mouse to play', width / 2, height / 2);
    text('While playing the game , press down arrow when you reach cow ', width / 2, 25);
    //
    duck.visible=false;
    block1.visible=false;
    block2.visible=false;
    block3.visible=false;
   
    block4.visible=false;
    block5.visible=false;
    block6.visible=false;
  
    block4.visible=false;
    block5.visible=false;
    block6.visible=false;
  
    
    block7.visible=false;
    block8.visible=false;
  
    block7.visible=false;
    block8.visible=false;
  
    movingrock1.visible=false;
  
    
    side1.visible=false;
    side2.visible=false;
    
    invisible1.visible=false;
    invisible2.visible=false;
    invisible3.visible=false;
    invisible4.visible=false;
    invisible5.visible=false;
  
    cow.visible=false;
    
    bear1.visible=false;
  
    bear2.visible=false;
  
    bear3.visible=false;
  
    bear4.visible=false;
  
    movingblock1.visible=false;
    movingblock2.visible=false;
    movingblock3.visible=false;
    movingblock4.visible=false;
  
  
    movingblock1.visible=false;
    movingblock2.visible=false;
    movingblock3.visible=false;
    movingblock4.visible=false;
   
  
   block9.visible=false;
   block10.visible=false;
   
   block9.visible=false;
   block10.visible=false;

   section1.visible=false;
   section2.visible=false;
   section3.visible=false;
  
  
    //
    
    if (mouseIsPressed) {
      gameState = 'play';
    }

  } 
  else if (gameState === 'play') {
    
   //
   duck.visible=true;
   block1.visible=true;
   block2.visible=true;
   block3.visible=true;
  
   block4.visible=true;
   block5.visible=true;
   block6.visible=true;
 
   block4.visible=true;
   block5.visible=true;
   block6.visible=true;
 
   
   block7.visible=true;
   block8.visible=true;
 
   block7.visible=true;
   block8.visible=true;
 
   movingrock1.visible=true;
 
   
   side1.visible=true;
   side2.visible=true;
   
   invisible1.visible=true;
   invisible2.visible=true;
   invisible3.visible=true;
   invisible4.visible=true;
   invisible5.visible=true;
 
   cow.visible=true;
   
   bear1.visible=true;
 
   bear2.visible=true;
 
   bear3.visible=true;
 
   bear4.visible=true;
 
   movingblock1.visible=true;
   movingblock2.visible=true;
   movingblock3.visible=true;
   movingblock4.visible=true;
 
 
   movingblock1.visible=true;
   movingblock2.visible=true;
   movingblock3.visible=true;
   movingblock4.visible=true;
  
 
  block9.visible=true;
  block10.visible=true;
  
  block9.visible=true;
  block10.visible=true;

  section1.visible=true;
  section2.visible=true;
  section3.visible=true;

   duck.collide(ground);
   duck.collide(block1);
   duck.collide(section1);
   duck.collide(block2);
   duck.collide(block3);
   duck.collide(movingrock1);
   duck.collide(section2);
   movingrock1.collide(section3);
   duck.collide(section3);
   duck.collide(block4);
   duck.collide(block5);
   duck.collide(block6);
   duck.collide(block7)
 
   duck.collide(side1)
   duck.collide(side2)
   duck.collide(block8)
   
   duck.collide(movingblock1)
   duck.collide(movingblock2)
   duck.collide(movingblock3)
   duck.collide(movingblock4)
   duck.collide(block9)
   duck.collide(block10)
 
   bear1.bounceOff(side1)
   bear1.bounceOff(side2)
 
   bear2.bounceOff(side1)
   bear2.bounceOff(side2)
 
   bear3.bounceOff(side1)
   bear3.bounceOff(side2)
 
   bear4.bounceOff(side1)
   bear4.bounceOff(side2)
 
   movingblock1.bounceOff(side1)
   movingblock1.bounceOff(side2)
 
   movingblock2.bounceOff(side1)
   movingblock2.bounceOff(side2)
 
   movingblock3.bounceOff(side1)
   movingblock3.bounceOff(side2)
 
   movingblock4.bounceOff(side1)
   movingblock4.bounceOff(side2)
 
   if(duck.y<100){
   camera.position.y=invisible1.y;
   //duck.y=duck.y-90
 
 }
 
 if(duck.y<-300){
   camera.position.y=invisible2.y;
 
   score=100;
 }
 
 if(duck.y<-700){
   camera.position.y=invisible3.y;
 
   score=200;
 }
 
 if(duck.y<-1350){
   camera.position.y=invisible4.y;
 
   score=300;
 }
 
 
 if(duck.y<-1650){
   camera.position.y=invisible5.y;
 
   score=400;
 }
 
 
 if(duck.collide(bear1)){
   duck.y=930;
   camera.position.y=section1;
 }
  
 if(duck.collide(bear2)){
   duck.y=930;
   camera.position.y=section1;
 }
 
 if(duck.collide(bear3)){
   duck.y=930;
   camera.position.y=section1;
 }
 
 
 if(duck.collide(bear4)){
   duck.y=930;
   camera.position.y=section1;
 }
 
 
 if(keyDown("u")){
     duck.y=duck.y-20
     duck.changeAnimation("duckFlyingIMG", duckFlyingIMG)
   }
 
   if(keyDown("d")){
     duck.y=duck.y+10;
     duck.changeAnimation("duckFlyingIMG", duckFlyingIMG)
   }
 
   if(keyDown(RIGHT_ARROW)){
     duck.x=duck.x+10
     duck.changeAnimation("duckFlyingIMG", duckFlyingIMG)
   }
 
   if(keyDown(LEFT_ARROW)){
     duck.x=duck.x-10
    duck.changeAnimation("duckFlyingIMG", duckFlyingIMG)
   }
   
   
 text("score: "+score,600,duck.y-650);

   //

   if (keyIsPressed === true && keyCode === 40 && duck.y<=-2260){
        gameState = 'end';
        }
  
      }


  else if (gameState === 'end') {
      text('game over, press space bar to restart', width / 2, height / 2);
    if (keyIsPressed === true && keyCode === 32){
     gameState = 'start'; 
    }
  
  }

     drawSprites();
}





