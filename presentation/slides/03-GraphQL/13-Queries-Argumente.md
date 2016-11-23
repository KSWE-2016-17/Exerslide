---
title: Queries - Argumente
---

```
{
  human(id: "1000") {
    name
    height(unit: FOOT)
  }
}
```

Queries können Argumente haben. In diesem Fall wird das Argument `id` mit dem
Wert **1000** und das Argument `unit` mit dem Wert **FOOT** übergeben.  
Jedem Typ auf dem Weg können Argumente übergeben werden, sofern definiert.
