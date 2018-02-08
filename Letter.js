var inquirer = require('inquirer');

function Letter(value){
    this.letter = value /*The underlying character stored here*/
    this.hasBeenGuessed = false  
}
//displayLetter
    
Letter.prototype.renderLetter = function(){
   if (this.hasBeenGuessed === true){
       return console.log(' ' + this.letter);
   } else {
       return console.log(' _')
   }
}
Letter.prototype.checkGuess = function(guess){
    if(guess === this.value){
        return this.hasBeenGuessed = true
        console.log(guess);
    } else{
        return console.log("that is incorrect");
    }
}


    
module.exports = Letter;







