// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Text aus Datei laden

// Erklären:
// b.loadString()
// data Ordner

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  // Textdatei muss in einem Ordner names data gesichert sein
  var myText = b.loadString("Ahnenforschung.txt");

  var x = 10;
  var y = 10;
  var w = b.width - 2*x;
  var h = b.height - 2*y;

  b.text(myText, x, y, w, h);
}

b.go();
