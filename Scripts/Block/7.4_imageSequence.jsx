// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

// Sequenz von Bildern platzieren

// Erklären
// Dateinamen als String zusammensetzen

function draw() {

  b.clear(b.doc());
  b.noFill();

  b.noStroke();

  for (var i = 1; i < 10; i++) {

    var xPos = b.random(b.width);
    var yPos = b.random(b.height);

    var robo = b.image("robo_" + i + ".png", xPos, yPos);

    var roboWidth = b.itemWidth(robo);
    var roboHeight = b.itemHeight(robo);

    var targetWidth = 100;
    var targetHeight = targetWidth / roboWidth * roboHeight;


    b.transformImage(robo, xPos, yPos, targetWidth, targetHeight);
  }

}

b.go();
