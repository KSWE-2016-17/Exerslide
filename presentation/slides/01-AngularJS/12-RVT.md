---
title: RouterViewTemplates
chapter: AngularJS
---

Um in AngularJS zwischen verschiedenen Seiten navigieren zu können gibt es Routen, Views und 
sogenannte Templates. Im nachfolgenden werden die Begriffe und deren Zusammenhänge erläutert.

# Routen und Views

Zum besseren Verständnis ist es wichtig den Aufbau einer AngularJS Anwendungs URL zu kennen.

Beispiel: http://angular-ui.github.io/ui-router/sample/#/contacts

Der Teil bis ".io" bezeichnet die Adresse des Servers. Der Teil nach ".io" bis zum \# bezeichnet den
Pfad auf dem Server, welcher die html liefert. Der Teil nach dem \# ist die Route und gleichzeitig der
View. Denn jede Route bezeichnet einen View. So könnte anstatt "\#/contacts" "\#/home" auf die 
Home Seite verweisen. Somit können verschiedene Inhalte unter einer html angezeigt werden.
Die Tatsache, dass diese unterschiedliche Ansichten auch in der URL sichtbar sind ermöglichen auch 
die Benutzung der Vorwärts / zurück Buttons im Browser. Ändert sich der Teil der URL vor dem
Hashtag, wird die Seite neu geladen (neues html).¹

Zum Routen stellt AngularJS das Modul "ng-route" bereit, allerdings kann man damit nur eine
einzige ng-View Direktive pro Seite angeben. Einen besseren Funktionsumfang liefert der UI-Router
vom Angular-UI Projekt.²

# Templates

Eine AngularJS Anwendung besitzt eine index.html, welche aber nicht den kompletten html Inhalt
enthält. Für jede Seite gibt es im Normalfall eine weitere HTML Datei, welche dann durch die Views
geladen werden. Diese Dateien nennt man Templates. Diese Templates können entweder verlinkt
(Angabe der TemplateURL) oder direkt in den Javascript Code eingefügt werden (template : ).
Hierbei sind gewisse Ähnlichkeiten mit dem Aufbau der Pages unter Ionic 2 zu sehen, da dort diese
Templates auch zum Einsatz kommen.³


# Quellen

1. Routes and Views - https://www.linkedin.com/pulse/routes-views-single-page-apps-nishant-singh
2. AngularJS - Wikipedia: https://de.wikipedia.org/wiki/AngularJS#Routen_in_Single-Page-Applikationen
3. AngularJS Tutorial - template: https://angularjs.de/artikel/angularjs-tutorial-deutsch
    W3School - Angular Routing: http://www.w3schools.com/angular/angular_routing.asp