---
title: Overview
chapter: A-Frame
---
## Projekt: [MyMemorySpace](https://github.com/oxanaZh/MyMemorySpace.git)
### Über das Projekt

## Dokumentation: A-FRAME

### 1. Was ist VirtualReality?

VirtualReality ist eine computer generierte interaktive Umwelt die der Nutzer
wahrnehmen, erforschen und mit der er interagieren kann. Die künstliche Umwelt
wird lebendiger, je besser die Sinne des Nutzers stimuliert werden. Das Gefühl
der Immersion ist am stärksten wenn alle Sinne angesprochen werden.
Sehen, Fühlen, Hören, Schmecken, Riechen. Zumindest die ersten 3 Sinne sind die
Sinne die am stärksten fokussiert werden.

Die gängige Technik der heutigen VR-Headsets sind 2 gekrümmte Linsen die einen
Bildschirm vergrößern und verzerren. Auf diese Weise erhalten die beiden Augen
unterschiedliche Bilder, das Blickfeld wird gefüllt und das Gefühl eines echten
virtuellen Raums entsteht.

Der Begriff der VR hat besonders in den letzten Jahren wieder stark zugenommen.
Durch die verbesserte Computertechnik ist VR ein interessantes Gadget für die
Entertainment-Industrie, in besonderer Hinsicht der Spieleindustrie.
Namhafte Entwickler wie HTC, Sony oder Samsung investieren in eigene Headsets und feierten
ihre Debüts vor kurzer Zeit.

Dabei können einige Headsets mittels zusätzlicher Technologie eine Person in einem
kleinen Raum orten und diese dann innerhalb von Spielen verarbeiten.

