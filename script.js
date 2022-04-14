const GAME_RULES = {
    ROCK: {
        SCISSORS: true,
        LIZARD: true
    },
    PAPER: {
        ROCK: true,
        SPOCK: true
    },
    SCISSORS: {
        PAPER: true,
        LIZARD: true
    },
    LIZARD: {
        SPOCK: true,
        PAPER: true
    },
    SPOCK: {
        SCISSORS: true,
        ROCK: true
    }
}

function computerPlay(btn) {
    let randNum = Math.random();
    if (randNum < 0.2) {
        btn[0].classList.add('computerOption');
        setTimeout(() => {
           btn[0].classList.remove('computerOption');
        }, 500);
        return "ROCK";
    }
    else if (randNum < 0.4) {
        btn[1].classList.add('computerOption');
        setTimeout(() => {
           btn[1].classList.remove('computerOption');
        }, 500);
        return "PAPER";
    }
    else if (randNum < 0.6) {
        btn[2].classList.add('computerOption');
        setTimeout(() => {
           btn[2].classList.remove('computerOption');
        }, 500);
        return "SCISSORS";
    }
    else if (randNum < 0.8) {
        btn[3].classList.add('computerOption');
        setTimeout(() => {
           btn[3].classList.remove('computerOption');
        }, 500);
        return "LIZARD";
    }
    else {
        btn[4].classList.add('computerOption');
        setTimeout(() => {
           btn[4].classList.remove('computerOption');
        }, 500);
        return "SPOCK";
    }
}

function playRound(user, computer, bazinga) {
    
    if (user === computer) {
        tie.currentTime = 0;
        tie.play();
        return 'Tie!';
    }
    else if (GAME_RULES[user][computer]) {
        userTotal++;
        roundwin.currentTime = 0;
        roundwin.play();
        return 'You Win!';
    }
    else {
        computerTotal++;
        bazinga.currentTime = 0;
        bazinga.play();
        return 'You Loose';
    }
}

let userTotal = 0;
let computerTotal = 0;

const btn = document.querySelectorAll("[id^='btn-']");

const bazinga = document.querySelector('#bazinga');
const roundwin = document.querySelector('#roundwin');
const tie = document.querySelector('#tie');
const youwin = document.querySelector('#youwin');
const youlose = document.querySelector('#youlose');

const div = document.querySelector('#score');
const p = document.createElement('p');
const h3 = document.createElement('h3');

div.appendChild(p);
div.appendChild(h3);

btn.forEach(button => button.addEventListener('click', () => {

    h3.textContent = playRound(button.alt, computerPlay(btn), bazinga); 
    
    button.classList.add('optionClick');
    setTimeout(() => {
       button.classList.remove('optionClick');
    }, 100);

    p.textContent = `User: ${userTotal} Vs Computer: ${computerTotal}`;
    
    if (userTotal >= 5) {
        h3.textContent = 'YOU WIN!!';
        youwin.play();
        if (confirm('Do you wanna play again?')) location.reload();
        else location.assign('https://www.theodinproject.com')
    }
    else if (computerTotal >= 5) {
        h3.textContent = 'YOU LOOSE!';
        youlose.play();
        if (confirm('Do you wanna play again?')) location.reload();
        else location.assign('https://www.theodinproject.com')
    } 
}));
