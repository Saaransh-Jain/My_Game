var player, playerImg, playerAttack;
var dragon, dragonImg1,dragonImg2,dragonImg3, dragonAttack;
var slider, sliderPanel, panel1, panel2, panel3;
var bound1,bound2;
var backgroundImg; 
var gameState=0, instructions, insNo=1, insNo2=1, insNo3=1, insNo4=1;;
var intro1, intro2, intro3, intro4, intro5, intro6, intro7, text1, text1_2, text2, text2_2, text3, text3_2;
var flag2=0;
var flag=1;
var PhealthImg, DhealthImg, heartImg, Phealth, dhealth;
var turn= "player";
var timer, dragonAngle;
var barrier, barrier2;
var dragonNo, gameNo;
var fireball, fireballGroup;
var spdImg, RegenImg, spd, SpdGroup, HGroup;
var timer;
var treasure, treasureImg, lostImg, lostImg2, lost, lostinsNo=1;
// LINE NO 119, PLAER LOSES, ADD TREASURE
function setup() {
createCanvas(1420,890);
player= createSprite(200,650,50,50);
player.scale=0.7;
player.addImage("label",playerImg)
dragon= createSprite(1000,550,50,50);
sliderPanel= createSprite(455,800,250,30);
panel1= createSprite(375,800,80,20);
panel2= createSprite(455,800,80,20);
panel3= createSprite(535,800,80,20);
bound1= createSprite(330,800,10,30);
bound2= createSprite(580,800,10,30);
slider= createSprite(340,800,10,30);
treasure=createSprite(670,730,100,100)
treasure.addImage("label", treasureImg);
lost=createSprite(700,120,300,300);
lost.visible=false;

treasure.visible=false;
treasure.scale=0.3;
PhealthImg=createSprite(180,300,10,10);
PhealthImg.addImage("label",heartImg);
DhealthImg=createSprite(1000,300,10,10);
DhealthImg.addImage("label",heartImg);
barrier=createSprite(700,180,1500,500);
barrier2=createSprite(700,880,1500,10);
barrier3=createSprite(5,650,10,500);
barrier4=createSprite(630,650,10,500);
instructions=createSprite(670,170,100,100);
fireballGroup=createGroup();
SpdGroup=createGroup();
HGroup=createGroup();
dragonNo=1;
gameNo=1;
Phealth=200;
barrier.visible=false;
barrier2.visible=false;
barrier3.visible=false;
barrier4.visible=false;
bound1.visible= false;
bound2.visible= false;
sliderPanel.shapeColor=160;
slider.shapeColor=0;
panel1.shapeColor="red";
panel2.shapeColor="lime";
panel3.shapeColor="red";
spd=4;
timer=0;
// ADD INSTRUCTIONS

}

function preload(){
backgroundImg=loadImage("sprites/background.png");
playerImg=loadImage("sprites/player.png");
playerAttack=loadImage("sprites/player attack.png");
dragonAttack=loadImage("sprites/dragon attack.png");
dragonImg1=loadImage("sprites/dragon 1.png");
dragonImg2=loadImage("sprites/dragon 2.png");
dragonImg3=loadImage("sprites/dragon 3.png");
heartImg=loadImage("sprites/heart.png");
spdImg= loadImage("sprites/speed powerup.png");
RegenImg= loadImage("sprites/health powerup.png");
intro1= loadImage("sprites/intro 1.png");
intro2= loadImage("sprites/intro 2.png");
intro3= loadImage("sprites/intro 3.png");
intro4= loadImage("sprites/intro 4.png");
intro5= loadImage("sprites/intro 5.png");
intro6= loadImage("sprites/intro 6.png");
intro7= loadImage("sprites/intro 7.png");
text1 = loadImage("sprites/text 1.png");
text1_2= loadImage("sprites/text 1_2.png");
text2= loadImage("sprites/text 2.png");
text2_2= loadImage("sprites/text 2_2.png");
text3= loadImage("sprites/text 3.png");
text3_2= loadImage("sprites/text 3_2.png");
treasureImg=loadImage("sprites/treasure.png");
lostImg=loadImage("sprites/lost.png");
lostImg2=loadImage("sprites/lost 2.png");
}

