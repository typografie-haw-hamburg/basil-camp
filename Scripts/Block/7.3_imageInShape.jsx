// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Bild in Form platzieren

// Erklären
// b.image("bildDatei.jpg", shape)

function draw() {

  b.clear(b.doc());
  b.noFill();

  b.noStroke();

  var myEllipse = b.ellipse(100, 100, 80, 200);

  b.image("robo_1.png", myEllipse);

}

b.go();
