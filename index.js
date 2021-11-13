const API_KEY = '0fcc8d82213d6e2a6f0ee3fbf7ee556d';

const unitDisplayValueMap = {
  imperial: 'F',
  metric: 'C'
};

async function getWeather() {
  // TODO 3a): get city name from dropdown
  const cityName = document.getElementById('city-dropdown').value;
  // TODO 3a): get temperature unit from dropdown
  // TODO 3b): Use city name and temperature unit to build + send http request to https://api.openweathermap.org/data/2.5/weather
  // TODO 3c): Get the "feels like" temperature from the JSON response
}
