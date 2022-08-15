// Cairo Coordinates
const lat = '30.005493'
const lon = '31.477898'
// Openweathermap API key
const apiKey = 'fef7810e8655183989fc8bcabdf75843'
// Set Units to Metric
const units = 'units=metric'
// Set the call URL
const callURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&${units}`

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Get all data at app endpoint
const retrieveAppData = async () =>{
  const request = await fetch('/all');
  try {
  const dataJSON = await request.json()
  document.getElementById('date').innerHTML = `Date: ${newDate}`;
  document.getElementById('temp').innerHTML = `Temprature: ${Math.round(dataJSON.Entry1.main.temp)} degrees`
  document.getElementById('content').innerHTML = `Feels Like: ${dataJSON.Entry1.main.feels_like}`
  }
  catch(error) {
    console.log("Error: ", error);
  }
}

// Get Weather Data from API (Helper for postWeather())
const getWeatherData = async () => { 
    const response = await fetch(callURL)
    const dataJSON = await response.json()
    console.log(dataJSON)
    return dataJSON
    
}

// Async Post
const postData = async (url='', data={}) => {
  
  const request = await fetch(url, {
    method: 'POST',
    credetials: 'same-origin',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })  
  try{
    const dataJSON = await request.json()
    // console.log(dataJSON)
    return dataJSON
  }
  catch(error) {
    console.log("Error: ", error)
  }
}

// Post Weather from API to app Endpoint and updates DOM
const postWeather = async () => {
  getWeatherData().then( (data) => {
    postData('addData', data)
  }).then(retrieveAppData())
}

// postWeather()
