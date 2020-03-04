/**
 * @description Get open datas from a remote API
 * @param {api url} url 
 */
export function getApiDatas(){ 
  let datapi = []
  fetch("https://data.metromobilite.fr/api/findType/json?types=arret").then(response => 
    response.json().then(data => ({
        data: data,
        status: response.status
    })
  ).then(res => {

    let datasresults = res.data.features
    datasresults.forEach(element => {

      if(element.properties.CODE.slice(0,7) === "SEM_GEN"){
        let mapdatas = []
        mapdatas["id"] = element.properties.id
        mapdatas["code"] = element.properties.CODE
        mapdatas["libelle"] = element.properties.LIBELLE
        mapdatas["commune"] = element.properties.COMMUNE
        mapdatas["coordinate"] = [element.geometry.coordinates[1],element.geometry.coordinates[0]]
        datapi.push(mapdatas)
      }

    })

  })).catch(err => {
    console.error(err)
  })
  return datapi
}
