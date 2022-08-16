// Endpoint for all routes
projectData = {}
let entryCount = 1

// Require Express, Body Parser, and CORS
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Start up an instance of app
const app = express()

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Initialize main folder
app.use(express.static('website'));

// Setup Server
const port = 8000
const server = app.listen(port, () => {
    console.log('Server running')
    console.log(`Running on localhost: ${port}`)
})

// Return projectData
app.get('/all', (req, res) => {
    console.log(projectData)
    res.send(projectData)
})

// Post to projectData
app.post('/addData', (req, res) => {
    // const entry = "Entry"+ entryCount
    // projectData[entry] = req.body
    // entryCount++
    // console.log(projectData)
    projectData = req.body
})
