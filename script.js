//Define first player
let currentPlayer = 'x';
let currentGameCounter = 0;
let xPicks = [];
let oPicks = [];
let gameOver = false;

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

//Define restart handler
function restart() {
	currentGameCounter = 0;
	bannerEl.innerText = `It's ${currentPlayer}'s turn!`;
	xPicks = [];
	oPicks = [];
	gameOver = false;
	const boxes = document.querySelectorAll('.box');
	boxes.forEach((box) => {
		box.innerText = '';
	});
}

//Define gameboard handler
function boxClickHandler(event) {
	if (!gameOver && event.target.className === 'box' && currentGameCounter < 9) {
		if (event.target.innerText === '') {
			event.target.innerText = currentPlayer;
			currentPlayer === 'x'
				? xPicks.push(parseInt(event.target.id))
				: oPicks.push(parseInt(event.target.id));

			currentGameCounter++;
			checkWin();
			if (!gameOver) {
				switchPlayers();
				bannerEl.innerText = `It's ${currentPlayer}'s turn!`;
			}
		}
	}
	if (currentGameCounter === 9) {
		bannerEl.innerText = "It's a tie!";
	}
}

function checkWin() {
	currentPlayer === 'x' ? pickChecker(xPicks) : pickChecker(oPicks);
}

function pickChecker(arr) {
	let matches =
		(arr.includes(0) && arr.includes(1) && arr.includes(2)) ||
		(arr.includes(3) && arr.includes(4) && arr.includes(5)) ||
		(arr.includes(6) && arr.includes(7) && arr.includes(8)) ||
		(arr.includes(0) && arr.includes(3) && arr.includes(6)) ||
		(arr.includes(1) && arr.includes(4) && arr.includes(7)) ||
		(arr.includes(2) && arr.includes(5) && arr.includes(8)) ||
		(arr.includes(0) && arr.includes(4) && arr.includes(8)) ||
		(arr.includes(2) && arr.includes(4) && arr.includes(6));

	if (matches) {
		bannerEl.innerText = `${currentPlayer} wins!`;
		gameOver = true;
	}
}

function switchPlayers() {
	currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
}
