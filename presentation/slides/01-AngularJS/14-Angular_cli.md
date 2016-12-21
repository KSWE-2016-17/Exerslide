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
Projektordner mit 'serve' gestartet werden. Alternativ kann auch 'npm start' verwendet werden. Wurde das Projekt gestartet wird dieses kompiliert und 
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

# Projektaufbau

Beim erstellen unseres Projekts sieht unser Projektordner folgendermaßen aus. Im großen und ganzen finden wir uns
bekannte Dateien wieder. Das Herz unseres Programm ist der "app"-Ordner.

```
NameUnseresProjekts
|-app
|  |-app.component.ts
|  |-app.module.ts
|  |-main.ts
|-node_modules ...
|-index.html
|-package.json
|-styles.css
|-systemjs.config.js
|-tsconfig.json
```

In "app.module.ts" importieren wir alle anderen Komponente unserer App und deklarieren diese, damit wir sie von unseren
anderen Komponenten ansprechen können.
In der "app.component.ts" dekarieren wir unser Routing, also unsere Navigation.
Wenn wir also neue Komponente für unser Projekt erstellen, müssen wir diese im "app.module.ts" hinzufügen, deklarieren
und im Routing eintragen, damit wir diese Seite aufrufen können.

Für jede neuerstellte Komponente werden neben Typescript auch eine CSS und HTML Datei erstellt. Die HTML und CSS dienen
dem visuellen Teil der Kompomente. In der Typescript finden wir zum einen die Logik für Angular wieder und zum anderen
kann man dort nach gewohnter Art programmieren. Eigene Variablen, Methoden, etc.

Der Grundaufbau der Typescript jeder neu erstellen Komponente sieht folgendermaßen aus:

```
import { Injectable } from '@angular/core';

@Injectable()
export class nameDerKlasse {

    // gewohnter Programmcode
    // Konstruktoren, Variablen, Methoden,...

}
```

"nameDerKlasse" wäre das was wir in der "app.module.ts" importieren würden. Nach der Klasse, welcher diesen Namen
exportiert, wird unser Programm suchen³.

# Beispiele: HTML mit Typescript benutzen

```
<div (click)="methodenNameImTypescript(ParameterÜbergabe)"></div>
```

In kompatiblen HTML Tags kann man mit "(click)" (mit den Klammern herum!) Funktionen des Typescripts einbinden. Wenn
man nun auf dieses HTML-Okjebt klickt, wird die dazugehörige Funktion ausgeführt.

```
<li *ngFor="let link of links">
  <span class="badge">{{link.id}}</span> {{link.name}}
</li>
```

Für dieses Beispiel nehmen wir an, wir haben ein Array namens "links" in der gleichnamigen Typescript Datei. "*ngFor" ist
eine foreach Schleife. Für jedes Objekt im Array "links" wird bis zum schließenden Tag der HTML Bereich generiert. In
diesem Fall haben wir mit dem Befehl "li" eine Aufzählung. Mit "{{link.id}}" können wir die Attribute unseres Objekts
anzeigen lassen, in diesem Fall hat unser Objekt eine ID und einen Namen. Mit diesem Code erzeugen wir also eine
Aufzählung aller unserer Objekte und lassen uns beim durchgehen der Objekte je die ID und den Namen anzeigen.

Features wie Routing und Services sind später ebenfalls weitere Typescript Dateien im "app"-Ordner.

# Quellen

1. Scotch.io - https://scotch.io/tutorials/use-the-angular-cli-for-faster-angular-2-projects
2. Angular-CLI Git - https://github.com/angular/angular-cli
3. Angular Hauseigene Tutorials - https://angular.io/docs/ts/latest/tutorial/