---
title: Factory, Service, Provider
chapter: AngularJS
---

In Angular 1 gab es drei verschiedene Methoden um Services zu erzeugen: service(), factory() und 
provider(). Services sind Objekte, welche über Dependency Injection in andere Komponenten
eingebunden werden können. Dependency Injection bezeichnet dabei die Reglementierung von 
Abhängigkeiten eines Objekts zur Laufzeit.¹ Allerdings hatten alle drei dieser Services
unterschiedliche Vor- und Nachteile.⁴ Da diese sich jedoch teilweise miteinander überschnitten, hat
diese Aufteilung zu Verwirrung geführt. Daher sind diese nicht mehr in Angular 2 vorhanden!
Es existiert in Angular 2 nur noch die Möglichkeit im Allgemeinen Services zu erstellen - keine 
Factory oder Provider mehr.

# Service in Angular 2

Wie sieht also ein Service in Angular 2 aus? Ein Service wird zunächst als einfache Klasse erstellt.
Zum besseren Verständnis folgt ein Beispiel mit einem Service, welcher nach Bildern auf der
Plattform Flickr suchen kann. 

## Service Klasse Flickr

```
class Flickr {  
  searchPhotos(query) {
    return fetch(`http://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=[your api key here]&texts=${query}&format=json`).then(function(response) {
      return response;
    });
  }
}
``` 
²

Da der Standard http Service von Angular in der Alpha der Version 2 noch nicht vorhanden war, wird in dieser
Klasse die Fetch API verwendet³. 

## Verwendung des Service in Komponente

Um den Service innerhalb einer Komponente zu verwenden, wird dieser importiert und injiziert.
Hierbei wird der Vorteil der Unterstützung von Dependency Injection sichtbar. 

```
// Assuming the class exists in a different file
import {Flickr} from 'flickr';

@Component({
  selector: 'my-photos-component',
  appInjector: [Flickr]
})
```
²

Nun kann der Service im Konstruktor der Komponente auf üblichen Wege instanziiert werden. Die 
Verwendung der Service Klasse kann dann wie folgt geschehen:

```
searchPhotos(query) {  
  this.flickr.searchPhotos(query).then((photos) => {
    this.photos = photos;
  });
}
```
²

Das instanziierte Flickr Objekt der Komponentenklasse wird aufgerufen und die Methode searchPhotos()
aufgerufen. 

# Quellen

1. Dependency Injection Wikipedia - https://de.wikipedia.org/wiki/Dependency_Injection
2. Angular 2: Where have my factories, services...gone in Angular2? - https://www.themarketingtechnologist.co/where-have-my-factories-services-constants-and-values-gone-in-angular-2/
3. Fetch API - https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
4. Service, Factory, Provider - https://angularjs.de/artikel/service-factory-provider
