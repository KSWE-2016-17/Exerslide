---
title: HTML DOM "ng"
chapter: AngularJS
---

Um dynamisch Inhalte als Single Page Webanwendung nachladen zu können, besitzt AngularJS
umfangreiche Möglichkeiten die HTML DOM Struktur zu manipulieren.  

# Direktiven

AngularJS besitzt drei verschiedene Elemente um Einfluss auf die HTML Struktur und Ansicht 
zu nehmen:

## Komponenten

Komponente ist die wichtigste Anweisung. Diese wird standardmäßig zur Darstellung von
verschiedenen Seiten verwendet. Jede Komponente beinhaltet ein Template, in welchem der HTML
Code für die Seite enthalten ist. Diese Komponente enthält zudem zusätzlich eine moduleID, damit
die relativen Pfade für diese Komponente und deren Templates und Stylesheets korrekt aufgelöst
werden. Selector gibt an, dass mit Hilfe einer CSS-Selektor-Regel entschieden wird, wann diese Komponente
angewendet werden soll. Die Style URL verweist auf die zu verwendende CSS Datei für das
angegebene HTML Template.⁴  Nachfolgend ein Beispiel so einer Komponente:

```
@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: './views/hero-detail.component.html',
    styleUrls: ['./views/styles/hero-detail.component.css']
})
```
³
## Attribute

Es gibt die Möglichkeit verschiedene Attribute in HTML Tags einzubetten und somit Einfluss auf
die Darstellung zu nehmen. Zum Beispiel gibt es hier die Direktive "ng-show", welche das
entsprechende Element je nach Einstellung darstellt oder nicht²:

```
<p ng-show="true">wuppie fluppie</p>
<p ng-show="false">wird nicht angezeigt</p>
```

## Strukturelle Direktiven

Strukturelle Direktiven fügen dem DOM-Baum Elemente hinzu oder entfernen Sie. Ein Beispiel
hierfür ist die ngIf Direktive. Diese wird ebenfalls in ein HTML Tag eingebettet und kann weitere
Elemente an den DOM Baum anhängen.

```
<div *ngIf="currentHero">Hello, {{currentHero.firstName}}</div>
```
⁵

Es kann aber auch dazu verwendet werden, Die Anzeige bestimmter Elemente zu beschränken, 
sodass diese nur dargestellt werden, wenn eine Funktion einen bestimmten Wert zurückgibt:

```
<ion-content class="no-scroll" padding *ngIf="!auth.authenticated()">
```
Alle Elemente Innerhalb dieses ion-content Tags werden nur dargestellt, wenn die Funktion
authenticated() den Wert 'false' zurückgibt.

# Quellen

1. Angular.io Strukturelle Direktiven - https://angular.io/docs/ts/latest/guide/structural-directives.html
2. W3Schools HTML DOM Angular - http://www.w3schools.com/angular/angular_htmldom.asp
3. Angular 2 Tutorial - https://angular.io/docs/ts/latest/tutorial/
4. Stackoverflow ModuleID - http://stackoverflow.com/questions/37178192/angular2-what-is-the-meanings-of-module-id-in-component
5. Angular.io Ngif - https://angular.io/docs/ts/latest/guide/template-syntax.html#!#ngIf
