---
title: Einführung in Webkomponenten und Polymer
---
## 0. Gliederung
- 1. Webkomponenten
- 1.1. Geschichtliche Entwicklung
- 1.2. Wofür brauchen wir Webkomponenten?
- 1.3. Was sind Webkomponenten?
- 1.4. Wie sind Webkomponenten aufgebaut?
- 1.4.1. Templates
- 1.4.2. Shadow DOM
- 1.4.3. Custom Elements
- 1.4.4. Packaging
- 2. Polymer
- 2.1. Was hat Polymer mit Webkomponenten zu tun?
- 2.2. Installation Polymer
- 2.3. Benutze Elements
- 2.4. Erstelle Elements
- 2.4.1. Definiere Elements
- 2.4.2. Polymer & DOM
- 2.4.3. Events
- 2.4.4. Data-Binding
- 2.5. Polymer Element Catalog
- 2.5.1. App Elements
- 2.5.2. Iron Elements
- 2.5.3. Paper Elements
- 2.5.4. Google Web Components
- 2.5.5. Gold Elements
- 2.5.6. Neon Elements
- 2.5.7. Platinum Elements
- 2.5.8. Molecules
- 3. Anhang/Literaturverzeichnis
## 1. Webkomponenten
### 1.1. Geschichtliche Entwicklung
Die Entwicklung von Webkomponenten hat geschichtlich bereits mit der Einführung von Widgets begonnen. Webkomponenten folgen der gleichen Idee des Zusammenfassens von Funktionalitäten. 
Die Geschichte der Webkomponents selbst beginnt mit ihrer Vorstellung in 2011 und ihrer Aufnahme in den W3C Standard 2012. Im Moment ist die Umsetzung ihrer Unterstützung noch nicht flächendeckend in der neusten Browsergeneration umgesetzt. Polyfill-Skripte übernehmen die Rückwärtskompatibilität, so dass Webkomponenten, die diese nutzen, ohne Bedenken eingesetzt werden können. 
### 1.2. Wofür brauchen wir Webkomponenten?
Webkomponenten erfüllen die gleichen Funktionen wie Widgets an der Oberfläche. Besonders ist, das sie die Komponentenbasierte Softwareentwicklung in das Medium des World Wide Webs bringen. Dieser klein wirkende Neuerung ist für den Nutzer nur schwer zu erkennen aber bringt deutliche Änderungen für den Entwickler. 
Webkomponenten erlauben die Abkapselung von HTML-Elementen, z.B. so dass CSS Formatierungen diese nicht beeinflussen, ohne die Möglichkeit der Kommunikation zwischen verschiedenen Elementen der Seite zu stören. 
### 1.3. Was sind Webkomponenten?
Wiederverwendbare Widgets beschreibt Webkomponenten am Kürzesten. 
### 1.4. Wie sind Webkomponenten aufgebaut?
Wenn über Webkomponenten gesprochen wird ist das eigentliche Thema 4 verschiedene W3C Standards. Diese stellen die Grundlagen für Webkomponenten zur Verfügung.
#### 1.4.1. Templates
Templates erlauben dem Entwickler inaktive Unterbäume im DOM anzulegen. Diese werden erst zu einem späteren Zeitpunkt gefüllt. Diese Technik ist bereits seit langem bekannt durch andere Umsetzungen.
< div>< div>Bild</div ></div > 
In dem vereinfachten Beispiel oben wird das Bild abgekapselt, doch der Browser wird es trotzdem laden.
< script>< div>Bild</div> </script > 
In diesem Beispiel ist das Bild ebenfalls abgekapselt und es wird erst geladen wen es aufgerufen wird, doch wird es dabei zu einem DOM-Element umgewandelt, was zu Verwundbarkeiten zwischen mehreren Seiten führen kann.
 < template>< div>Bild</div ></template > 
