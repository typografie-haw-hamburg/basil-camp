// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  b.clear(b.doc());
  b.units(b.MM);

  // Text in Variable laden
  var myText = b.loadString("EinHundKommtSeltenAllein.txt");

  var tfX = 10;
  var tfY = 10;
  var tfWidth = 100;
  var tfHeight = 100;

  b.textAlign(Justification.FULLY_JUSTIFIED);

  // Textvariable in Textfelder speichern und verlinken
  var tfA = b.text(myText, tfX, tfY, tfWidth, tfHeight);
  var tfB = b.text("", tfX, tfY + 150, tfWidth, tfHeight);
  b.linkTextFrames(tfA, tfB);

  // Textfelder in Wörter zerlegen
  var myWordsA = b.words(tfA);
  var myWordsB = b.words(tfB);

  // leere Arrays für die Koordinaten der Wörter
  var wordMiddleArray = [];
  var baselineArray = [];

  // in dem for loop werden die Koordinaten
  for(var i = 0; i < myWordsA.length; i++) {

    if(b.startsWith(myWordsA[i].contents, "ich")) {

      b.typo(myWordsA[i], "fillColor", b.color(255, 0, 0));

      // word bounds berechnen
      var wordBounds = b.bounds(myWordsA[i]);
      var wordMiddle = wordBounds.left + (wordBounds.width / 2);
      var baseline = wordBounds.baseline;

      // in Array speichern
      wordMiddleArray.push(wordMiddle);
      baselineArray.push(baseline);
    }
  }


  // Linie zeichnen, die Koordinaten der Punkte kommen aus den Arrays
  b.noFill();
  b.stroke(b.color(255, 0, 0));
  b.beginShape();

  for (var j = 0; j < wordMiddleArray.length; j++) {
    var x = wordMiddleArray[j];
    var y = baselineArray[j];
    b.vertex(x, y);
  }

  b.endShape();


}
b.go();
