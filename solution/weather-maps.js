const API_KEY = '0fcc8d82213d6e2a6f0ee3fbf7ee556d';

const cityToLatLonMap = {
  Boston: {
    lat: 42.3601,
    lon: -71.0589
  },
  'New York': {
    lat: 40.7128,
    lon: -74.006
  },
  'Los Angeles': {
    lat: 34.0522,
    lon: -118.2437
  }
};

const onCitySelected = () => {
  const selectedCity = document.getElementById('city-dropdown').value;
  document.getElementById('city-header').innerHTML = selectedCity + ' Weather Map:';

  const layer = 'temperature';
  const cityCoordinates = cityToLatLonMap[selectedCity];
  const lat = cityCoordinates.lat;
  const lon = cityCoordinates.lon;
  const zoom = 7;
  const url = `https://openweathermap.org/weathermap?basemap=map&cities=true&layer=${layer}&lat=${lat}&lon=${lon}&zoom=${zoom}`;

  document.getElementById('weather-map-iframe').src = url;
};
