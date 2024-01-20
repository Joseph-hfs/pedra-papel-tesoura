var elementos = document.querySelectorAll('.player-options div > img');
var playerOpt = "";
var inimigoOpt = "";

function validarVitoria() {

    let vencedor = document.querySelector('.vencedor');

    if (playerOpt == "paper") {
        if (inimigoOpt == "paper") {
            //EMPATE
            vencedor.innerHTML = "O jogo foi EMPATE!"
        } else if (inimigoOpt == "scissor") {
            //INIMIGO GANHOU
            vencedor.innerHTML = "Você PERDEU!"
        } else if (inimigoOpt == "rock") {
            //PLAYER GANHOU
            vencedor.innerHTML = "Você GANHOU!"
        }
    } //PAPEL-PLAYER

    if (playerOpt == "rock") {
        if (inimigoOpt == "paper") {
            //INIMIGO GANHOU
            vencedor.innerHTML = "Você PERDEU"
        } else if (inimigoOpt == "scissor") {
            //PLAYER GANHOU
            vencedor.innerHTML = "Você GANHOU!"
        } else if (inimigoOpt == "rock") {
            //EMPATE
            vencedor.innerHTML = "O jogo foi EMPATE!"
        }
    } //ROCK-PLAYER

    if (playerOpt == "scissor") {
        if (inimigoOpt == "paper") {
            //PLAYER GANHOU
            vencedor.innerHTML = "Você GANHOU!"
        } else if (inimigoOpt == "scissor") {
            //EMPATE
            vencedor.innerHTML = "O jogo foi EMPATE"
        } else if (inimigoOpt == "rock") {
            //INIMIGO GANHOU
            vencedor.innerHTML = "Você PERDEU!"
        }
    } //SCISSOR-PLAYER

    alert("A máquina escolheu: " + inimigoOpt); //ESCOLHA DO MÁQUINA

} //VALIDAÇÃO DE VITÓRIA 

function resetInimigo() {
    const enemyOptions = document.querySelectorAll('.enemy-options div');
    for (var i = 0; i < enemyOptions.length; i++) {
        enemyOptions[i].childNodes[0].style.opacity = 0.3;
    }
} //RESETAR INIMIGO

function inimigoJogar() {
    let rand = Math.floor(Math.random() * 3);

    const enemyOptions = document.querySelectorAll('.enemy-options div');
    resetInimigo();

    for (var i = 0; i < enemyOptions.length; i++) {
        if (i == rand) {
            enemyOptions[i].childNodes[0].style.opacity = 1;
            inimigoOpt = enemyOptions[i].childNodes[0].getAttribute('opt');
        }
    }
    validarVitoria();
} //INIMIGO JOGAR

function resetOpacityPlayer() {
    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.opacity = 0.3;
    }
} //RESETAR PLAYER

for (var i = 0; i < elementos.length; i++) {
    elementos[i].addEventListener('click', (t) => {
        resetOpacityPlayer();
        t.target.style.opacity = 1;
        playerOpt = t.target.getAttribute('opt');

        inimigoJogar();
    })
} //RESETAR OPACIDADE

