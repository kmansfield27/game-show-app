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

    /**
     * Controls most of the game logic. Checks to see if the letter the user chooses is in the phrase.
     */
     handleInteraction(event) {
        const selectedBtn = event.target;
        const letter = selectedBtn.textContent;
        selectedBtn.disabled = true;

        console.log(selectedBtn);
        console.log(letter);

        if (this.activePhrase.checkLetter(letter)){

            selectedBtn.classList.add('chosen');
            this.activePhrase.showMatchedLetter(letter);

            
            if (this.checkForWin) {
                this.gameOver;
            }

        } else {
            selectedBtn.classList.add('wrong');

            this.removeLife;

        }
     }


     get removeLife() {

        const hearts = document.querySelectorAll('.tries img[src="images/liveHeart.png"]'); 

        // https://stackoverflow.com/questions/3216013/get-the-last-item-in-an-array
        const endHeart = hearts[hearts.length - 1]; 

        endHeart.setAttribute('alt', 'Lost Heart Icon');
        endHeart.setAttribute('src', 'images/lostHeart.png');

        this.missed += 1;

        if (this.missed === 5) {
            this.gameOver;
        }
     }

     get checkForWin() {
        const hiddenLetters = document.querySelectorAll('.hide');
        if (hiddenLetters.length < 1) {
            return true;
        } else {
            return false;
        }

     }

     get gameOver() {
        const overlay = document.getElementById('overlay');
        const msg = document.getElementById('game-over-message');
        overlay.style.display = 'flex';

        if (this.missed === 5) {
            msg.textContent = 'Ah bummer. Better luck next time. :(';

        } else {
            msg.textContent = 'You won! Nice job!';
        }

     }


}