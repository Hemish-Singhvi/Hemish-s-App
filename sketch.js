var FORM, logo, RSImg, RS, bgImg, TIMER;
var tasks = [];
var task = [];
var Hello, Hello1, Hello2;
var taskTitleVal;
var taskDurationVal;
var taskDeadlineVal;
var taskForm, tasks, studentPage, parentForm;
var appState = 1;

function preload(){
  RSImg = loadImage('Images/Rotate Screen.png');
  bgImg = loadImage('Images/Background.png');
  Hello = loadAnimation('Images/Hello Frame 1.png', 'Images/Hello Frame 2.png');
}

function setup(){
  canvas = createCanvas(windowWidth, windowHeight);
  background(bgImg);
  if (appState === 1) {
    FORM = new homeScreen;
  }
  
  if (windowWidth < windowHeight){
    RS = createSprite(windowWidth/2, windowHeight/2, 300, 300);
    RS.addImage(RSImg);
  }
  var frames = getFrameRate();
  console.log(frames);
  //Timer Testing : Sketch.js 17, 24
  //TIMER = new timer(60);
}

function draw(){
  //background(bgImg);
  FORM.display();
  //TIMER.dislay();
}