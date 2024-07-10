const express = require('express')
const app = express();
const port = 8000;

app.get('/', (req, res) => {
    res.send("Ceva test")
})

app.listen(port, () => {
    console.log(`Aplicatia merge cu portul ${port}`)
})