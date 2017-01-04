---
title: GraphQL Clientseitig - Beispiel
---

```
{
  search(first: 30 query: \"%s\" %s type: USER) {
    pageInfo {
      endCursor
      hasNextPage
    }
    edges {
      node {
        ... on Organization {
          id
          login
          name
          avatarURL
        }
      }
    }
  }
}
```
