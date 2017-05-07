// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {
  b.clear(b.doc());
  b.units(b.MM);

  var myText = b.loadString("EinHundKommtSeltenAllein.txt");

  var tfX = 10;
  var tfY = 10;
  var tfWidth = 100;
  var tfHeight = 100;

  b.textAlign(Justification.FULLY_JUSTIFIED)

  var tfA = b.text(myText, tfX, tfY, tfWidth, tfHeight);
  var tfB = b.text('', tfX, tfY + 150, tfWidth, tfHeight);
  b.linkTextFrames(tfA, tfB);

  var myWordsA = b.words(tfA);
  var myWordsB = b.words(tfB);

  var wordMiddleArray = [];
  var baselineArray = [];


  for(var i = 0; i < myWordsA.length; i++){

    if( b.startsWith(myWordsA[i].contents, "ich" ) ){

      b.typo(myWordsA[i], 'fillColor', b.color(255, 0, 0))

      var wordBounds = b.bounds( myWordsA[i] );
      var wordMiddle = wordBounds.left + (wordBounds.width / 2);
      var baseline = wordBounds.baseline;

      // in Array speichern
      wordMiddleArray.push(wordMiddle[i]);
      baselineArray.push(baseline[i]);
    }
  }

  for(var j = 0; j < wordMiddleArray.length - 2; j++){
    b.line(wordMiddle[j], baseline[j], wordMiddle[j+1], baseline[j+1]);
  }


}
b.go();