Das Template erlaubt die Abkapselung ohne die oben genannten Probleme.
#### 1.4.2. Shadow DOM
Shadow DOM bezeichnet eine Funktionalität, die die Web-Browser Entwickler den Web-Site Entwicklern zur Verfügung stellen. In Theorie jedes Element einer Seite muss einzeln definiert und programmiert werden. 
< input id="foo" type="range" >
Dies ist die vereinfachte Einbindung eines Sliders auf einer Seite. Der Slider müsste jedoch um dargestellt zu werden in einem < iframe > verpackt werden, genauso wie das Bedienelement, welches der Nutzer  auf dem Slider hin und her bewegen kann. Diese definiert der Entwickler der Seite jedoch nicht - obwohl er das müsste.
Shadow DOM ist das Einbinden eines untergeordneten DOM in den von der Seite definierten DOM um dem Seiten Entwickler Arbeit abzunehmen.
#### 1.4.3. Custom Elements
Der Standard der "Custom Elements" definiert die Vorgehensweise benutzer- (bzw. in diesem Fall eher /entwickler-)definierte Elemente zu erstellen. Ein vereinfachtes Beispiel für ein solches Element könnte "<katze>" sein, das ein katzenthematisches Icon einfügt. Was genau das Element tut wird vom Entwickler spezifiziert.
#### 1.4.4. Packaging
Auch als "HTML Imports" bezeichnet. 
Dieser Standard befasst sich mit dem Importieren von HTML-Dokumenten in andere HTML-Dokumente. Dies erlaubt die Einbindung von bestehendem Code in neue Seiten ohne den Code duplizieren zu müssen.
## 2. Polymer
### 2.1. Was hat Polymer mit Webkomponenten zu tun?
Polymer ist eine Bibliothek von Webkomponenten, die von Google gegründet wurde. Es stellt Entwicklern sowohl fertige Komponenten in einer plug-and-play-ähnlichen Variante zur Verfügung als auch eine Unterstützung für den Entwickler beim Anlegen der Seiten und der grundlegenden Seitenstrukturen.
 Des weiteren können selbst Webkomponenten entwickelt und zur weiteren Nutzung registriert werden.
### 2.2. Installation Polymer
Um die Implementation eines Polymerprojekts zu beginnen, muss sichergestellt sein dass:
 -  Git <https://git-scm.com/>  
 - Node.js <https://nodejs.org/en/>
 - Bower <http://bower.io/>
 
installiert ist.
Dies sind die Shell-Befehle für Debian-artige Linux Systeme:
```
sudo apt-get install git-all
curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash - sudo apt-get install -y nodejs
npm install -g bower
```
Als nächstes erstellt man sein Projektverzeichnis und wechselt in dieses.
Mit:
```
bower init
```
initialisiert man das Projekt dies ist wichtig um die späteren Abhängigkeiten einfach zu lösen.
    
Mit:
```
bower install --save Polyemer/polymer#^1.7.1
```
wird die Polymerversion 1.7.1 heruntergeladen und installiert. Je nach aktueller stabiler Version kann dieses angepasst werden.
    
