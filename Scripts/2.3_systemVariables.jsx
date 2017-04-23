// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();

  var xPos = b.width/2;
  var yPos = b.height/2;

  var width = 15;
  var heigth = 15;

  b.ellipse(xPos,yPos,width,heigth);
}

b.go();
