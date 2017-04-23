﻿// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

   b.clear(b.doc());
  b.units(b.MM);

  var black = b.color(0);
  var red = b.color(255,0,0);
  var dia = 20;

  var many = prompt("Wie viele Kreise willst du zeichnen?",40);

  for (var i = 0; i < many; i++) {
    b.noStroke();
    b.noFill();

    var randomX = b.random(0, b.width);
    var randomY = b.random(0, b.height);

    if(randomY <= b.height/2 && randomX <= b.width/2) {
      b.stroke(red);
    }

    else{
      b.stroke(black);
    }

    b.ellipse(randomX, randomY, dia, dia);
  }

}

b.go();
