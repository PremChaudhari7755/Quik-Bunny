function preload() {
  //load game assets
 rabbit = loadImage('https://freesvg.org/img/1447718963.png')
 tar = loadImage('https://cdn.pixabay.com/photo/2020/05/25/09/49/carrot-5217931_1280.png')
 stone = loadImage('https://cdn.pixabay.com/photo/2014/12/22/00/03/rock-576668_1280.png')
 snakebg = loadImage('https://cdn.pixabay.com/photo/2013/07/12/12/15/snake-145409_1280.png')
 bg = loadImage('https://cdn.pixabay.com/photo/2020/03/18/10/31/illustration-4943531_1280.jpg')
}


function setup() {
  createCanvas(600,600);
  edge = createEdgeSprites()
  player = createSprite(100,550,40,40);
  target = createSprite(400,0,40,40)
  snakegroup = new Group()
  snakegroup2 = new Group()

  obs1 = createSprite(400,500,80,20)
  obs1.velocityX=5
  obs2 = createSprite(400,400,150,20)
  obs2.velocityX=-5
  obs3 = createSprite(400,300,100,20)
  obs3.velocityX=5
  obs4 = createSprite(400,200,180,20)
  obs4.velocityX=-5
  obs5 = createSprite(400,100,130,20)
  obs5.velocityX=5
  player.shapeColor = "red"
  target.shapeColor = "white"
  obs1.shapeColor = "yellow"
  obs2.shapeColor = "blue"
  obs3.shapeColor = "purple"
  obs4.shapeColor = "green"
  obs5.shapeColor = "brown"
}

function draw() {
  background(bg);  
  obs1.bounceOff(edge[1]);
  obs1.bounceOff(edge[0]);
  obs2.bounceOff(edge[1]);
  obs2.bounceOff(edge[0]);
  obs3.bounceOff(edge[1]);
  obs3.bounceOff(edge[0]);
  obs4.bounceOff(edge[1]);
  obs4.bounceOff(edge[0]);
  obs5.bounceOff(edge[1]);
  obs5.bounceOff(edge[0]);
  player.addImage(rabbit)
  player.scale=0.08
  target.addImage(tar)
  target.scale=0.09
  obs1.addImage(stone)
  obs1.scale=0.04
  obs2.addImage(stone)
  obs2.scale=0.04
  obs3.addImage(stone)
  obs3.scale=0.04
  obs4.addImage(stone)
  obs4.scale=0.04
  obs5.addImage(stone)
  obs5.scale=0.04
  generatesnakes()
  generatesnakes2()


  drawSprites();

  if(keyDown("up")){
    player.y=player.y-3;
  }
  if(keyDown("down")){
    player.y=player.y+3;
  }
  if(keyDown("left")){
    player.x=player.x-3;
  }
  if(keyDown("right")){
    player.x=player.x+3;
  }
  if(player.isTouching(target)){
    text("YOU WON",200,200)
    
  }
  if(player.isTouching(obs1)){
    
    text("YOU LOOSE",200,200);
    player.x=100;
    player.y=550
  }
  if(player.isTouching(obs2)){
    text("YOU LOOSE",200,200)
    player.x=100;
    player.y=550
    
  }
  if(player.isTouching(obs3)){
    text("YOU LOOSE",200,200)
    player.x=100;
    player.y=550
    
  }
  if(player.isTouching(obs4)){
    text("YOU LOOSE",200,200)
    player.x=100;
    player.y=550
    
  }
  if(player.isTouching(obs5)){
    text("YOU LOOSE",200,200)
    player.x=100;
    player.y=550
    
  }
  
  if(player.isTouching(snakegroup)){
    text("YOU LOOSE",200,200)
    player.x=100;
    player.y=550
    
  }
  if(player.isTouching(snakegroup2)){
    text("YOU LOOSE",200,200)
    player.x=100;
    player.y=550
    
  }

  drawSprites()
}

function generatesnakes(){
  if(frameCount % 120 === 0){
    var snakes = createSprite(0,430,100,10)
    snakes.velocityX = 3
    snakes.addImage(snakebg)
    snakes.scale=0.1
    snakegroup.add(snakes)
  }
}

function generatesnakes2(){
  if(frameCount % 120 === 0){
    var snakes = createSprite(600,150,100,10)
    snakes.velocityX = -3
    snakes.addImage(snakebg)
    snakes.scale=0.1
    snakegroup2.add(snakes)
  }
}
