// Grsb Buttons
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

// Grab Divs with their IDs
var game_contanier = document.getElementById("game_contanier");

var selections = document.getElementById("selections");
var winner = document.getElementById("winner");
var round_remaning = document.getElementById("round_remaning");
var player__scores = document.getElementById("player__scores");
var computer__scores = document.getElementById("computer__scores");


// initializing ||  Declearing variables
var Player_scores = 0;
var computer_scores = 0;
var round = 0
var PlayerSelection, ComputerSelection, remaning_rounds;


// game conditions
function playGround(player_1, opponent) {
    if (player_1 === opponent) {
        selections.textContent = `${player_1} = ${opponent}`;
        winner.textContent = "Match Draw";
    }

    // player wining stutaions
    else if (player_1 === "scissors" && opponent === "paper") {
        selections.textContent = `You Selected "${player_1}", and Computer selected "${opponent}"`;
        winner.textContent = `You Win!`;
        Player_scores++;
        round++;
        player__scores.textContent = Player_scores;
        computer__scores.textContent = computer_scores;
    }
    else if (player_1 === "paper" && opponent === "rock") {
        selections.textContent = `You Selected "${player_1}", and Computer selected "${opponent}"`;
        winner.textContent = "You Win!";
        Player_scores++;
        round++;
        player__scores.textContent = Player_scores;
        computer__scores.textContent = computer_scores;
    }
    else if (player_1 === "rock" && opponent === "scissors") {
        selections.textContent = `You Selected "${player_1}", and Computer selected "${opponent}"`;
        winner.textContent = "You Win!";
        Player_scores++;
        round++;
        player__scores.textContent = Player_scores;
        computer__scores.textContent = computer_scores;
    }

    // computer winning satutation 
    else if (opponent === "rock" && player_1 === "scissors") {
        selections.textContent = `You Selected "${player_1}", and Computer selected "${opponent}"`;
        winner.textContent = "Computer Win!";
        computer_scores++;
        round++;
        player__scores.textContent = Player_scores;
        computer__scores.textContent = computer_scores;
    }
    else if (opponent === "scissors" && player_1 === "paper") {
        selections.textContent = `You Selected "${player_1}", and Computer selected "${opponent}"`;
        winner.textContent = "Computer Win!";
        computer_scores++;
        round++;
        player__scores.textContent = Player_scores;
        computer__scores.textContent = computer_scores;
    }
    else if (opponent === "paper" && player_1 === "rock") {
        selections.textContent = `You Selected "${player_1}", and Computer selected "${opponent}"`;
        winner.textContent = "Computer Win!";
        computer_scores++;
        round++;
        player__scores.textContent = Player_scores;
        computer__scores.textContent = computer_scores;
    }

    // Rounds remaning 
    remaning_rounds = 5 - round;
    round_remaning.textContent = `Remaning Rounds : ${remaning_rounds}/5`;

    if(remaning_rounds === 0){
        PlayAgainGame(Player_scores, computer_scores);
    }
}

//Computer choice
function getComputerChoice() {
    ComputerSelection = Math.floor(Math.random() * 3);
    if (ComputerSelection === 0) {
        ComputerSelection = "rock";
    }
    else if (ComputerSelection === 1) {
        ComputerSelection = "paper";
    } else {
        ComputerSelection = "scissors";
    }
}

// Adding event when clicked on Buttons
rock.addEventListener("click", () => {
    PlayerSelection = "rock";
    getComputerChoice()
    playGround(PlayerSelection, ComputerSelection);
})

paper.addEventListener("click", () => {
    PlayerSelection = "paper";
    getComputerChoice()
    playGround(PlayerSelection, ComputerSelection);
})

scissors.addEventListener("click", () => {
    PlayerSelection = "scissors";
    getComputerChoice()
    playGround(PlayerSelection, ComputerSelection);
})


// ====================================================

var final__winner = document.getElementById("final__winner");
var restart_btn = document.getElementById("restart_btn");
var restart__contanier = document.getElementById("restart__contanier");


function PlayAgainGame(Player_scores, computer_scores){
        game_contanier.style.display = "none";
        restart__contanier.style.display = "block";
        if(Player_scores > computer_scores) {
            final__winner.textContent = "You won the match."
        }

        if(Player_scores < computer_scores) {
            final__winner.textContent = "You lose the match."
        }

        restart_btn.addEventListener("click", () =>{
            location.reload();
        })

}




// =================================================
// changing themes

const dark__mode = document.getElementById("dark__mode");
const light__mode = document.getElementById("light__mode");
const theme__span = document.getElementById("theme__span");

dark__mode.addEventListener("click" , () =>{
    dark__mode.style.display = "none";
    light__mode.style.display = "block";
    light__mode.style.filter = "invert(1)";
    theme_change()
})
light__mode.addEventListener("click" , () =>{
    dark__mode.style.display = "block";
    light__mode.style.display = "none";
    theme_change()
})

function theme_change () {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }