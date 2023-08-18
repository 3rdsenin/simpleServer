const express = require('express');


const app = express();



app.get('/', (req, res) => {
    res.send("Welcome to test app!!!")
})


app.listen(8080, () => {
    console.log("listening on on port 8080")
})