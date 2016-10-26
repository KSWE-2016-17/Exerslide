---
title: Cordova Viewer App
chapter: Augmented Reality
id: CordovaViewerApp
---

Da der Zugriff auf die Kamera, je nach Mobiles-Betriebssystem und Browser unterschiedlich verhält, instabil läuft oder nicht möglich ist, soll der Project Campus Viewer Abhilfe schaffen. Dieser ist im folgenden Github Repository zu finden.

https://github.com/KSWE-2016-17/project-campus-viewer

# Laden und ausführen/debuggen

## Vorbereitung
```
npm install -g cordova
cordova prepare
```

## Android

### SDK Abhängigkeiten

#### Android Command Line Tools
Android Studio beinhaltetet alle nötigen tools um eine App für Android zu kompilieren. Falls Sie Android Studi nicht installieren wollen, gibt es ebenfalls die Möglichkeit nur die Command Line Tools zu laden.

https://developer.android.com/studio/index.html#downloads

Der Pfad zu den Command Line Tools muss nach dem entpacken der Umgebungsvariablen hinzugefügt werden.

```
export PATH="$PATH:/pfad/zu/android-sdk/platform-tools:/pfad/zu/android-sdk/tools"
```

#### Platform(en) laden
Den Android SDK Manager in der Kommandozeile ausführen
```
android
```

Benötigte Platformen und Build Tools laden
* Android Platform SDK 23
* Android SDK build-tools (latest)
* Android Support Repository (latest)

### Kompilieren
```
cordova build android
cordova run android
```

## iOS (untested)

### Kompilieren

```
cordova build ios

cordova emulate ios
//OR
cordova run ios --device
```

## Plugins
Verwendete Cordova Plugins

* <a href="https://github.com/westonganger/cordova-plugin-camera-preview">**cordova-plugin-camera-preview** (fork by westonganger)</a>
* **cordova-plugin-inappbrowser** *Attention: android specific InAppBrowser.java is slightly modified to allow geolocation access in Android WebView*
* **cordova-plugin-whitelist**
* **cordova-plugin-geolocation**

## FAQs

#### Informations
Webinhalte benötigen folgende CSS damit der darunter liegende Kamera Feed sichtbar ist.
```
html, body {
  background-color: transparent;
}
```


#### IOS Quirks:
Es ist nicht möglich die Webcam des Computer im Simulator zu nutzen.

#### basiert auf:

<a href="https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview-sample-app">cordova-plugin-camera-preview-sample-app</a>
