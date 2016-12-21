---
title: Pflichtenheft
chapter: Electron
id: ETN_Pflichtenheft
---

# 1 Anforderungsanalyse
Durak ist ein russisches Kartenspiel welches mit mehreren Personen gespielt wird. Ziel der Applikation ist es, als Unterhaltungsmedium zu fungieren und den Anwender somit zu begeistern. Es soll das Spielen gegen KI gesteuerte Gegner, sowie auch realen menschlichen Gegnern per Internetverbindung ermöglichen.
## 1.1	Musskriterien
*	Portabel auf allen Betriebssystemen für Desktopsysteme (Laptops, Computer)
*	Spielbar gegen Computer Gegner
*	Spielbar gegen Menschliche Gegner
*	Updatesystem implementiert
*	Die Applikation folgt den klassischen Spielregeln von Durak
*	Es ist möglich einen Server zu hosten
*	Es ist möglich einem Server als Client beizutreten

## 1.2	Wunschkriterien
*	Spielerkontosystem implementiert
*	Kontospieler können anderen Kontospieler folgen und werden so benachrichtigt sofern der jeweils andere eine Partie spielt
*	Tonausgabe (Effekte und Musik)
*	Weitere bekannte Regelvariationen Implementieren
*	Per Ad-hoc Verbindung Multiplayer ermöglichen

## 1.3	Abgrenzungskriterien
*	Die Applikation wird nicht für mobile Geräte (Smartphones) verfügbar sein


# 2	Produkteinsatz
## 2.1	Anwendungsbereiche
Da es sich hierbei um ein Unterhaltungsmedium handelt, ist der Anwendungsbereich im privaten Raum vorgesehen.

## 2.2	Zielgruppen
Die Zielgruppe definiert sich durch, Personen welche an Kartenspielen, oder dem Durak Kartenspiel selbst, interessiert sind und im simplen Umgang mit Computer/Laptops vertraut sind.  

## 2.3	Betriebsbedingungen
Da das Electron Framework verwendet wird und es sich hierbei um eine webbasierte Anwendung handelt, ist die Applikation weitestgehend Plattformunabhängig. Sie setzt nur die Ausführung von Google Chromium voraus, welche an die folgenden Bedingungen geknüpft ist:

*	Software:
  * Mind. Windows 7 (keine ARM Versionen)
  * Mind. OS X 10.9. (nur 64 Bit)
  * Mind. Ubuntu 12.04
  * Mind. Fedora 21
  * Mind. Debian 8


* Hardware:
  * Windows – Intel Pentium 4 und 512 MB RAM
  * Mac – 64 Bit Intel Prozessor
  * Linux – Intel Pentium 4 Prozessor
