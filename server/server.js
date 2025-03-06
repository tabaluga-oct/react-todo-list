// Import von benötigen Modulen
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const taskRouter = require('./routes/tasks');

const app = express();  // Express-App erstellen

// Verbindung zur MongoDb-Datenbank
mongoose.connect('mongodb://127.0.0.1:27017/aufgabenverwaltung', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('✅ DB-Verbindung erfolgreich.'))
    .catch(err => console.error('❌ DB-Verbindung fehlgeschlagen:', err));

// Middleware-Einstellung
app.use(express.json());  // Ermöglicht das Parsen von JSON im Request-Body
app.use(cors());  // Erlaubt Cross-Origin-Anfragen (Standardmäßig alle Domains)

// API-Routen für Aufgabenverwaltung
app.use('/tasks', taskRouter);  // Alle Routen unter '/routes/tasks' verwenden das 'taskRouter'-Modul

// Server starten
const PORT = 5001
app.listen(PORT, () => {
    console.log(`✅ Server läuft auf http://localhost:${PORT}`);
})
