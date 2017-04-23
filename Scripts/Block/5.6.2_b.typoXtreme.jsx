// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  //b.clear(b.doc());
  b.units(b.MM);

  var textFrame = b.selection();

  var words = b.words(textFrame);
  var chars = b.characters(textFrame);

  for (var i = 0; i < chars.length; i++){
    var randomPointsize = b.random (10, 20);

    var randomBooleanValue = b.random (1);
    if(randomBooleanValue > 0.5){
      var randomBoolean = true;
    }
    else {
      var randomBoolean = false;
    }

    b.typo(chars[i], 'pointSize', randomPointsize);
    b.typo(chars[i], 'underline', randomBoolean);
  }

}

b.go();
