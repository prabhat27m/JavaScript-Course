'use strict';
console.log(document.querySelector(".message").textContent);
console.log(document.querySelector(".message").innerHTML);

console.log(document.querySelector('.number').value);
let SecretNumber= Math.trunc(Math.random()*20 )+1;
document.querySelector('.number').textContent=SecretNumber
let score=20;

const displayMessage= function(Message){
    document.querySelector('.message').textContent=Message
}

document.querySelector('.check').addEventListener('click',
function(){
    const guess =Number(document.querySelector('.guess').value);
    if(!guess){
        document.querySelector('.message').textContent=" ⛔ No Number"
    }
    else if(guess<SecretNumber){
        document.querySelector('.message').textContent="Too low"
        score--;
        document.querySelector(".score").textContent=score;
    }
    else if(guess > SecretNumber){
        document.querySelector(".message").textContent="Too high"
        score--;
        document.querySelector(".score").textContent=score;
    }
    else if(guess === SecretNumber ){
        document.querySelector(".message").textContent="Congratulations !!"
        // these are inline css
        document.querySelector("body").style.backgroundColor='#60b347'
        document.querySelector(".number").style.width="30rem"
    }

});

document.querySelector('.again').addEventListener('click',
function(){
     SecretNumber= Math.trunc(Math.random()*20 )+1;
    document.querySelector('.number').textContent=SecretNumber
    score=20;
    document.querySelector('.score').textContent=score
    document.querySelector(".message").textContent="Start guessing ....."
})

// const age = birthYear => 2037-birthYear