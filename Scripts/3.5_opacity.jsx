// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);
  b.rectMode(b.CENTER);

  var xPos = b.width/2;
  var yPos = 10;
  var dia = 15;
  var factorY = 25;
  var factorOpacity = 5;

  for (var i = 0; i < 10; i++) {
    var rect = b.rect(xPos, yPos + i*factorY, dia, dia);
    b.opacity(rect, i*5)
  }

}

b.go();
