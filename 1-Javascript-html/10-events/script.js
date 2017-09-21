/**
 * @brief this function say "Hello world"
 * @return a string that contains "Hello World"
 */
function sayHello()
{
    alert('Hello world');
}

function Car(type, model, color) {
    this.type = type;
    this.model = model;
    this.color = color;
    this.description = function() {
        return this.color + ", " + this.model + ", " + this.type;
    };
}

var fiat500bianca = new Car('Fiat', '500', 'white');
var fiat500rossa = new Car('Fiat', '500', 'red');

function showCar() {
    alert(fiat500rossa.description());
}