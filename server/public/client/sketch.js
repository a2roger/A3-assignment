// parameters


// bouncing icon variables
let iconX = [];
let iconY = [];
let bounceX = [];
let bounceY = [];
let speed = [];

// Graphics
let spinninghead;
let spinninghead2;
let spinninghead3;
let spinninghead4;
let spinninghead5;

let spinningSquare;
let spinningSquare2;
let spinningSquare3;
let spinningSquare4;
let spinningSquare5;
let spinningSquare6;
let spinningSquare7;

let spinningPyramid;
let spinningPyramid2;
let spinningPyramid3;
let spinningPyramid4;
let spinningPyramid5;
let spinningPyramid6;
let spinningPyramid7;
let spinningPyramid8;
let spinningPyramid9;

let squashingLine;
let squashingLine2;
let squashingLine3;
let squashingLine4;
let squashingLine5;
let squashingLine6;

let QRCode;

let bigWindow;
let mediumWindow;
let smallWindow;
let homePage;
let gifMax = 0;
let gifChoose = [];

let resize = 0;
let add = 0;
let counter = 0;
let secondCounter = 0;
let phaseBoolean = 'true';
let players = [];
let sentSocket;
let sentPlace;

function preload() {
  // loading variables with the graphics
  spinninghead = loadImage("data/Van-Gogh-final.gif");
  spinninghead2 = loadImage("data/Van-Gogh-final-version-2.gif");
  spinninghead3 = loadImage("data/Van-Gogh-final-version-3.gif");
  spinninghead4 = loadImage("data/Van-Gogh-final-version-4.gif");
  spinninghead5 = loadImage("data/Van-Gogh-final-version-5.gif");

  spinningSquare = loadImage("data/square-animate.gif");
  spinningSquare2 = loadImage("data/square-animate-VERSION-2.gif");
  spinningSquare3 = loadImage("data/square-animate-version-3.gif");
  spinningSquare4 = loadImage("data/square-animate-version-4.gif");
  spinningSquare5 = loadImage("data/square-animate-version-5.gif");
  spinningSquare6 = loadImage("data/square-animate-version-6.gif");
  spinningSquare7 = loadImage("data/square-animate-version-7.gif");

  spinningPyramid = loadImage("data/Pyramid-final.gif");
  spinningPyramid2 = loadImage("data/Pyramid-final-version-1.gif");
  spinningPyramid3 = loadImage("data/Pyramid-final-version-2.gif");
  spinningPyramid4 = loadImage("data/Pyramid-final-version-3.gif");
  spinningPyramid5 = loadImage("data/Pyramid-final-version-4.gif");
  spinningPyramid6 = loadImage("data/Pyramid-final-version-5.gif");
  spinningPyramid7 = loadImage("data/Pyramid-final-version-6.gif");
  spinningPyramid8 = loadImage("data/Pyramid-final-version-7.gif");
  spinningPyramid9 = loadImage("data/Pyramid-final-version-8.gif");

  squashingLine = loadImage("data/squash-animate.gif")
  squashingLine2 = loadImage("data/squash-animate-version-2.gif");
  squashingLine3 = loadImage("data/squash-animate-version-3.gif");
  squashingLine4 = loadImage("data/squash-animate-version-4.gif");
  squashingLine5 = loadImage("data/squash-animate-version-5.gif");
  squashingLine6 = loadImage("data/squash-animate-version-6.gif");

  QRCode = loadImage("data/qrCode2.png");

  bigWindow = loadImage("data/web battles.png");
  mediumWindow = loadImage("data/big window.png");
  smallWindow = loadImage("data/small window.png");
  homePage = loadImage("data/computer background.png");
}

const socket = io();

function setup() {
  createCanvas(1000, 600);
  imageMode(CENTER);
    // add params to a GUI

    //loop for setting values
  for(let i = 1; i <= 100; i += 1){
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
  if(i >= 2){
  gifChoose[i] = int(random(0, 27));
  }
  
  };
    // loop for setting values
    // this is important socket stuff
    // socket connected
    // this is important socket stuff
    
  socket.on("sendSocket", (sendSocket) => {
    sentSocket = sendSocket;
   });

   socket.on("sendPlace", (sendPlace) => {
    sentPlace = sendPlace;
   });

   socket.on("draw", (number) => {
    gifMax = number;
   });
 }

