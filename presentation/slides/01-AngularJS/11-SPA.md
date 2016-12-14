---
title: Single Page Application SPA
chapter: AngularJS
---

Eine Single Page Webanwendung besteht lediglich aus einem HTML Dokument. Alle Inhalte werden
dynamisch nachgeladen, sodass die Seite nur beim Aufruf vollständig geladen werden muss. Es gibt
verschiedene Javascript Frameworks für Single Page Webanwendungen, darunter Aurelia.io,
Backbone.js und AngularJS. Zum besseren Verständnis folgt ein Sequenzdiagramm, welches den
Ablauf einer SPA anzeigt:
 <figure id="seq_SPA">
  <img src="./images/SPA_Start.png"/>
</figure>
¹

Wie in diesem Diagramm zu erkennen, lädt der Web-Client nur zu Beginn die index.html vom Web-
Server. Wurde diese Seite geladen, wird SPA erkannt und der Web-Client lädt weitere Inhalte vom
Web-Service nach. In diesem Beispiel werden Ajax Techniken verwendet. Es sind allerdings auch 
andere Techniken wie Browser Plugins, Java-Applets oder Adobe Flash sowie WebSockets. Der
Web-Service lädt die Daten von der Business-Logik und Persistenz und gibt diese an den Web-Client
zurück. Dieser aktualisiert daraufhin das DOM des HTML. Somit ist während der ganzen Laufzeit die
Seite nur einmal vollständig geladen worden. 

# Merkmale von SPAs

- Reduzierung der Client-Server-Kommunikation
- Reduzierung der Wartezeiten
- Präsentationsfluss im Client ununterbrochen
- offline-freundlich

Durch diese Merkmale sind SPA auch sehr benutzerfreundlich, da Sie das Gefühl von einer App
vermitteln, wie Sie jeder heutzutage vom Smartphone oder Tablet kennt.² Die Offline-Freundlichkeit
ermöglicht ebenfalls eine hohe Portierbarkeit, welche ebenfalls bereits auf die Verwendung auf
mobilen Endgeräten hindeutet. Zudem ist zu erkennen, dass eine Dezentralisierung vom Webserver
hin zu den Webclients stattfindet. Schließlich findet die Präsentation komplett auf dem Client statt
und es werden nur noch Daten vom Server nachgeladen. Hierzu wurden Regeln für die
Segmentierung von Webanwendungen in zwei getrennte Systeme (Server und Client) festgelegt:

# Regeln der Segmentierung

- Sitzungszustand wird in der Client-Applikation gespeichert, nicht im Server
- Webclient ist eine unabhängige Einheit und baut auf verschiedene Services auf
- Die verwendeten Services treffen keine Annahmen darüber, wie der Webclient die Dienste einsetzt

# Einsatzszenarien

Die Einsatzszenarien für Single Page Webanwendungen sind sehr vielseitig:

- Große Benutzerzahlen
- Offlineszenarien
- Kleine Projekte
- Hohe Interaktivität
- Web-Apps

Das typische Szenario sind hierbei der Einsatz bei großen Benutzerzahlen, da hierbei die Serverlast 
eine wichtige Rolle spielt. Bekannte Beispiele sind Facebook, Google Gmail, Google Maps und Twitter.³

# Quellen

1.  Sequenzdiagramm SPA - Wikipedia: https://de.wikipedia.org/wiki/Datei:SPA_Start.png 
2.  Overview - https://scotch.io/tutorials/single-page-apps-with-angularjs-routing-and-templating
3.  Single Page Webanwendung - Wikipedia: https://de.wikipedia.org/wiki/Single-page-Webanwendung#cite_note-1