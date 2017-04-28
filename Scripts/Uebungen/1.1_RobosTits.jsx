// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

b.noFill();
b.clear(b.doc());
b.rectMode(b.CENTER);

// tits
b.fill( b.color(50) )
b.rect(100, 100, 30, 30);
b.rect(150, 100, 30, 30);

// nipples
b.fill( b.color(200) )
b.rect(100, 100, 5, 5);
b.rect(150, 100, 5, 5);

}

b.go();
