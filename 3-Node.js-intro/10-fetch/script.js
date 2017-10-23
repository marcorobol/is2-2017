/**
 * @brief this function sends a JSON request and process a JSON response
 * @return nothing
 */
function send()
{
    //get the form object
    var form= document.getElementById("myform");

    // collect the form data while iterating over the inputs
    var data = {};
    for (var i = 0, ii = form.length; i < ii; ++i) {
        var input = form[i];
        if (input.name) {
            data[input.name] = input.value;
        }
    }

    console.log(data);

    // construct an HTTP request
    var xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action, true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // send the collected data as JSON
    xhr.send(JSON.stringify(data));

    xhr.onloadend = function () 
    {
        var result=xhr.responseText;
        console.log(result);
    };
};