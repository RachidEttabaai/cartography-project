// create function initMap
import {getData, getDataStop} from "./apirequest";
import "leaflet";

/**
 * @description initalization map
 */
export function initMap() {
    let map = L.map('map').setView([45.188529, 5.724524], 11);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
    }).addTo(map);

    return map;
}

/**
 * @description show all marker
 * @param map
 * @returns {Promise<void>}
 */
export async function showAllMarker(map){
    let currentMarker = localStorage.getItem("currentMarker").split(",");
    let allName = localStorage.getItem("allName").split(",");
    
    for (let name of allName) {
        let dataOneName = await getDataStop(name);

        for (let feat of dataOneName.features) {
            if(feat.properties.CODE.startsWith("SEM")){
                let name = feat.properties.LIBELLE;
                let latitude = feat.geometry.coordinates[1];
                let longitude = feat.geometry.coordinates[0];

                if(name != currentMarker[0]){
                    showMarker(map, latitude, longitude, name);
                }

            }
        }

    }
}

/**
 * @description show marker
 * @param map
 * @param lat
 * @param long
 * @param nameStop
 */
export function showMarker(map, lat, long, nameStop) {
    L.marker([lat, long]).addTo(map)
    .bindPopup('<h3>' + nameStop + '</h3>');
}