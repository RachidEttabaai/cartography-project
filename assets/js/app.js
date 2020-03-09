//CSS Files importations
import "../css/style.css";
import {initMap, showMarker} from "./initialization";
import "foundation-sites/js/foundation";
import {setStorageStop, addNameLocalStorage} from "./webStorage";

let localStorageAllName = localStorage.getItem('allName');

if (!localStorageAllName) {addNameLocalStorage();}

console.log(localStorage);

// localStorage.clear();