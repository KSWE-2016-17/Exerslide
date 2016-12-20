---
title: Datentypen - Unions
---

```
union SearchResult = Human | Droid | Starship
```

```
{
  search(text: "an") {
    ... on Human {
      name
      height
    }
    ... on Droid {
      name
      primaryFunction
    }
    ... on Starship {
      name
      length
    }
  }
}
```
