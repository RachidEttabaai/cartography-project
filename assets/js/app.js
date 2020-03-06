//CSS Files importations
import "../css/style.css";
import {initMap, showMarker} from "./initialization";
import "foundation-sites/js/foundation";
import img from '../image/marker_black.png';
import {getOneName,addNameWebStorage,addOneNameWebStorage} from "./webStorage";

let localStorageAllName = localStorage.getItem('allName');

if (!localStorageAllName) {
    addNameWebStorage();
}

// let localStorageOneName = localStorage.getItem("CHAVANT");

// if(!localStorageOneName){
//     addOneNameWebStorage("CHAVANT");
// }

// let arrOneName = localStorage.getItem('CHAVANT').split(",");

// let map = initMap();
// showMarker(map, arrOneName[2], arrOneName[3], arrOneName[1]);

// console.log(localStorageAllName.split(","));
// console.log(localStorage);