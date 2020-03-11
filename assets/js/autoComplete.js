import $ from "jquery";
import {addCurrentStopLocalStorage} from "./webStorage";

let stopListTab = localStorage.getItem("allName").split(",");

$(document).ready(function () {
    $("#stop-search").on("input", function (e) {

        let valStopSearch = $(this).val();
        let datalist = $("#search-stop-search");
        let optionlist = [];

        if(valStopSearch < 1){
            return false;
        }

        datalist.empty();

        stopListTab.forEach(stop => {
            if(stop.substr(0,valStopSearch.length).toUpperCase() == valStopSearch.toUpperCase()){
                optionlist.push(stop);
            }
        });

        optionlist.forEach(option => {
            let opt = $("<option></option>").attr("value", option);
            datalist.append(opt);
        });
    });

});

$("#search-form").on("submit", function (e) {
    e.preventDefault();
    addCurrentStopLocalStorage($("#stop-search").val());
    document.location.reload(true);
});

