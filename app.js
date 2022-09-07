const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/login', (req, res) => {
  res.send('login')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post("./data/", (req, res) => {
    console.log(req.body)
})
