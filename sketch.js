var bg,bg2,form,system,code,security;
var score = 0;
var message, messageImg ,intro;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
  messageImg = loadImage("treasureUnlocked.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  system = new System();
  security = new Security();

  message = createSprite(windowWidth/2, windowHeight/2, 50, 50);
  message.addImage(messageImg);
  message.scale = 2;
  message.visible = false;
}

function draw() {
  background(bg);
  clues();
  security.display();  

  if(score === 3){
    clear();
    background(bg2);
    message.visible = true;
  }


  drawSprites()
  fill("white");
  textSize(25);
  text("Score: " + score, windowWidth - 150, 100);
}

