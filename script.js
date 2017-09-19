//https://www.html5rocks.com/en/tutorials/cors/

var url = "";

var xhr = new XMLHttpRequest();
xhr.open('GET', url, true);

xhr.onload = function () {
    "use strict";
    console.log(xhr.responseText);
    // process the response.
};