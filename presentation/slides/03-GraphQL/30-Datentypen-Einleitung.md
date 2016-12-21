---
title: Datentypen - Einleitung
---

```
type Character {
  name: String!
  appearsIn: [Episode]!
}
```

GraphQL baut sich durch Typen und ihre Beziehungen untereinander auf.<br>
Der Typ `Character` hat zwei Felder:

- `name` vom Typ String.
- `appearsIn` vom Typ Episodenliste. Episode ist dabei ein weiterer definierter Typ.

Außerdem sind beide Felder `non-nullable`, was das `!` aussagt.
