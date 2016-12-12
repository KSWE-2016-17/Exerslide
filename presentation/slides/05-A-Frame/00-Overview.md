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

##### 3.3.2 Erste A-Scene: Nur HTML

##### 3.3.3 Interaktion mit Objekten

##### 3.3.4 Asset-Management-System

##### 3.3.5 Entity-Component-System

##### 3.3.6 Wichtige/Nützliche Components

#### 3.4 Ausblick
