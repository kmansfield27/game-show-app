/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
game.getRandomPhrase().addPhraseToDisplay();

game.phrases.forEach((phrase, index) => {
    console.log(`Phrase ${index} - ${phrase.phrase}`);
});

console.log(game.getRandomPhrase());