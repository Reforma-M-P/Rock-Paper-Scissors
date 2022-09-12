const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const computerOptions = ['rock','paper','scissors'];
let result = document.querySelector('#result');
let you;


rock.addEventListener('click', () => {
    document.querySelector('.paper-right').style.display="none";
    document.querySelector('.scissors-right').style.display="none";

    document.querySelector('.rock-right').style.display="block";
    game()
    you = "rock";


});

paper.addEventListener('click', () => {
    document.querySelector('.rock-right').style.display="none";
    document.querySelector('.scissors-right').style.display="none";

    document.querySelector('.paper-right').style.display="block";
    game()
    you = "paper";

 
});

scissors.addEventListener('click', () => {
    document.querySelector('.paper-right').style.display="none";
    document.querySelector('.rock-right').style.display="none";

    document.querySelector('.scissors-right').style.display="block";
    game()
    you = "scissors";


});


function game(){
    const choiceNumber = Math.floor(Math.random()*3);
    const computerChoice = computerOptions[choiceNumber];

    if(computerChoice == "rock"){
        document.querySelector('.paper-left').style.display="none";
        document.querySelector('.scissors-left').style.display="none";
        document.querySelector('.rock-left').style.display="block";
    }else if(computerChoice == "paper"){
        document.querySelector('.rock-left').style.display="none";
        document.querySelector('.scissors-left').style.display="none";
        document.querySelector('.paper-left').style.display="block";
    }else if(computerChoice == "scissors"){
        document.querySelector('.rock-left').style.display="none";
        document.querySelector('.paper-left').style.display="none";
        document.querySelector('.scissors-left').style.display="block";
    }
}
