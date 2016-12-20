---
title: GraphQL vs. REST - Vorgehen REST
---

Die Anforderung ließe sich über folgende REST-Abfragen abrufen:

- `GET /users/:username/starred`
- `GET /repos/:owner/:name/languages`

Zuerst werden die Repositories geladen, in denen zuletzt Änderungen auftraten.
Danach wird für jedes Repository die neuesten Commits geladen.
