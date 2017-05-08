// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Zehn skalierte Rects zeichnen mit for-loop

// Erklären:
// b.scale()

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.rectMode(b.CENTER);

  var xPos = b.width / 2;
  var yPos = 10;
  var dia = 15;
  var factor = 25;

  for (var i = 0; i < 10; i++) {
    b.scale(1.1, 0.9);
    b.rect(xPos, yPos + i * factor, dia, dia);
  }

}

b.go();