### 2. Beispiele
Headsets
* [HTC-VIVE (Valve&HTC)](https://www.vive.com/de/)
* [Sony VR (Sony)](https://www.playstation.com/de-de/explore/playstation-vr/)
* [Oculus Rift](https://www3.oculus.com/en-us/rift/)

Technologien
* [A-FRAME (Web-VR)](https://aframe.io)
* [React-VR (Web-VR)](https://developer.oculus.com/blog/introducing-the-react-vr-pre-release/)
* [Carmel-VR (Web-Browser spezialisiert auf VR)](https://developer.oculus.com/blog/carmel-developer-preview-launches-today/)

Entertainment
* [Chernobyl-VR (Chernobyl über VR besuchen)](http://www.chernobylvrproject.com/en/)
* [Project Arena (VR-Sport Tennis-Spiel)](https://www.youtube.com/watch?v=SIfGuPW_mMs)

### 3. A-FRAME

#### 3.1 Was ist A-FRAME?

[A-Frame](https://aframe.io/) ist ein Web Framework um die Virtual Reality in den Webbrowser zu bringen. Es werden Desktop und mobile Plattformen unterstützt sowie VR-Brillen. A-Frame nutzt dafür HTML sowie das Entity-Component-System.

Durch das Entity-Component-System können Entities einfach eingefügt und in ihrem Verhalten und Aussehen verändert werden. Diese können um Components erweitert werden was zusätzliche Funktionalitäten ermöglicht. Dadurch können Entities viele verschiedene Eigenschaften besitzen die von anderen Components beigesteuert werden.

A-Frame ist aktuell in der Version 0.3.0 verfügbar und wird durch die Community stetig erweitert und gefördert.

A-Frame Code Beispiel:
```html
<body>
  <a-scene>
    <a-box color="#6173F4" opacity="0.8" depth="2"></a-box>
    <a-sphere radius="2" src="texture.png" position="1 1 0"></a-sphere>
  </a-scene>
</body>
```

#### 3.2 An wen richtet sich A-FRAME?

A-Frame wird vom Mozilla-VR-Team entwickelt und richtet sich an die Web-Entwickler die mit dem Framework VR ins Web bringen sollen. Die sogenannten A-Frame Scenes können mittels DOM interaktiv manipuliert werden und funktionieren folglich wie bekannte Technologien der Web-Entwickler.

#### 3.3 Wie funktioniert A-FRAME?

A-Frame basiert auf [THREE.js](https://threejs.org/). Einer Cross-Browser Javascript API mit der man 3D Grafiken/Animationen
im Web Browser visualisieren kann. THREE.js basiert dabei auf [WebGL](https://www.khronos.org/webgl/).

A-Frame nutzt HTML um Szenerien zu visualisieren. Zusätzlich wird das Entity-Component-System
leicht über DOM nutzbar ([s. 3.3.1](/#3.3.1 Entity-Component-System)).
##### 3.3.1 Entity-Component-System

A-FRAME basiert auf dem [Entity-Component-System Design-Pattern](https://en.wikipedia.org/wiki/Entity%E2%80%93component%E2%80%93system).

Das Entity-Component-System Pattern wird häufig in der Spieleentwicklung genutzt. Durch das Pattern wird eine hohe Flexbilität ermöglicht. Jedes existierende Objekt in der (Spiel-)Welt ist ein Entity. Ihr Verhalten wird durch die Components bestimmt. Dabei kann ein Entity beliebige viele Components halten und so in seinem Verhalten und Aktionen definiert werden. Dies ermöglicht Änderungen des Verhaltens des Objekts **während der Laufzeit**, indem man Components entfernt oder neue Components hinzufügt (ähnlich wie bei Strategie Pattern).

Durch das Nutzen des Patterns entfällt die strikte hierarchische Struktur der Vererbung, die komplexer wird, je mehr Verhaltensmuster eingefügt werden müssten.

Folglich basiert das ECS-Pattern sehr stark auf dem "Composition over Inheritance" Prinzip.

Das ["Composition over Inheritance"](https://en.wikipedia.org/wiki/Composition_over_inheritance) Prinzip ist ein Prinzip aus der OOP. Ziel ist es, Klassen ein Polymorphisches Verhalten, mit Code Wiederverwendung, beizubringen indem Klassen in ihrem Verhalten durch Objekte definiert werden die sie von anderen Klassen erzeugen und beinhalten/tragen (Composition). Diese Objekte bestimmen dann das Verhalten.
Die ungewünschte Alternative wäre es, das Verhalten durch Vererbung zu definieren (Inheritance).

<figure id="imgCompOverInher">
  <img src="./images/comp.png"/>
</figure>

Folglich der Begriff des "Composition over Inheritance".

Der Vorteil ist also dass wenn wir ein Entity um Verhalten erweitern möchten, wir nicht eine weitere Vererbungshierarchie hinzufügen müssen. Ebenso können leicht Verhaltensmuster erzeugt werden, die dann von allen Entitites benutzt werden können.

##### 3.3.2 A-Frame einbinden

A-Frame kann über die folgenden Wege initialisiert und in das eigene Projekt eingebunden werden.

- **Variante 1:** Das JS-Script in der Minified-Version in seine HTML-Page einbetten: `<script src="https://aframe.io/releases/0.3.2/aframe.min.js"> </script>`
- Optional kann man das Script auch runterladen. Die offizielle Version kann hier
gefunden werden: [A-FRAME 0.3.2 min](https://aframe.io/releases/0.3.2/aframe.min.js)

- **Variante 2:** Über NPM. `npm install --save aframe`

Stable Versions sind somit unter folgendem Link zu finden [A-FRAME npm](https://www.npmjs.com/package/aframe)

Im Source Code nun das Modul einbinden.

`require('aframe');`


A-FRAME ist nun initialisiert.

##### 3.3.3 Erste A-Scene: Nur HTML

**Szene**

A-FRAME Objekte werden erst sichtbar wenn sie einer Szene inneliegen.

```html
<a-scene></a-scene>
```

Innerhalb dieser Szene können nun Objekte eingefügt werden. Die VR ist ein
klassischer 3D-Raum in dem ihr über die X,Y,Z Koordinaten Objekte einfügen könnt.

Die Kooredinatensystem in A-Frame sieht folglih aus:
<figure id="imgCompOverInher">
  <img src="./images/Coordinates.png"/>
</figure>

Die Szene bildet dabei ein eigenes Entity ab. Folglich kann die Scene über Attribute manipuliert werden wie die folgenden Entities.

Mehr zur [A-Scene](https://aframe.io/docs/0.3.0/core/scene.html)

**Box-Model**

Fügen wir nun ein Entity ein um die Szene nicht leer zu lassen.

```html
<a-scene>
  <a-box color="#6173F4" width="4" height="10" depth="2"></a-box>
</a-scene>
```

Eine Box ist wie der Name schon angibt ein 3D Rechteck. Es ist ein Entity dass den Ursprungs-Entity in seiner Geometrie bereits beschreibt (`geometry="primitive: box;`).

_Entity_

Entities bieten die Möglichkeit Components dynamisch einzubinden.

Um die Eigenschaften und Methoden eines Entities zu lesen muss man nur mittels DOM-Parser das HTML-Element aufrufen.

```html
<a-entity id="mario"></a-entity>
```

```javascript
var el = document.querySelector('#mario');
```
<hr>
Eigenschaften eines `Entity` (**Auswahl**)

_components_ `<a-entity>.components` ist ein Objekt aus Components dass dem Entity anhängt.
Damit kann auf alle Components eines Entities zugegriffen werden (Eigenschaften, Methoden).

```javascript
//Material-Object aulesen
var material = document.querySelector('a-entity[material]').components.material.material;
```

```javascript
// Methode des Component-Sound aufrufen
document.querySelector('a-entity[sound]').components.sound.pause();
```

[Mehr zu den Eigenschaften eines A-FRAME Entity](https://aframe.io/docs/0.3.0/core/entity.html#properties)

<hr>
Methoden eines `Entity` (**Auswahl**)

_getAttribute(attr)_ Attribut eines Components einer Entity lesen
```javascript
// <a-entity geometry="primitive: box; width: 3">
entity.getAttribute('geometry');
// >> { primitive: "box", width: 3 }


// <a-entity data-position="0 1 1">
entity.getAttribute('data-position');
// >> "0 1 1"
```

_setAttribute(attr)_ Component einer Entity zuweisen
```javascript
entity.setAttribute('visible', false);
```

<hr>
Event-Listener eines `Entity`

Entities können über einen Eventlistener auf Änderungen ihrer Components reagieren.

```javascript
entity.addEventListener('componentchanged', function (evt) {
  if (evt.detail.name === 'position') {
    console.log('Entity has moved from', evt.detail.oldData, 'to', evt.detail.newData, '!');
  }
});
```

Ebenfalls kann auf neu angeängte Entities reagiert werden.

```javascript
entity.addEventListener('child-attached', function (evt) {
  if (evt.detail.el.tagName.toLowerCase() === 'a-box') {
    console.log('a box element has been attached');
  };
});
```

<hr>

**Attribute**

Über die HTML-Attribute kann man der Box Eigenschaften (Components) zutragen. Farbe, Form, Sichtbarkeit, je nachdem
welche Funktionen man von A-FRAME selber oder Fremd-Plugins nutzen möchte.

`width, height, depth` geben beispielsweise die Maße in Breite (x-Achse), Höhe(y-Achse), Tiefe(z-Achse) an.

Weitere wichtige Attribute sind beispielsweise

* Position `position="3 2 5"`
* Rotation `rotation="90 0 45"`
* Color    `color="#FFFFFF"`

**Animation**

Die Box kann nun in seinem Verhalten verändert werden. Beispielsweise können wir die Box animieren, zum Beispiel in der Farbe.

```html
<a-box width="4" height="10" depth="2">
  <a-animation attribute="material.color" from="white" to="red" dur="1000"></a-animation>
</a-box>
```

Die Box erhält als Child ein Entity dass vom A-FRAME Typ `animation` ist. Mittels `animation` lassen sich Entities in ihrem Verhalten animieren.

Die Animationen sind nützlich für vordefinierte Szenerien bei denen mehr Bewegung in die Szene kommen soll.

Mehr zu [Animationen](https://aframe.io/docs/0.3.0/core/animations.html)

**Licht**

Als nächstes kann die Szene beleuchtet werden. Eine Szene ist zu Beginn immer beleuchtet, nach hinzufügen von Lichtern werden die Start-Lichter jedoch entfernt.

Lichter lassen sich wie normale Entities hinzufügen.

```html
<a-light type="point" color="#AAA" position="0 5 0"></a-light>
```

Dabei hält ein Licht je nach Typ verschiedene Attribute. Je nach Typ können oder
können nicht Position, Richtung, Intensität, Farbe, usw. übergeben werden.

Der Typ legt folglich die Art des Lichtes fest.

Es gibt folgende Typen:

* Ambient
  - wirken global
  - besitzen keine Positions, Rotations und Skalierungswerte
  - sind unverzichtbar da ohne Ambient Light die Szene schnell zu dunkel wird
* Directional (wie: Sonne)
* Hemisphere
  - wie *Ambient* aber mit 2 Farben
  - Licht von oben und unten
* Point (wie: Glühbirne)
* Spot (wie: Scheinwerfer)
  - werfen Licht in eine Richtung

Mehr zu [Licht](https://aframe.io/docs/0.3.0/components/light.html)

**Himmel**

```html
<a-sky color="#73F7DD"></a-sky>
```

Über den Asset-Manager können Bilder geladen werden.

```html
<a-sky src="Asset-ID"></a-sky>
```

Als letztes fügen wir einen Himmel unserer Szene hinzu. Bei der Auswahl des Bildes sollte darauf geachtet werden, dass das Bild über die gesamte Szene gespannt wird. Es wird also wie um eine Kugel gewickelt. Folglich sind Bilder mit schwarzen Rändern, in niedriger Auflösung, oder mit zu deutlichen Motiven unvorteilhaft da die Ränder des Bildes zu deutlich werden.

Mehr zu [Sky](https://aframe.io/docs/0.3.0/primitives/a-sky.html)


##### 3.3.4 Interaktion mit Objekten

##### 3.3.5 Asset-Management-System

##### 3.3.6 Wichtige/Nützliche Components

##### 3.4 Ausblick

##### 3.4 Ausblick
