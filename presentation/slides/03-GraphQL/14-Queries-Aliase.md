---
title: Queries - Aliase
---

```
{
  empireHero: hero(episode: EMPIRE) {
    name
  }
  jediHero: hero(episode: JEDI) {
    name
  }
}
```

Wenn der selbe Typ mehrfach mit verschiedenen Argumenten aufgerufen werden soll, kommt es zu Problemen. Dafür gibt es Aliase, die den gleichen Typ referenzieren, aber verschieden heißen. In diesem Beispiel sind das `empireHero` und `jediHero`.
