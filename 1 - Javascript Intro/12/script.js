var car = {
    type:"Fiat", 
    model:"500", 
    color:"white"
};



var car = {
    type:"Fiat", 
    model:"500", 
    color:"white",
    description : function() {
        return this.color + ", " + this.model + ", " + this.type;
    }
};


function showCar()
{
    alert(car.description());
};