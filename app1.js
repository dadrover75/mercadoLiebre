const express = require('express');
const path = require('path');
const app = express();
const port = 3030
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname + '/views/home1.html'))
})

app.listen(3030, () => console.log('Escuchando en el puerto'))