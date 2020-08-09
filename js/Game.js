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
                         new Phrase('Game of Thrones'),
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
     * Starts/resets the game, hides start screen, selects a random phrase, and displays it
     */
     startGame() {
        const overlay = document.getElementById('overlay');
        const keyboardWrap = document.querySelector('#phrase');
        const keyboard = keyboardWrap.firstElementChild;
        const keys = document.querySelectorAll('.key');
        const hearts = document.querySelectorAll('.tries img');
        
        // Hide the overlay at game start
        overlay.style.display = 'none';

        // Remove any existing phrase tiles from the screen
        // Referenced: https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
        while (keyboard.firstElementChild) {
            keyboard.removeChild(keyboard.firstElementChild);
        }

        // Reset the keyboard keys
        for (let key of keys) {
            key.disabled = false;
            key.className = '';
            key.className = 'key';
            key.style.transition = 'none';
        }

        // Reset the heart icons to 5 live hearts
        for (let heart of hearts) {
            heart.setAttribute('alt', 'Heart Icon');
            heart.setAttribute('src', 'images/liveHeart.png');
        }

        // Get new phrase and sets it as the active phrase, then adds it to display
        this.activePhrase = this.getRandomPhrase;
        this.activePhrase.addPhraseToDisplay();
     }


    /**
     * Handler function to control most of the game logic.
     * Checks to see if the letter the user chooses is in the phrase
     * and checks for win and manages UI state.
     * @param  -  click event for handler
     */
     handleInteraction(event) {
        const selectedBtn = event.target;
        const letter = selectedBtn.textContent;

        // Disable keyboard letter
        selectedBtn.disabled = true;

        // If the clicked letter key is in the active phrase
        if (this.activePhrase.checkLetter(letter)){

            // Add the chosen class to the key and show the matching letters in the phrase
            selectedBtn.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);

            // Check for win and end game if true
            if (this.checkForWin) {
                this.gameOver;
            }

        // If the clicked letter is not in the active phrase, add wrong class and remove life
        } else {
            selectedBtn.classList.add('wrong');
            this.removeLife;
        }
     }


    /**
     * Getter that removes a life from the player for an incorrect guess.
     * Ends game if it's the 5th missed guess.
     */
     get removeLife() {
        const hearts = document.querySelectorAll('.tries img[src="images/liveHeart.png"]'); 
        const endHeart = hearts[hearts.length - 1];

        // Change alt and src of last heart
        endHeart.setAttribute('alt', 'Lost Heart Icon');
        endHeart.setAttribute('src', 'images/lostHeart.png');

        // Update missed guess count and end if === 5
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver;
        }
     }


     /**
     * Checks for a win by checking how many hidden letters remain in the phrase.
     * @return {Boolean}  -  Game win
     */
     get checkForWin() {
        const hiddenLetters = document.querySelectorAll('.hide');
        if (hiddenLetters.length < 1) {
            return true;
        } else {
            return false;
        }
     }


    /**
     * Ends the game by returning the overlay and showing a message indicating win/loss
     */
     get gameOver() {
        const overlay = document.getElementById('overlay');
        const msg = document.getElementById('game-over-message');

        // Show overlay
        overlay.style.display = 'flex';

        // Loss and win messages
        if (this.missed === 5) {
            msg.textContent = 'Ah bummer. Better luck next time. :(';
        } else {
            msg.textContent = 'You won! Nice job!';
        }

        // Reset missed guesses to 0
        this.missed = 0;
     }


}