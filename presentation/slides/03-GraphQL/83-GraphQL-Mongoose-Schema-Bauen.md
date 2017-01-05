---
title: GraphQL Mongoose - GraphQL Typ
---

```javascript
import {GQC} from "graphql-compose";

GQC.rootQuery().addFields({
    user: userTypeConverter.getResolver("findById"),
    users: userTypeConverter.getResolver("findMany"),
    profile: profileTypeConverter.getResolver("findById"),
    profiles: profileTypeConverter.getResolver("findMany"),
    preference: preferenceTypeConverter.getResolver("findById"),
    preferences: preferenceTypeConverter.getResolver("findMany"),
    message: messageTypeConverter.getResolver("findById"),
    messages: messageTypeConverter.getResolver("findMany"),
    friendRequest: friendRequestTypeConverter.getResolver("findById"),
    friendRequests: friendRequestTypeConverter.getResolver("findMany")
});

export default GQC.buildSchema();
```

Hier wird die `rootQuery` für GraphQL angelegt. Dazu werden alle benötigten Queries mithilfe der zuvor erstellten converter als Felder angelegt.<br>
Zuletzt wird das Schema dann mittels `buildSchema` gebaut und exportiert.<br>
Es wird auch eine `rootMutation` erstellt, die aber der Einfachheit halber ausgelassen wurde.
