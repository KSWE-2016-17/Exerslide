---
title: Datentypen - Enumerations
---

```
enum Episode {
  NEWHOPE
  EMPIRE
  JEDI
}
```

Enumerations, oder kurz *Enums*, sind Skalare, welche die möglichen Typen auf die angegebene Auswahl beschränken. Das hat folgende Vorteile:

- Argumente können direkt durch GraphQL validiert werden.
- GraphQL weiß, dass ein Typ nur bestimmte Werte annehmen kann. Tools oder Optimierungen können das zu ihrem Vorteil nutzen.

Im Beispiel wird ein Typ `Episode` definiert, mit den möglichen Werten `NEWHOPE`, `EMPIRE` und `JEDI`. Großschreibung wird hier nicht gefordert, ist aber Konvention.
