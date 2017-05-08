// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Bild mehrfach platzieren und skalieren

// Erklären:
// b.remove()

function draw() {

  b.clear(b.doc());

  b.noStroke();

  var xPos = 20;
  var yPos = 30;

  var robo = b.image("robo_1.png", xPos, yPos);

  var roboWidth = b.itemWidth(robo);
  var roboHeight = b.itemHeight(robo);

  b.remove(robo);

  for (var i = 0; i < 10; i++) {
    var scaleFactor = (i + 1) * 0.1;

    b.image("robo_1.png", xPos, yPos, roboWidth * scaleFactor, roboHeight * scaleFactor);

  }

}

b.go();
