// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Zeichnet ein Rechteck

// Erklären:
// b.rect()
// b.noFill()
// Konsole
// Fehler - zu wenige/viele Parameter
// Fehler - Klammern vergessen

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();

  b.rect(40, 80, 100, 100);

}

b.go();
