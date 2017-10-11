/*globals exports */

/**
 * @brief this function says "hello"
 * @return the string "Hello"
 */
var hello = function (req) {
    'use strict';
    return 'Hello!';
};

/**
 * @brief this function says "bye"
 * @return the string "Bye bye"
 */
var url = function (req) {
    return 'Server working properly. Requested URL : ' + req.url;
};

//export functions (if not defined here, it is private)
//exports.reply = hello;
exports.reply = url;