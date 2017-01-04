---
title: Queries - Direktiven 2
---

Variablen decken eine Vielzahl an Problemen ab, aber es kann auch nützlich sein die Query selbst zu manipulieren. Diesem Zweck dienen Direktiven.
Im Beispiel wird wie im Beispiel zuvor eine Variable `episode` übergeben. Hinzu kommt nun aber noch eine Variable `withFriends`, welche steuert, ob der Queryteil `friends` auch bearbeitet werden soll.

Die derzeitig unterstützten Direktiven sind:

```
@include(if: Boolean) Das Feld wird inkludiert wenn if = true.
```

```
@skip(if: Boolean) Das Feld wird nicht inkludiert wenn if = true.
```
