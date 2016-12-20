---
title: Cordova Viewer App
chapter: Augmented Reality
id: CordovaViewerApp
---

Da sich der Zugriff auf die Kamera, je nach mobilem Gerät / Betriebssystem und Browser unterschiedlich verhält, der Kamera Feed instabil oder nicht flüssig genug für die Anforderungen eines AR Spiels läuft oder garnicht erst möglich ist, soll der Project Campus Viewer Abhilfe schaffen. Diese auf dem Cordova Framework basierende mobile App kann nativ auf die Kamera zugreifen sowie darstellen und Webinhalte darüber legen.

Sie ist in folgendem Github Repository zu finden:

<a href="https://github.com/KSWE-2016-17/project-campus-viewer">https://github.com/KSWE-2016-17/project-campus-viewer</a>

# Laden und ausführen / debuggen

## Vorbereitung
```
npm install -g cordova
cordova prepare
```

## Android

### SDK Abhängigkeiten

#### Android Command Line Tools
Android Studio beinhaltetet alle nötigen tools um eine App für Android zu kompilieren. Falls Sie Android Studi nicht installieren wollen, gibt es ebenfalls die Möglichkeit nur die Command Line Tools zu laden.

<a href="https://developer.android.com/studio/index.html#downloads">https://developer.android.com/studio/index.html#downloads</a>

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

## iOS (ungetestet)

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

#### Informationen
Webinhalte benötigen folgende CSS damit der darunter liegende Kamera Feed sichtbar ist.
```
html, body {
  background-color: transparent;
}
```


#### iOS Besonderheiten:
Es ist nicht möglich die Webcam des Computer im Simulator zu nutzen.

#### basiert auf:

<a href="https://github.com/cordova-plugin-camera-preview/cordova-plugin-camera-preview-sample-app">cordova-plugin-camera-preview-sample-app</a>
