const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const computerOptions = ['rock','paper','scissors'];
const result = document.querySelector('#result');
const yourScore = document.querySelector('#your-score');
const computerScore = document.querySelector('#computer-score')
let you;
let yourNewScore = 0;
let computerNewScore = 0;

function gamelimit(){
    if(yourNewScore == 10){
        alert("You Win this game! Way to go");
        window.location.reload()
    } else if(computerNewScore == 10){
        alert("You Lose this game! Try to win next time");
        window.location.reload()
    }
}

rock.addEventListener('click', () => {
    document.querySelector('.paper-right').style.display="none";
    document.querySelector('.scissors-right').style.display="none";
    document.querySelector('.rock-right').style.display="block";
    computer()
    you = "rock";
    winner(you,computer())
    gamelimit()
});

paper.addEventListener('click', () => {
    document.querySelector('.rock-right').style.display="none";
    document.querySelector('.scissors-right').style.display="none";

    document.querySelector('.paper-right').style.display="block";
    computer()
    you = "paper";
    winner(you,computer())
    gamelimit()
});

scissors.addEventListener('click', () => {
    document.querySelector('.paper-right').style.display="none";
    document.querySelector('.rock-right').style.display="none";

    document.querySelector('.scissors-right').style.display="block";
    computer()
    you = "scissors";
    winner(you,computer())
    gamelimit()
});


function computer(){
    const choiceNumber = Math.floor(Math.random()*3);
    const computerChoice = computerOptions[choiceNumber];

    if(computerChoice === "rock"){
        document.querySelector('.paper-left').style.display="none";
        document.querySelector('.scissors-left').style.display="none";
        document.querySelector('.rock-left').style.display="block";
        return computerChoice
    }else if(computerChoice == "paper"){
        document.querySelector('.rock-left').style.display="none";
        document.querySelector('.scissors-left').style.display="none";
        document.querySelector('.paper-left').style.display="block";
        return computerChoice
    }else if(computerChoice == "scissors"){
        document.querySelector('.rock-left').style.display="none";
        document.querySelector('.paper-left').style.display="none";
        document.querySelector('.scissors-left').style.display="block";
        return computerChoice
    }
}


function winner(yourChoice,compChoice){
    if(yourChoice === compChoice){
        result.innerText = "Tie"
        result.style.color = "black"
    } else {
        if(yourChoice === "rock"){
            if(compChoice === "paper"){
                result.innerText = "You lose! Paper beats Rock"
                result.style.color = "Red"
                computerNewScore += 1
                computerScore.innerText = computerNewScore
                
            } else {
                result.innerText = "You win! Rock beats Scissors"
                result.style.color = "Green"
                yourNewScore += 1
                yourScore.innerText = yourNewScore
                
            }
        } else if(yourChoice === "paper"){
            if(compChoice === "scissors"){
                result.innerText = "You lose! Scissors beats Paper"
                result.style.color = "Red"
                computerNewScore += 1
                computerScore.innerText = computerNewScore
            } else {
                result.innerText = "You win! Paper beats Rock"
                result.style.color = "Green"
                yourNewScore += 1
                yourScore.innerText = yourNewScore
            }
        } else if(yourChoice === "scissors"){
            if(compChoice === "rock"){
                result.innerText = "You lose! Rock beats Scissors"
                result.style.color = "Red"
                computerNewScore += 1
                computerScore.innerText = computerNewScore
            } else {
                result.innerText = "You win! Scissors beats Paper"
                result.style.color = "Green"
                yourNewScore += 1
                yourScore.innerText = yourNewScore
            }
        }
    }

}
