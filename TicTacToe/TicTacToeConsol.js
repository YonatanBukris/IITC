let readlineSync;

function CheckRow(row_number) {
    let row = board[row_number];
    let counter = 0;
    for (let index = 0; index < board.length - 1; index++) {
        if (row[index] !== '[]' && row[index + 1] !== '[]' && row[index] === row[index + 1]) {
            counter++;
        }
        if (counter === board.length - 1) {
            return true;
        }
    }
    return false;
}

function CheckColumn(column_number) {
    let counter = 0;
    for (let index = 0; index < board.length - 1; index++) {
        if (board[index][column_number] !== '[]' && board[index + 1][column_number] !== '[]' && board[index][column_number] === board[index + 1][column_number]) {
            counter++;
        }
        if (counter === board.length - 1) {
            return true;
        }
    }
    return false;
}

function CheckDiagonal() {
    let counter = 0;
    for (let index = 0; index < board.length - 1; index++) {
        if (board[index][index] !== '[]' && board[index + 1][index + 1] !== '[]' && board[index][index] === board[index + 1][index + 1]) {
            counter++;
        }
        if (counter === board.length - 1) {
            return true;
        }
    }
    return false;
}

function CheckReverseDiagonal() {
    let counter = 0;
    for (let index = board.length - 1; index > 0; index--) {
        if (board[counter][index] !== '[]' && board[counter + 1][index - 1] !== '[]' && board[counter][index] === board[counter + 1][index - 1]) {
            counter++;
        }
        if (counter === board.length - 1) {
            return true;
        }
    }
    return false;
}

function CreateBoard(number) {
    board = [];
    for (let i = 0; i < number; i++) {
        let row = []
        for (let j = 0; j < number; j++) {
            row.push('[]')
        }
        board.push(row)
    }
    return board;
}

function isDraw() {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === '[]') {
                return false;
            }
        }
    }

    if (!isWin()) {
        return true;
    }
    return false;
}


function isWin() {
    let result_row, result_column;


    for (let index = 0; index < board.length; index++) {
        result_row = CheckRow(index);
        if (result_row) {
            console.log('Row win');
            return true;
        }
    }


    for (let index = 0; index < board.length; index++) {
        result_column = CheckColumn(index);
        if (result_column) {
            console.log('Column win');
            return true;
        }
    }

    // Check diagonals
    let result_diagonal = CheckDiagonal();
    if (result_diagonal) {
        console.log('Diagonal win'); // Added message for debugging
        return true;
    }

    // Check reverse diagonals
    let result_reverse_diagonal = CheckReverseDiagonal();
    if (result_reverse_diagonal) {
        console.log('Reverse diagonal win'); // Added message for debugging
        return true;
    }

    return false;
}


function xTurn() {
    console.log(player1 + "'s turn")
    let row = parseInt(prompt('Enter the row: '));
    let column = parseInt(prompt('Enter the column: '));
    if (board[row][column] === '[]') {
        board[row][column] = 'x';
        console.log(board.map(row => row.join(' ')).join('\n'));
    } else {
        console.log('This place is already taken');
        xTurn();
    }
    if (isWin()) {
        console.log(player1 + ' won!');
        return true;
    }
    if (isDraw()) {
        console.log("It's a Draw!")
        return true;
    }
    return false;
}

function oTurn() {
    console.log(player2 + "'s turn")
    let row = parseInt(prompt('Enter the row: '));
    let column = parseInt(prompt('Enter the column: '));
    if (board[row][column] === '[]') {
        board[row][column] = 'o';
        console.log(board.map(row => row.join(' ')).join('\n'));
    } else {
        console.log('This place is already taken');
        oTurn();
    }
    if (isWin()) {
        console.log(player2 + ' won!');
        return true;
    }
    if (isDraw()) {
        console.log("It's a Draw!")
        return true;
    }
    return false;
}

function startGame() {
    console.log('Welcome to Tic-Tac-Toe');
    player1 = prompt("player 1 enter your name: ");
    player2 = prompt("player 2 enter your name: ");
    let size_board = parseInt(prompt('Enter the size of the board: '));
    console.log(size_board);
    CreateBoard(size_board);
    console.log(board.map(row => row.join(' ')).join('\n'));
    while (true) {
        while (!isWin()) {
            xTurn();

            if (isWin()) {
                xWinsCounter++
                alert("the score is : \n" + player1 + " won " + xWinsCounter + " times\n" + player2 + " won " + oWinsCounters + " times")
                if (!playAgain()) return; // Ask to play again
                break;
            }
            if (isDraw()) {
                alert("the score is : \n" + player1 + " won " + xWinsCounter + " times\n" + player2 + " won " + oWinsCounters + " times")
                if (!playAgain()) return; // Ask to play again
                break;
            }



            oTurn();
            if (isWin()) {
                oWinsCounters++
                alert("the score is : \n" + player2 + "won " + oWinsCounters + "times\n" + player1 + "won " + xWinsCounter + "times")
                if (!playAgain()) return; // Ask to play again
                break;
            }
            if (isDraw()) {
                alert("the score is : \n" + player1 + " won " + xWinsCounter + " times\n" + player2 + " won " + oWinsCounters + " times")
                if (!playAgain()) return; // Ask to play again
                break;
            }

        }
    }
}

function playAgain() {
    let play = prompt('Do you want to play again? (yes/no)');
    if (play.toLowerCase() === 'yes') {
        CreateBoard(board.length); // Reset the board
        console.log('New game started!');
        return true;
    } else {
        console.log('Thanks for playing! Goodbye.');
        return false;
    }
}
let xWinsCounter = 0
let oWinsCounters = 0
let player1;
let player2;
startGame();
