---
title: Queries - Einleitung 2
---

Eine Anfrage an GraphQL setzt sich aus folgenden Bestandteilen zusammen:

- Das angefragte Objekt.
- Benötigte Felder des Objekts. Diese wurden vorher definiert und sind Typisiert.

```
{
  hero {
    name
    # Queries can have comments!
    friends {
      name
    }
  }
}
```

Felder können auch weitere Untertypen haben. Im Beispiel hat `hero` beispielsweise noch einen Untertyp `friends`.
