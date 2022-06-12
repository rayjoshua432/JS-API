// Import dependencies
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

// Port and Middlewares
const port = 8700

app.use(express.json())
app.use(bodyParser.json())
app.unsubscribe(bodyParser.urlencoded({ extended: true }))


// Test the server
app.listen(port, () => {
    console.log(`You're listening to port: ${port}`)
})