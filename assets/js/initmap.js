//Importation of JS Library Leaflet for map
import L from "leaflet"

//Initialization of coordinates for the map
let latitude = 45.188529
let longitude = 5.724524

//Create the object map and insert it in the HTML element which has the ID map
let map =  L.map("map").setView([latitude, longitude], 10)

//Leaflet Tile
let tileLayer = "https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"

//Copyright and License OpenStreetMap
let attribution = "données © <a href='//osm.org/copyright'>OpenStreetMap</a>/ODbL - rendu <a href='//openstreetmap.fr'>OSM France</a>"

//Map zoom settings

L.tileLayer(tileLayer,{
    attribution : attribution,
    minNativeZoom : 1,
    maxNativeZoom : 20
}).addTo(map)
