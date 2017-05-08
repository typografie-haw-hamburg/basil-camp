// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Zeichnet versetzte Rechtecke

// Erklären:
// Variablen schrittweise erhöhen mit ++

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();

  var size = 60;
  var yPos = 0;

  b.rect(0, yPos, size, size);
  yPos++;
  b.rect(0, yPos, size, size);
  yPos++;
  b.rect(0, yPos, size, size);
  yPos++;
  b.rect(0, yPos, size, size);
  yPos++;
  b.rect(0, yPos, size, size);

}

b.go();
