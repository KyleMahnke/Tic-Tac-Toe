// To Do List
// * produce blank board
// enter player names and have them displayed
// let clicking on board register as move
// switch players each click
// don't allow clicking of same square twice
// check for winner
// declare winner if there is one
// reset board / play again button
// make it look dope

// ? use string for X and O or images?

"use strict";

const initialState = {
    players: ['x', 'o'],
    board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
    ]
};


// state updates the state of the game
let state = {
    players: ['x', 'o'],
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]
  };

// sets up board
function buildInitialState() {
    state.board
}

// helper functions
function getPlayer(index) {
    return state.players[index];
}

//need something that renders the state
// function renderBoard() {
//     for (let index =0; index < 9; index++)
//     //get cell data from the state
//     const cellData = state[index]; 
//     // 
// }

// updates the player's names in state
function updatePlayerNames(player1, player2) {
    state.players = [{
        name: player1
    }, {
        name: player2,
    }];
}

// reset the entire board
function resetEverything() {
    state = initialState
}

// not needed boxElement code below? (switched to board)
//const boxElement = document.querySelector('#board');

// confirms clicking boxes identifies their location
board.addEventListener('click', function (event) {
    let id = event.target.id
    let row = id[1];
    let column = id[3];

    if (event.target.className !== 'cell') {
        return;
    }
    
    {let innerText = "X"} 

    const index = Number(event.target.dataset.index)

    console.log(id)
});





//need something for actions (then renders again)