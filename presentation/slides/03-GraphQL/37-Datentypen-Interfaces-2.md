---
title: Datentypen - Interfaces 2
---

Interfaces sind, wie in vielen anderen Typsystemen auch, abstrakte Typen, die gleiche Eigenschaften von mehreren anderen Typen vereinen.<br>
Im Beispiel gibt es ein Interface `Character`, welches die Eigenschaften `id`, `name`, `friends` und `appearsIn` hat. Diese werden dann von `Human` und `Droid` implementiert, also besitzen diese Typen auch diese Felder.<br>
Weiterhin besitzen die Typen `Human` und `Droid` aber noch eigene Felder.<br>
Human hat beispielsweise noch ein weiteres Feld `totalCredits`, welches bei `Droid` nicht auftaucht.
