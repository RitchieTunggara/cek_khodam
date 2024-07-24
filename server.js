const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');
const app = express();
const db = new sqlite3.Database('./db.sqlite');

app.use(express.static('public'));
app.use(bodyParser.json());

db.serialize(() => {
    db.run('CREATE TABLE IF NOT EXISTS numbers (id INTEGER PRIMARY KEY, number INTEGER)');
});

app.post('/save-number', (req, res) => {
    const number = req.body.number;
    db.run('INSERT INTO numbers (number) VALUES (?)', [number], function(err) {
        if (err) {
            return res.json({ success: false });
        }
        res.json({ success: true });
    });
});

app.get('/get-numbers', (req, res) => {
    db.all('SELECT number FROM numbers', (err, rows) => {
        if (err) {
            return res.json({ numbers: [] });
        }
        res.json({ numbers: rows.map(row => row.number) });
    });
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});