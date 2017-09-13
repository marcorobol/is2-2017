//list of elements
var list = [];

list = ["apple", "pear", "peach"];

// accessing an element
console.log(
    list[0]  
    );

// Adding a new element
list.push("banana");

// Taking the last element from the array
console.log(
    list.pop()
    );

// Taking the first element
console.log(
    list.shift()
    );

// checking the number of elements
console.log(
    list.length
    );

// checking the index of "pear" in the array
console.log(
    list.indexOf("pear")
    );

//print elements
var listElements = '';

for (var i=0; i< list.length; i++)
{
    //for the first iteration, do not put the comma
    if (listElements.length==0)
        listElements =  list[i];
    else
        listElements = listElements + ', ' + list[i];
}

//print le list of elements
console.log(listElements);

//much shorter way to print a list!
console.log (list);