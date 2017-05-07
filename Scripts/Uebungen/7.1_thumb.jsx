// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noStroke();

  b.imageMode(b.CORNER);

  for (var i = 1; i < 10; i++) {
    var img = b.image("mirror_" + i + ".png", 0, 0)

    b.addPage();
  }

}

b.go();
