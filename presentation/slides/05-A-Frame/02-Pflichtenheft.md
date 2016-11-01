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
  <img src="./images/UC00.png"/>
</figure>

### 3.1.1 SubUseCase: Raum verwalten
<figure id="imgUCprofverw">
  <img src="./images/UC01-RaumVerwalten.png"/>
</figure>

### 3.1.2 SubUseCase: Sich in Raum bewegen
<figure id="imgUCbewegen">
  <img src="./images/UC02Bewegen.png"/>
</figure>

### 3.1.3 SubUseCase: Mit Objekten interagieren
<figure id="imgUCinteract">
  <img src="./images/UC03ObjekteVerwalten.png"/>
</figure>

## 3.2 Use-Case Tabellen

#### UC-1 Profil verwalten
| Use Case ID: | UC-1  |
| --| --|
| Title: |  Profil verwalten |
| Description: | User verwaltet sein Profil |
| Trigger | - |
| Primary Actor | User |
| Preconditions | - |
| Postconditions | - |
| Other Use Cases | - |
| Main <br> Success Scenario: | 1. User verwaltet sein Profil |
| Extensions | -  |
| Owner | Oxana Zh / Karsten T |
| Priority | High |

#### UC-1.1 Anmelden
| Use Case ID: | UC-1.1  |
| --| --|
| Title: | User Anmeldung/Login |
| Description: | User meldet sich auf der Plattform an um sie zu nutzen |
| Trigger | Login Button |
| Primary Actor | User |
| Preconditions | UC-1.2 |
| Postconditions | User kann die Plattform nutzen |
| Other Use Cases | UC-1.2 |
| Main <br> Success Scenario: | 1. User klickt auf anmelden <br>  2. System zeigt Anmeldefenster <br>  3. User gibt Namen ein  <br>  4. User gibt Passwort ein  <br>  5. User klickt auf Anmelden 6. System prüft Daten |
| Extensions | 6a. Username nicht gefunden <br>  6b. Passwort falsch <br>  - 6a/b.1 System weist auf Fehler hin und führt Anmeldung nicht durch |
| Owner | Oxana Zh / Karsten T |
| Priority | High |

#### UC-1.2 Registrieren
| Use Case ID: | UC-1.2  |
| --| --|
| Title: | User Registrieren |
| Description: | User registriert sich (neuer User) um Plattform zu nutzen |
| Trigger | Registrieren Button |
| Primary Actor | User |
| Preconditions | - |
| Postconditions | User ist registriert und kann sich anmelden, UC-1.1 |
| Other Use Cases | UC-1.1 |
| Main <br> Success Scenario: | 1. User klickt auf registrieren 2. System zeigt Registrierungsfenster 3. User gibt Namen an 4. User gibt Passwort an 5. User klickt auf Bestätigen |
| Extensions | 3a. Ungültiger Name <br>  3b. Kein Name <br>  3c. Name existiert bereits <br>  4a. Ungültiges Passwort <br>  4b. Kein Passwort <br> -  3a-c/4a-b.1 System weist auf Fehler hin und führt Registrierung nicht durch |
| Owner | Oxana Zh / Karsten T |
| Priority | High |


#### UC-1.3 VR-Raum teilen
| Use Case ID: | UC-1.3 |
| --| --|
| Title: | VR-Raum teilen |
| Description: | User gibt seinen Raum anderen Usern frei |
| Trigger | "Teilen"-Button |
| Primary Actor | User |
| Preconditions | - |
| Postconditions | Andere User können VR-Raum betreten |
| Other Use Cases | . |
| Main <br> Success Scenario: | 1. User klickt auf "Teilen" <br> 2. System zeigt Namensfeld <br> 3. User trägt Namen seines Freundes ein <br>  4. System teilt VR-Raum mit neuem User |
| Extensions | 3a. User(Freund) existiert nicht <br> 3b. User(Freund) kennt Raum bereits <br>  - 3a.1. System meldet Fehler <br> - 3b.1 System meldet User kennt VR-Raum bereits |
| Owner | Oxana Zh / Karsten T |
| Priority | Medium |

#### UC-2 VR bewegen
| Use Case ID: | UC-2  |
| --| --|
| Title: |  VR bewegen |
| Description: | User kann sich in der VR bewegen |
| Trigger | - |
| Primary Actor | User |
| Preconditions | - |
| Postconditions | User hat Position/Sicht verändert |
| Other Use Cases | - |
| Main <br> Success Scenario: | 1. User interagiert <br> 1a. User bewegt sich <br> 1b. User dreht die Kamera |
| Extensions | -  |
| Owner | Oxana Zh / Karsten T |
| Priority | High |

