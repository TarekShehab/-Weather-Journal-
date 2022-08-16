// Openweathermap API key
const apiKey = config.OpenWeatherMap_key
// Set Units to Metric
const units = 'units=metric'
// Set the call URL
const urlFront = 'https://api.openweathermap.org/data/2.5/weather?zip='
const urlEnd = `&appid=${apiKey}&${units}`

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Get all data at app endpoint and update the DOM
const retrieveAppData = async () =>{
  const request = await fetch('/all');
  try {
  const dataJSON = await request.json()
  document.getElementById('date').innerHTML = `Date: ${dataJSON.userResponse.date}`;
  document.getElementById('temp').innerHTML = `Temprature: ${Math.round(dataJSON.main.temp)} °C`
  document.getElementById('content').innerHTML = `Feeling: ${dataJSON.userResponse.feeling}, From ${dataJSON.name}`
  }
  catch(error) {
    console.log("Error: ", error);
  }
}

// Async Post (Helper for postWeather())
const postData = async (url='', data={}) => {
  
  const request = await fetch(url, {
    method: 'POST',
    credetials: 'same-origin',
    headers:{'Content-Type': 'application/json'},
    body: JSON.stringify(data)
  })  
  try{
    const dataJSON = await request.json()
    return dataJSON
  }
  catch(error) {
    console.log("Error: ", error)
  }
}

// Get Weather Data from API (Helper for postWeather())
const getWeatherData = async (zip) => { 
  const callURL = urlFront + zip + urlEnd 
  const response = await fetch(callURL)
  const dataJSON = await response.json()
  console.log(dataJSON)
  return dataJSON  
}

// Post Weather from API to app Endpoint and updates DOM
const postWeather = async (userResponse={}) => {
  const zip = userResponse.zip
  getWeatherData(zip).then( 
    (data) => {
      data.userResponse = userResponse
      postData('/addData', data)
      retrieveAppData()
    })
}

const buildApp = () => {
  const genButton = document.getElementById('generate')
  // Click event listener to handle ubmit
  genButton.addEventListener('click', () => {
    const zip = document.getElementById('zip').value
    const feeling = document.getElementById('feelings').value
    const userResponse = {
      zip: zip,
      feeling: feeling,
      date: newDate
    }
    postWeather(userResponse)
  })
}

buildApp()