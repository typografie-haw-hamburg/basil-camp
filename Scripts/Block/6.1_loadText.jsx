// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Text aus Datei laden

// Erklären:
// b.loadString()
// data Ordner

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.rectMode(b.CENTER);

  // Textdatei muss in einem Ordner names data gesichert sein
  var content = b.loadString("Ahnenforschung.txt");

  b.text(content, b.width / 2, b.height / 2, 200, 250);
}

b.go();
