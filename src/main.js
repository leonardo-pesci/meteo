// ^ Elementi



// ^ Variabili



// ^ Funzioni



// ^ Eventi




/*
// Recupero gli elementi di interesse dalla pagina
const htmlElement = document.documentElement;
const suggestion = document.querySelector('.suggestion');
const weatherIcon = document.querySelector('.weather-icon');
const weatherLocation = document.querySelector('.weather-location');
const weatherTemperature = document.querySelector('.weather-temperature');

// Provo a recuperare la mia posizione
navigator.geolocation.getCurrentPosition(onSuccess, onError);

// Funzione da eseguire in caso di errore
function onError() {
  // Preparo degli elementi in pagina per far capire che va attivata
  weatherLocation.innerText = '';
  weatherIcon.alt = "Geolocation disattivata";
  weatherIcon.src = "images/geolocation_disabled.png";
  suggestion.innerText = 'Attiva la geolocalizzazione'

  // Disattivare il loading
  htmlElement.className = '';
}

// Funzione da eseguire in caso di successo
async function onSuccess(position) {

  // Recupero latitudine e longitudine
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Prepariamoci a chiamare l'API do Open Weather
  const API_KEY = 'bd832622acc99b03e95f5648052a97cf';
  const units = 'metric';
  const lang = 'it';

  const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=${units}&lang=${lang}`;


  // Chiamo e API di Open Weather
  const response = await fetch(endpoint);
  const data = await response.json();

  console.log(data);

  const iconCode = data.weather[0].icon;
  const description = data.weather[0].description;

  // Riempio gli elementi della pagina
  weatherLocation.innerText = data.name;
  weatherIcon.alt = description;
  weatherIcon.src = `images/${iconCode}.png`;
  weatherTemperature.innerText = `${Math.floor(data.main.temp)}°`;
  suggestion.innerText = suggestions[iconCode];

  // Disattivare il loading
  htmlElement.className = '';
}

*/