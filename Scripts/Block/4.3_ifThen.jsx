﻿// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  var randomR = b.floor( b.random(255) );
  var randomG = b.floor( b.random(255) );
  var randomB = b.floor( b.random(255) );

  var randomColor = b.color(randomR, randomG, randomB);

  b.println(randomR + "/" + randomG + "/" + randomB)
}

b.go();