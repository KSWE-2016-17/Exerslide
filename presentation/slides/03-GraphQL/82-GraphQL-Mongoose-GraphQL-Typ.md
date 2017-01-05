---
title: GraphQL Mongoose - GraphQL Typ
---

```javascript
const userTypeConverter = composeWithMongoose(userModel, {});

userTypeConverter.addRelation("profile", () => ({
    resolver: profileTypeConverter.get("$findOne"),
    args: {
        filter: (source) => ({
            user_id: source.id
        })
    },
    projection: {id: 1}
}));
```

Mit Hilfe der `composeWithMongoose`-Funktion wird ein GraphQL-Typ erstellt, der bereits alle Felder des Users beinhaltet. Dabei werden auch die `required` und `description` Werte übernommen. Mithilfe des `userTypeConverter`s wird dann die Relation zu dem `Profil` realisiert (Vom User soll über GraphQL auf das Profil zugegriffen werden können). Dazu wird die Relation benannt, eine `resolver`-Funktion zum Auflösen, die benötigte `filter`-Funktion und die `projection`, also die benötigten Werte zum filtern, übergeben.
