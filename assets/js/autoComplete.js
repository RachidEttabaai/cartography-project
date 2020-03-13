import $ from "jquery";
import {addCurrentStopLocalStorage,addNameLocalStorage} from "./webStorage";

let stopListTab = [];

if (localStorage.getItem("allName") == null) {
    addNameLocalStorage();
    stopListTab = localStorage.getItem("allName").split(","); 
}else{
    let allNameLocalStorage = localStorage.getItem("allName");
    stopListTab = allNameLocalStorage.split(","); 
}
 
$(document).ready(function () {

    let listdata = $("#search-stop-search");
    let datasli = [];

    stopListTab.forEach(stop => {
            
        datasli.push(stop);
            
    });

    datasli.forEach(li => {
        let optli = $("<li></li>").attr("data-id",li);
        let op = optli.html(li);
        optli.append(op);
        listdata.append(optli);
    });

    listdata.hide();

    $("#stop-search").on("keyup", function (e) {

        let valStopSearch = $(this).val();
        let datalists = $("#search-stop-search li");
        let listdatas = [];
        let optionlist = [];

        if(valStopSearch < 1){
            return false;
        }
            
        for(let i=0;i<datalists.length;i++){
            listdatas.push(datalists[i].innerHTML);
        }

        listdatas.forEach(stop => {
            if(stop.substr(0,valStopSearch.length).toUpperCase() == valStopSearch.toUpperCase()){
                optionlist.push(stop);
            }
        });

        $("#search-stop-search").empty();

        //console.log(optionlist)

        optionlist.forEach(option => {
            let liopt = $("<li></li>").attr("data-id",option);
            let opt = liopt.html(option);
            liopt.append(opt);
            $("#search-stop-search").append(liopt);
        });

        $("#search-stop-search").show();

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


