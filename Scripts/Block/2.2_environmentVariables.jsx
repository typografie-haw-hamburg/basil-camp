// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Zeichnet Kreise am unteren rechten Seitenrand

// Erklären:
// b.width + b.height

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();

  var radius = 40;
  var xPos = b.width;
  var yPos = b.height;

  b.ellipse(xPos, yPos, radius, radius);
  b.ellipse(xPos, yPos, radius * 2, radius * 2);
  b.ellipse(xPos, yPos, radius * 3, radius * 3);
}

b.go();
