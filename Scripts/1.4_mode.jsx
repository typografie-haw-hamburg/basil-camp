﻿// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();

  b.stroke( b.color( 255,0,0) );
  b.rectMode(b.CENTER);
  b.rect(50, 50, 100, 100);

  b.stroke( b.color( 0,255,0) );
  b.rectMode(b.CORNER);
  b.rect(50, 50, 100, 100);

  b.stroke( b.color( 0,0,255) );
  b.rectMode(b.CORNERS);
  b.rect(50, 50, 100, 100);
}

b.go();
