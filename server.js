// Endpoint for all routes
projectData = {}
let entryCount = 1

// Cairo Coordinates
const lat = '30.005493'
const lon = '31.477898'
// Openweathermap API key
const apiKey = 'fef7810e8655183989fc8bcabdf75843'
// Set Units to Metric
const units = 'units=metric'
// Set the call URL
const callURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&${units}`

// Require Express, Body Parser, and CORS
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// Start up an instance of app
const app = express()

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
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

// Return API Weather data 
// app.get(callURL, (req, res) => {
//     console.log(req.body)
//     res.send(req.body)
// })

// Post to projectData
app.post('/addData', (req, res) => {
    const entry = "Entry"+ entryCount
    projectData[entry] = req.body
    entryCount++
    console.log(projectData)
})
