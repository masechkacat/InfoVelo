import { displayVelibStations } from './stations.js';

const API_URL = {
    veloLib: 'https://opendata.paris.fr/api/explore/v2.1/catalog/datasets/velib-disponibilite-en-temps-reel/records?limit=20',
    leaflet: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.3.1/leaflet.js',
    meteo: 'https://www.prevision-meteo.ch/services/json/lat=48.85341lng=2.3488'
}

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
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}
getDataFromApi();