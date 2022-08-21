/*
  Rock Paper Scissors 🚀🔥
  Concepts covered in this project
    👉 For loops
    👉 Dom Manipulation
    👉 Variables
    👉 Conditionals (if else if)
    👉 Template Literals
    👉 Event Listeners
    👉 Higher order Function (Math.random())
*/

const handsDiv = document.getElementById('hands');
const playerScoreDiv = document.getElementById('player-score');
const resultDiv = document.getElementById('result');
const buttons = document.querySelectorAll('.rpsButton');
const endGameButton = document.getElementById('endGameButton');

const totalScore = { playerScore: 0, computerScore: 0 }

let result = '';

// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice() {
  // creata an array with the options 
  const options = ['Rock', 'Paper', 'Scissors'];
  // create a function to pick a randon index in the array
  let randomIndex = Math.floor(Math.random() * options.length);
  // return the element associated with the -random- index
  return options[randomIndex];
}

// ** getResult compares playerChoice & computerChoice and returns the score accordingly **
// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  // return the result of score based on if you won, drew, or lost
  // All situations where human draws, set `score` to 0
  if
    // ((playerChoice == 'Rock' && computerChoice == 'Rock') || (playerChoice == 'Paper' && computerChoice == 'Paper') || (playerChoice == 'Scissors' && computerChoice == 'Scissors'))
    (playerChoice == computerChoice) {
    // console.log('It\'s a Tie!');
    score = 0;
    // All situations where human wins, set `score` to 1
    // make sure to use else ifs here
  } else if ((playerChoice == 'Paper' && computerChoice == 'Rock') || (playerChoice == 'Scissors' && computerChoice == 'Paper') || (playerChoice == 'Rock' && computerChoice == 'Scissors')) {
    // console.log('Player Won!');
    score = 1;
    // Otherwise human loses (aka set score to -1)
  } else {
    // console.log('Computer Won!');
    score = -1;
  }
  // return score
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. 
// Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  // Hint: on a score of -1
  // You should do result.innerText = 'You Lose!'
  // Don't forget to grab the div with the 'result' id!

  if (score == 0) {
    result = "It's a Draw!";
  } else if ((score == 1)) {
    result = 'You Win!';
    totalScore['playerScore'] += 1;
  } else {
    result = 'You Lose!';
    totalScore['computerScore'] += 1;
  }

  resultDiv.innerText = result;
  playerScoreDiv.innerText = `🧑🏼:${totalScore['playerScore']} vs. 🤖:${totalScore['computerScore']}`;
  handsDiv.innerText = `🧑🏼 ${playerChoice} vs. 🤖 ${computerChoice}`;

  // userPerformance(playerScore, computerScore);
}

function onClickRPS(playerChoice) {
  let computerChoice = getComputerChoice();
  // ** Calculate who won 
  let score = getResult(playerChoice, computerChoice);
  // show it on the screen **
  showResult(score, playerChoice, computerChoice)
}

// ** resetGame function clears all the text on the DOM **
function resetGame() {

  // backend
  totalScore['playerScore'] = 0;
  totalScore['computerScore'] = 0;

  // frontend
  resultDiv.innerText = 'Let\'s play!';
  playerScoreDiv.innerText = `🧑🏼:${totalScore['playerScore']} vs. 🤖:${totalScore['computerScore']}`;
  handsDiv.innerText = '🧑🏼 ¿? vs. 🤖 ¿?';
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  // 1. loop through the buttons using a forEach loop
  buttons.forEach(button => {
    // 2. Add a 'click' event listener to each button
    button.onclick = () => {
      // 3. Call the onClickRPS function every time someone clicks
      // 4. Make sure to pass the currently selected rps button as an argument
      onClickRPS(button.value);
    }
  })

  // Add a click listener to the end game button that runs the resetGame() function on click
  endGameButton.onclick = () => { resetGame(); }
}
resetGame();
playGame();