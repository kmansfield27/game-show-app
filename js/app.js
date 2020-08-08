/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game = new Game();

const resetButton = document.getElementById('btn__reset');
resetButton.addEventListener('click', () => {
    game.startGame();
});

const keyboardBtns = document.getElementById('qwerty');
keyboardBtns.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        game.handleInteraction(event);
    }
});

