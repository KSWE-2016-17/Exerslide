---
title: Queries - Fragmente
---

```
{
  leftComparison: hero(episode: EMPIRE) {
    ...comparisonFields
  }
  rightComparison: hero(episode: JEDI) {
    ...comparisonFields
  }
}
​
fragment comparisonFields on Character {
  name
  appearsIn
  friends {
    name
  }
}
```

Fragmente sollen doppelten Code vermeiden. Im Beispiel würden die Typen `leftComparison` und `rightComparison` die selben Unterabfragen haben, können aber zu einem Fragment `comparisonFields` zusammengefasst und referenziert werden.
