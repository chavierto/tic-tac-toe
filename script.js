//Define first player
let currentPlayer = 'x';
let currentGameCounter = 0;

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
	const boxes = document.querySelectorAll('.box');
	boxes.forEach((box) => {
		box.innerText = '';
	});
}

//Define gameboard handler
function boxClickHandler(event) {
	if (event.target.className === 'box' && currentGameCounter < 9) {
		if (event.target.innerText === '') {
			event.target.innerText = currentPlayer;
			switchPlayers();
			currentGameCounter++;
			bannerEl.innerText = `It's ${currentPlayer}'s turn!`;
			// checkWin();
		}
	}
	if (currentGameCounter === 9) {
		bannerEl.innerText = "It's a tie!";
	}
}

// function checkWin() {
// 	if (
// 		a1.innerText &&
// 		a1.innerText === a2.innerText &&
// 		a2.innerText === a3.innerText
//     ) else if (
//         b1.innerText &&
// 		b1.innerText === b2.innerText &&
// 		b2.innerText === b3.innerText
//     ) else if (
//         c1.innerText &&
// 		c1.innerText === c2.innerText &&
// 		c2.innerText === c3.innerText
//     ) else if (
//         a1.innerText &&
//         a1.innerText === b1.innerText &&
//         b1.innerText === c1.innerText
//     ) else if (
//         a2.innerText &&
//         a2.innerText === b2.innerText &&
//         b2.innerText === c2.innerText
//     ) else if (
//         a3.innerText &&
//         a3.innerText === b3.innerText &&
//         b3.innerText === c3.innerText
//     ) else if (
//         a1.innerText &&
//         a1.innerText === b2.innerText &&
//         b2.innerText === c3.innerText
//     ) else if (
//         a3.innerText &&
//         a3.innerText === b2.innerText &&
//         b2.innerText === c1.innerText
//     )    {
// 		bannerEl.innerText = `${currentPlayer}'s the winner!`;
// 	}
// }

/*
how do you win
if (a1.innerText === a2.innerText && a2.innerText === a3.innerText) {
 console.log(`${currentPlater}'s the winner!)   
}

b1 b2 b3
c1 c2 c3
a1 b1 c1
a2 b2 c2
a3 b3 c3
a1 b2 c3
a3 b2 c1
*/

const gamePlay = ['', '', '', '', '', '', '', '', ''];

// if (event)
// 	function checkWin() {
// 		//checks for win condition
// 	}

// function checkTie() {
// 	//checks if there is a tie
// }

function switchPlayers() {
	// if (currentPlayer === 'X') {
	// 	currentPlayer = 'O';
	// } else {
	// 	currentPlayer = 'X';
	// }
	currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
}
