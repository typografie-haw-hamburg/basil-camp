// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();

  var xPos = 80;
  var yPos = 100;
  var width = 50;
  var height = 70;

  b.ellipse(xPos, yPos, width, height);
}

b.go();
