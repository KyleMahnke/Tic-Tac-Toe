// To Do List
// * produce blank board
// enter player names and have them displayed
// * let clicking on board register as move
// switch players each click
// don't allow clicking of same square twice
// check for winner / check board function (similar is sudoku valid)
// declare winner if there is one
// reset board / play again button
// * make it look dope

"use strict";
const newGame = document.querySelector('#new-game')
const playerTurn = document.querySelector('#player-turn');

// state updates the state of the game
let state = {
    players: [],
    currentPlayerIndex: 0,
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ],
  };

// sets up board
function buildInitialState() {
    state.board
}

// helper functions
function getPlayer(index) {
    return state.players[index];
}

function playerInputs() {
    if (state.PlayerIndex === 0) {
        return "X"
    } else {
        return "O"
    }

}

//which player's turn it is
function updatePlayerTurn() {
    if (state.currentPlayerIndex === 0) {
        state.currentPlayerIndex = 1;
    } else {
        state.currentPlayerIndex = 0;
    }
}


// updates the player's names in state
function updatePlayerNames(player1, player2) {
    state.players = [{
        name: player1
    }, {
        name: player2,
    }];
}

//update player
function updateCurrentPlayer(index, playerIndex) {
    state.board[index].player = playerIndex;
}

// reset the entire board
function resetEverything() {
    state.board = state
    state.winner = null;
}

//////////////////render functions /////////////////////

function renderNewGame() {
    newGame.innerHTML = '';
    //board.innerHTML = '';
    playerTurn.innerHTML = '';

    const player1Input = renderPlayerNameInput(1);
    const player2Input = renderPlayerNameInput(2);
    const button = document.createElement("button");
    button.innerText = "Start Game";
    newGame.append(player1Input, player2Input, button);
    button.addEventListener('click', event => {
        state.players = [player1Input.value, player2Input.value]
        renderPlayerTurn();
        if (player1Input.value && player2Input.value) {
            updatePlayerNames(player1Input.value, player2Input.value);
            render();
            newGame.innerHTML = '';
        }
    });
}

function renderPlayerNameInput(playerNumber) {
    const input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("name", 'player${playerNumber}');
    return input;
}

function render() {
    console.log(state);
    renderPlayerTurn();
    if (state.winner) {
        renderPlayAgain();
    } else {
        renderPlayerTurn();
    }

}

function renderPlayerTurn() {
    updatePlayerTurn();
    const player = state.players[currentPlayerIndex];
    playerTurn.innerText = 'Current Player: ${state.players[state.current].name}';
}

// needs const of player turn input to replace "X" ?


// confirms clicking boxes identifies their location
board.addEventListener('click', function (event) {
    let id = event.target.id
    let row = id[1];
    let column = id[3];
    state.board[row][column] = playerInputs();
    console.log(state.board);

    event.target.innerHTML = playerInputs();
});

/////// actions ///////////////////////////////

function isBoardFull() {
    for (const space of state.board) {
        if (board.cell === null) {
            return false;
        }
    }
    return true;
}

function checkForWinner() {
    if (isBoardFull()) {
        state.winner = getWinner();
        render();
    }
}

/// CODE THIS WHEN YOU WAKE UP
// function playerWins() {
//     if (three cells have the same player's input) {
 //       return "'${player name}' wins"
//     }
// }

function getWinner() {
    const [player1, player2] = state.players;
    // code this out properly after coding winning function
    return {
        name: "Nobody"
    }
}

const currentPlayer = getPlayer(state.currentPlayerIndex);

renderNewGame();