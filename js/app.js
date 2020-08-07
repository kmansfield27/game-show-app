/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;

const resetButton = document.getElementById('btn__reset');
resetButton.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});