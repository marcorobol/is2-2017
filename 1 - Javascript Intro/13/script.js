var car = {
    fruits: ["apple", "pear", "peach"],
    score: [], 
    player:[]
};

/**
 * @brief Some brief description.
 * @return Description of returned value.
 */
function startGame()
{

        //chiede nome
        var nome = prompt(Ciao, mi dici il tuo nome?)
        car.player.push(nome);
        car.score.push(0);
        
        for (i=0; i<5; i++)
        {
            var tentativo = prompt("inserisci il frutto");
            if (car.fruits.indexOf(tentativo)!=null)
                {
                    alert("Complimenti hai guadanato 10 punti, il tuo punteggio e' " + car.score[car.player.indexOf(nome)]);
                }
        }
        
};

/**
 * @brief Some brief description.
 * @param [in|out] type parameter_name Parameter description.
 * @param [in|out] type parameter_name Parameter description.
 * @return Description of returned value.
 */
function aggiornaLista()
{
    for (i = 0; i < car.score.length; i++) 
    {
        document.write ("nome:" + car.player[i] + ", score : " car.score[i]);
    }
    
}