import "../scss/style.scss";
import "foundation-sites/js/foundation";
import "./autoComplete";
import {initMap, showMarker} from "./initialization";
import {addCurrentStopLocalStorage, addNameLocalStorage} from "./webStorage";

let map = initMap();
let localStorageAllName = localStorage.getItem('allName');

if (!localStorageAllName) {addNameLocalStorage();}

// console.log(localStorageAllName.split(","));
// console.log(localStorage);

////////////////////////////////////////////////////////////////////////////////////////// SHOW MENU
const menu = document.querySelector('div.menu-app');
const buttonClose = document.querySelector('.button-close-container');
const buttonOpen = document.querySelector('.burger-icon-container');

buttonClose.addEventListener('click', event => {
    menu.style.display = "none";
});

buttonOpen.addEventListener('click', event => {
    menu.style.display = "block";
});