Wenn alles funktioniert hat sollte nun in der Ordnerstruktur ```bower_components/polymer/``` auftauchen 
hier werden die später eingesetzten Polymer Komponenten auftauchen.
Eine weitere Hilfe kann das Polymer Command Line Interface sein. Dieses stellt neben einem linter, einem development server, einer Testumgebung, eine build-pipeline und einen boilerplate-generator zum erstellen von Elements und Apps in Polymer zu Verfügung.
```
npm install -g polymer-cli
```
### 2.3. Benutze Elements
Zum Einbinden von Polymer Elementen in eine neue Applikation muss man das betreffende Element erst herunterladen und in die Applikation einbinden. 
Mit:
```
bower install --save PolymerElements/iron-elements
bower install --save PolymerElements/paper-elements
```
installieren wir die von Polymer bereitgestellten Iron- bzw. Paper-Elements. Weitere Elements nach dem bekannten Muster.
Im HTML Dokument können wir diese dann je nach Bedarf importieren
```
<link href="bower_components/paper-toolbar/paper-toolbar.html" rel="import">
```
und mit HTML-Tags aufrufen.
```
<paper-toolbar>
    <div class="title">My Toolbar</div>
</paper-toolbar>
```
### 2.4. Erstelle Elements
Eine der Hauptaufgaben von Polymer ist es neue wiederverwendbare Webkomponenten, auch Elements genannt zu erstellen.
#### 2.4.1. Definiere Elements
Um ein neues Element zu registrieren nutzen wir die <B>Polymer</B> Funktion und übergeben einen Prototypen unseres neuen Elements. Dieses muss die <B>is</B> property besitzen, den späteren HTML tagname spezifiziert.
 Konvention ist das der Elementname ein dash <B>(-)</B> enthält.
 
```
    // register an element
    MyElement = Polymer({
      is: 'my-element',
      // See below for lifecycle callbacks
      created: function() {
        this.textContent = 'My element!';
      }
    });
    // create an instance with createElement:
    var el1 = document.createElement('my-element');
    // ... or with the constructor:
    var el2 = new MyElement();
```
<sup>Quelle:www.polymer-project.org</sup> 

Die Polymer Funktion gibt einen simplen Konstruktor zurück der das Element instanziiert. Wenn wir diesem Argumente 
übergeben wollen, können wir eine eigene <B>factoryImpl </B> im Prototypen implementieren.
```
    MyElement = Polymer({
    
          is: 'my-element',
    
          factoryImpl: function(foo, bar) {
            this.foo = foo;
            this.configureWithBar(bar);
          },
    
          configureWithBar: function(bar) {
            ...
          }
    
        });
    
        var el = new MyElement(42, 'octopus');
```
<sup>Quelle:www.polymer-project.org</sup> 

Polymer unterstützt "extending native HTML elements" wie **input** oder **button**, dafür nutzen wir das **extends** 
property im Prototypen. 
```
        MyInput = Polymer({
    
          is: 'my-input',
    
          extends: 'input',
    
          created: function() {
            this.style.border = '1px solid red';
          }
    
        });
    
        var el1 = new MyInput();
        console.log(el1 instanceof HTMLInputElement); // true
    
        var el2 = document.createElement('input', 'my-input');
        console.log(el2 instanceof HTMLInputElement); // true
        
        <input is="my-input">
```
<sup>Quelle:www.polymer-project.org</sup>
 
Das Element kann direkt im Haupt-HTML-Dokument definiert werden. Die Funktion 
**HTMLImports.whenReady(callback). callback** lädt das Element nach dem alle Importe abgeschlossen sind.
Es ist Empfehlenswert die Definition in einer gesonderten Datei vorzunehmen und in das Dokument zu importieren.
```
 <!DOCTYPE html>
     <html>
       <head>
         <script src="bower_components/webcomponentsjs/webcomponents-lite.js">
         </script>
         <link rel="import" href="bower_components/polymer/polymer.html">
         <title>Defining a Polymer Element from the Main Document</title>
       </head>
       <body>
         <dom-module id="main-document-element">
           <template>
             <p>
               Hi! I'm a Polymer element that was defined in the
               main document!
             </p>
           </template>
           <script>
             HTMLImports.whenReady(function () {
               Polymer({
                 is: 'main-document-element'
               });
             });
           </script>
         </dom-module>
         <main-document-element></main-document-element>
       </body>
     </html>
```
<sup>Quelle:www.polymer-project.org</sup>
 
