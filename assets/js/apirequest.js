/**
 * @description return data api
 * @returns {Promise<any>}
 */
export function getData() {
  return fetch('https://data.metromobilite.fr/api/findType/json?types=arret')
      .then(function(response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                  response.status);
            }

            return response.json();
          })
      .catch(function(err) {
        console.log('Fetch Error :-S', err);
      });
}

/**
 * @description
 * @param nameStop
 */
export function getDataStop(nameStop) {
    return fetch("https://data.metromobilite.fr/api/findType/json?types=arret&query=" + nameStop)
        .then(function(response) {
            if (response.status !== 200) {
                console.log('Looks like there was a problem. Status Code: ' +
                    response.status);
            }

            return response.json();
        })
        .catch(function(err) {
            console.log('Fetch Error :-S', err);
        });
}