const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('It works? What kind of magic is that???!!!'));
app.get('/', (req, res) => res.send('Testing DevOps CI/CD!!!'));


app.listen(port);
console.log(`App running on http://localhost:${port}`);
