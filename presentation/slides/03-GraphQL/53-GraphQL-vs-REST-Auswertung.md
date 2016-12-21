---
title: GraphQL vs. REST - Vorgehen GraphQL
---

Kriterium | GraphQL                                                                                              | REST
--------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Anfrage   | Es wird **eine** Anfrage gestellt, mit einem Body (340 Zeichen) der die benötigten Daten spezifiert. | Es werden **1 + [Anzahl der Repos]** GET-Anfragen gestellt, diese haben keinen Body, die benötigte Resource wird über die URL spezifiziert.
Antwort   | Es gibt eine Antwort, die alle benötigten Daten enthält (14900 Zeichen).                             | Die erste Antwort enthält alle Daten um die weiteren Anfragen zu stellen. Die Antwort ist hier im Beispiel 161684 Zeichen lang. Danach muss noch jeweils eine Anfrage pro Repo gestellt werden. Das waren im Beispiel 30\. Die erste Antwort als Beispiel war 86 Zeichen lang.
