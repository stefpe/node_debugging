const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const a = 10;
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});