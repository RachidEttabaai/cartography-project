import {getData} from "./apirequest"

/**
 * @description get all name stop
 * @returns {Promise<[]>}
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
 * @description add name stop to web storage
 * @returns {Promise<void>}
 */
export async function addNameWebStorage() {
    let allName = await getAllName();
    localStorage.clear();
    localStorage.setItem('allName', allName);
}