import {getData,getDataStop} from "./apirequest"

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
 * @description get data for one stop
 * @returns {Array}
 */
async function getOneName(name){
    let dataonename = await getDataStop(name);
    let oneName = [];

    for (let feat of dataonename.features) {
        if(feat.properties.CODE.startsWith("SEM")){
            let id = feat.properties.id;
            let name = feat.properties.LIBELLE;
            let latitude = feat.geometry.coordinates[1];
            let longitude = feat.geometry.coordinates[0];
            oneName.push(id);
            oneName.push(name);
            oneName.push(latitude);
            oneName.push(longitude);
        }
    }

    return oneName;

}

/**
 * @description add all names stop to web storage
 * 
 */
export async function addNameWebStorage() {
    let allName = await getAllName();
    localStorage.clear();
    localStorage.setItem('allName', allName);
}

/**
 * @description add datas for one stop to web storage
 * 
 */
export async function addOneNameWebStorage(name){
    let oneName = await getOneName(name);
    localStorage.clear();
    localStorage.setItem('oneName', oneName);
}