---
title: GraphQL Serverseitig - Typen Beispiel Course
---

```javascript
const CourseType = new GraphQLObjectType({
    name: "Course",
    fields: {
        id: {
            type: new GraphQLNonNull(GraphQLInt),
            resolve: (value) => {
                return value.id;
            },
        },
        name: {
            type: new GraphQLNonNull(GraphQLString),
            resolve: (value) => {
                return value.name;
            },
        },
    },
});
```
