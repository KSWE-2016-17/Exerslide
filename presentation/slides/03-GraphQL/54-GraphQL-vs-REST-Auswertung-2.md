---
title: GraphQL vs. REST - Auswertung 2
---

Hier wird deutlich der Vorteil von GraphQL sichtbar. Im Beispiel war für die gewünschten Informationen insgesammt nur eine Anfrage nötig. Bei REST waren es insgesammt 31\. Allein das führt schon zu längeren Wartezeiten und einem höheren Resourcenverbrauch aufgrund des Https-Overheads (Schlüsselausstausch, Verbindung einrichten, ...). Zudem ist die Implementierung auf Clientseite eventuell schwieriger (Synchronisierung von vielen Anfragen, \"Was passiert wenn Abfrage \#17 scheitert?\").<br>
Hinzu kommt noch, dass die pure Datenmenge bei REST deutlich größer war, da immer alle Daten die irgendwie im Zusammenhang mit der Resource stehen übertragen wurden. Die Anzahl der Zeichen war hier im Gegensatz zu GraphQL circa 10 mal so groß (14900 zu ~161000). Das kann bei großen Datenmengen einen großen Unterschied in der Performance machen.  
Der einzige Nachteil von GraphQL ist, dass die benötigten Daten über den POST-Body mitgegeben werden müssen. Das waren im Beispiel 340 Zeichen.
