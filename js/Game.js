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
                         new Phrase('Mystery Science Theater')];
        return phrases;
    }

    /**
     * Retrieves a phrase at random from the array of phrases
     * @return {array[x]}  -  An element from an array
     */
    getRandomPhrase() {
        this.activePhrase = this.phrases[ Math.floor(Math.random() * this.phrases.length )];
        return this.activePhrase;
    }


}