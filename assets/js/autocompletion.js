import {getApiDatas} from "./apirequest"


let resrequest = getApiDatas()

//console.log(resrequest)

let stoptable = []

for (let index = 0; index < localStorage.length; index++) {
    let key = localStorage.key(index)
    stoptable.push(localStorage.getItem(key))
}

localStorage.clear()

let searchinput = document.getElementById("search")

searchinput.addEventListener("input",function () { 
    console.log(stoptable.sort())
 })
