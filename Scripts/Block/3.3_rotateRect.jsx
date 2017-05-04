// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.rectMode(b.CENTER);

  var angle = b.radians(12.5);

  var xPos = b.width / 2;
  var yPos = 10;
  var dia = 15;
  var distance = 25;

  for (var i = 0; i < 10; i++) {
    b.rotate(angle);
    b.rect(xPos, yPos + i * distance, dia, dia);
  }

}

b.go();
