---
title: A-Frame
chapter: Augmented Reality
id: AR_AFrame
---
## Was ist A-Frame?
A-Frame ist ein Webframework für die Entwicklung von 3D-Szenen und insbesondere Virtual Reality. Mit Hilfe dieses Frameworks, wird der DOM um *Entitiy-Component-System-Pattern* erweitert. So ist es möglich, eine Szene ausschließlich mit *HTML*-Elementen aufzubauen.

### Hello World!

```html
<a-scene>
  <a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
  <a-box position="-1 0.5 -3" rotation="0 45 0" width="1" height="1" depth="1" color="#4CC3D9"></a-box>
  <a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"></a-cylinder>
  <a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
  <a-sky color="#ECECEC"></a-sky>
</a-scene>
```

Ergebnis als Screenshot:

![Use Case System](./images/concepts/AFrameHelloWorld.png)


## Weitere Informationen
Da sich das Kapitel ArgonJS weitestgehend mit dem Projekt A-Frame überschneidet, können weitere Informationen zu dem Framework aus dem Projekt MyMemorySpace entnommen werden.
