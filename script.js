//Define first player
let currentPlayer = 'x';
let nextStarter = 'x';
let currentGameCounter = 0;
let xPicks = [];
let oPicks = [];
let gameOver = false;
let scores = { x: 0, o: 0, tie: 0 };

const winCombos = [
	[0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
	[0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
	[0, 4, 8], [2, 4, 6],             // diagonals
];

//Target gameboard
const gameBoardEl = document.querySelector('.gameboard');
//Add event listener to gameboard
gameBoardEl.addEventListener('click', boxClickHandler);

//Target banner
const bannerEl = document.querySelector('.banner');
bannerEl.innerText = `It's ${currentPlayer}'s turn!`;

//Target button
const buttonEl = document.querySelector('.button');
buttonEl.addEventListener('click', restart);

//Target score display
const scoreEl = document.querySelector('.score');

function updateScoreDisplay() {
	scoreEl.innerText = `X: ${scores.x}  |  Ties: ${scores.tie}  |  O: ${scores.o}`;
}
updateScoreDisplay();

//Define restart handler
function restart() {
	currentPlayer = nextStarter;
	currentGameCounter = 0;
	bannerEl.innerText = `It's ${currentPlayer}'s turn!`;
	xPicks = [];
	oPicks = [];
	gameOver = false;
	const boxes = document.querySelectorAll('.box');
	boxes.forEach((box) => {
		box.innerText = '';
		box.classList.remove('winning-cell', 'filled', 'game-over');
	});
}

//Define gameboard handler
function boxClickHandler(event) {
	if (!gameOver && event.target.className === 'box' && currentGameCounter < 9) {
		if (event.target.innerText === '') {
			event.target.innerText = currentPlayer;
			event.target.classList.add('filled');
			currentPlayer === 'x'
				? xPicks.push(parseInt(event.target.id))
				: oPicks.push(parseInt(event.target.id));

			currentGameCounter++;
			checkWin();
			if (!gameOver) {
				if (currentGameCounter === 9) {
					bannerEl.innerText = "It's a tie!";
					scores.tie++;
					updateScoreDisplay();
					gameOver = true;
					markGameOver();
				} else {
					switchPlayers();
					bannerEl.innerText = `It's ${currentPlayer}'s turn!`;
				}
			}
		}
	}
}

function checkWin() {
	const picks = currentPlayer === 'x' ? xPicks : oPicks;
	const winning = winCombos.find((combo) => combo.every((i) => picks.includes(i)));
	if (winning) {
		bannerEl.innerText = `${currentPlayer} wins!`;
		gameOver = true;
		scores[currentPlayer]++;
		updateScoreDisplay();
		highlightWin(winning);
		markGameOver();
		nextStarter = currentPlayer === 'x' ? 'o' : 'x';
	}
}

function highlightWin(combo) {
	combo.forEach((id) => {
		document.getElementById(String(id)).classList.add('winning-cell');
	});
}

function markGameOver() {
	document.querySelectorAll('.box').forEach((box) => box.classList.add('game-over'));
}

function switchPlayers() {
	currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
}
