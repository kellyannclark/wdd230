
function getWeatherForecast() {
    const apiKey = '15a1ab955380b7a83ec1c9828e8bc826';
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=McCall,us&units=imperial&appid=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherData = data.list.slice(0, 2);
        const forecastHtml = weatherData.map((weather) => {
          const date = new Date(weather.dt_txt);
          const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
          const time = date.toLocaleTimeString('en-US', { hour: 'numeric' });
          const iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`;
  
          return `
            <div class="weather-item">
              <div class="weather-time">${dayOfWeek} ${time}</div>
              <img src="${iconUrl}" alt="${weather.weather[0].description}">
              <div class="weather-temp">${Math.round(weather.main.temp)}&deg;F</div>
            </div>
          `;
        }).join('');
  
        document.getElementById('weather-forecast').innerHTML = `
          <h2>Two Day Weather Forecast</h2>
          <div class="weather-container">
            ${forecastHtml}
          </div>
        `;
      })
      .catch(error => console.log(error));
  }
  ``
  