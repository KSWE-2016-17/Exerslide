---
title: GraphQL Mongoose - Schema
---

```javascript
export default mongoose.model("User", new Schema({
    login: {type: String, required: true, description: "The name used for logging in."},
    password: {type: String, required: true, description: "The password."},
    role: {type: Number, required: true, description: "The role. Might be user or admin."}
}));
```

Hier wird das Schema für einen User angelegt. Es gibt die Felder `login`, `password` und `role`, welche jeweils mit einem Typ, ob sie `NULL` sein dürfen und einer Beschreibung angelegt werden.
