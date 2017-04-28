// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  b.units(b.MM);
  b.rectMode(b.CENTER);

  var tf = b.selection();
  var words = b.words(tf);

}
b.go();