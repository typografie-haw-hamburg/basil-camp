// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();

  for (var i = 0; i < 10; i++) {
    b.println("i ist " + i);
  }

}

b.go();