Polymer nutzt folgende "lifecycle callback" Funktionen:
| Funktion | Erklärung |
| - | - |
| **created** | Wird nur einmal aufgerufen nachdem das Element erstellt wurde und bevor "property values" gesetzt wurde bzw. die lokale DOM initialisiert wurde |
| **ready** | Wird nur einmal aufgerufen nachdem "property values" gesetzt wurdnen und die lokale DOM initialisiert wurde |  
| **attached** | Wird genutzt nachdem ein Element dem Dokument hinzugefügt wurde. Kann mehrfach aufgerufen werden, beim ersten mal erst nach dem das Element "ready" ist. | 
| **detached** | Wie **attached**, allerdings wenn es vom Dokument entfernt wurde. |
| **attributeChanged** | Wird aufgerufen wenn sich ein Attribut des Elements ändert. |

```
MyElement = Polymer({
      is: 'my-element',
      created: function() {
        console.log(this.localName + '#' + this.id + ' was created');
      },
      ready: function() {
        console.log(this.localName + '#' + this.id + ' has local DOM initialized');
      },
      attached: function() {
        console.log(this.localName + '#' + this.id + ' was attached');
      },
      detached: function() {
        console.log(this.localName + '#' + this.id + ' was detached');
      },
      attributeChanged: function(name, type) {
        console.log(this.localName + '#' + this.id + ' attribute ' + name +
          ' was changed to ' + this.getAttribute(name));
      }
    });
```
<sup>Quelle:www.polymer-project.org</sup> 

Die Initialisierungsreihenfolge sieht wie folgt aus:
1. **created** callback
2. lokale DOM wird initialisiert und Kinder haben **ready** ausgeführt
3. **ready** callback
4. **factoryImpl** callback
5. **attached** callback

Das Timing zwischen Elementen kann variieren, insbesondere in Abhängigkeit ob der Browser native Unterstützung für Web-Komponenten bereitstellt.
Im Normalfall wird **ready** der Kinder vor dem  **ready** der Eltern aufgerufen. Es gibt allerdings zwei Ausnahmen. **dom-repeat** und **dom-if** templates (näheres später) sind 
asynchron.  **ready** wird aufgerufen bevor **dom-repeat**mit dem erstellen von Instanzen fertig ist. Für **attached**, wird anders als für **ready**, nicht garantiert das die Kinder vor den Eltern fertig sind.
Für Geschwister gibt es keine Garantien bezüglich der Initialisierungsreihenfolge. Hilfreich um ein Geschwisterelement während der Initialisierungsphase zu betreten ist **async** in der Callback **attached**.
```
 attached: function() {
      this.async(function() {
        // access sibling or parent elements here
      });
    }
```
<sup>Quelle:www.polymer-project.org</sup> 

Des weiteren gibt es noch die Callbacks **beforeRegister** und **registered**, für vor bzw. nach der Registrierung.
Mit dem property **hostAttributes** können HTML-Attribute zur Erstell-Zeit gesetzt werden.
```
    <script>
      Polymer({
        is: 'x-custom',
        hostAttributes: {
          'string-attribute': 'Value',
          'boolean-attribute': true,
          tabindex: 0
        }
      });
    </script>
    <x-custom string-attribute="Value" boolean-attribute tabindex="0"></x-custom>
```
<sup>Quelle:www.polymer-project.org</sup> 

Wenn ein Element bereitgehalten aber nicht registriert werden soll kann die **Polymer.Class**Funktion statt **Polymer** 
verwendet werden. Genutzt wird dann **document.registerElement** um es später zu registrieren. Der Rest ist gleich.
```
     var MyElement = Polymer.Class({
 
       is: 'my-element',
 
       // See below for lifecycle callbacks
       created: function() {
         this.textContent = 'My element!';
       }
 
     });
 
     document.registerElement('my-element', MyElement);
 
     // Equivalent:
     var el1 = new MyElement();
     var el2 = document.createElement('my-element');
```
<sup>Quelle:www.polymer-project.org</sup> 

