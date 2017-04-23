// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  // textfile must be saved in data
  var content = b.loadString("Ahnenforschung.txt");

  var tfX = 10;
  var tfY = 10;
  var tfWidth = b.width - 2*tfX;
  var tfHeigth = b.height - 2*tfY;

  b.text(content, tfX, tfY, tfWidth, tfHeigth);
}

b.go();
