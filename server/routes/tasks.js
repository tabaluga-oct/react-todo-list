// Aufgaben-Routen (CRUD-Operationen)
// Nutzen von async/await für asynchrone Anfragen
// Fehlerbehandlung mit try-catch

const express = require('express');
const Task = require('../models/Task');  
const router = express.Router();

// alle Aufgaben abrufen
router.get('/', async(req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: 'Serverfehler: ' + err.message });
    }
});

// eine neue Aufgabe erstellen
router.post('/create', async(req, res) => {
    try {
        const { title, dueDate, status } = req.body;

        // Validierung: Pflichtfelder prüfen
        if (!title) {
            return res.status(400).json({ message: 'Titel ist erforderlich.' });
        }
        const task = new Task({ title, dueDate, status });
        const newTask = await task.save();  // in der Datenbank speichern

        res.status(201).json(newTask);  // sendet die erstellte Aufgabe an den Client
    } catch (err) {
        res.status(400).json({ message: 'Fehler beim Erstellen: ' + err.message });
    }
})

// eine Bestehende Aufgabe aktualisieren
router.put('/:id', async(req, res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            req.body,  // Alle Felder aus dem Request aktualisieren
            { new: true, runValidators: true}  // Gibt das aktualisierte Dokument zurück & führt Validierung durch
        );

        if (!updatedTask) {
            return res.status(404).json({ message: 'Aufgabe nicht gefunden' });
        }

        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ message: 'Fehler beim Aktualisieren: ' + err.message });
    }
});

// eine Aufgabe löschen
router.delete('/:id', async(req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);

        if (!deletedTask) return res.status(404).json({ message: 'Aufgabe nicht gefunden' });

        res.json({ message: 'Aufgabe erfolgreich gelöscht.' });
    } catch (err) {
        res.status(500).json({ message: 'Fehler beim löschen: ' + err.message });
    }
});

module.exports = router;  // export the router to be used in server.js

// 400 Bad Request, wenn die id kein gültiges MongoDb-Format hat
// 404 Not Found, wenn die Aufgabe nicht existiert
// 500 Internal Server Error, wenn MongoDb oder der Server abstürzt
