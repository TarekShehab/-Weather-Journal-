# Landing Page

## Table of contents

- Project Files.
- Project description.
- How to run the project.
- Technologies used.
- Author's name.

## Project Files.

### server.js

    This file handles the GET & POST requests that come from the client side.

### app.js

    The file is simply consists of three parts: Global variables, Functions, and build call.

    - Global Variables -

        • apiKey: The key that enables us to use the API.
        • units: The part of the call url that sets units to metric.
        • urlFront: The first part of the base url.
        • urlEnd: The last part of the base url.
        • newDate: The date that is displayed in the DOM.
        • genButton: The button in the document that we will add the click event listener to.



    - Functions -
        • retrieveAppData(): Get the data stored in the server.
        • postData(url, data): Stores the data fetched from the API in the server.
        • getWeatherData(zip): Fetches the weather data from the API using the ZIP code the user entered.
        • postWeather(userResponse): Utelizes the last three methods to get data from API, store data in server, and getting this data to display on the DOM.
        • buildApp(): builds the app functionality by adding the event listener to the buttom in the document.



    - Build Call -
        Calling the build function to build the whole app.

## Project Description.

    The project is a weahter journal app. Weather data is fetched from an API from https://openweathermap.org. The project is for learning purposes as a part of the Udacity professional web development nanodegree.

## Instructions on how to run the project.

1- Write following commands in your terminal to install dependencies:

```
cd <project's directory>
npm install
```

2- run the server file through this command:

```
node server.js
```

3- Open your browser on this link:

```
http://localhost:8000
```

then open your browser on: `http://localhost:1234/`

## Technologies used.

- HTML
- CSS
- Javascript
- Node
- Parcel bundler

## Author's name.

    Tarek Shehabeldin Ibrahim.
    Connect with me on LinkedIn: https://www.linkedin.com/in/tarek-shehab-381848156/
