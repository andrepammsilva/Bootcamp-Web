const j1Button = document.querySelector('#j1Button');
const j2Button = document.querySelector('#j2Button');
const j1Pontos = document.querySelector('#j1Pontos');
const j2Pontos = document.querySelector('#j2Pontos');
const resetButton = document.querySelector('#reset');
const MaxScore = document.querySelector('#pontosMax')


let j1Score = 0;
let j2Score = 0;
let winningScore = 3;
let isGameOver = false;



j1Button.addEventListener('click', function () {
    if (!isGameOver) {
        j1Score += 1;
        if (j1Score === winningScore) {
            isGameOver = true;
            alert('Jogador 1 Venceu')
        }
        j1Pontos.textContent = j1Score;
    }
})

j2Button.addEventListener('click', function () {
    if (!isGameOver) {
        j2Score += 1;
        if (j2Score === winningScore) {
            isGameOver = true;
            alert('Jogador 2 Venceu')
        }
        j2Pontos.textContent = j2Score;
    }
})

MaxScore.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    j1Score = 0;
    j2Score = 0;
    j1Pontos.textContent = 0;
    j2Pontos.textContent = 0;
}








