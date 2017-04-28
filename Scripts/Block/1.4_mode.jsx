// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();

  // green
  b.stroke( b.color( 0,255,0) );
  b.rect(80, 50, 100, 100);

  // red
  b.stroke( b.color( 255,0,0) );
  b.rectMode(b.CENTER);
  b.rect(80, 50, 100, 100);
}

b.go();
