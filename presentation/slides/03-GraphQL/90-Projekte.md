---
title: Projekte
---

# GitHubStats

GitHubStats ist eine Android App, mit der sich diverse Werte über GitHub Organisationen und Repositories einsehen lassen. Die App kommuniziert dafür via der [GraphQL-API](https://developer.github.com/early-access/graphql/) von GitHub.

## Repositories

[GitHubStats Android App](https://github.com/KSWE-2016-17/graphql-github-stats)

# find.me

Hierbei handelt es sich um einen Fork von [find.me ReactJS Webapp](https://github.com/findme-react/js-webapp), welcher losgelöst worden ist von der direkten Anbindung an eine [CouchDB](http://couchdb.apache.org/)-Datenbank und stattdessen mittels [GraphQL](http://graphql.org/) mit dem Backend kommuniziert. In diesem Zuge wurde die CouchDB-Datenbank gegen eine [MongoDB](https://www.mongodb.com/)-Datenbank ausgetauscht.

## Repositories

[find.me Webapp](https://github.com/kswe-2016-17/graphql-findme-webapp)<br>
[find.me DB-API](https://github.com/kswe-2016-17/graphql-findme-db-api)<br>
[find.me GraphQL Service](https://github.com/kswe-2016-17/graphql-findme-graphql-service)<br>
[find.me MongoDB (Docker)](https://github.com/kswe-2016-17/graphql-findme-mongodb)<br>
[find.me Full Stack (Docker)](https://github.com/kswe-2016-17/graphql-findme-full-stack)

Das [find.me Full Stack (Docker)](https://github.com/kswe-2016-17/graphql-findme-full-stack)-Repository spielt hier eine besondere Rolle, da es keinerlei projektspezifischen Source Code o.Ä. enthält, sondern lediglich dazu gedacht ist, unkompliziert ein [Docker](https://www.docker.com/)-basiertes Stage-System mit allen Projekt-Komponenten (MongoDB-Datenbank, GraphQL-API, Webapp-Frontend) zu bauen und zu starten. Das Repository ist daher optional.

Genau genommen sieht es beim [find.me MongoDB (Docker)](https://github.com/kswe-2016-17/graphql-findme-mongodb)-Repository ähnlich aus. Da das Projekt jedoch auf eine Datenbank angewiesen ist, ist dieses Repository nur bedingt optional.
