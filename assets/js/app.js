import "../scss/style.scss";
import "foundation-sites/js/foundation";
import "./autoComplete";

import {addNameWebStorage} from "./webStorage";
import {initMap, showMarker} from "./initialization";

let map = initMap();
let localStorageAllName = localStorage.getItem('allName');

const menu = document.querySelector('div.menu-app');
const buttonClose = document.querySelector('.button-close-container');
const buttonOpen = document.querySelector('.burger-icon-container');

if (!localStorageAllName) {addNameWebStorage();}


showMarker(map, 45.188529, 5.724524, 'Chavant');

// console.log(localStorageAllName.split(","));
// console.log(localStorage);


buttonClose.addEventListener('click', event => {
    menu.style.display = "none";
});

buttonOpen.addEventListener('click', event => {
    menu.style.display = "block";
});