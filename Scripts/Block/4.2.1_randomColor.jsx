// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.noStroke();



  b.fill( b.floor( b.random(255) ),b.floor( b.random(255) ), b.floor( b.random(255) ) );
  b.ellipse(50, 100, 60, 60);
  b.ellipse(120, 100, 60, 60);

  b.fill( b.floor( b.random(255) ),b.floor( b.random(255) ), b.floor( b.random(255) ) );
  b.ellipse(50, 105, 10, 10);
  b.ellipse(120, 105, 10, 10);
}

b.go();
