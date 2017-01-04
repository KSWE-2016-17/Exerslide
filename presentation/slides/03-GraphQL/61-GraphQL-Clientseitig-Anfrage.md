---
title: GraphQL Clientseitig - Senden einer Anfrage
---

Nachdem man sich bei dem Early Access Programm registriert hat und ein OAuth Token erstellt hat, kann die API verwendet werden. Das findet über normale HTTP Anfragen statt

```
curl -H "Authorization: bearer token" -X POST -d '
{
 "query": "query { viewer { login }}"
}
' https://api.github.com/graphql
```

Hier werden (über den `Authorization` Header) das OAuth Token und die Query als Body an die Api übergeben.<br>
Desweiteren ist zu beachten, dass die Http Methode `POST` sein muss, da `GET` Anfragen, keinen Body haben können.
