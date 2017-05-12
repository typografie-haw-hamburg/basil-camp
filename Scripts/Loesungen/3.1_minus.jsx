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

  for(var i = 0; i < 10; i++) {
    b.rect(xPos + i * distanceBetween, yPos, rectWidth, rectHeight);
  }

}

b.go();
