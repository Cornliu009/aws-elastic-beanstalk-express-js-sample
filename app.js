const express = require('express');
const app = express();
const app2 = express();
const port = 8080;

app.get('/', (req, res) => res.send('It works? What kind of magic is that???!!!'));
app2.get('/', (req, res) => res.send('Testing DevOps CI/CD!!!'));


app.listen(port);
app2.listen(port);
console.log(`App running on http://localhost:${port}`);
