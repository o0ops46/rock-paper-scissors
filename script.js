
let computerPlay = function (max= 3){
    const choices = ['Rock', 'Paper', 'Scissors']
    return choices[Math.floor(Math.random()*max)].toLowerCase();
}
function singleRound (playerSelection, computerSelection = computerPlay()){
    playerSelection = prompt('chose rock / paper /scissors').toLowerCase();
    if(playerSelection === computerSelection){
        return `Play one more, this was a draw.`
    }else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        return  `You Win. ${playerSelection} beats ${computerSelection}`
    }else if(playerSelection === 'paper' && computerSelection === 'rock'){
        return  `You Win. ${playerSelection} beats ${computerSelection}`
    }else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        return  `You Win. ${playerSelection} beats ${computerSelection}`
    }else return `You Lost. ${computerSelection} beats ${playerSelection}`
}
