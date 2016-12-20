---
title: Angular CLI
chapter: AngularJS
---

Die offiziele Angular 2 CLI befindet sich momentan noch in der Beta Phase.  Um Sie verwenden zu
können muss man diese mit npm global installieren. Der Paketname lautet "angular-cli":

```
sudo npm install -g angular-cli
```

Um sie zu verwenden muss immer die Abkürzung ng + [BEFEHL] verwendet werden. Der Befehl 'help'
gibt eine Übersicht des Funktionsumfangs der CLI aus.

# Projekt erstellen

Der Befehl 'new' + PROJEKTNAME erstellt ein neues Angular 2 Projekt und installiert mittels npm die entsprechenden
Abhängigkeiten. Zu beachten ist hierbei, dass man den gewünschten Pfad für das Projekt mit angibt.
Hierdurch erleichtert es enorm den Einstieg in Angular, da die manuelle Ersteinrichtung eines Projekts sehr viel Zeit in Anspruch nehmen würde und gerade für Anfänger 
aufgrund der komplexen Struktur schwer zu durchschauen ist¹. Das Projekt kann dann in dem 
Projektordner mit 'serve' gestartet werden. Wurde das Projekt gestartet wird dieses kompiliert und 
ausgeführt. Die Webanwendung ist nun unter [localhost:4200](http://localhost:4200/) erreichbar.
Führt man Änderungen am Sourcecode durch, werden diese nach abspeichern automatisch erkannt
 und die Anwendung neu geladen. 

# Komponenten erstellen

```
ng g component componentname
```

Der Befehl 'g' steht für die Kurzform von generate und kann verschiedene Elemente von Angular
erzeugen. Gefolgt von 'g' wird das zu erzeugende Element und dessen zu vergebenden Namen
angegeben.²

# Quellen

1. Scotch.io - https://scotch.io/tutorials/use-the-angular-cli-for-faster-angular-2-projects
2. Angular-CLI Git - https://github.com/angular/angular-cli