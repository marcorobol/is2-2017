/*
 * JavaScript patterns to simulate classes using functions and prototypes
 */

/*
 * Define an object without defining the class
 */
var car = {
    type : 'Fiat',
    model : '500',
    color : 'red',
    description : function() {
        return this.color + ", " + this.model + ", " + this.type;
    }
}
console.log(car);
console.log(car.description());



/*
 * Define a class by using a function
 * Instantiate a new object using the function constructor
 */
function Car(type, model, color) {
    this.type = type;
    this.model = model;
    this.color = color;
    this.description = function() {
        return this.color + ", " + this.model + ", " + this.type;
    };
}
var fiat500rossa = new Car('Fiat', '500', 'red');
console.log(fiat500rossa);
console.log(fiat500rossa.description());

// Never call a constructor function directly
// e.g. Car('Fiat', '500', 'white');



/*
 * Define a class by using the prototype
 */
function Car2(type, model, color) {
    this.type = type;
    this.model = model;
    this.color = color;
}

Car2.prototype.description = function() {
    return this.color + ", " + this.model + ", " + this.type;
};
var fiat500bianca = new Car2('Fiat', '500', 'white');
console.log(fiat500bianca);
console.log(fiat500bianca.description());



/*
 * Define a class by using the new reserved 'class' keyword of ES6
 */
class Car3 {
    constructor(type, model, color) {
        this.type = type;
        this.model = model;
        this.color = color;
    }
    description() {
        return this.color + ", " + this.model + ", " + this.type;
    };
}
var fiatPuntobianca = new Car3('Fiat', 'Punto', 'white');
console.log(fiatPuntobianca);
console.log(fiatPuntobianca.description());



/*
 * Extend a class with ES6
 */
class Suv extends Car2 {
    description() {
        return this.color + ", " + this.model + ", " + this.type + ", SUV";
    };
}
var NissanQuashqai = new Suv('Nissan', 'Quashqai', 'black');
console.log(NissanQuashqai);
console.log(NissanQuashqai.description());