//comments are extremely important.
//1-for you, to understand your code after months, year
//for your collegues as well
var nome;

console.log(typeof (nome));       // undefined

nome = 'Pippo';
console.log(typeof (nome));       // string

nome = 5;        
console.log(typeof (nome));       // number
      
nome = true;
console.log(typeof (nome));       // boolean 

nome = [1,2,3];   
console.log(typeof (nome));       // object 

nome = {};
nome.valore = "Marco";
console.log(typeof (nome));       // object 

nome = null;
console.log(typeof (nome));       // object 

nome = function(n){ console.log(" variabile: "+n); };
console.log(typeof (nome));       // function 