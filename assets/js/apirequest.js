/**
 * @description Get open datas from a remote API
 * @param {api url} url 
 */
export function getApiDatas(url){ 
  let datapi = []
  fetch(url).then(response => 
    response.json().then(data => ({
        data: data,
        status: response.status
    })
  ).then(res => {

    let datasresults = res.data.features
    datasresults.forEach(element => {

      if(element.properties.CODE.slice(0,7) === "SEM_GEN"){
        let mapdatas = new Map()
        mapdatas.set("id",element.properties.id)
        mapdatas.set("code",element.properties.CODE)
        mapdatas.set("libelle",element.properties.LIBELLE)
        mapdatas.set("commune",element.properties.COMMUNE)
        mapdatas.set("longitude",element.geometry.coordinates[0])
        mapdatas.set("latitude",element.geometry.coordinates[1])
        datapi.push(mapdatas)
      }

    })

  })).catch(err => {
    console.error(err)
  })
  return datapi
}
