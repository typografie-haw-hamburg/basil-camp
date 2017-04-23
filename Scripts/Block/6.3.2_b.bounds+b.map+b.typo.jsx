// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  // textfile in data gespeichert, Dokument muss davor im selben Ordner gespeichert sein
  var loadedText = b.loadString("Ahnenforschung.txt");

  var tfX = 10;
  var tfY = 10;
  var tfWidth = b.width - 2*tfX;
  var tfHeigth = b.height - 2*tfY;


  // loadedText in einen Textrahmen laden...
  var textFrame = b.text(loadedText, tfX, tfY, tfWidth, tfHeigth);

  // ...und in characters-array zerlegen
  var chars = b.characters(textFrame);

  for(var i = 0; i < chars.length; i++) {

    // Positionsbestimmung der einzelnen Buchstaben "freischalten"
    var charBounds = b.bounds(chars[i]);

    // linke X-Position jedes Buchstaben
    var myCharLeft = charBounds.left;

    // b.map-Werte
    var input = myCharLeft;
    var minX = tfX;
    var maxX = tfWidth;
    var minBaselineShift = 0;
    var maxBaselineShift = 30;

    var baselineShiftValue = b.map(myCharLeft, minX, maxX, minBaselineShift, maxBaselineShift);

    // Änderung des baselineShift
    b.typo(chars[i], 'baselineShift', baselineShiftValue)

 }





}

b.go();
