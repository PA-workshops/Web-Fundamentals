const unitDisplayValueMap = {
  imperial: 'F',
  metric: 'C',
  standard: 'Kelvin'
};

const API_KEY = '0fcc8d82213d6e2a6f0ee3fbf7ee556d';

async function getWeather() {
  const cityName = document.getElementById('city-dropdown').value;

  const units = document.getElementById('temperature-unit-dropdown').value;

  await _getWeatherForCityHelp(cityName, units);
}

async function _getWeatherForCityHelp(cityName, units) {
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${units}&appid=${API_KEY}`; // using string templates
  const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=' + units + '&appid=' + API_KEY;
  const response = await fetch(url);
  const weatherData = await response.json(); //extract JSON from the http response
  const feelsLikeTemp = weatherData.main.feels_like;
  const blurb = `It's currently ${feelsLikeTemp} °${unitDisplayValueMap[units]} outside in ${cityName}...`;
  document.getElementById('weather-blurb').innerHTML = blurb;

  const weatherIconCode = weatherData.weather[0].icon;
  getWeatherIcon(weatherIconCode);
}

function getWeatherIcon(iconCode) {
  // https://openweathermap.org/weather-conditions
  // const url = `http://openweathermap.org/img/wn/${iconCode}.png`; // using string templates
  const url = 'http://openweathermap.org/img/wn/' + iconCode + '.png';
  document.getElementById('weather-icon').src = url;
}
