---
title: ArgonJS A-Frame
chapter: Augmented Reality
id: AR_Argon_AFrame
---

Javascript Bridge um ArgonJS in das A-Frame Framework zu integrieren.

## Verknüpfung ArgonJS und A-Frame
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
Javascript geschrieben werden, um die Grundlegenden Funktionalität zu 
implementieren.
 
 
## Entities

