// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.noFill();
  b.clear(b.doc());
  b.units(b.MM);
  b.rectMode(b.CENTER);

  var xPos = b.width / 2;
  var yPos = b.height / 2;
  var sideLength = 50;

  b.rect(xPos, yPos, sideLength, sideLength);
  b.rect(xPos, yPos, sideLength * 2, sideLength * 2);

}

b.go();
