// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  b.clear(b.doc());
  b.units(b.MM);

  var myText = b.loadString("EinHundKommtSeltenAllein.txt");

  var tfX = 10;
  var tfY = 10;
  var tfWidth = 100;
  var tfHeight = b.height - tfY;

  b.textAlign(Justification.FULLY_JUSTIFIED)
  b.text(myText, tfX, tfY, tfWidth, tfHeight);

}
b.go();