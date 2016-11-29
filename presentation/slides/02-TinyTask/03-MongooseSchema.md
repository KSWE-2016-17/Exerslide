---
title: Mongoose Schema
chapter: TinyTask
---

## Vorbereitung
Falls noch nicht geschehen npm initialisieren und mongoose installieren.

```
npm init
npm install mongoose
```

## Installation

Der folgende Befehl installiert das TinyTask Schema in die aktuelle npm app. 

```
npm install git+https://github.com/KSWE-2016-17/TinyTaskDB
```

## Beispiel

Das Schema kann wie folgt genutzt werden.

```javascript
var mongoose = require("mongoose");
var TinyTaskDB = require("tinytaskdb");

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/test');

var user = new TinyTaskDB.User({
    _id: "cem.basoglu@web.de",
    displayName: "cemizm",
    picture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y",
    address: "Campus Str. 10 Minden"
});

user.save(function (err) {
    if (err) return console.log(err);

    var task = new TinyTaskDB.Task({
        _id: 1,
        createdBy: user._id,
        name: 'Süßes kaufen...',
        description: 'wäre nice wenn mir jemand was mitbringen könnte',
        payment: 2.50,
        position: {
            latitude: 52.296424,
            longitude: 8.904841
        },
        category: "shppping"
    });

    task.save(function (err) {
        if (err) return console.log(err);

        console.log("success");
    });
})
```
