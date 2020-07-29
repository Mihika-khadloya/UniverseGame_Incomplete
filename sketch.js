var database;
var name;
var form;
var bgImage,earthImg;
var proceedImage,bg2image;
var gameState = 0;
var mars;

function preload(){
  bgImage = loadImage("main.jpg");
  earthImg = loadImage("Pictures_Game_Universe/Earth.jpg");
}


function setup() {
  database = firebase.database()
  createCanvas(600,600);
  form = new Form();
  mars = createSprite(300,480,100,100);
  mars.visibility = true;
}

function draw() {
if(gameState === 0){
  background(bgImage);
  form.display();
}
if(gameState === 1){
  clear();
  background("white");
  form.part1Display();
  fill("grey")
  ellipse(320,300,150,150)
}
if(gameState === 2){
  fill("blue");
  ellipse(320,300,150,150);
}  
if(gameState == 3){
  clear();
  background("white");
  form.part2Display();
  fill("grey");
  ellipse(320,300,150,150);
}
if(gameState === 4){
  fill("red");
  ellipse(320,300,150,150);
}
if(gameState === 5){
  clear();
  background("white");
  form.part3display();
  fill("grey");
  ellipse(320,300,150,150);
}
if(gameState === 6){
  fill(181,101,29);
  ellipse(320,300,150,150);
}
if(gameState === 7){
  clear();
  background("white");
  fill("grey");
  ellipse(300,210,150,150);
  fill("grey");
  ellipse(120,210,150,150);
  fill("grey");
  ellipse(490,210,150,150);
  form.nextSection();
  mars.shapeColor = "red";
  mars.display();
}
if(gameState === 8){
  clear();
  background("white");
  
  fill("grey");
  ellipse(300,210,150,150);
  fill("grey");
  ellipse(120,210,150,150);
  fill("grey");
  ellipse(490,210,150,150);
  mars.x = mouseX;
  mars.y = mouseY;
  mars.display();
  form.action.hide();

  if(mars.x < 310 && mars.x > 290 && mars.y > 200 && mars.y < 220){
    clear();
    fill("red");
    ellipse(300,210,150,150);
    gameState = 9
    //mars.x = 300;
    //mars.y = 210;
    //mars.visibility = false;
    mars.destroy();
    form.nextSectionHide();
    form.correct.html("Correct!");
    form.correct.position(250,270);
    form.nextSectionButton.position(470,480);
  }
  if(mars.x < 135 && mars.x > 100 && mars.y > 200 && mars.y < 220 || mars.x < 505 && mars.x > 475 && mars.y > 200 && mars.y < 220){
    clear();
    fill("red");
    ellipse(300,210,150,150);
    gameState = 9
    //mars.x = 300;
    //mars.y = 210;
    //mars.visibility = false;
    mars.destroy();
    form.nextSectionHide();
    form.wrong.html("Incorrect :(");
    form.wrong.position(250,270);
    form.nextSectionButton.position(470,480);
   
  }
  if(gameState === 9){
    clear();
    fill("red");
    ellipse(300,210,150,150);
  }
  if(gameState === 10){
    clear();
    background("white");
    fill("grey");
    ellipse(300,210,150,150)
  }
  
}
 
 
}