const weatherIcons = {
    "0": "../public/img/sunny.png", // Ясно
    "1": "../public/img/cloudy.png", // Малооблачно
    "2": "../public/img/cloudy.png", // Облачно
    "3": "../public/img/overcast.png", // Пасмурно
    "45": "../public/img/fog.png", // Туман
    "48": "../public/img/fog.png", // Морось
    "51": "../public/img/freezy.png", // Дождь
    "53": "../public/img/freezy.png", // Мокрый снег
    "55": "../public/img/freezy.png", // Снег
    "56": "../public/img/freezy_drizzle.png", // Снегопад
    "57": "../public/img/freezy_drizzle.png", // Снег
    "61": "../public/img/rain.png", // Гроза
    "63": "../public/img/rain.png", // Гроза
    "65": "../public/img/rain.png", // Гроза
    "66": "../public/img/freezy_drizzle.png", // Гроза
    "67": "../public/img/freezy_drizzle.png", // Гроза
    "71": "../public/img/snowfall.png.png", // Дождь
    "73": "../public/img/snowfall.png.png", // Дождь
    "75": "../public/img/snowfall.png.png", // Дождь
    "77": "../public/img/snowfall.png.png", // Дождь
    "80": "../public/img/rain.png", // Дождь
    "81": "../public/img/rain.png", // Дождь
    "82": "../public/img/rain.png", // Дождь
    "85": "../public/img/snowfall.png.png", // Дождь
    "86": "../public/img/snowfall.png.png", // Дождь
    "95": "../public/img/thunder.png", // Дождь
    "96": "../public/img/thunder.png", // Дождь
    "99": "../public/img/thunder.png", // Дождь
};

const API_URL = {
    veloLib: 'https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/velib-disponibilite-en-temps-reel/records?limit=20',
    leaflet: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.js',
    meteo: 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=Europe%2FBerlin'
};

const map = L.map('map').setView([48.8566, 2.3522], 13); // Координаты центра карты (например, Париж) и уровень масштабирования

export { weatherIcons, API_URL, map};
