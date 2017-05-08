// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Zeichnet versetzte Rechtecke

// Erklären:
// Variablen können geändert werden
// Variablen um bestimmten Wert erhöhen mit yPos = yPos + step
// Variablen um bestimmten Wert erhöhen mit yPos += step

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();

  var size = 60;
  var yPos = 0;
  var step = size / 2;

  b.rect(0, yPos, size, size);
  yPos = yPos + step;
  b.rect(0, yPos, size, size);
  yPos = yPos + step;
  b.rect(0, yPos, size, size);
  yPos += step;
  b.rect(0, yPos, size, size);
  yPos += step;
  b.rect(0, yPos, size, size);

}

b.go();
