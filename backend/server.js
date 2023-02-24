const express = require("express");
const app = express();

const port = 5000;

app.get('/', (req, res) => {
    res.send('joel!')
})

app.get('/hari/', (req, res) => {
    res.send('Hai Hari');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})