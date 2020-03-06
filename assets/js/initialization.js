// create function initMap
import "leaflet";

export function initMap() {
    let map = L.map('map').setView([45.188529, 5.724524], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(map);

    return map;
}

export function showMarker(map, lat, long, nameStop) {
    L.marker([lat, long]).addTo(map)
    .bindPopup('<h3>' + nameStop + '</h3>');
}