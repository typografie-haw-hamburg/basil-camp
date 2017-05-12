// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  b.line(150, 100, 180, 120);
  b.line(180, 120, 130, 120);
  b.line(130, 120, 150, 100);

}

b.go();
