// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  b.clear(b.doc());
  b.units(b.MM);
  b.rectMode(b.CENTER);


  var xPos = 15;
  var yPos = 15;
  var rectWidth = 13;
  var rectHeight = 4;
  var distanceBetween = rectWidth + 7;
  var distanceUnder = rectHeight + 10;

  // MINUS
  // i-loop für die x-Achse
  for(var i = 0; i < 10; i++){

    // j-loop für die y-Achse
    for(var j = 0; j < 20; j++){
      b.rect(xPos + i*distanceBetween, yPos + j*distanceUnder, rectWidth, rectHeight);
    }
  }

  // PLUS
  // k-loop füe die x-Achse
  for(var k = 0; k < 10; k++){

    // l-loop für die y-Achse
    for(l = 0; l < 20; l++){
      b.rect(xPos + k*distanceBetween, yPos + l*distanceUnder, rectHeight, rectWidth)
    }
  }
}

b.go();
