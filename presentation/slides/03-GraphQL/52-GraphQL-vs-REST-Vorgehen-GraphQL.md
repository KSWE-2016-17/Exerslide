---
title: GraphQL vs. REST - Vorgehen GraphQL
---

Die Anforderung ließe sich über folgende GraphQL-Abfrage abrufen:

```
{
  user(login: $username) {
    starredRepositories(orderBy: {field: STARRED_AT, direction: DESC},
                        first: 30) {
      edges {
        node {
          name
          languages(first: 30) {
            edges {
              node {
                name
              }
            }
          }
        }
      }
    }
  }
}
```