#### UC-2.1 Vor/Zurück/Links/Rechts
| Use Case ID: | UC-2 .1 |
| --| --|
| Title: | Vor/Zurück/Links/Rechts |
| Description: | User kann sich in der VR  Vor/Zurück/Links/Rechts bewegen |
| Trigger | WASD-Keys |
| Primary Actor | User |
| Preconditions | - |
| Postconditions | User hat sich bewegt |
| Other Use Cases | - |
| Main <br> Success Scenario: | 1a. User bewegt sich vorwärts <br> 1b. User bewegt sich rückwärts <br> 1c. User bewegt sich nach links <br> 1d. User bewegt sich nach rechts |
| Extensions | 1a-d. User läuft gegen Wand/Objekt <br> - 1a-d.1 System verhindert Bewegung und blockiert den User  |
| Owner | Oxana Zh / Karsten T |
| Priority | High |

#### UC-2.2 Kamera drehen
| Use Case ID: | UC-2 .2 |
| --| --|
| Title: | Kamera drehen |
| Description: | User kann seine Perspektive in der VR verändern |
| Trigger | Gedrückt gehaltene Maustaste / Sensoren der VR-Brille / Handy Sensoren |
| Primary Actor | User |
| Preconditions | - |
| Postconditions | Perspektive hat sich verändert |
| Other Use Cases | - |
| Main <br> Success Scenario: | 1. User hat die Kameraperspektive geändert |
| Extensions | 1a. Kamera ist bockiert <br> - 1a.1 System weist User darauf hin und verändert Kamera schwenken  |
| Owner | Oxana Zh / Karsten T |
| Priority | High |

#### UC-3 VR interaktion
| Use Case ID: | UC-3 |
| --| --|
| Title: | VR interaktion |
| Description: | User interagiert mit der VR|
| Trigger | - |
| Primary Actor | User |
| Preconditions | - |
| Postconditions | VR reagiert |
| Other Use Cases | - |
| Main <br> Success Scenario: | 1. User hat die Möglichkeit dazu ein: <br> - 1a. Media-File hochzuladen <br>  - 1b. Objekt zu platzieren <br> 1c. Objekt zu rotieren <br> 1d. Objekt zu löschen <br> 1e. Objekt zu skalieren  |
| Extensions |  -  |
| Owner | Oxana Zh / Karsten T |
| Priority | High |

#### UC-3.1 Media-File hochladen (Object, Audio, Video, Image, Text)
| Use Case ID: | UC-3.1 |
| --| --|
| Title: | Media-File hochladen (Object, Audio, Video, Image, Text) |
| Description: | User lädt ein Media-File hoch <br> Media-File wird visualisiert |
| Trigger | "Hochladen" Button mit eingehängtem Media-File |
| Primary Actor | User |
| Preconditions | - |
| Postconditions | VR visualisiert neues Media-FIle inkl. Speicherung in DB |
| Other Use Cases | - |
| Main <br> Success Scenario: | 1. User klickt auf "Hochladen" <br> 2. System zeigt Upload-Fenster/Sektor <br> 3. User hängt Media-FIle ein <br> 4. User klickt auf "Hochladen" <br> 5. System speichert Media-FIle in DB und visualisiert neues Media-FIle  in der VR |
| Extensions |  3a. Ungültiges Format <br> 3b. Zu große Datei <br> - 3a/b.1  System verwirft Datei <br> 5a. Keine Datei angehängt|
| Owner | Oxana Zh / Karsten T |
| Priority | High |

#### UC-3.2 Objekt platzieren
| Use Case ID: | UC-3.2 |
| --| --|
| Title: | Objekt platzieren |
| Description: | User verschiebt ein Objekt |
| Trigger | User "zieht" Objekt in der VR |
| Primary Actor | User |
| Preconditions | - |
| Postconditions | Objekt ändert Position |
| Other Use Cases | - |
| Main <br> Success Scenario: | 1. User hält Maus auf Objekt gedrückt <br>  2. User "zieht" Maus <br> 3. System visualisiert die Positionsänderung |
| Extensions |  1a. Objekt ist statisch <br> - 1a.1 System highlighted unpositionierbares Objekt |
| Owner | Oxana Zh / Karsten T |
| Priority | High |

