---
title: Datentypen - Argumente
---

```
type Starship {
  id: ID!
  name: String!
  length(unit: LengthUnit = METER): Float
}
```

Einzelne Felder können Argumente haben. Jedes Argument wird einzelnd benannt und typisiert.<br>
Das Feld `length` vom Typ `Starship` ist selbst vom Typ `Float` und verlangt als Argument eine `LenghtUnit`.<br>
Bei Argumenten gibt es zwei Varianten: `required` und `optional`. Ist bei einem Argument nichts angegeben bis auf den Namen und den Typ, ist es automatisch `required`. Ansonsten gibt es noch die Möglichkeit einen Standartwert zu hinterlegen.<br>
Beim Beispiel `Starship` wären das `METER`.
