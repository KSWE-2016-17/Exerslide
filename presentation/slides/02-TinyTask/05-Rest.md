---
title: Rest mit Express
chapter: TinyTask
---

# Express
Express ist ein einfaches und flexibles Node.js-Framework von Webanwendungen, das zahlreiche leistungsfähige Features und Funktionen für Webanwendungen und mobile Anwendungen bereitstellt.

## Installation

Angenommen, Sie haben Node.js bereits installiert. Erstellen Sie ein Verzeichnis für Ihre Anwendung und definieren Sie dieses Verzeichnis als Ihr Arbeitsverzeichnis.

Installieren Sie jetzt Express im Verzeichnis und speichern Sie es in der Abhängigkeitsliste.
Beispiel:

```
install express --save
```

## Routing

Per Routing wird bestimmt, wie eine Antwort auf eine Clientanforderung an einem bestimmten Endpunkt antwortet. Dies ist eine URI (oder ein Pfad) und eine bestimmte HTTP-Anforderungsmethode (GET, POST usw.).

Jede Weiterleitung (Route) kann eine oder mehrere Handlerfunktionen haben, die ausgeführt werden, wenn die Weiterleitung abgeglichen wird.

Weiterleitungsdefinitionen haben die folgende Struktur:

```javascript
app.METHOD(PATH, HANDLER)
```

Bedeutung:
* app ist eine Instanz von express.
* METHOD ist eine HTTP-Anforderungsmethode.
* PATH ist ein Pfad auf dem Server.
* HANDLER ist die Funktion, die ausgeführt wird, wenn die Weiterleitung abgeglichen wird.

Die folgenden Beispiele veranschaulichen das Definieren einfacher Weiterleitungen.

```javascript
app.get('/', function (req, res) {
  res.send('GET request');
});

app.post('/', function (req, res) {
  res.send('POST request');
});
```

Mit der Hilfe von `app.route()`, können wir Anfragen zusammenfassen.

```javascript
app.route('/')
  .get(function (req, res) {
    res.send('GET request');
  })
  .post(function (req, res) {
    res.send('POST request');
  });
```

Eine simple Restschnittstelle, mit einer Json-Antwort, wäre:
```javascript
var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send({
    msg : 'Hey!'
  });
});
```

### Routeparameter
Routeparameter sind definierte URL Segemente, die dazu gedacht sind Werte mit der Route zu übermitteln. Diese werden dann, mit dem angegeben Namen und Wert aus der URL, in `req.params` abgespeichert.

Beispiel:
```javascript
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})
```

Würde uns vollgenedes zurückgeben:
```
Anfrage: http://localhost/users/34/books/8989
Antwort: req.params: { "userId": "34", "bookId": "8989" }
```

### Routenhandler

Sie können mehrere Callback-Funktionen angeben, die sich wie `Middleware` verhalten, um eine Anforderung zu verarbeiten. Die einzige Ausnahme hierbei ist, dass diese Callbacks möglicherweise `next('route')` aufrufen, um die verbleibenden Weiterleitungs-Callbacks zu umgehen.

Beispiel: Achten Sie darauf, dass Sie das Objekt `next` angeben

```javascript
app.get('/', function (req, res, next) {
  console.log('Erstart Callback');
  next();
}, function (req, res) {
  console.log("Zweiter Callback")
  res.send('hey!');
});
```


## Middleware
Middlewarefunktionen sind Funktionen, die Zugriff auf das Anforderungsobjekt (`req`), das Antwortobjekt (`res`) und die nächste Middlewarefunktion im Anforderung/Antwort-Zyklus der Anwendung haben. Die nächste Middlewarefunktion wird im Allgemeinen durch die Variable `next` bezeichnet.



<table>
<tr>
<td>
<img src="./images/rest/express-mw.png" style="margin: 0px; padding: 0px; width: 410px; height: 308px;">
Quelle: https://expressjs.com/de/guide/writing-middleware.html
</td>
<td style="vertical-align: top; position:relateive; width:500px;">
1. HTTP-Methode, für die die Middlewarefunktion angewendet wird.<br/>
2. Pfad (Weiterleitung), für den die Middlewarefunktion angewendet wird.<br/>
3. Die Middlewarefunktion.<br/>
4. Callback-Argument zur Middlewarefunktion, die nach der geltenden Konvention als "next" bezeichnet wird.<br/>
5. HTTP-Antwortargument zur Middlewarefunktion, die nach der geltenden Konvention als "res" bezeichnet wird.<br/>
6. HTTP-Anforderungsargument zur Middlewarefunktion, die nach der geltenden Konvention als "req" bezeichnet wird.<br/>
</td>
</tr>
</table>



### Entwicklung
Dies ist ein einfaches Beispiel einer Middlewarefunktion namens "logger". Diese Funktion gibt lediglich “LOGGED” aus, wenn eine Anforderung zur Anwendung über diese Funktion läuft. Die Middlewarefunktion ist der Variablen `logger` zugeordnet.

```javascript
var logger = function (req, res, next) {
  console.log('LOGGED');
  next();
};
```
Zum Laden der Middlewarefunktion rufen wir `app.use()` auf und geben die Middlewarefunktion an.
Beispiel: Durch den folgenden Code wird die Middlewarefunktion `logger` vor der Weiterleitung zum Stammverzeichnispfad (/) geladen.

```javascript
var express = require('express');
var app = express();

// Unsere Middleware
var logger = function (req, res, next) {
  console.log('LOGGED');
  next();
};

// Aufruf bevor Get / aufgerufen wird
app.use(logger);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000);
```

## Fehlerbehandlung

Middlewarefunktionen für die Fehlerbehandlung werden in derselben Weise definiert wie andere Middlewarefunktionen, nur, dass Fehlerbehandlungsfunktionen vier anstatt drei Argumente aufweisen: `(err, req, res, next)`.
Beispiel: Error 500

```javascript
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Etwas ist falsch gelaufen!');
});
```

Wir könnten auch mehrer Handler als Middleware definieren, die unterschiedliche Aktionen ausführenwenn ein Fehler auftaucht. Ggf wird ein Fehler in einer vorherigen Middleware abgefangen und verschickt eine Antwort an den Client.

```javascript
app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);
```

In unserem Beispiel würden wir erstmal unseren Fehler Loggen, zum Beispiel in einr Logdatei oder über die Konsole.

```javascript
function logErrors(err, req, res, next) {
  console.error(err.stack);
  next(err);
}
```

Anschließen schauen wir uns den `clientErrorHandler` an. Dieser soll überprüfen ob ein Token mitgeschickt wurde, ist dem nicht so, dann geben wir einen `500` Error, mit Fehlermeldung zurück. Sonst leiten wir mit `next` an den nächsten Callback weiter.

```javascript
function clientErrorHandler(err, req, res, next) {
  if (req.params.token) {
    res.status(500).send({ error: 'Kein Token' });
  } else {
    next(err);
  }
}
```

Der Handler `errorHandler` fängt unsere restlichen Fehler ab. Falls die Handler vorher keinen Response verschickt haben.

```javascript
function errorHandler(err, req, res, next) {
  res.status(500);
  res.render('error', { error: err });
}
```

Quelle: https://expressjs.com/
