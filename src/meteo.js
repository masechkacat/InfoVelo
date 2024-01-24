import { weatherIcons } from './const.js'; // путь к файлу иконок

function displayMeteo(data) {
  const container = document.getElementById('weather'); 
  const dailyWeather = data.daily;
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];

  // Очистить предыдущее содержимое контейнера
  container.innerHTML = '';

  dailyWeather.time.slice(0, 6).forEach((time, index) => {
    const date = new Date(time);
    const dayName = days[date.getDay()];
    const tempMax = dailyWeather.temperature_2m_max[index];
    const tempMin = dailyWeather.temperature_2m_min[index];
    const weatherCode = dailyWeather.weather_code[index]; // Получаем код погоды
    const weatherIcon = weatherIcons[weatherCode]; // Получаем соответствующую иконку из объекта

    // HTML для виджета погоды
    const weatherWidget = `
      <div class="weather-widget">
        <div class="card bg-warning mt-0 px-3">
          <img src="${weatherIcon}" alt="Weather icon" class="p-1" /> <!-- Используем изображение иконки -->
          <div class="temperature card-body p-1">
            <h5>${dayName}</h5>
            <p>max: ${tempMax}, min: ${tempMin}<p>
          </div>
        </div>
      </div>
    `;

    // Добавляем виджет в контейнер
    container.innerHTML += weatherWidget;
  });
}
export { displayMeteo };
