---
title: Datentypen - Skalare
---

GraphQL ermöglicht es einen Graphen aus Typen zu bauen. Irgendwann müssen die einzelnen Typen aber in echte Daten aufgelöst werden. Die Typen, die direkt aufgelöst werden, also die Blätter des Graphen, werden Skalare genannt.

Im Standart sind folgende Typen bereits enthalten:

- `Int` Vorzeichenbehaftete 32‐bit Ganzzahl.
- `Float` Vorzeichenbehaftete doppeltgenaue Fließkommazahl.
- `String` UTF‐8 Zeichensequenz.
- `Boolean` True oder False.
- `ID` Einzigartiger Identifizierer. Wird intern wie ein String behandelt und ist nicht menschenlesbar.

Neue Typen können mit dem `scalar` Schlüsselwort angelegt werden:

```
scalar Date
```
