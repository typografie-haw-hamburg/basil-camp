// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  b.clear(b.doc());
  b.units(b.MM);
  b.rectMode(b.CENTER);

  var red = b.color(255, 0, 0);
  var blue = b.color(0, 0, 255);
  var yellow = b.color(255, 255, 0);

  var xPos = b.width/2;
  var yPos = b.height/2;
  var sideLength = 15;

  var colors = [red, blue, yellow];
  var randomIndex = b.floor( b.random(0,3) );

  b.fill(colors[randomIndex]);
  b.rect(xPos, yPos, sideLength, sideLength)
}

b.go();
