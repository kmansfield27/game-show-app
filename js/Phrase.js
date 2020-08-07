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

 }