// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  b.clear(b.doc());
  b.units(b.MM);

  var myText = b.loadString("EinHundKommtSeltenAllein.txt");

  var tfX = 10;
  var tfY = 10;
  var tfWidth = 100;
  var tfHeight = 100;

  b.textAlign(Justification.FULLY_JUSTIFIED);

  var tfA = b.text(myText, tfX, tfY, tfWidth, tfHeight);
  var tfB = b.text("", tfX, tfY + 150, tfWidth, tfHeight);
  b.linkTextFrames(tfA, tfB);

}
b.go();
