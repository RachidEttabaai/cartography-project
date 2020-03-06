//CSS Files importations
import "../css/style.css";
import {initMap, showMarker} from "./initialization";
import $ from "jquery";
import "foundation-sites/js/foundation";
import img from '../image/marker_black.png';
import {addNameWebStorage,addOneNameWebStorage} from "./webStorage";

let localStorageAllName = localStorage.getItem('allName');

if (!localStorageAllName) {
    addNameWebStorage();
}

// addOneNameWebStorage("CHAVANT");

// console.log(localStorage.getItem('oneName'));

// let map = initMap();
// showMarker(map, 45.188529, 5.724524, 'Chavant');

// console.log(localStorageAllName.split(","));
// console.log(localStorage);