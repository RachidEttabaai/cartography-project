//CSS Files importations
import "../css/style.css"
import {addNameWebStorage} from "./webStorage"
import $ from "jquery";
require("foundation-sites");

let localStorageAllName = localStorage.getItem('allName');

if (!localStorageAllName) {
    addNameWebStorage();
}

// console.log(localStorageAllName.split(","));
// console.log(localStorage);