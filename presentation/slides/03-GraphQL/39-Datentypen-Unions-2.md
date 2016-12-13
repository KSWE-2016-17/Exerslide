---
title: Datentypen - Unions 2
---

Unions beschreiben einen neuen Typ, der sich aus anderen Typen zusammensetzt. Im Gegensatz zu Interfaces haben diese aber keinerlei gleichen Felder und es müssen immer inline Fragmente verwendet werden.<br>
Im Beispiel wird ein Typ `SearchResult` definiert, welcher sich aus den Typen `Human`, `Droid` und `Starship` zusammensetzt.<br>
Bei der Anfrage wird dann beispielsweise im Fall von einem `Human` `name` und `height` angefragt.
