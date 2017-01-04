---
title: GraphQL Serverseitig - Schema
---

```javascript
const schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "RootQueryType",
        fields: {
            students: {
                type: new GraphQLList(StudentType),
                resolve: () => {
                    return students;
                },
            },
            courses: {
                type: new GraphQLList(CourseType),
                resolve: () => {
                    return courses;
                },
            },
        },
    }),
    ...
```
