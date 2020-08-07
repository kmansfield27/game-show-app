/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }


    /**
     * Creates phrases for use in the game
     * @return {Object}  -  An array of phrases
     */
    createPhrases() {
        const phrases = [new Phrase('Twin Peaks'),
                         new Phrase('The Twilight Zone'),
                         new Phrase('The Kids in the Hall'),
                         new Phrase('Star Trek'),
                         new Phrase('The Prisoner')];
        return phrases;
    }

    /**
     * Retrieves a phrase at random from the array of phrases
     * @return {Object}  -  An object element from the array
     */
    get getRandomPhrase() {
        return this.phrases[ Math.floor(Math.random() * this.phrases.length )];
    }

    /**
     * Starts the game, hides start screen, selects a random phrase, and displays it
     */

     startGame() {
        const overlay = document.getElementById('overlay');
        overlay.style.display = 'none';

        this.activePhrase = this.getRandomPhrase;

        this.activePhrase.addPhraseToDisplay();
     }

}