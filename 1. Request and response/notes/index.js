const express = require('express')
const app = express()
const port = 3000  // http://localhost:3000/

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.listen(port, () => {
//   console.log(`Manish app listening on port ${port}`)
// })

// requests ki kahani


// get requests

app.get('/' , (req,res) => {
    // res.send("Got a GET Request")
    res.sendFile('/dummy.html',{root:__dirname }) //root specify is necessory here
});

app.post('/items', (req,res) => {
    // res.send("Got a POST Request")
    res.json({x:1, y:2, z:3});
});

app.put('/items/:id' , (req,res) => {
    res.send("Got a PUT Request")
});

app.delete('/items/:id' , (req,res) => {
    res.send("Got a DELETE Request")
});


app.listen(port, () => {
console.log(`Manish app listening on port ${port}`)
})


//chaining of request   (//http://localhost:3000/items/hi)

app.get('/items/hi' , (req,res) => {
    // res.send("Got a GET Request")
    res.sendFile('/dummy.html',{root:__dirname }) //root specify is necessory here
}).post('/items', (req,res) => {
    // res.send("Got a POST Request")
    res.json({x:1, y:2, z:3});
}).put('/items/:id' , (req,res) => {
    res.send("Got a PUT Request")
}).delete('/items/:id' , (req,res) => {
    res.send("Got a DELETE Request")
});