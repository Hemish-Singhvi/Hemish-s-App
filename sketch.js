var FORM, logo, RSImg, RS, bgImg, TIMER;
var tasks = [];

function preload(){
  RSImg = loadImage('Images/Rotate Screen.png');
  bgImg = loadImage('Images/Background.png')
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  background(bgImg);
  FORM = new homeScreen;
  if (windowWidth < windowHeight){
    RS = createSprite(windowWidth/2, windowHeight/2, 300, 300);
    RS.addImage(RSImg);
  }
  //Timer Testing : Sketch.js 17, 24
  //TIMER = new timer(60);
}

function draw(){
  //background(bgImg);
  FORM.display();
  //TIMER.dislay();

}