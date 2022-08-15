// Cairo Coordinates
const lat = '30.005493'
const lon = '31.477898'
// Openweathermap API key
const apiKey = 'fef7810e8655183989fc8bcabdf75843'
// Set Units to Metric
const units = 'units=metric'
// Set the call URL
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&${units}`

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Get all data at app endpoint
const retrieveData = async () =>{
  const request = await fetch('/all');
  try {
  const allData = await request.json()
  console.log(allData)
  // Write updated data to DOM elements
  document.getElementById('temp').innerHTML = Math.round(allData.temp)+ 'degrees';
  document.getElementById('content').innerHTML = allData.feel;
  document.getElementById('date').innerHTML =allData.date;
  }
  catch(error) {
    console.log("Error: ", error);
  }
 }

// Async Get 
const getData = async (url='') => { 
    const response = await fetch(url)
    try {
    const allData = await response.json()
    console.log(allData)
    }
    catch(error) {
      console.log("error", error)
    }
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
    console.log(dataJSON)
    return dataJSON
  }
  catch(error) {
    console.log("Error: ", error)
  }
}

// getData('/all')
// getData(url)
postData('/addData', {name: 'Tazola', gender: 'Male'})
