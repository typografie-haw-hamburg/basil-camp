﻿// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  // Sitznachbarn
  var neighbors = ["Doro", "Timo", "Heike", "Peter"];

  var randomIndex = b.floor(b.random(0, neighbors.length));

  var randomPerson = neighbors[randomIndex];

  alert("Die zufällig auserwählte Person ist: " + randomPerson);
}

b.go();
