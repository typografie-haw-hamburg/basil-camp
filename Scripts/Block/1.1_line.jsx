// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Zeichnet zwei Linien

// Erklären:
// basil.js-Template
// b.line()
// ctrl + E zum Ausführen des Scripts
// b.clear(b.doc())
// b.units(b.MM)
// Code wird von oben nach unten abgearbeitet

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  b.line(40, 10, 80, 100);
  b.line(150, 80, 30, 200);

}

b.go();
