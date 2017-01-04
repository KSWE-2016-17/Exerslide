---
title: GraphQL Serverseitig - Schema 2
---

Es wird nun das Schema angelegt. Es wird nun die Root-Query angelegt (Hier mit `RootQueryType` benannt) und die einzelnen Queries der API als Felder (`fields`) übergeben.<br>
Auch hier gibt es wieder einen Typ und eine Funktion, die bestimmt wie die Daten aufgelöst werden.<br>
Im Beispiel gibt es eine Query `students`, die eine Liste (`GraphQLList`) vom Typ `StudentType` zurückgibt. Die `resolve`-Funktion gibt wieder einfach nur die `students`-Liste im Speicher zurück. Zusätzlich gibt es dann noch eine Root-Mutation, die hier aber der Einfachheit weggelassen wurde.
