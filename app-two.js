"use strict";

// TODO: 
// * Let Players enter their names
//  Swap Players turns
// Declare a winner
// Reset the board

// =============================================================================
// * Global Variables
// =============================================================================

// Get any global elements that are always in the HTML
const board = document.querySelector('#board');
const newGame = document.querySelector('#new-game');
const playerTurn = document.querySelector('#player-turn');
//const scores = document.querySelector('#scores');

// Our global state
let state = {
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
  players: [],
  currentPlayerIndex: 0,
  winner: null
};

// =============================================================================
// * Helper Functions
// =============================================================================


// Generates a random board based on a word list
// function generateBoard() {
//   const board = [];
// }

function getPlayer(index) {
  return state.players[index];
}

function playerInputs() {
    // if (state.PlayerIndex === 0) {
    //     return "X"
    // } else {
    //     return "O"
    // }
    
}

function takeTurns() {
    if (state.players[0]) {
    return "X"
    } else if (state.players[1]) {
    return "O"
    } else {
    return "A"
    }
    }

// =============================================================================
// * Update State
// =============================================================================

// Updates which player's turn it is.
// function updatePlayerTurn() {
//   // Swap the currentPlayerIndex from 0 to 1 or 1 to 0
// //   if (state.currentPlayerIndex === 0) {
// //     state.currentPlayerIndex = 1;
// //   } else {
// //     state.currentPlayerIndex = 0;
// //   }
// }

// Updates the player's names in state
function updatePlayerNames(player1, player2) {
  state.players = [{
    name: player1,
  }, 
  {
    name: player2,
  }];
}

function updateTTTPlayer(index, playerIndex) {
  state.board[index].player = playerIndex;
}

function resetGame() {
  // Reset everything except the players
//   state.board = 
//     [null, null, null],
//     [null, null, null],
//     [null, null, null];
//   for (const player of state.players) {
//     player.score = 0;
//   }
  state.currentPlayerIndex = 0;
  state.lastSpacePlayedIndex = null;
  state.winner = null;
}

function resetEverything() {
  // Reset everything
  state = {
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
      ],
    players: [],
    currentPlayerIndex: 0,
    lastSpacePlayedIndex: null,
    winner: null
  }
}


// =============================================================================
// * Render
// =============================================================================

// Renders the new game form
function renderNewGame() {
  // Clear out everything
  newGame.innerHTML = '';
  //board.innerHTML = '';
  //scores.innerHTML = '';
  playerTurn.innerHTML = '';
  const player1Input = renderPlayerNameInput(1);
  const player2Input = renderPlayerNameInput(2);
  const button = document.createElement("button");
  button.innerText = "Start Game";
  newGame.append(player1Input, player2Input, button);
  button.addEventListener('click', event => {
      state.players = [player1Input.value, player2Input.value]
      renderPlayerTurn()
    if (player1Input.value && player2Input.value) {
      updatePlayerNames(player1Input.value, player2Input.value);
      render();
      newGame.innerHTML = '';
    }
  });
}

// Renders the main game
function render() {
  console.log(state);
  renderPlayerTurn();
  //updatePlayerState();
  //renderScores();
  renderBoard();
  if (state.winner) {
    renderPlayAgain();
  }
}

// Helper function that render player name inputs
function renderPlayerNameInput(playerNumber) {
  const input = document.createElement('input');
  input.setAttribute("type", "text");
  input.setAttribute("name", `player${playerNumber}`);
  input.setAttribute("placeholder", `Enter Player ${playerNumber} Name`);
  return input;
}

// Renders the player turn text
function renderPlayerTurn() {
  playerTurn.className = `player${state.currentPlayerIndex}`;
  playerTurn.innerText = `Current Player: ${state.players[state.currentPlayerIndex].name}`;

}

function renderBoard(){
    for (let index = 0; index < state.board.length; index++) {
        console.log(state.board)

    }
}

function renderPlayAgain() {
  const playAgainButton = document.createElement('button');
  playAgainButton.innerText = `Play again?`;
  playerTurn.innerHTML = `${state.winner.name} Won!`;
  playerTurn.append(playAgainButton);

  playAgainButton.addEventListener('click', () => {
    resetGame();
    render();
  });

  const newGameButton = document.createElement('button');
  newGameButton.innerText = 'Start New Game';
  playerTurn.append(newGameButton);

  newGameButton.addEventListener('click', () => {
    resetEverything();
    renderNewGame();
  });

}


// =============================================================================
// * Actions
// =============================================================================

// The Game Loop
// 1. Wait for action
// 2. Update state
// 3. render

function isBoardFull() {
  for (const space of state.board) {
    if (space.player === null) {
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

//// need to fix getWinner() //////
// function getWinner() {
//   if cells in a row, column, or diag all === "X" || all === "O"
// return "Player 1 wins" || "Player 2 wins" 
// }

board.addEventListener('click', function (event) {
    let id = event.target.id
    let row = id[1];
    let column = id[3];
    state.board[row][column] = takeTurns();
    //updatePlayerTurn();
    console.log(state.board);
    //console.log(state.playerIndex);
    event.target.innerHTML = takeTurns();
});

// Render on load
renderNewGame();