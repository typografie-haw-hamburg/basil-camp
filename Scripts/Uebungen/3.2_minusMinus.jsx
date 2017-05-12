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
  for(var i = 0; i < 10; i++) {

    // j-loop für die y-Achse
    for(var j = 0; j < 20; j++) {
      b.rect(xPos + i * distanceBetween, yPos + j * distanceUnder, rectWidth, rectHeight);
    }

  }

}

b.go();
