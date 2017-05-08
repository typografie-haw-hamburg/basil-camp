// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Textrahmen erstellen

// Erklären:
// b.textFrame()

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  var textFrame = b.text("Hallo Hallo.", 10, 10, 100, 100);
}

b.go();
