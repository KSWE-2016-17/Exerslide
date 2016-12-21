---
title: A-Frame
chapter: Augmented Reality
id: AR_AFrame
---

Javascript Framework um Augmented Reality Inhalte in Web Anwendungen darzustellen

## Was ist A-Frame?

A-Frame is an open-source web framework for building virtual reality experiences. We can build VR web pages that we can walk inside with just HTML. Under the hood, it is a three.js framework that brings the entity-component-system pattern to the DOM.

### Hello World!

```
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
