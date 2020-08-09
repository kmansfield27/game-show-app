/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 // Start new game
let game = new Game();

// Click handler for start/reset button
const resetButton = document.getElementById('btn__reset');
resetButton.addEventListener('click', () => {
    game.startGame();
});


// Click handler for onscreen keyboard buttons
const keyboardBtns = document.getElementById('qwerty');
keyboardBtns.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        game.handleInteraction(event);
    }
});

