---
title: Datentypen - Listen und Non-Null
---

```
myField: [String!]

myField: null // valid
myField: ['a', 'b'] // valid
myField: ['a', null, 'b'] // error
```

```
myField: [String]!

myField: null // error
myField: ['a', 'b'] // valid
myField: ['a', null, 'b'] // valid
```

Es gibt einen wichtigen Unterschied bei der Definition von Non-Null auf Listen und direkt auf Typen.<br>
Ist wie im oberen Beispiel der Typ selbst als non-nullable definiert, darf die Liste selbst null sein, aber keine null-Elemente enthalten. Ist wie im unteren Beispiel die Liste als non-nullable definiert, muss es zumindest eine leere Liste geben, diese darf dann aber null-Elemente enthalten.
