// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Rechnen mit Variablen zum Variieren der Kreise

// Erklären:
// Rechenoperatoren + - * /

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();

  var xPos = 100;
  var yTop = 0;
  var radius = 80;

  b.ellipse(xPos, yTop, radius, radius);
  b.ellipse(xPos, yTop + 70, radius, radius / 2);
  b.ellipse(xPos, yTop + 140, radius, radius / 3);

}

b.go();