function draw() {
  background(backgroundImg);  
  if (frameCount % 60 == 0){
    timer=timer +1;
  }

slider.bounceOff(bound1);
slider.bounceOff(bound2);
player.bounce(barrier);
player.bounce(barrier2);
player.bounce(barrier3);
player.bounce(barrier4);
player.setCollider("rectangle",-30,0,200,300);
if (flag2===0){
slider.velocityX=9;
flag2=1;
}
if(dhealth<1 && gameNo===2){
  dragonNo=2;
  gameState=0;
}
if(dhealth<1 && gameNo===3){
  dragonNo=3;
  gameState=0;
}

if(dhealth<1 && gameNo===4){
  dragonNo=4;
  gameState=0;
}
//COMPLETE PLAYER LOSING
if(Phealth<1){
  lost.visible=true;
  if(keyWentDown("space")){
    lostinsNo=lostinsNo+1;
    }
  switch(lostinsNo){
  case 1:lost.addImage("label", lostImg);
  break;
  case 2:lost.addImage("label", lostImg2);
  break;
  default: break;
  }
  
  gameState=0;
  gameNo=5;
  dragonNo=5;
}
if(keyDown("space") && gameState==0){

}

if(slider.isTouching(bound1)){
  slider.velocityX=slider.velocityX*-1;
}
 if(keyDown("space") && gameState==1){
   slider.velocityX=0;
   flag2=1;
   if(slider.x<420 && turn==="player" ){
    dhealth=dhealth-20;
   }
   else if(490<slider.x && turn==="player"){
    dhealth=dhealth-20;
   }
   else if(419<slider.x && slider.x<491 && turn==="player"){
    dhealth=dhealth-40;
   }
}

//adding instructions
if(keyWentDown("space")&& gameState==0){
insNo=insNo+1;
}
if(keyWentDown("space")&& gameState==0 && dragonNo==2){
insNo2=insNo2+1;
}
if(keyWentDown("space")&& gameState==0 && dragonNo==3){
  insNo3=insNo3+1;
  }
if(keyWentDown("space")&& gameState==0 && dragonNo==4){
  insNo4=insNo4+1;
  }


switch (insNo){
case 1:instructions.addImage("label",intro1);
instructions.scale=0.6;
  break;
case 2:instructions.addImage("label",intro2);
instructions.scale=0.8;
  break;
case 3:instructions.addImage("label",intro3);
instructions.scale=0.6;
  break;
case 4:instructions.addImage("label",intro4);
instructions.scale=0.6;
  break;
case 5:instructions.addImage("label",intro5);
instructions.scale=0.6;
  break;
case 6:instructions.addImage("label",intro6);
instructions.scale=0.6;
  break;
case 7:instructions.addImage("label",intro7);
instructions.scale=0.6;
  break;
case 8: instructions.visible=false;
gameState=1;
insNo=10;
break;
default: break;
}

//giving mid game instructions
if(dragonNo==2 && gameState==0 ){
  switch (insNo2){
  case 1:instructions.visible=true;
  instructions.addImage("label",text1);
  break;
  case 2:instructions.visible=true;
  instructions.addImage("label",text1_2);
  break;
 case 3: gameState=1;
 instructions.visible=false;
 insNo2=4;
  default: break;
}
}

if(dragonNo==3 && gameState==0 ){
  switch (insNo3){
  case 1:instructions.visible=true;
  instructions.addImage("label",text2);
  break;
  case 2:instructions.visible=true;
  instructions.addImage("label",text2_2);
  break;
 case 3: gameState=1;
 instructions.visible=false;
 insNo3=4;
  default: break;
}
}

if(dragonNo==4 && gameState==0 ){
  switch (insNo4){
  case 1:instructions.visible=true;
  instructions.addImage("label",text3);
  break;
  case 2:instructions.visible=true;
  instructions.addImage("label",text3_2);
  break;
  case 3: treasure.visible=true;
  dragon.visible=false;
 case 4: gameState=1;
 instructions.visible=false;
 insNo4=5;
  default: break;
}
}

if(player.isTouching(treasure) && insNo4==5){
  console.log("YOU WIN");
}
if(frameCount % 800 == 0){
  spawnPowerUp();
}

if(keyDown("right_arrow")){
  player.x=player.x+spd;
}
if (keyDown("left_arrow")){
  player.x=player.x-spd;
}
if(keyDown("up_arrow")){
  player.y=player.y-spd;
}
if(keyDown("down_arrow")){
  player.y=player.y+spd;
}
if(turn==="dragon" && timer===2){
fireball= createSprite(690,420,10,10);
fireballGroup.add(fireball);
fireball.addImage("label",dragonAttack);
if(player.x<300){
dragonAngle= Math.round(random(14,22));
}
if(player.x>300){
dragonAngle= Math.round(random(4,14));
}
fireball.velocityX=-dragonAngle;
fireball.velocityY=8;
slider.velocityX=9;
turn="player";
fireball.setCollider("rectangle",0,0,100,50);
}
if(fireballGroup.isTouching(player)){
  Phealth=Phealth-20;
  fireballGroup.destroyEach();
}

if(turn==="player" && slider.velocityX===0){
var blueball=createSprite(player.x+60,player.y-30,100,100);
blueball.addImage("label",playerAttack);
blueball.velocityX=16;
blueball.velocityY=-5;
turn="dragon";
timer=0;
}

  drawSprites();
  if(dragonNo===1 && gameNo===1){
    dhealth=200;
    dragon.addImage("label", dragonImg1)
    gameNo=2;
    gameState=0;
  }
  if(dragonNo===2 && gameNo===2 && gameState==1){
    dragon.addImage("label", dragonImg2)
    dragon.scale=2;
    dhealth=500;
    gameNo=3;
  }
  if(dragonNo===3 && gameNo===3){
    dragon.addImage("label", dragonImg3)
    dragon.scale=2.2;
    dhealth=1000;
    gameNo=4;
  }
  if(frameCount%60==0){
    timer++
    }
    if(timer===6){
      spd=4;
      timer=0;
    }
  if(SpdGroup.isTouching(player)){
    spd=12;
    timer=0;
    SpdGroup.destroyEach();
    }
    if(HGroup.isTouching(player)){
    Phealth=Phealth+20;
    HGroup.destroyEach();
    }
  textSize(35);
  fill("black");
  text(dhealth, 975,300);
  text(Phealth, 160,300);

}

function spawnPowerUp(){
  var randX= Math.round(random(80,350));
  var PowerUp= createSprite(randX,-10,80,80);
  var rand = Math.round(random(1,2));
  switch(rand) {
    case 1: PowerUp.addImage(spdImg);
    SpdGroup.add(PowerUp);
    break;
    case 2: PowerUp.addImage(RegenImg);
    HGroup.add(PowerUp);
    default: break;
  }
PowerUp.scale=0.7;
PowerUp.velocityY=10;
}
