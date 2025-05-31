const express = require('express')
const app = express()
const port = 3000

// loading route module
const route = require('./routes/route')

// mounting the route
app.use('/api', route)


// ->  /api/student
// ->  /api/admin



// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



