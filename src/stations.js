function displayVelibStations(data) {
    const stationsContainer = document.getElementById('velib-stations');
    stationsContainer.innerHTML = ''; // Очищаем контейнер

    data.results.forEach(station => {
        const stationLine = document.createElement('tr');

        stationLine.innerHTML = `        
        <td>${station.name}</td>
        <td>${station.capacity}</td>
        <td>${station.numbikesavailable}</td>
        <td>${station.numdocksavailable}</td>    
        `;

        stationsContainer.appendChild(stationLine);
    });
}
export {displayVelibStations};
