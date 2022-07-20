//Dependencies
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
console.log(PORT)

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to an Awesome App about Breads!')
})

// LISTEN
app.listen(PORT, () => {
  console.log('listening on port', PORT);
})
