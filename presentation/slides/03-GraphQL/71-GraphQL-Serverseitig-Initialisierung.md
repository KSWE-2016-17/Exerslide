---
title: GraphQL Serverseitig - Initialisierung
---

```javascript
const app = express();

app.use("/", graphqlHTTP({
    schema: schema,
    graphiql: true
}));

const server = app.listen(PORT);
```

Im ersten Schritt wird die Middleware installiert.<br>
Anschließend wird dann das GraphqlHTTP Modul (`graphql-express` Package) eingebunden und das Schema übergeben.<br>
Im letzten Schritt wird dann der Server gestartet.
