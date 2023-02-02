const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');


// Declare a const variable name "url" and assign it a valid URL string
const url = 'https://api.openweathermap.org/data/2.5/weather';

// Use the Current Weather API and start a query string
const apiKey = '15a1ab955380b7a83ec1c9828e8bc826';
const city = 'Spanish Fork';
const units = 'imperial';
const queryString = `?q=${city}&appid=${apiKey}&units=${units}`;

const fullURL = url + queryString;

async function apiFetch() {
  try {
    const response = await fetch(fullURL);
    if (response.ok) {
      const data = await response.json();
      //console.log(data); // testing only
      displayResults(data); // uncomment when ready
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

apiFetch();

function displayResults(data) {
  currentTemp.innerHTML = `${data.main.temp}&deg;F`;
  const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
  let desc = data.weather[0].description;
  weatherIcon.setAttribute('src', iconsrc);
  weatherIcon.setAttribute('alt', desc);
  captionDesc.textContent = `${desc}`;
}


