let moves = 0
let startTime;
let timerInterval;
let board = document.getElementById('board');
let row1 = document.createElement('row1');
let openCounter = 0




function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000); // Update timer every second
}
function updateTimer() {
    const elapsedTime = Date.now() - startTime;
    const minutes = Math.floor(elapsedTime / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);
    const formattedTime = padNumber(minutes) + ":" + padNumber(seconds);
    document.getElementById("time").textContent =
        "TIMER: " + formattedTime;
}

function padNumber(number) {
    return (number < 10 ? "0" : "") + number; // Add leading zero if needed
}
function stopTimer() {
    clearInterval(timerInterval);
}

function createBoard() {
    board = ["/images/afraid.png", "/images/afraid.png", "/images/angry.png", "/images/angry.png", "/images/happy.png", "/images/happy.png", "/images/ohh.png", "/images/ohh.png", "/images/winky.png", "/images/winky.png", "/images/kiss.png", "/images/kiss.png"]
    board.sort(() => Math.random() - 0.5);
    const board_game = document.getElementById('boardGame');
    board.forEach(board => {
        const card = document.createElement('div');

        card.classList.add('card');
        card.style.backgroundImage = `url(${board})`;

        const cover = document.createElement('div');
        cover.classList.add('cover');
        card.appendChild(cover);



        board_game.appendChild(card);
    });

}
let clickArray = []
function cardClick() {

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('click', () => {

            card.classList.add('revealed');
            clickArray.push(card)
            openCounter++;
            if (clickArray.length == 2) {
                check();
                Moves();

            }
            console.log(clickArray)
        });
    });
}

function check() {
    console.log(clickArray)
    openCounter = 0;
    let card1 = clickArray[0];
    let card2 = clickArray[1];
    if (card1.style.backgroundImage === card2.style.backgroundImage) {
        console.log("Matched!");
        win();

    } else {
        console.log("Not matched!");

        setTimeout(() => {
            card1.classList.remove('revealed');
            card2.classList.remove('revealed');
        }, 1000);
    }
    clickArray.pop()
    clickArray.pop()

}

function win() {
    const cards = document.querySelectorAll('.card');
    let allRevealed = true;

    for (let card of cards) {
        if (!card.classList.contains('revealed')) {
            allRevealed = false;
            break;
        }
    }
    if (allRevealed) {
        const winMessage = document.getElementById('win-message');
        winMessage.classList.remove('hidden');
        stopTimer()

    }
}

function reset() {

    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.classList.remove('revealed');
    });

    const winMessage = document.getElementById('win-message');
    winMessage.classList.add('hidden');
    resetMoves();

}

let moveCounter = 0;

function Moves() {
    moveCounter++;
    document.getElementById('moves').textContent = `MOVES : ${moveCounter}`;
}
function resetMoves() {
    moveCounter = 0;
    document.getElementById('move-counter').textContent = `MOVES : ${moveCounter}`;
}



function startGame() {

    createBoard();
    // Hide covers initially
    const boardGame = document.getElementById('boardGame');
    boardGame.classList.add('covers-hidden');

    // Show covers after 1 seconds
    setTimeout(() => {
        boardGame.classList.remove('covers-hidden');
        cardClick();
    }, 1000);

    startTimer()
    updateTimer()
    padNumber(number)
}





startGame()






