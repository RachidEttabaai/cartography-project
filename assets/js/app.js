//CSS Files importations
import "../css/style.css";
import ""
import $ from "jquery";
import "foundation-sites/js/foundation";

import {addNameWebStorage} from "./webStorage";
import {initMap, showMarker} from "./initialization";

// import logo from '../image/logo.png';


let localStorageAllName = localStorage.getItem('allName');
if (!localStorageAllName) {addNameWebStorage();}

let map = initMap();
showMarker(map, 45.188529, 5.724524, 'Chavant');

// console.log(localStorageAllName.split(","));
// console.log(localStorage);
