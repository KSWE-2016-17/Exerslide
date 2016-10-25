---
title: Pflichtenheft
chapter: Pflichtenheft
id: pflichtenheft
---
## 1 Zielbestimmung
### 1.1 Musskriterien

Das System muss dem Nutzer die Möglichkeit geben einen virtuellen Raum zu verwalten.
Der Nutzer muss nach der Anmeldung einen virtuellen Raum erhalten den er frei nach seinen
Wünschen modellieren kann.

Das System muss die Einbindung von:
- Objekten/Models
- Videos
- Audiodateien
- Bildern
- Texten

ermöglichen.
Diese müssen vom System geschützt vor Dritten gespeichert und verwaltet werden.
Dem Nutzer ist es möglich sich im virtuellen Raum zu bewegen, mit einer VR-Brille oder ohne.

Das System ermöglicht es dem Nutzer die bereits genannten Media-Files hochzuladen und im Raum zu
bearbeiten, nämlich:
- Rotieren
- Skalieren
- Platzieren

Diese Positionen müssen vom System gespeichert werden.
Das System muss deutlich machen ob mit einem Objekt interagiert werden kann.
Das System muss diese Interaktionen einfach vermitteln.
Das System muss mehreren Nutzern einen Austausch der Räume ermöglichen. Dabei können Nutzer
ihre Räume gegenseitig kenntlich machen und den anderen Raum laden und betreten.

### 1.2 Abgrenzungskriterien
Keine soziale Plattform. User können sich gegenseitig nicht sehen wie auf Chatplattformen. Ein
Austausch erfolgt über ein kurzes einfaches Interface.
Der primäre Fokus liegt auf dem virtuellen Raum und seiner Gestaltung und Interaktivität.

## 2 Produkteinsatz
### 2.1 Anwendungsbereiche
Das Produkt wird im privaten Bereich angewendet.
### 2.2 Zielgruppen
Zielgruppe sind vornehmlich Schüler, Studenten etc. alle Personen die ein interaktives Lernen
bevorzugen bzw. ausprobieren möchten.
### 2.3 Betriebsbedingungen
Das Produkt wird über das Internet angeboten. Dahinter verbirgt sich eine Client-Server Architektur.

## 3. Produktübersicht
### 3.1 UseCase: MyMemorySpace
<figure id="imgUCmms">
  <img src="./images/usecase00.png"/>
</figure>

### 3.1.1 SubUseCase: Profil verwalten
<figure id="imgUCprofverw">
  <img src="./images/usecase01.png"/>
</figure>

### 3.1.2 SubUseCase: VR bewegen
<figure id="imgUCbewegen">
  <img src="./images/usecase02.png"/>
</figure>

### 3.1.3 SubUseCase: VR Interaktion
<figure id="imgUCinteract">
  <img src="./images/usecase03.png"/>
</figure>

### 3.1.4 VR andere User/Räume
<figure id="imgUCraume">
  <img src="./images/usecase04.png"/>
</figure>

## 4. Produktdaten
Langfristig müssen folgende Produktdaten im System gespeichert werden:
- Profil inkl. Name und Passwort
- VR Raum inkl. Seiner Objects und derer Positionen

## 5. Technische Produktumgebung
### 5.1 Software
Erfordert Web-Browser auf dem Client
### 5.2 Hardware
(optional) VR-Brille
### 5.3 Orgware
Internetanschluss

## 6. Verwendete Technologien
JavaScript, AFrame, MongoDB, HTML, CSS  
