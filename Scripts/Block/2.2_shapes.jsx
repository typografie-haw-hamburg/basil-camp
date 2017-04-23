// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();

  var xOne = 10;
  var yOne = 150;

  var xTwo = 30;
  var yTwo = 50;

  var xThree = 60;
  var yThree = 100;

  var xFour = 80;
  var yFour = 80;

  var xFive = 95;
  var yFive = 110;

  var xSix = 150;
  var ySix = 30;

  var xSeven = 200;
  var ySeven = 150;


  b.beginShape();
  b.vertex(xOne, yOne);
  b.vertex(xTwo, yTwo);
  b.vertex(xThree, yThree);
  b.vertex(xFour, yFour);
  b.vertex(xFive, yFive);
  b.vertex(xSix, ySix);
  b.vertex(xSeven,ySeven)
  b.endShape();
}

b.go();
