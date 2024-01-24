import { displayVelibStations } from './stations.js';
import { displayVelibMarkers } from './map.js';
import { displayMeteo } from './meteo.js';
import { API_URL, map } from './const.js';

// Загрузка и добавление тайлов карты
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

function getDataFromApi() {
  fetch(API_URL.veloLib)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json(); // Преобразуем ответ в JSON
    })
    .then(data => {
      console.log(data); // Обрабатываем полученные данные
      displayVelibStations(data); // Используем данные (например, для отображения информации о станциях Velib)
      displayVelibMarkers(data, map); // Используем данные (например, для отображения маркеров на карте)
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}

function getMeteoFromApi() {
  fetch(API_URL.meteo)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json(); // Преобразуем ответ в JSON
    })
    .then(data => {
      console.log(data); // Обрабатываем полученные данные
      displayMeteo(data); // Используем данные (например, для отображения информации о станциях Velib)
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);
    });
}

// Вызываем функции впервые для инициализации и отображения данных
getDataFromApi();
getMeteoFromApi();

// Затем настраиваем интервалы для периодического обновления данных
setInterval(getDataFromApi, 3600000); // Обновляем данные о Velib каждый час
setInterval(getMeteoFromApi, 3600000); // Обновляем метеоданные каждый час
