// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Text formatieren

// Erklären:
// b.LOREM
// b.typo()
// Texteigenschaften (pointSize, appliedFont etc.)
// Cheat Sheet

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  var textFrame = b.text(b.LOREM, 0, 0, 200, 100);

  b.typo(textFrame, "pointSize", 30);
  b.typo(textFrame, "appliedFont", "Helvetica");
  b.typo(textFrame, "underline", true);
}

b.go();
