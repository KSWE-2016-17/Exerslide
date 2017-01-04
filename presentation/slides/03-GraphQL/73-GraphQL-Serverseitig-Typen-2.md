---
title: GraphQL Serverseitig - Typen Beispiel Course 2
---

Hier wird der `CourseType` definiert, der später im Schema genutzt wird. Dazu wird ein neues Object vom Typ `GraphQLObjectType` angelegt, dem der `name` und die Felder (`fields`), die der Typ haben soll, mitgegeben werden.<br>
Jedes Feld hat wieder einen Typ (in den meisten Fällen ein scalar) und eine Funktion, die spezifiziert, wie das Feld aufgelöst wird.<br>
Im Beispiel werden einfach direkt die Felder zurückgegeben.
