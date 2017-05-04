// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

b.clear(b.doc());

var myText = "I LOVE ROBO"; 
var xPos = 20; var yPos = 20; 
var widthTextframe = 150; 
var heightTextframe = 30; 

b.text(myText, xPos, yPos, widthTextframe, heightTextframe);

}

b.go();
