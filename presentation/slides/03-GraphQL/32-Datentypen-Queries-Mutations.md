---
title: Datentypen - Queries und Mutations
---

```
schema {
  query: Query
  mutation: Mutation
}
```

```
type Query {
  hero(episode: Episode): Character
  droid(id: ID!): Droid
}
```

Jedes Schema hat mindestens ein spezielles Querytyp Element und optional ein Mutationtyp Element.<br>
Diese sind Typen, die alle möglichen Queries bzw. Mutations definieren.<br>
Im Beispiel definiert der Querytyp eine `hero`-Query welche einen `Character` zurückliefert und eine `droid`-Query welche einen `Droid` zurückliefert.
