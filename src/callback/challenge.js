let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
let API = "https://rickandmortyapi.com/api/character/";

function fetchData(urlAPI, callback) {

    // XMLHttpRequest(): Referencia al objeto que necesito
    let xhttp = new XMLHttpRequest();

    // GET: Peticion que realizaremos
    // urlAPI: Direccion de nuestra API
    // true: Estamos diciendo que va ser de manera asincrona
    xhttp.open('GET', urlAPI, true);

    // OnReadyStateChange: Si este cambio sucede ejecutara una funcion que recibe un evento
    xhttp.onreadystatechange = function (event) {

        // readyState: Tiene 5 respuestas las cuales son:
        // 0: request not initialized
        // 1: server connection established
        // 2: request received
        // 3: processing request
        // 4: request finished and response is ready
        if (xhttp.readyState === 4) {

            // status: Este nos trae diferentes estados
            // 200: Respuesa satisfactoria
            // 300: Redirecciones
            // 400: Errores de los clientes
            // 500: Errores del servidor
            if (xhttp.status === 200) {
                // El segundo parametro es un JSON que debemos parsear
                callback(null, JSON.parse(xhttp.responseText))
            } 
            else {
                const error = new Error(`Error ${urlAPI}`);
                return callback(error, null)
            }
        }
    }
    xhttp.send();
}


/*
    Se realiza la primer consulta a API para saber el numero de páginas existentes
*/
/*
fetchData(API,function(error1,data1){
    if(error1) return console.error(error1);
    //pages almacena el numero de paginas de personajes que tiene la API
    
    data1.results.forEach(element => {
        let name = element.name;
        let origin = element.origin.name;
        fetchData(element.origin.url,function(error3,data3){
            if(error3) return console.error(error3);
            let dimension = data3.dimension;
            console.log("*************** informacion de: " + name);                    
            console.log(origin);
            console.log(dimension);
            console.log("\n");            
        });
    });
});
*/

fetchData(API,function(error1,data1){
    if(error1) return console.error(error1);
    //pages almacena el numero de paginas de personajes que tiene la API
    fetchData (API + data1.results[0].id, function (error2, data2) {
        if(error2) return console.error(error2);

        fetchData (data2.origin.url, function (error3, data3){
            if (error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    }) 
    
});