/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {

    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }


    /**
     * Displays the phrase on the screen.
     */
    addPhraseToDisplay() {

        // Loop over each character in the phrase
        for (let char of this.phrase) {
            const phraseCharList = document.querySelector('#phrase ul');
            const listItem = document.createElement('li');
            
            // Test to see if character is a letter or space. Adds appropriate classes for letters/spaces
            // Letters are given the character to show as its text content
            const testChar = /[a-z]/.test(char);
            if ( testChar ) {
                listItem.classList.add('hide', 'letter', char);
                listItem.textContent = char;
            } else {
                listItem.classList.add('space');
            }

            // Add character placeholder to screen
            phraseCharList.appendChild(listItem);
        }
    }


    /**
     * Checks phrase to see if the selected letter is in the phrase
     * @return {boolean}  -  True or false if the letter selected matches a letter in the phrase
     * @param  -  A letter to test
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
     * Finds all the matched letters by class name that matches the param letter,
     * then loops over them and shows them
     * @param  -  a letter to show in the phrase
     */
    showMatchedLetter(letter) {
        const matchedLetters = document.querySelectorAll('.' + letter);
        for (let letter of matchedLetters) {
            letter.classList.remove('hide');
            letter.classList.add('show');
        }
    }

 }