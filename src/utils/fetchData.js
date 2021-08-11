let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

function fetchData(urlAPI) {
    return new Promise((resolve,reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET', urlAPI, true);    
        xhttp.onreadystatechange = (() => {
            if (xhttp.readyState === 4) {
                (xhttp.status === 200) 
                  ? resolve(JSON.parse(xhttp.responseText))
                  : reject(new error("Error", urlAPI))                
            }
        });
        xhttp.send();
    })
}

module.exports = fetchData;