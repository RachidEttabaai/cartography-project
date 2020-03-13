import "../scss/style.scss";
import "foundation-sites/js/foundation";
import {initMap, showMarker, showAllMarker} from "./initialization";
import {addCurrentStopLocalStorage, addNameLocalStorage,getAllLinesForStop} from "./webStorage";
import "./autoComplete";

let map = initMap();
let localStorageAllName = localStorage.getItem('allName');
let currentMarker = localStorage.getItem("currentMarker");

if (localStorageAllName === null) {addNameLocalStorage();}

if (currentMarker) {
    let currentStopValues = localStorage.getItem("currentMarker").split(",");

    let nameStop = currentStopValues[0];
    let lat = currentStopValues[1];
    let long = currentStopValues[2];

    showMarker(map, lat, long, nameStop);
}

//////////////////////////////////////////////////SHOW ALL STOPS
document.querySelector("#show-allmarkers").addEventListener("click",function(){
    showAllMarker(map);
});



////////////////////////////////////////////////////////////////////////////////////////// SHOW MENU CLICK
const menu = document.querySelector('div.menu-app');
const buttonClose = document.querySelector('.button-close-container');
const buttonOpen = document.querySelector('.burger-icon-container');

buttonClose.addEventListener('click', event => {
    menu.style.display = "none";
});

buttonOpen.addEventListener('click', event => {
    menu.style.display = "block";
});