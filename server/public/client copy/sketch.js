// parameters


// bouncing icon variables
let iconX = [];
let iconY = [];
let bounceX = [];
let bounceY = [];
let speed = [];

// Graphics
let spinninghead;
let spinningSquare;
let spinningPyramid;
let squashingLine;
let bigWindow;
let mediumWindow;
let smallWindow;
let homePage;
let gifMax = 0;
let gifChoose = [];

let counter = 0;
let secondCounter = 0;
let phaseBoolean2 = 'true';
let circleSize = 10;
let score = 0;
let sendSocket = 0;
let sendPlace = 0;

let number = 0;

function preload() {
  // loading variables with the graphics
  spinninghead = loadImage("data/Van-Gogh-final.gif");
  spinningSquare = loadImage("data/square-animate.gif");
  spinningPyramid = loadImage("data/Pyramid-final.gif");
  squashingLine = loadImage("data/squash-animate.gif")

  bigWindow = loadImage("data/web battles.png");
  mediumWindow = loadImage("data/big window.png");
  smallWindow = loadImage("data/small window.png");
  homePage = loadImage("data/computer background.png");
}

const socket = io();

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
    // add params to a GUI

    //loop for setting values
  for(let i = 0; i <= 100; i += 1){
  iconX[i] = random(100, width - 450);
  iconY[i] = random(100, height - 100);
  speed[i] = random(1.05, 1.9);
  if (random() < 0.5){
    bounceX[i] = 'true';
  } else {
    bounceX[i] = 'false';
  }

  if (random() < 0.5){
    bounceY[i] = 'true';
  } else {
    bounceY[i] = 'false';
  }
  
  gifChoose[i] = int(random(0, 4));
  };
    // loop for setting values

  // this is important socket stuff
  // this is important socket stuff
  socket.on("draw", (number) => {
    sendPlace = number;
   });
   sendSocket = socket.id;
   socket.emit("sendSocket", sendSocket);
   socket.emit("sendPlace", sendPlace);
 }

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  socket.on("output", (data) => {
    print(data);
    counter = data;
  });
  
  fill(255);
  textSize(100);
  text(counter, 100, 220);

  print(counter);

  if(phaseBoolean2 === 'true'){
  fill(255);
  textSize(20);
  text("Seconds until Match Starts", 30, 300);
  }

  if(phaseBoolean2 === 'false'){
    fill('red');
    textSize(20);
    circle(150, 250, circleSize);
    text("Tap!", 110, 300);
  }

  if(counter >= 31 && phaseBoolean2 === 'true'){
    phaseBoolean2 = 'false';
    counter = 0;
  } else if (counter >= 16 && phaseBoolean2 === 'false'){
    phaseBoolean2 = 'true';
    counter = 0;
    let resize = map(score, 0, 100, 0, 6);
    socket.emit('resize', resize);
    circleSize = 50;
    score = 0;
  }

}


function keyPressed() {
  if (key == ' ') {
  }
  if (key === "k") {
        // this is the mouse function

        // this is the mouse function
  } 
}

function mousePressed() {
        // this is the mouse function
        // this s the mouse function
  if(phaseBoolean2 === 'false'){
   circleSize += 1;
   score += 1;
  }
}

function mouseDragged() {
}

function windowResized() {
}

// global callback from the settings GUI
function paramChanged(name) {
}