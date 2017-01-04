---
title: Idee find.me Migration
---

Es soll das bestehende [find.me](https://github.com/findme-react)-Projekt auf [GraphQL](https://graphql.org) und [MongoDB](https://mongodb.com) portiert werden.

Bei der bereits vorhanden Implementierung von _find.me_ wird eine eigens entwickelte DB-API für den Zugriff auf eine [CouchDB](https://couchdb.apache.org)-Datenbank genutzt, welche jedoch speziell auf CouchDB ausgerichtet ist. Die Idee ist nun, diese API von einer konkreten Datenbank zu entkoppeln und mit einem GraphQL-Service kommunizieren zu lassen. Auf diese Weise kann die konkret eingesetzte Datenbank hinter dem GraphQL-Service wegabstrahiert werden und stellt somit im weiteren Verlauf nur noch ein Implementationsdetail dar.

Zusätzlich wird die vorhandene CouchDB-Datenbank gegen eine MongoDB-Datenbank ausgetauscht.

An der für _find.me_ entwickelten Web-Applikation werden dann natürlich nötige Anpassungen durchgeführt, diese sollten sich aufgrund der eingesetzten DB-API aber in Grenzen halten bzw. im Idealfall sogar gar keine Anpassungen nötig sein, da die DB-API bereits als eine Abstraktions-Ebene zur Datenbank dient.
