function displayVelibMarkers(data, map) {
  data.results.forEach(station => {

    const marker = L.marker([station.coordonnees_geo.lat, station.coordonnees_geo.lon]).addTo(map);
    marker.bindPopup(`<b>${station.name}</b><br>Velos dispo: ${station.numbikesavailable}<br>Docks dispo: ${station.numdocksavailable}`).openPopup();
  });
}

export { displayVelibMarkers };