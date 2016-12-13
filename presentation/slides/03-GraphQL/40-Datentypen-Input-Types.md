---
title: Datentypen - Input Types
---

```
input ReviewInput {
  stars: Int!
  commentary: String
}
```

Bei einer Anfrage mit Argumenten können nicht nur einfache Skalare übergeben werden. Es können auch beliebig komplexe Objekte übergeben werden, was mit Inputs realisiert wird.<br>
Hier wird ein Input Typ `ReviewInput` angelegt, welcher die beiden Felder `stars` und `commentary` enthält.
