// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

  // Zeichnet zwei Rechtecke mit unterschiedlichen rectModes

  // Erklären:
  // b.stroke()
  // b.rectMode(b.CENTER)

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();

  // green
  b.stroke(0, 255, 0);
  b.rect(80, 50, 100, 100);

  // red
  b.stroke(255, 0, 0);
  b.rectMode(b.CENTER);
  b.rect(80, 50, 100, 100);
}

b.go();