Weitere Properties des Elements, insbesondere der öffentlichen API, werden über das **properties** Objekt im Prototypen 
deklariert. Dies erlaubt die Properties im HTML Tag zu konfigurieren.<br>
Weitere Spezifikationen im **properties** Objekt:
+ Property type
+ Default Value
+ Property change observer: Ruft Methode auf wenn sich der Wert des Property ändert
+ Read-Only status: verhindert ein versehentliches verändern des Property Values
+ Two-way data binding support: Erzeugt ein Event wenn sich der Property Value ändert
+ Computed property: Ein aus anderen Properties berechneter Property Value
+ Property reflection to attribute: Aktualisiert einen anderen Attributwert wenn sich dieser Wert ändert
```
    Polymer({
    
      is: 'x-custom',
    
      properties: {
        user: String,
        isHappy: Boolean,
        count: {
          type: Number,
          readOnly: true,
          notify: true
        }
      },
    
      ready: function() {
        this.textContent = 'Hello World, I am a Custom Element!';
      }
    
    });
```
<sup>Quelle:www.polymer-project.org</sup> 

Objekt und Array Properties werden im JSON Format übergeben.
```
<my-element book='{ "title": "Persuasion", "author": "Austen" }'></my-element>
```
<sup>Quelle:www.polymer-project.org</sup> 

Im Prototypen können Instanzmethoden des Elements deklariert werden.
```
Polymer({
    is: 'cat-element',
    _says: 'meow',
    speak: function() {
      console.log(this._says);
    }
});
var cat1 = document.querySelector('cat-element');
cat1.speak();
var cat2 = document.createElement('cat-element');
cat2.speak();
```
<sup>Quelle:www.polymer-project.org</sup> 

Alle Polymer Elemente erben von **Polymer.Base**und können so einige Built-in Methoden nutzen. Die wichtigsten sind:

+ **$$(selector)** Gibt den ersten Knoten des lokalen DOM wieder das den **selector** beinhaltet
+ **fire(type, [detail], [options])** erzeugt ein selbsterstelltes Event
+ **async(method, [wait])** Ruft eine Methode asynchron auf
+ **cancelAsync(handle)** Bricht die async Aufgabe ab
+ **importHref(href, onload, onerror, optAsync)** Importiert dynamisch ein HTML Dokument.

Selbst erstellte Polymer-Elemente können auch Codemodule austauschen, diese werden **behaviors** genannt. Ein **behavior**
kann **lifecycle callbacks, declared properties, default attributes, observers** und **event listeners** enthalten.
Ein **behavior** wird dem Prototypen in einem **behaviors** Array hinzugefügt.
```
Polymer({
  is: 'super-element',
  behaviors: [SuperBehavior]
});
```
<sup>Quelle:www.polymer-project.org</sup> 

Das **behavior** wird in einem eigenen JavaScript Objekt definiert.
```
<script>
    HighlightBehavior = {
      properties: {
        isHighlighted: {
          type: Boolean,
          value: false,
          notify: true,
          observer: '_highlightChanged'
        }
      },
      listeners: {
        click: '_toggleHighlight'
      },
      created: function() {
        console.log('Highlighting for ', this, 'enabled!');
      },
      _toggleHighlight: function() {
        this.isHighlighted = !this.isHighlighted;
      },
      _highlightChanged: function(value) {
        this.toggleClass('highlighted', value);
      }
    };
</script>
```
<sup>Quelle:www.polymer-project.org</sup> 

**Behaviors** können auch nach belieben erweitert werden.
```
<!-- import an existing behavior -->
<link rel="import" href="oldbehavior.html">
<script>
  // Implement the extended behavior
  NewBehaviorImpl = {
    // new stuff here
  }
  // Define the behavior
  NewBehavior = [ OldBehavior, NewBehaviorImpl ]
</script>
```
<sup>Quelle:www.polymer-project.org</sup> 

Dabei wird das **behavior** das am weitesten rechts im Array steht behandelt.

