// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Seitenmaßen mit Strings ausgeben

// Erklären:
// Zahlen mit Strings zusammenführen mit +
// b.round()

// dann: Ü2

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();

  var width = b.round(b.width);
  var height = b.round(b.height);

  alert("Die Seite ist " + width + " mm breit und " + height + " mm hoch.");

}

b.go();
