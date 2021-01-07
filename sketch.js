var PLAY = 1

var END = 0

var gameState = PLAY


var monkey , monkey_running
var banana,caughtBanana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,bananaGroup
var score
var ground
var survivalTime
function preload() {
  
  
         monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 createCanvas(600, 300);
  
monkey=createSprite(50,270,50,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale = 0.1;

ground=createSprite(300,290,1400,20);
ground.velocityX =-4;
  ground.x = ground.width/2;
  console.log(ground.x);
  
  bananaGroup = new Group();
  obsticlesGroup = new Group();
}


function draw() {
  background(255);
  
  if (gameState === PLAY) {
     if (ground.x<0) {
  ground.x = ground.width/2
  }
    if(keyDown("space") ) {
   monkey.velocityY = -3  
      
}
spawnbanana(); 
  spawnobsticles();
    
    monkey.velocityY = monkey.velocityY + 0.05;

monkey.collide(ground)
    
    
  stroke("red");
  textSize(20);
  fill("red");
  text("score:" + score,500,500);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime:" + survivalTime,100,50);
    
  } // end of gamestate PLAY

  if (monkey.isTouching(bananaGroup))
    {
  //banana.lifetime = 0
      console.log("minDepth: "+bananaGroup.minDepth())
      console.log("size: "+bananaGroup.size())
      bananaGroup.get(0).destroy();
    }
    if (monkey.isTouching(obsticlesGroup))
    monkey.destroy();

  
if (gameState === END){
  
}
  
  
  //  ground.velocityX = -(6 + 3*score/100);
  


  

drawSprites();
  
} //end of draw function



function spawnbanana() {
  //write code here to spawn the clouds
  if (frameCount % 80 === 0) {
    banana = createSprite(600,120,5 ,5);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.07;
    banana.velocityX = -3;
   
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adjust the depth
   banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each cloud to the group
   bananaGroup.add(banana);
  }
} //end of function spawnbanana 






function spawnobsticles() {
  //write code here to spawn the clouds
  if (frameCount % 300 === 0) {
    var obsticles = createSprite(600,265,5 ,5);
    //obsticles.y = Math.round(random(120,200));
    obsticles.addImage(obstacleImage);
    obsticles.scale = 0.1;
    obsticles.velocityX = -3;
   
     //assign lifetime to the variable
    obsticles.lifetime = 200;
    
    //adjust the depth
   obsticles.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
 obsticlesGroup.add(obsticles);
  }

}//end of function spawnobsticles






