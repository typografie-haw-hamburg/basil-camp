// @includepath "~/Documents/;%USERPROFILE%Documents";
// @include "basiljs/basil.js";

function draw() {

  b.clear(b.doc());
  b.units(b.MM);

  var names = ["Cora", "Paulina", "Daniel N.", "Elena", "Andreas", "Heike", "Katharina", "Daniel B.", "Annika", "Michael", "Christian", "Ricardo", "Sarah", "Alex", "Thao", "Ram", "Maya", "Ksenia", "Farah"];

  var campers = names.length;

  for(var i = 0; i < campers; i++){
    var randomIndex = b.floor( b.random(0, names.length) );
    alert(names[randomIndex]);
    names.splice(randomIndex, 1);
  }
}

b.go();
