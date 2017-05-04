// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.noFill();
  b.clear(b.doc());

  b.line(80, 130, 100, 100);
  b.line(100, 100, 150, 150);
  b.line(150, 150, 180, 90);
  b.line(180, 90, 220, 160);

}

b.go();
