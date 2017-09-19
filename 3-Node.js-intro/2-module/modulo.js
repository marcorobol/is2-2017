/**
 * @brief this function says "hello"
 * @return the string "Hello"
 */
var hello = function()
{
    return "Hello!";
};

/**
 * @brief this function says "bye"
 * @return the string "Bye bye"
 */
var bye = function()
{
    return "Bye bye";
};

//export functions (if not defined here, it is private)
exports.sayHello = hello; 