// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  //b.noFill();
  b.noStroke();

  b.fill( b.color(255,236, 198) );
  b.ellipse(50, 100, 60, 60);
  b.ellipse(120, 100, 60, 60);

  b.fill( b.color(210,126,106) )
  b.ellipse(50, 105, 10, 10);
  b.ellipse(120, 105, 10, 10);
}

b.go();
