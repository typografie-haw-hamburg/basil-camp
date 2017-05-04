﻿// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  b.clear(b.doc());
  b.units(b.MM);
  b.noFill();


  var lines = prompt("Wie viele Linien soll ich zeichnen?", 50)

  var x = b.random(0, b.width);
  var y = b.random(0, b.height);

  b.beginShape();

  for(var j = 0; j < lines; j++){
    b.vertex(x,y)
    x = b.random(0, b.width);
    y = b.random(0, b.height);
  }

  b.endShape();

}

b.go();
