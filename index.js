var Word = require('./Word')
var inquirer = require('inquirer');

// Randomly selects a word and uses the Word constructor to store it

var wordBank = ["BATMAN", "SUPERMAN", "IRON MAN", "SPIDERMAN", "WONDER WOMAN", "HULK"];

var randomlySelectedWord = new Word(wordBank[Math.floor(Math.random() * wordBank.length)]);


for (var i = 0; i < randomlySelectedWord.length; i++){
    randomlySelectedWord.ltrsInWord.push(randomlySelectedWord[i]);
    console.log(randomlySelectedWord.ltrsInWord)
}

randomlySelectedWord.displayWord();

// Prompts the user for each guess and keeps track of the user's remaining guesses
inquirer.prompt([
    {
        name: 'guess',
        message: 'Guess a letter!'
    }
    
]).then(function(answer){
// console.log to check program so far
console.log(answer);
console.log(randomlySelectedWord);
randomlySelectedWord.callGuess();
});
