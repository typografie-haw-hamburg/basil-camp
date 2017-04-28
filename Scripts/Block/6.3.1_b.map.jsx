// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  var rValue = 255;
  var gValue = 255;
  var bValue = 0;

  //var myColor = b.color(rValue, gValue, bValue)

  var xPos = 10;
  var yPos = b.height/2;
  var dia = 5;
  var distance = 15;

  b.noStroke();


  for(var i = 0; i < 14; i++) {

    var inputValue = xPos + distance*i;
    var minXPos = 0;
    var maxXPos = b.width;
    var minGValue = 0;
    var maxGValue = 255;

    var gValueNew = b.map(inputValue, minXPos, maxXPos, minGValue, maxGValue);

    var myColorNew = b.color(rValue, gValueNew, bValue);
    b.fill(myColorNew);

    b.ellipse(xPos + distance*i, yPos, dia, dia);
  }


// FRAGE: Warum ist der erste Kreis schwarz?

}

b.go();
