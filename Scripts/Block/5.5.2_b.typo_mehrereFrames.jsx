// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Textrahmen unterschiedlich formatieren

// Erklären:
// Textrahmen in Variable speichern

// dann: Ü5

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  var textFrame = b.text(b.LOREM, 0, 0, 200, 100);

  b.typo(textFrame, "pointSize", 30);
  b.typo(textFrame, "appliedFont", "Helvetica");
  b.typo(textFrame, "underline", true);

  var textFrame2 = b.text(b.LOREM, 0, 150, 200, 100);

  b.typo(textFrame2, "pointSize", 20);
  b.typo(textFrame2, "appliedFont", "Georgia");
  b.typo(textFrame2, "fillColor", b.color(200, 111, 83));
  b.typo(textFrame2, "horizontalScale", 200);
}

b.go();
