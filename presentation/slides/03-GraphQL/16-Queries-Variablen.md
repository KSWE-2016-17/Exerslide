---
title: Queries - Variablen
---

```
query HeroNameAndFriends($episode: Episode) {
  hero(episode: $episode) {
    name
    friends {
      name
    }
  }
}

Variablen:

{
  "episode": "JEDI"
}
```

Variablen machen die Queries dynamischer und wiederverwendbarer. In einer dynamischen Komponente soll beispielsweise abhängig von einem Filter verschiedene Daten geladen werden. Dafür sind Variablen nützlich, die in einem eigenen Dictionary zusammen mit der Query versandt werden.<br>
Im Beispiel wird die Variable `episode` genutzt.
