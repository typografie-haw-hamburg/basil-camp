﻿// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  var one = b.random(10);
  var two = b.random(1,10);

  var three = b.floor(two);
  var four = b.ceil(two);

  b.println("one is " + one);
  b.println("two is " + two);
  b.println("three is " + three);
  b.println("four is " + four);

}

b.go();