import $ from "jquery";
import {addCurrentStopLocalStorage} from "./webStorage";

let stopListTab = localStorage.getItem("allName").split(",");
// if (stopListTab) {
//
// }

$(document).ready(function () {
    $("#stop-search").on("keyup", function (e) {

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
            let liopt = $("<li></li>").attr("data-id",option);
            let opt = liopt.html(option);
            liopt.append(opt);
            datalist.append(liopt);
        });
    });

    function getEventTarget(e) {
        e = e || window.event;
        return e.target || e.srcElement;
    }

    document.getElementById('search-stop-search').onclick = function(event) {
        let target = getEventTarget(event);
        $("#stop-search").val(target.innerHTML);
        $("#search-stop-search").empty();
    };


    $("#search-form").on("submit", function(e) {

        e.preventDefault();
        let currentStopName = $("#stop-search").val();
        addCurrentStopLocalStorage(currentStopName);
    });
});
