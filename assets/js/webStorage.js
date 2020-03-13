import {getData,getDataStop,getLinesStop} from "./apirequest"

/**
 * @description get all names stop
 * @returns {Array}
 */
async function getAllName() {
    let data = await getData();
    let allName = [];

    for (let feature of data.features) {
        if (feature.properties.CODE.startsWith("SEM")) {
            let name = feature.properties.LIBELLE;
            allName.push(name);
        }
    }
    return allName;
}

/**
 * @description get all lines for stop
 * @returns {Array}
 */
export async function getAllLinesForStop(name){
    let datas = await getLinesStop(name);
    let alldatas = [];

    for(let data of datas){
        alldatas.push(JSON.stringify(data.pattern));
    }

    localStorage.setItem("alldatas",alldatas);
}

/**
 * @description get data for one stop
 * @returns {Array}
 */
export async function addCurrentStopLocalStorage(name){
    let dataOneName = await getDataStop(name);
    let dataStop = [];

    for (let feat of dataOneName.features) {
        if(feat.properties.CODE.startsWith("SEM")){
            let name = feat.properties.LIBELLE;
            let latitude = feat.geometry.coordinates[1];
            let longitude = feat.geometry.coordinates[0];
            dataStop.push(name);
            dataStop.push(latitude);
            dataStop.push(longitude);
        }
    }
    localStorage.setItem("currentMarker", dataStop);
    location.reload();
}

/**
 * @description add all names stop to web storage
 * 
 */
export async function addNameLocalStorage() {
    let allName = await getAllName();
    localStorage.clear();
    localStorage.setItem('allName', allName);
}