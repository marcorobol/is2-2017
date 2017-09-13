//string and numbers in Javascript
console.log(
    1 + "1"         
    );

console.log(
    1 + 1 + "1"     
    );

console.log(    
    "1" + 1 + 1     
    );


var credit = 100;
var deposit = prompt ("Insert number");

alert (credit + deposit);  


// Strings to numbers
console.log(    
    parseInt ("1")     //  1
    );
    
console.log(    
    parseInt ("1.1")   //  1
    );

console.log(    
    parseFloat ("1.1") //  1.1
    );
    
console.log(    
    parseFloat ("hola") //  NaN (you can use isNaN(<value>) to check the conversion
    );

// you can use isNaN to check the conversion  
console.log(    
isNaN ( parseFloat("hola") ) //  true
    );

// numbers to strings
console.log(    
    1 + ""          //  "1"
    );

console.log(    
    (1).toString() //  "1"
    );