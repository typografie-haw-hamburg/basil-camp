// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.noStroke();


  for (var i = 1; i < 10; i++) {
    var img = b.image("mirror_" + i + ".png", 0, 0);

    var imgWidth = b.itemWidth(img);
    var imgHeight = b.itemHeight(img);

    var xPos = 0;
    var yPos = 0;

    var targetWidth = 300;
    var targetHeight = targetWidth / imgWidth * imgHeight;

    b.transformImage(img, xPos, yPos, targetWidth, targetHeight);
    b.addPage();

  }

}

b.go();
