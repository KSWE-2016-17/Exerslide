---
title: GraphQL Clientseitig - Beispiel 3
---

Diese Query gibt alle Organizationen aus, die zu dem Suchbegriff \"KSWE\" passen. Dazu werden folgende Argumente übergeben:

first                                                                                                                                            | query           | cursor                                             | type
------------------------------------------------------------------------------------------------------------------------------------------------ | --------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------
Es sollen die ersten 30 Ergebnisse zurückgegeben werden. GitHub beschränkt die Anzahl der Ergebnisse die geliefert werden können auf maximal 30. | Der Suchbegriff | Der Cursor für Paging, später genauer Beschrieben. | Der Typ der Anfrage. Die `search` Query kann auch nach anderen Dingen suchen, in diesem Fall wird `USER` gewählt, unter die Organizationen fallen.