#### 2.4.2. Polymer & DOM
An verschiedenen Stellen wurde bereits **DOM** erwähnt. Das **Document Object Model** ist eine Spezifikation einer Schnittstelle
 für den Zugriff auf HTML und XML Dokumente vom W3C. Jedes Polymer Element kreiert ein **DOM** und wird **local DOM** genannt.
Polymer unterstützt verschiedene **local DOM** Implementierungen. Je nach Browsersupport kann **shadow DOM** verwendet werden,
 für alle anderen Browser wird von Polymer **shady DOM** bereitgestellt, eine eigene **local DOM** Implementierung.
 
 **shady DOM** wird zur Zeit als Default genutzt um auf **shadow DOM** umzustellen wird dieses im HTML Dokument vor der
 Importirrung der Polymer Library eingetragen.
 
 ```
<html>
  <head>
  <meta charset="utf-8">
  <script src="components/webcomponentsjs/webcomponents-lite.js"></script>
  <script>
    /* this script must run before Polymer is imported */
    window.Polymer = {
      dom: 'shadow',
      lazyRegister: true
    };
  </script>
  <!-- import a component that relies on Polymer -->
  <link rel="import" href="elements/my-app.html">
  </head>
  <body>
 ```
 <sup>Quelle:www.polymer-project.org</sup> 
 
 Alternativ kann dies auch über den URL query string erfolgen.
 
```
http://example.com/test-app/index.html?dom=shadow
```
<sup>Quelle:www.polymer-project.org</sup> 

Um ein **local DOM** anzulegen nuten wir das **<dom-module>** Element mit einem **id** Attribut, welches mit dem **is** 
Property des Polymer Elements übereinstimmt. Des Weiteren nutzen wir **\<template>** im **<dom-module>**, dessen Inhalt 
indas lokale DOM des Elements geklont wird.
```
<dom-module id="x-foo">
  <template>I am x-foo!</template>
  <script>
    Polymer({
      is: 'x-foo'
    });
  </script>
</dom-module>
```
<sup>Quelle:www.polymer-project.org</sup> 

Polymer erstellt automatisch eine Map von allen statisch erstellen Knoten im **local DOM** um sie schnell über **this.$** 
und der jeweiligen id zu erreichen.
```
<dom-module id="x-custom">
  <template>
    Hello World from <span id="name"></span>!
  </template>
  <script>
    Polymer({
      is: 'x-custom',
      ready: function() {
        this.$.name.textContent = this.tagName;
      }
    });
  </script>
</dom-module>
```
<sup>Quelle:www.polymer-project.org</sup> 

Dynamisch erstelle Knoten werden über **this.$$(selector)** angesprochen.
Polymer stellt eine eigene **DOM API** bereit um **DOM** zu manipulieren. Die Methoden haben die gleiche Signatur wie 
die Methoden von Standard DOM, mit folgenden Ausnahmen:
+ Properties und Methoden die sonst eine Liste von Knoten(**NodeList**) zurückgeben geben nun ein **Array** zurück.
+ Um die lokale DOM Wurzel zu erreichen wird das **root** Property genutzt.
+ Einfüge, Anhänge und Entfernen Operationen werden "lazily" durchgeführt. Um Abfragen auf DOM durchzuführen muss direkt nach
den Operationen **Polymer.dom.flush()** ausgeführt werden.
#### 2.4.3. Events
Events können in Polymer einfach mittels des **listeners** Objekts dem Host Element hinzugefügt werden, welches wiederum
den jeweiligen **listener** mit einem **event handler** verknüpft.
```
<dom-module id="x-custom">
  <template>
    <div>I will respond</div>
    <div>to a tap on</div>
    <div>any of my children!</div>
    <div id="special">I am special!</div>
  </template>
  <script>
    Polymer({
      is: 'x-custom',
      listeners: {
        'tap': 'regularTap',
        'special.tap': 'specialTap'
      },
      regularTap: function(e) {
        alert("Thank you for tapping");
      },
      specialTap: function(e) {
        alert("It was special tapping");
      }
    });
  </script>
</dom-module>
```
<sup>Quelle:www.polymer-project.org</sup> 

