# Trina's React Weather App
[![Netlify Status](https://api.netlify.com/api/v1/badges/93c5450c-e466-4130-8068-adfd7764e196/deploy-status)](https://app.netlify.com/sites/trina-react-weather/deploys)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat&logo=appveyor)](https://opensource.org/licenses/MIT)

Weather app showing a 5-day forecast for whatever location the user chooses to search for.  
This React weather app is deployed here: https://trina-react-weather.netlify.app/

## Project Description
This is a solo front end project to make a weather app using React.  

## Installation and Usage
### Installation
 * Clone this repo and navigate to root directory
 * Terminal: `cd weather-app`
### Usage
 * In `weather-app` directory, run `npm install` then `npm run start`, it should automatically load on `http://localhost:3000`
 
### API Keys
You will need to make a `.env` file in the `weather-app` folder containing 3 API keys to run this project locally:
```
REACT_APP_UNSPLASH_KEY=your_API_key
REACT_APP_OPENWEATHER_KEY=your_API_key
REACT_APP_GOOGLE_API_KEY=your_API_key
```

## Technologies:
- React
- CSS
- Node.js

This app consumes several APIs:
- [OpenWeatherMap API](https://openweathermap.org/api) for live weather data and weather forecast data
- [Google Time Zone API](https://developers.google.com/maps/documentation/timezone/overview) for getting local time and dates for whichever city/country the user searches for
- [Unsplash API](https://api.unsplash.com/) for background images relating to the city/country
- [Stoic Quotes API](https://stoicquotesapi.com/) for generating quotes from the great stoics

## Planning and Delivery
### Planning
* Planned out the layout by looking on Dribbble, followed Medium tutorial [here](https://medium.com/pixels-in-progress/a-simple-weather-app-with-react-16a49e89b539) by Nitin Sampathi
* Watched SheCodes video for React refresher
* Planned out how state would be managed in React components- to avoid complexity I did not use Redux

### Delivery
* Deployed client on Netlify [here](https://trina-react-weather.netlify.app/)
 
## Wins & Challenges

### Wins
- Implemented celsius to fahrenheit conversion by managing state
- Figured out how to use Google Time Zone and dayjs to convert time to the searched city's local time 
- Changing background dynamically according to searched city using Unsplash API
- Finished in 3 days!

### Challenges
- Understanding UTC, timezone offsets and how this fits within the code
- Refactoring code and breaking everything
- Getting IP banned by OpenWeatherMap because I did 1106 calls per minute

## Future Features
- When the quote is a bit longer, it looks funny on different phones and overlaps with forecast. Would like to fix this and make it more responsive
- Adding the option to favourite a city and have it show on a different page, maybe using localStorage

## Final Look
![weatherapp-1](https://user-images.githubusercontent.com/92634994/180082429-b431ea11-82d9-4584-9f6e-030098a035b3.png)

