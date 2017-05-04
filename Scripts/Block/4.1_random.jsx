// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  var one = b.random(10);
  var two = b.random(24, 38);

  var twoRound = b.round(two);
  var twoFloor = b.floor(two);
  var twoCeil = b.ceil(two);

  b.println("one is " + one);
  b.println("two is " + two);

  b.println("twoRound is " + twoRound);
  b.println("twoFloor is " + twoFloor);
  b.println("twoCeil is " + twoCeil);

}

b.go();
