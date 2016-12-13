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
* HTC-VIVE (Valve&HTC)
* Sony VR (Sony)
* Occulus Rift

Technologien
* A-FRAME (Web-VR)
* React-VR (Web-VR)
* Carmel-VR (Web-Browser spezialisiert auf VR)

Entertainment
* Chernobyl-VR (Chernobyl über VR besuchen)
* Project Arena (VR-Sport Tennis-Spiel)

### 3. A-FRAME

#### 3.1 Was ist A-FRAME?

[A-Frame](https://aframe.io/) ist ein Web Framework um die Virtual Reality in den Webbrowser zu bringen. Es werden Desktop und mobile Plattformen unterstützt sowie VR-Brillen. A-Frame nutzt dafür HTML sowie das Entity-Component-System.

Durch das Entity-Component-System können Entities einfach eingefügt und in ihrem Verhalten und Aussehen verändert werden. Diese können um Components erweitert werden was zusätzliche Funktionalitäten ermöglicht. Dadurch können Entities viele verschiedene Eigenschaften besitzen die von anderen Components beigesteuert werden.

A-Frame ist aktuell in der Version 0.3.0 verfügbar und wird durch die Community stetig erweitert und gefördert.

Beilsiel:
~~~
<body>
  <a-scene>
    <a-box color="#6173F4" opacity="0.8" depth="2"></a-box>
    <a-sphere radius="2" src="texture.png" position="1 1 0"></a-sphere>
  </a-scene>
</body>
~~~

#### 3.2 An wen richtet sich A-FRAME?

A-Frame wird vom Mozilla-VR-Team entwickelt und richtet sich an die Web-Entwickler die mit dem Framework VR ins Web bringen sollen. Die sogenannten A-Frame Scenes können mittels DOM interaktiv manipuliert werden und funktionieren folglich wie bekannte Technologien der Web-Entwickler.

#### 3.3 Wie funktioniert A-FRAME?

A-Frame basiert auf [THREE.js](https://threejs.org/). Einer Cross-Browser Javascript API mit der man 3D Grafiken/Animationen
im Web Browser visualisieren kann. THREE.js basiert dabei auf WebGL.

A-Frame nutzt HTML um Szenerien zu visualisieren. Zusätzlich wird das Entity-Component-System
leicht über DOM nutzbar (s. 3.3.5).

##### 3.3.1 Konzept

A-Frame kann über die bekannten Wege initialisiert und in das eigene Projekt eingebunden werden.

Variante 1) Das JS-Script in der Minified-Version in seine HTML-Page einbetten.
Optional kann man das Script auch runterladen. Die offizielle Version kann hier
gefunden werden: [A-FRAME 0.3.2 min](https://aframe.io/releases/0.3.2/aframe.min.js)

Variante 2) Über NPM. `npm install --save aframe`

Stable Versions sind somit unter folgendem Link zu finden [A-FRAME npm](https://www.npmjs.com/package/aframe)

Im Source Code nun das Modul einbinden.

`require('aframe');`


A-FRAME ist nun initialisiert.

##### 3.3.2 Erste A-Scene: Nur HTML

**Szene**

A-FRAME Objekte werden erst sichtbar wenn sie einer Szene inneliegen.

```html
<a-scene></a-scene>
```

Innerhalb dieser Szene können nun Objekte eingefügt werden. Die VR ist ein
klassischer 3D-Raum in dem ihr über die X,Y,Z Koordinaten Objekte einfügen könnt.

Die Szene bildet dabei ein eigenes Entity ab. Folglich kann die Scene über Attribute manipuliert werden wie die folgenden Entities.

Mehr zur [A-Scene](https://aframe.io/docs/0.3.0/core/scene.html)

**Box-Model**

Fügen wir nun ein Objekt ein um die Szene nicht leer zu lassen.

```html
<a-scene>
  <a-box color="#6173F4" width="4" height="10" depth="2"></a-box>
</a-scene>
```

Eine Box ist wie der Name schon angibt ein 3D Rechteck. Über die HTML-Attribute kann man der Box Eigenschaften zutragen. Farbe, Form, Sichtbarkeit, je nachdem
welche Funktionen man von A-FRAME selber oder Fremd-Plugins nutzen möchte.

`width, height, depth` geben beispielsweise die Maße in Breite, Höhe, Tiefe an.

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
<a-sky color="#73F7DD"></a-sky>```

Über den Asset-Manager können Bilder geladen werden.

```html
<a-sky src="Asset-ID"></a-sky>```

Als letztes fügen wir einen Himmel unserer Szene hinzu. Bei der Auswahl des Bildes sollte darauf geachtet werden, dass das Bild über die gesamte Szene gespannt wird. Es wird also wie um eine Kugel gewickelt. Folglich sind Bilder mit schwarzen Rändern, in niedriger Auflösung, oder mit zu deutlichen Motiven unvorteilhaft da die Ränder des Bildes zu deutlich werden.

Mehr zu [Sky](https://aframe.io/docs/0.3.0/primitives/a-sky.html)


##### 3.3.3 Interaktion mit Objekten

##### 3.3.4 Asset-Management-System

##### 3.3.5 Entity-Component-System

##### 3.3.6 Wichtige/Nützliche Components

##### 3.4 Ausblick

##### 3.4 Ausblick
