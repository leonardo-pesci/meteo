// ^ Elementi
const htmlElement = document.documentElement
const locationText = document.querySelector('#location')
const img = document.querySelector('#weatherImg')
const temperatureText = document.querySelector('#temperatureText')
const suggestionText = document.querySelector('#suggestionText')



// ^ Variabili
let suggestions = {
    '01d': 'Ricordati la crema solare!',
    '01n': 'Buonanotte!',
    '02d': 'Oggi il sole va e viene...',
    '02n': 'Attenti ai lupi mannari...',
    '03d': 'Luce perfetta per fare foto!',
    '03n': 'Dormi sereno :)',
    '04d': 'Che cielo grigio :(',
    '04n': 'Non si vede nemmeno la luna!',
    '09d': 'Prendi l\'ombrello',
    '09n': 'Copriti bene!',
    '10d': 'Prendi l\'ombrello',
    '10n': 'Copriti bene!',
    '11d': 'Attento ai fulmini!',
    '11n': 'I lampi accendono la notte!',
    '13d': 'Esci a fare un pupazzo di neve!',
    '13n': 'Notte perfetta per stare sotto il piumone!',
    '50d': 'Accendi i fendinebbia!',
    '50n': 'Guida con prudenza!'
};
  


// ^ Funzioni
let onError = () => {
    // Preparo degli elementi in pagina per far capire che va attivata
    locationText.innerText = '';
    img.alt = "Geolocation disattivata";
    img.src = "./img/disabled/geolocationDisabled.png";
    suggestionText.innerText = 'Attiva la geolocalizzazione'
  
    // Disattivare il loading
    htmlElement.id = '';
}

let onSuccess = async (position) => {
    console.log(position)
    let coords = position.coords
    let lat = coords.latitude
    let lng = coords.longitude

    let key = 'bd832622acc99b03e95f5648052a97cf';
    let units = 'metric';
    let lang = 'it';

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=${units}&lang=${lang}`

    let response = await fetch(url)
    let data = await response.json()
    console.log(data)

    let temperature = data.main.temp
    let tempFloor = Math.floor(temperature)
    let code = data.weather[0].icon
    let description = data.weather[0].description
    let name = data.name
    let suggestion = suggestions[code]

    showMeteo(name, code, description, tempFloor, suggestion)
}

let showMeteo = (name, code, description, temp, suggestion) => {
    locationText.innerText = name
    img.src = `./img/weather/${code}.png`
    img.alt = description
    temperatureText.innerText = temp + '°'
    suggestionText.innerText = suggestion

    htmlElement.id = ''
}


navigator.geolocation.getCurrentPosition(onSuccess, onError);




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