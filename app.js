const express = require('express')
const app = express()
const port = 9700

app.get('/home', (req, res) => {
  res.send('Application started version 2')
})

app.get('/index', (req, res) => {
    res.send('Index page version 2')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})