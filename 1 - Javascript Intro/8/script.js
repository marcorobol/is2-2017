//loops and condition

var secret = 44;
var guess = 0;

while (secret != guess)
{
    guess = prompt('Guess the secret number [0-100]');
    if (guess == secret)
    {
        alert("You won!");
    }
}

//count the number of tentatives?

//for breaks and continue

for (var i=0; i< 100; i++)
{    
    if ((i%2)==0)
        continue;
    
    console.log(i);
    
    if (i>=10)
        break;
}
