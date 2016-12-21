---
title: ArgonJS A-Frame
chapter: Augmented Reality
id: AR_Argon_AFrame
---

Javascript Bridge um ArgonJS in das A-Frame Framework zu integrieren.

## 1. Verknüpfung ArgonJS und A-Frame
Im Kapitel [ArgonJS](#/AR_ArgonJS) wurden bereits erste Inhalte in der Augmented Reality erstellt. Hier noch mal ein kurzer Ausschnitt, wie eine Szene mit einem Objekt in der Augmented Reality erstellt werden kann:

```javascript

//erstellen der Szene und die Projektion auf die aktuelle Position
var app = Argon.init();
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera();
var userLocation = new THREE.Object3D;
scene.add(camera);
scene.add(userLocation);

//3D Objekt erzeugen, 10*10*10 Würfel mit Textur 
var buzz = new THREE.Object3D;
var loader = new THREE.TextureLoader();
loader.load('buzz.png', function (texture) {
    var geometry = new THREE.BoxGeometry(10, 10, 10);
    var material = new THREE.MeshBasicMaterial({ map: texture });
    var mesh = new THREE.Mesh(geometry, material);
    mesh.scale.set(100, 100, 100);
    buzz.add(mesh);
});

//3D Objekt an einer GPS Position platzieren
var campusGeoEntity = new Cesium.Entity({
    name: "Campus Minden",
    position: Cartesian3.fromDegrees(),
    orientation: Cesium.Quaternion.IDENTITY
});
var campusGeoTarget = new THREE.Object3D;
campusGeoTarget.add(buzz);
scene.add(campusGeoTarget);

//Position im 3D Raum aktualisieren
app.updateEvent.addEventListener(function (frame) {
    var geoPose = app.context.getEntityPose(campusGeoEntity);
    campusGeoTarget.position.copy(geoPose.position);
}

```

Man kann gut erkennen, dass das Argon Framework auf Funktionale 
Programmierung ausgelegt ist. Die Kapselung der 3D-Objekte und die 
Implementierung von Usescases ist dem Entwickler selbst überlassen. 
Hier kommt Argon-JS A-Frame Brdige ins Spiel. 

Das selbe Beispiel sieht mit der Bridge nun wie folgt aus:

```html
<html>
  <body>
    <ar-scene>
      <a-assets>
        <img id="texture_buzz" src="buzz.png">
      </a-assets>
      <ar-geopose id="campus" lla="52.296366 8.905558" userotation="false"> 
         <a-entity geometry="primitive: box" material="src: #texture_buzz"></a-entity>
      </ar-geopose>     
    </ar-scene>
  </body>
</html>
```

Man kann gut erkennen das unter Verwendung der ArgonJS A-Frame Bridge, 
die Implementierung viel kompakter ist. Zu dem muss zunächst keine Zeile 
Javascript geschrieben werden, um die Grundlegenden Funktionalitäten zu 
implementieren.

Erweiterungen bzw. die Implementierung von Usecases erfolgt, wie schon 
vom A-Frame Framework bekannt, mit sogenannten Components, auf das in 
den nächsten Kapiteln näher eingangen wird.  
 
## 2. Entities

Die A-Frame Argon Bridge bringt folgende Entitäten mit um die Argon 
Komponenten im A-Frame zu verwenden.
 
### AR-Scene

Die AR-Scene Komponente ist unter dem Tag `<ar-scene>` erreichbar und wird
statt der `<a-scene>` aus dem A-Frame verwendet.

Es verhält sich wie die `<a-scene>` nutzt jedoch ArgonJS statt WebVR zum rendern.

## 3. Components

Komponenten werden als Attribute an die HTML-Tag definiert und erweitern 
die Funktionen des Objekts.

### Reference Frame

Die Referenzframe komponente ermöglicht die Positionierung und 
Drehung der Komponenten unter der Verwendung der Argon Referenzframes. 
Eine der wichtigen Referenzen ist die Benutzer-Referenz die den Benutzer 
repräsentiert.

```html
<a-entity referenceframe='parent: ar.user'>
</a-entity>
```

Eine weitere typische Verwendung der Referenzframes ist die GPS-Position 
Referenzframe.

```html
<a-entity referenceframe='lla: -84.398881 33.778463'>
</a-entity>
```

### Distance Trigger

Eine häufige Anforderung an Augmented Reality Applikationen ist das 
auslösen eines Ereignisses, wenn der Benutzer sich einem Objekt nähert.
Die `trigger`-Komponente kann an ein Objekt platziert werden und löst 
ein Ereignis aus, wenn sich die Kamera diesem Objekt nähert.

```html
<ar-scene>
  <ar-geopose lla="52.296366 8.905558" trigger="radius:100;event:zielErreicht"> 
     ...
  </ar-geopose>
</ar-scene>
```

In diesem Beispiel wird das Ereignis `zielErreicht` ausgelöst, wenn 
der Benutzer sich dem Objekt auf 100m nähert.

## 4. Primitives

Folgende Primitiven erweitern die Funktionalitäten des A-Frame um 
Augmented Reality Funktionalitäten.

### AR Camera

Die ArgonJS spezifische Kamera wird mit dem `<ar-camera>` tag erzeugt.  
Wenn keine Kamera zu der Szene hinzugefügt wurde, wird diese automatisch 
erstellt. 
 
Wenn 3D-Objekte relativ zu dem Benutzer platziert werden und diese 
sich auch mit dem Benutzer bewegen sollen, müssen diese Objekte als 
Kind Elemente an dieses Tag hinzugefügt werden.
 
### Geopose

Das `<ar-geopose>` Tag erzeugt eine entity dessen GPS-Position 
(Lattitude, Longitude) über die `lla` Eigenschaft festgetelt werden kann.
Die Eigenschaft `userotation` und `useposition` kann gesetzt werden 
(Standard ist `true`) um die Rotation bzw. die Position aus dem zu übernehmen. 
