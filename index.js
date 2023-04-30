const express = require('express')
const env = require('dotenv').config()
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen('3000')