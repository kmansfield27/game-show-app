/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {

    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * Displays the phrase on the screen
     */
    addPhraseToDisplay() {
        for (let char of this.phrase) {
            const phraseCharList = document.querySelector('#phrase ul');
            const listItem = document.createElement('li');
            const testChar = /[a-z]/.test(char);

            if ( testChar ) {
                listItem.classList.add('hide', 'letter', char);
                listItem.textContent = char;
            } else {
                listItem.classList.add('space');
            }

            phraseCharList.appendChild(listItem);
        }
    }

    /**
     * Checks to see if the selected letter is in the phrase
     * @return {boolean}  -  True or false if the letter selected matches a letter in the phrase
     */
    checkLetter(letter) {
        
        var containsLetter = this.phrase.includes(letter);
        if ( containsLetter) {
            return true;
        } else {
            return false;
        }
    }

    /**
     * Reveals the letter(s) on the board that match the player's selection.
     */

    showMatchedLetter(letter) {
        const matchedLetters = document.querySelectorAll('.' + letter);
        for (let letter of matchedLetters) {
            letter.classList.remove('hide');
            letter.classList.add('show');
        }
    }


 }