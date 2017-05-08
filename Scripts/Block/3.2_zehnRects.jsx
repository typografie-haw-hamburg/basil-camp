// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Zehn Rects zeichnen mit for-loop

// Erklären:
// i zum Verschieben der Position nutzen

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.rectMode(b.CENTER);

  var xPos = b.width / 2;
  var yPos = 10;
  var dia = 15;
  var distance = 20;

  for (var i = 0; i < 10; i++) {
    b.rect(xPos, yPos + i * distance, dia, dia);
  }

}

b.go();
