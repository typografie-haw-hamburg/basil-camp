// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Zeichnet Kreise mit Variablen

// Erklären:
// Einer Variablen einen Wert zuweisen
// Variablen zum Wiederverwenden von Nummern

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();

  var xPos = 100;
  var radius = 80;

  b.ellipse(xPos, 0, radius, radius);
  b.ellipse(xPos, 70, radius, radius);
  b.ellipse(xPos, 140, radius, radius);

}

b.go();
