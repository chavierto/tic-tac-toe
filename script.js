//Define first player
let currentPlayer = 'x';

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
	const boxes = document.querySelectorAll('.box');
	boxes.forEach((box) => {
		box.innerText = '';
	});
}

//Define gameboard handler
function boxClickHandler(event) {
	if (event.target.className === 'box') {
		if (event.target.innerText === '') {
			event.target.innerText = currentPlayer;
			switchPlayers();
			bannerEl.innerText = `It's ${currentPlayer}'s turn!`;
			checkWin();
		}
	}
}

const gamePlay = ['', '', '', '', '', '', '', '', ''];

function switchPlayers() {
	currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
}
