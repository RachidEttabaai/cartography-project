//CSS Files importations
import "../css/style.css"
import {addNameWebStorage} from "./webStorage"

let localStorageAllName = localStorage.getItem('allName');

if (!localStorageAllName) {
    addNameWebStorage();
}

// console.log(localStorageAllName.split(","));
// console.log(localStorage);