DOM Kindern werden **event listeners** mittels **on-event** Annotation im Template hinzugefügt. Das spart oft den Bedarf
für **ids**
```
<dom-module id="x-custom">
  <template>
    <button on-tap="handleTap">Kick Me</button>
  </template>
  <script>
    Polymer({
      is: 'x-custom',
      handleTap: function() {
        alert('Ow!');
      }
    });
  </script>
</dom-module>
```
<sup>Quelle:www.polymer-project.org</sup> 

**on-tap** funktioniert hier bei sowohl bei Touch, als auch Click Geräten, gegenüber der **on-click** Funktion.
#### 2.4.4. Data-Binding
Jedes Polymer Element verwaltet ein eigenes Data-Model. Das Model eines Elements sind die Element Properties. **Data-Binding**
verknüpft das lokale DOM mit dem Model. Die einzelnen Properties können über die Annotation **{{propertiename}}** angesprochen werden.
### 2.5. Polymer Element Catalog
Der Polymer Element Catalog unterteilt Webkomponenten in acht Kategorien basierend auf deren Funktionsgebiet.
#### 2.5.1. App Elements
Diese Kategorie beinhaltet Komponenten, die modulare Bauweisen unterstützen.
Dazu gehören sprachliche Lokalisierungen, Datenbankverbindungen und Speicherung von Daten auf Vorrat für die Applikation.
#### 2.5.2.Iron Elements
Diese Kategorie beinhaltet Komponenten, die der visuellen Gestaltung dienen.
Der Umfang dieser Kategorie ist die zurzeit Größte und bietet grafisch ansprechende Versionen für alle gängigen Grafikelemente von Listen bis Bildeinbindungen in einer Form die von allen Polymer-Elementen unterstützt werden.
#### 2.5.3. Paper Elements
Diese Kategorie beinhaltet Komponenten, die der graphischen Gestaltung dienen speziell für Googles Material Design.
Als zweitgrößte Kategorie bietet sie einen vergleichbaren Umfang wie die Iron Elements.
#### 2.5.4. Google Web Components
Diese Kategorie beinhaltet Komponenten, welche die Einbindung von Google Services ermöglichen.
#### 2.5.5. Gold Elements
Diese Kategorie beinhaltet Komponenten, die für den kommerziellen Gebraucht vorgesehen sind.
Dazu gehört beispielsweise die Unterstützung von Kredit-Karten und Felder zum Validieren von Eingaben.
#### 2.5.6. Neon Elements
Diese Kategorie beinhaltet Komponenten, die Spezialeffekte erzeugen.
Hierbei handelt es sich um Animationen, die Teile der Seite oder auch die gesamte Seite beeinflussen.
#### 2.5.7. Platinum Elements
Diese Kategorie beinhaltet Komponenten, die eine Seite so erweitern, das sie wie eine Application genutzt werden kann.
Komponenten dieser Kategorie können Bluetooth-Verbindungen herstellen und auf sich ändernde Verbindungsumgebungen reagieren.
#### 2.5.8. Molecules
Diese Kategorie beinhaltet Komponenten, die Warper für Bibliotheken zur Verfügung stellen.
## 3.Anhang/Literaturverzeichnis
Polyfill bezeichnet JavaSkripte die in einem gewissen Umfang Abwärtskompatibilität von Browsern ermöglichen sowie Probleme mit fehlender Unterstützung von W3C Standards lösen.
Alle unter 2.6 vorgestellten Elemente sind zu finden unter: https://elements.polymer-project.org
Als Hauptquelle diente die Polymer Dokumentation **https://www.polymer-project.org/1.0/docs/devguide/feature-overview**
