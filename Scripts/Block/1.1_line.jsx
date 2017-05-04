// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  b.line(40, 10, 80, 100);
  b.line(150, 80, 30, 200);
}

b.go();