#### UC-3.3 Objekt rotieren
| Use Case ID: | UC-3.3 |
| --| --|
| Title: | Objekt rotieren |
| Description: | User rotiert ein Objekt |
| Trigger | User "betrachtet Objekt und drückt entsprechende Taste |
| Primary Actor | User |
| Preconditions | - |
| Postconditions | Objekt ändert Rotation |
| Other Use Cases | - |
| Main <br> Success Scenario: | 1. User betrachtet Objekt (Raycasting) 2. User drückt Rotationstaste 3. System rotiert Objekt entsprechend |
| Extensions |  2a. Objekt ist statisch <br> 2a.1. System weist auf unrotierbares Objekt hin |
| Owner | Oxana Zh / Karsten T |
| Priority | High |

#### UC-3.4 Objekt löschen
| Use Case ID: | UC-3.4 |
| --| --|
| Title: | Objekt löschen |
| Description: | User löscht ein Objekt |
| Trigger | User "betrachtet" Objekt und drückt entsprechende Taste |
| Primary Actor | User |
| Preconditions | - |
| Postconditions | Objekt aus VR und DB entfernt |
| Other Use Cases | - |
| Main <br> Success Scenario: | 1. User betrachtet Objekt (Raycasting) 2. User drückt Löschen-Taste 3. System löscht Objekt  |
| Extensions |  2a. Objekt ist unlöschbar <br> 2a.1. System weist auf unlöschbares Objekt hin |
| Owner | Oxana Zh / Karsten T |
| Priority | High |

#### UC-3.5 Objekt skalieren
| Use Case ID: | UC-3.5 |
| --| --|
| Title: | Objekt skalieren |
| Description: | User skaliert ein Objekt |
| Trigger | User "betrachtet" Objekt und drückt entsprechende Taste |
| Primary Actor | User |
| Preconditions | - |
| Postconditions | Objekt skaliert groß/klein |
| Other Use Cases | - |
| Main <br> Success Scenario: | 1. User betrachtet Objekt (Raycasting) <br> 2. User drückt Skaliertasten 3. System skaliert Objekt größer/kleiner |
| Extensions |  2a. Objekt ist statisch <br> 2a.1. System weist auf unskalierbares Objekt hin |
| Owner | Oxana Zh / Karsten T |
| Priority | High |

#### UC-4 VR andere User/Räume
| Use Case ID: | UC-4 |
| --| --|
| Title: | VR andere User/Räume |
| Description: | User besucht/verändert VR-Raum eines anderen Users |
| Trigger | "VR betreten" |
| Primary Actor | User |
| Preconditions | Raum ist geteilt UC-1.3  |
| Postconditions | -  |
| Other Use Cases | UC-1.3 |
| Main <br> Success Scenario: | 1. User drückt "VR-betreten" seiner ihm geteilten VR-Räume <br> 2a. User besucht VR-Raum <br> 2b. User besucht und verändert VR-Raum |
| Extensions |  - |
| Owner | Oxana Zh / Karsten T |
| Priority | Medium |

#### UC-4.1 VR besuchen
| Use Case ID: | UC-4.1 |
| --| --|
| Title: | VR besuchen |
| Description: | User besucht VR-Raum eines anderen Users |
| Trigger | "VR betreten" |
| Primary Actor | User |
| Preconditions | Raum ist geteilt UC-1.3  |
| Postconditions | -  |
| Other Use Cases | UC-1.3 |
| Main <br> Success Scenario: | 1. User drückt "VR-betreten" seiner ihm geteilten VR-Räume <br> 2. User besucht VR-Raum |
| Extensions |  2a. User versucht mit Objekten zu interagieren <br> 2a.1 System verhindert Interaktion |
| Owner | Oxana Zh / Karsten T |
| Priority | Medium |

#### UC-4.2 VR verändern
| Use Case ID: | UC-4.2 |
| --| --|
| Title: | VR verändern |
| Description: | User verändert VR-Raum eines anderen Users |
| Trigger | "VR betreten" |
| Primary Actor | User |
| Preconditions | Raum ist geteilt UC-1.3  |
| Postconditions | -  |
| Other Use Cases | UC-1.3 |
| Main <br> Success Scenario: | 1. User drückt "VR-betreten" seiner ihm geteilten VR-Räume <br> 2. User besucht VR-Raum <br> 3. User interagiert mit Objekten und verändert den Raum <br> 4. System übernimmt Änderungen |
| Extensions |  3a. Ungültige Veränderungen bspw. statischer Objekte |
| Owner | Oxana Zh / Karsten T |
| Priority | Low |

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
