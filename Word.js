var Letter = require('./Letter')

function Word(value){
    this.value = value
    this.ltrsInWord = []
    for (var i = 0; i < this.value.length; i++){
        this.ltrsInWord.push(this.value[i]);
    }
    this.displayWord = function(){
        var word = new Letter();
        this.ltrsInWord.forEach(function(element){
            word.renderLetter(element);
        });
    }
    this.callGuess = function(guess){
        var guess = new Letter();
            guess.checkGuess();
        
    }
}

Word.prototype = new Letter

Word.prototype.constuctor = Word
    
// Word.prototype.displayWord = function(){
//     this.ltrsInWord.forEach(function(element){
//         randomlySelectedWord.displayLetter(element)
//     });
// }




// Word.prototype.callGuess = function(){
//     this.ltrsInWord.forEach(function(element){
//         letter.checkGuess(element);
//     });
// }
   
module.exports = Word;
