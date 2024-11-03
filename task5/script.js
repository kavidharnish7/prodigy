// Replace with your WeatherAPI key
const apiKey = 'YOUR_WEATHER_API_KEY';

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  if (!city) {
    alert('Please enter a city name');
    return;
  }

  try {
    const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`);
    if (!response.ok) throw new Error('City not found');
    
    const data = await response.json();
    displayWeather(data);
  } catch (error) {
    document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
  }
}

function displayWeather(data) {
  const { name, country } = data.location;
  const { temp_c, condition } = data.current;
  
  document.getElementById('weatherResult').innerHTML = `
    <h2>Weather in ${name}, ${country}</h2>
    <p>Temperature: ${temp_c}°C</p>
    <p>Condition: ${condition.text}</p>
    <img src="https:${condition.icon}" alt="${condition.text}">
  `;
}
