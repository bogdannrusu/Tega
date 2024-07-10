const express = require('express')
const app = express();
const mongoose = require('mongoose');
const port = 8000;
const uri = 'mongodb+srv://userBRS:Ban4ever@clustermain.vpwp2eh.mongodb.net/?retryWrites=true&w=majority&appName=ClusterMain'

app.listen(port, () => {
    console.log(`Aplicatia merge cu portul ${port}`)
})

mongoose.connect(uri).then(() => {
    console.log("Connected successfully")
})
.catch(() => {
    console.log("Connection failed")
})