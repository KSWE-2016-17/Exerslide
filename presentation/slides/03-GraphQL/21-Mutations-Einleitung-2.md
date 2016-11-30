---
title: Mutations - Einleitung 2
---

Mithilfe von Mutations werden Daten auf dem Server manipuliert.<br>
Im Beispiel wird eine Review zu einem bereits eingetragenen Film hinzugefügt.<br>
Das sieht in etwa wie eine Query mit Argumenten aus. Es wird die Mutation `createReview` aufgerufen, welche die Argumente `ep` für Episode und `review` für ReviewInput entgegen nimmt. `ReviewInput` ist dabei ein neuer Typ, mit weiteren Feldern. Zuletzt werden dann noch die Rückgabefelder bestimmt. Auch mutations müssen immer etwas zurückliefern.

<div class="callout secondary"><i class="fa fa-info-circle" aria-hidden="true">
</i> <strong>Mutations vs. Queries</strong>

Technisch gesehen könnten Queries alle Probleme bewältigen, die auch Mutations bewältigen könnten, da die Logik vom Server frei implementiert werden kann. Bei dem Schlüsselwort geht es daher eher um eine Abgrenzung des Einsatzgebiets.

</div>
