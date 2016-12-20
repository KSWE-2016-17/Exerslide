---
title: ArgonJS
chapter: Augmented Reality
id: AR_ArgonJS
---

Javascript Framework um Augmented Reality Inhalte in Web Anwendungen darzustellen

## Beschreibung //TODO: kann wohl weg
Augmented reality (AR) ist eine Technik um computergenerierte Inhalte ( z.B. 3D / 2D Objekte) mit der eigenen Sicht zu kombinieren. Dabei ist es egal ob man eine neue AR Anwendung oder eine AR Sicht zu einer existierenden Webanwendung hinzufügen möchte, das argon.js Framework bietet eine Vielzahl an Abstraktionen und Werkzeugen um dies platformneutral zu ermöglichen.  

argon.js wurde zwar ursprünglich für den Argon iOS Browser entwickelt, da der Standardbrowser Safari gewisse HTML5 Standards nicht unterstützt, mittlerweile verbessert sich aber die AR Unterstützung in allen Browsern immer weiter.

Daher funktioniert argon.js auch mit anderen Browsern und schöpft deren Möglichkeiten AR Inhalte darzustellen so gut wie möglich aus.


## Was ist ArgonJS?
ArgonJS ist ein Javascript Framework für die Entwicklung von Augmented Reality (AR) Webanwendungen des AR Schwerpunkts des Georgia Institute of Technology. Dabei können mit den Standard Webtechnologien (HTML, CSS3, JavaScript, WebGL, usw.), AR Anwendungen erstellt werden, die 3D Grafiken über dem Kamerabild darstellen (//TODO besser formulieren) , es können geodatengestützt Ereignisse ausgelöst werden und durch Nutzung des Vuforia SDKs optische Mustererkennung in der Anwendung benutzt werden um zum Beispiel 3D Modelle auf eine vorher definierte Fläche zu legen. Das Design des Frameworks soll in Zukunft die Nutzung in allen standardkonformen Browsern gestatten, im Moment ist die Nutzung nur unter iOS mit dem zur Verfügung gestellten Argon Browser praktikabel, eine Android Version ist in Arbeit.

## Kernkonzepte
Es gibt 3 Kernabstaktionsschichten im ArgonJS Framework:

* Reality Augmentor - Bild der Realität erweitern
* Reality View - Realität darstellen
* Reality Manager - verwaltet die Erweiterung der Reality View mit ein oder mehreren Reality Augmentors

Die Entwickler des ArgonJS Frameworks gehen davon aus das (mobile) Browser in Zukunft reichthaltige Möglichkeiten bieten werden mit Augmented Reality Inhalten umzugehen, sodass beliebig der Kamerafeed, ein anderer Kamerafeed oder z.B. die Vogelperspektive des aktuellen Standortes mit AR Inhalten angereichert werden kann. 

###Bestandteile

* cesium.js - Cesium Entitäten beschreiben Platzierung von 3D Objekten auf der Erde
* three.js - Javascript 3D Bibliothek
