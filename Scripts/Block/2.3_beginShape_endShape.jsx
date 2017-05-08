// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Zeichnet eine Zickzacklinie mit b.beginShape() und b.endShape()

// Erklären:
// b.beginShape()
// b.vertex()
// b.endShape()

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();

  var x1 = 40;
  var x2 = 120;
  var yTop = 0;

  b.beginShape();
    b.vertex(x1, yTop);
    b.vertex(x2, yTop + 20);
    b.vertex(x1, yTop + 40);
    b.vertex(x2, yTop + 60);
    b.vertex(x1, yTop + 80);
    b.vertex(x2, yTop + 100);
    b.vertex(x1, yTop + 120);
  b.endShape();
}

b.go();
