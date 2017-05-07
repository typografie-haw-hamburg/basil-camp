// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  // textfile und das InDesign-Dokument müssen davor im Ordner data gespeichert werden
  var content = b.loadString("EinHundKommtSeltenAllein.txt");

  var tfX = 10;
  var tfY = 10;
  var tfWidth = b.width - 2*tfX;
  var tfHeigth = b.height - 2*tfY;

  b.textAlign(Justification.FULLY_JUSTIFIED);
  b.text(content, tfX, tfY, tfWidth, tfHeigth);
}

b.go();