function draw() {

counter += 1;

for(let j = gifMax; j <= gifMax; j += 1){
 if(j === 0){
  players[j] = socket.id;
 } else {
  players[j] = sentSocket;
 }
}

background(240);

image(homePage, 500, 300, 1000, 600);
image(bigWindow, 330, 290, 620, 520);
image(smallWindow, 790, 160, 240, 240);
image(smallWindow, 790, 420, 240, 240);
image(QRCode, 790, 418, 200, 200);

for(let i = 1; i <= gifMax; i += 1){

  if(bounceX[i] === "true"){
  iconX[i] += speed[i];
  }
  if(bounceY[i] === "true"){
  iconY[i] += speed[i];
  }
  if(bounceX[i] === "false"){
    iconX[i] -= speed[i];
  }
  if(bounceY[i] === "false"){
    iconY[i] -= speed[i];
  }

  if(gifChoose[i] === 0){
    image(spinninghead, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 1){
    image(spinningSquare, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 2){
    image(spinningPyramid, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 3){
    image(squashingLine, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 4){
    image(squashingLine2, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 5){
    image(squashingLine3, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 6){
    image(squashingLine4, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 7){
    image(squashingLine5, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 8){
    image(squashingLine6, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 9){
    image(spinninghead2, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 10){
    image(spinninghead3, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 11){
    image(spinninghead4, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 12){
    image(spinninghead5, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 13){
    image(spinningSquare2, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 14){
    image(spinningSquare3, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 15){
    image(spinningSquare4, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 16){
    image(spinningSquare5, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 17){
    image(spinningSquare6, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 18){
    image(spinningSquare7, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 19){
    image(spinningPyramid2, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 20){
    image(spinningPyramid3, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 21){
    image(spinningPyramid4, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 22){
    image(spinningPyramid5, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 23){
    image(spinningPyramid6, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 24){
    image(spinningPyramid7, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 25){
    image(spinningPyramid8, iconX[i], iconY[i], 50 + add, 50 + add);
  } else if (gifChoose[i] === 26){
    image(spinningPyramid9, iconX[i], iconY[i], 50 + add, 50 + add);
  }
  
  if (iconY[i] <= (height - 98) && iconY[i] <= (height - 102) && iconX[i] >= width - 410 && iconX[i] <= width - 406){
    fill("red");
    if(bounceX[i] === "true"){
      bounceX[i] = "false";
      } else if(bounceX[i] === "false"){
      bounceX[i] = "true";
    }
  } else if (iconY[i] >= (height - 102) && iconY[i] <= (height - 98) && iconX[i] <= width - 410 && iconX[i] <= width - 406){
    fill("blue");
    if(bounceY[i] === "true"){
      bounceY[i] = "false";
      } else if(bounceY[i] === "false"){
      bounceY[i] = "true";
    }
  } else if (iconY[i] >= 98 && iconY[i] <= 102 && iconX[i] >= 62 && iconX[i] >= 58){
    fill("green");
    if(bounceY[i] === "true"){
      bounceY[i] = "false";
      } else if(bounceY[i] === "false"){
      bounceY[i] = "true";
    }
  } else if (iconY[i] >= 98 && iconY[i] >= 102 && iconX[i] <= 62 && iconX[i] >= 58){
    fill("pink");
    if(bounceX[i] === "true"){
      bounceX[i] = "false";
      } else if(bounceX[i] === "false"){
      bounceX[i] = "true";
    }
  }
  
}

if(counter > 60){
  print("fart")
  secondCounter += 1;
  
  let data = secondCounter;
  
  socket.emit("output", data);

  print (secondCounter);
  counter = 0;
}

fill(0);
textSize(85);
text(secondCounter, 745, 160);
textSize(20);

if(phaseBoolean === 'true'){
text("Seconds until", 730, 205);
text("Round Starts", 730, 222);
}

if(phaseBoolean === 'false'){
  fill("red");
  text("Tap the Screen", 720, 205);
}

  if(secondCounter > 30 && phaseBoolean === 'true'){
      phaseBoolean = 'false';
      secondCounter = 0;
  } else if (secondCounter > 15 && phaseBoolean === 'false'){
    phaseBoolean = 'true';
    secondCounter = 0;
    socket.on("resize", (resize) => {
    add += resize;
    print(add);
  });
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
}

function mouseDragged() {
}

function windowResized() {
}

// global callback from the settings GUI
function paramChanged(name) {
}