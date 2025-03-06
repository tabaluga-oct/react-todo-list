# Aufgabenverwaltung

## Projektbeschreibung
**Aufgabenverwaltung** ist ein einfaches To-Do-Listen-System. Eine Aufgabe enthält einen **Titel**, ein **Fälligkeitsdatum**, und einen **Status**. Der Benutzer kann Aufgaben hinzufügen, aktualisieren und löschen.

## Features
- CRUD-Operationen (Create, Read, Update, Delete)
- MongoDB-Datenbankanbindung
- Benutzerfreundliche Oberfläche

## Technologien
- **Frontend:** React, CSS
- **Backend:** Node.js, Express.js, Mongoose
- **Datenbank:** MongoDB

## Installation
### Voraussetzungen
- **Node.js** 
- **MongoDB**

### Schritte
1. Projekt herunterladen oder klonen
2. Zum Projektverzeichnis navigieren
3. Dependencies instalieren: ````npm install````
4. Die Anwendung starten: in beiden Ordnern den Befehl ````npm start```` im Terminal ausführen
5. Datenbank einrichten (falls nicht vorhanden)

## Projektstruktur
````
project: Aufgabenverwaltung
│-- /client 
    |-- /public (index.html)
    │-- /src (components, index.js, App.js, App.css)
│-- /server 
    │-- /models (Data-Schema)
    │-- /routes (tasks.js)
    │-- server.js
````
## Zukünftige Erweiterungen
- Kategorien oder Priotität für Aufgaben
- Authentifizierung