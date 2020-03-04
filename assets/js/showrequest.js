import {getApiDatas} from "./apirequest"

let resrequest = getApiDatas("https://data.metromobilite.fr/api/findType/json?types=arret")

console.log(resrequest)
