const express = require('express');


const app = express();
const PORT = 3000;



app.get('/', (req, res) => {
    res.send("Welcome to test app!!!")
})

app.get('/:id', (req, res) => {
    res.send(`Welcome to test app ${req.params.id}`)
})

app.listen(PORT, () => {
    console.log(`listening on on port ${PORT}`)
})