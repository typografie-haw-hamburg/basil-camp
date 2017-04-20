## ÜBUNG 1
### Ü 1.1 ROBO'S TITS
Gerade haben wir wunderschöne Brüste gebaut. Konstruiert nun die Brüste eines Roboters und färbt sie nach euren Vorstellungen ein. Kleiner Tipp: sie sind auf jeden Fall eckig!

### Ü 1.2 ROMANTISCHES GEBIRGE
Zeichnet eine Zickzack-Linie mit zwei Spitzen. Achtet darauf, dass sich die Linien an den Gipfeln und in den Tälern genau treffen.

## ÜBUNG 2
### Ü 2.1 BE SQUARE
Schreibt ein Skript, das in der Mitte der Seite ein Quadrat zeichnet.

### Ü 2.2 «ROBO, DU HAST SO SCHÖNE AUGEN!»
Zeichnte mit Hilfe eines Skripts Robos Gesicht und platziert es mittig auf der Seite. Versucht dabei, so gut es geht auf magic numbers zu verzichten und verwendet statt dessen Variablen. Wieder ein Tipp: Startet mit der Variable der Gesichtsform, an der sich die weiteren Elemente orientieren.

### Ü 2.3 TYPO TEASER
Fügt in euer Skript folgenden Code ein und seht was passiert:

```js
var myText = "I LOVE ROBO";
var xPos = 20;
var yPos = 20;
var widthTextframe = 150;
var heightTextframe = 30;
b.text(myText, xPos, yPos, widthTextframe, heightTextframe);
```

Achtung: jeder Variablenname darf in einem Skript nur einmal vorkommen. Falls ihr in eurem Skript bereits Variablen mit den Namen deklariert habt, passt ihr einfach den Code oben an.

## ÜBUNG 3
### Ü 3.1 MINUS
Schreibt ein Skript, das auf eurer Seite in regelmäßigen Abständen zehn Rechtecke neben- oder untereinander zeichnet. Die Rechtecke sollen die Form eines Minuszeichen haben.

### Ü 3.2 MINUS MAL MINUS
Versucht, diese Seite nachzubauen.

[ToDoro: Bild einfügen]

Die Anzahl der Zeilen und Spalten ist euch überlassen.

### Ü 3.3 ERGIBT PLUS
Minus mal Minus ergibt Plus! Verwandelt mit einem weiteren for loop nun jedes Minus- in ein Pluszeichen. Probiert die Verwandlung zuerst an einem Minuszeichen aus. Dabei hilft es, den Orientierungspunkt des Rechtecks mit b.rectMode(CENTER) zu zentrieren.

#### oder

Schreibt alternativ einen for loop, der eure Pluszeichen nacheinander transformiert. Dreht sie, vergrößert sie, verkleinert sie, verwendet die Funktionen, die ihr schon kennt. Könnt ihr eine räumliche Wirkung erzeugen? Am Ende soll ein spannendes Muster entstehen. Wer Minuszeichen bevorzugt, kann dies auch mit Minuszeichen tun.

### Ü 3.4 HEADLINE
Gebt eurer Seite noch einen Namen, den ihr natürlich per Skript wie bei der letzten Übung auf der Seite platzieren lasst. Ändert diesmal mit b.textSize() und b.textFont() das Aussehen der Überschrift. Wie ihr genau die Funktionen anwendet, ist in der reference von basil.js erklärt.

[ToDo: Rest der Übungen rüberkopieren]