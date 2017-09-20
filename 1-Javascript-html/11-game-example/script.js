var game = {
    fruits: ['apple', 'pear', 'peach'],
    player: {}
};

/**
 * @brief Some brief description.
 * @return Description of returned value.
 */
function startGame() {

    //chiede nome
    var nome = prompt('Ciao, mi dici il tuo nome?');
    game.player[nome] = 0;
    
    var i, tentativo;
    for (i = 0; i < 3; i++) {
        tentativo = prompt('inserisci il frutto');
        if (game.fruits.indexOf(tentativo) != -1) {
            game.player[nome] = game.player[nome] + 10;
            alert("Complimenti hai guadanato 10 punti, il tuo punteggio e' " + game.player[nome]);
        }
    }
}

/**
 * @brief Some brief description.
 * @param [in|out] type parameter_name Parameter description.
 * @param [in|out] type parameter_name Parameter description.
 * @return Description of returned value.
 */
function aggiornaLista() {
    for (i = 0; i < game.score.length; i++) {
        document.write("nome:" + game.player[i] + ", score : " + game.score[i]);
    }
}