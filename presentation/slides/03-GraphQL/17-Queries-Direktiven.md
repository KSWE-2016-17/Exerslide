---
title: Queries - Direktiven
---

```
query Hero($episode: Episode, $withFriends: Boolean!) {
  hero(episode: $episode) {
    name
    friends @include(if: $withFriends) {
      name
    }
  }
}

Variablen:

{
  "episode": "JEDI",
  "withFriends": true
}
```
