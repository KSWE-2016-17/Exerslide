---
title: GraphQL Clientseitig - Aufbau der API
---

Die API ist in einige Wurzel-Queries und eine Reihe von Mutations aufgeteilt.<br>
Folgende Queries sind verfügbar:

Name            | Aufgabe
--------------- | -------------------------------------------------------------------------------------------------------------------------
search          | Sucht nach Resourcen
node            | Node ist ein Interface, von dem fast alle Typen erben. Es kann mit dieser Query direkt auf ein Objekt zugegriffen werden.
nodes           | Gibt mehrere Nodes auf einmal zurück
organization    | Liefert einee Organization, basierend auf dem Namen
repository      | Liefert ein Repository, basierend auf dem Namen de Repositories und dem des Besitzers
repositoryOwner | Liefert den Repositorybesitzer, basierend auf seinem Namen
resource        | Liefert eine Resource, basierend auf der URL
user            | Liefert einen User, basierend auf dem Namen
viewer          | Liefert den aktuell eingeloggten User

Von diesen Queries aus lassen sich durch Bewegen durch den Graphen alle benötigten Informationen abfragen.
