---
title: GraphQL Clientseitig - Beispiel 2
---

```
{
  search(first: 30 query: \"KSWE\" cursor: "xyz" type: USER) {
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
