const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';

function handleSquareClick(e) {
  const square = e.target;
  
  if (square.textContent !== '') {
    return;
  }
  
  square.textContent = currentPlayer;
  
  if (checkForWin()) {
    alert(currentPlayer + ' wins!');
  } else if (checkForTie()) {
    alert('Tie game!');
  } else {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  }
}

function checkForWin() {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  
  return winningCombos.some(combo => {
    return combo.every(index => {
      return squares[index].textContent === currentPlayer;
    });
  });
}

function checkForTie() {
  return [...squares].every(square => {
    return square.textContent !== '';
  });
}

squares.forEach(square => {
  square.addEventListener('click', handleSquareClick);
});
const resetButton = document.getElementById('reset-button');

function resetGame() {
  squares.forEach(square => {
    square.textContent = '';
  });
  currentPlayer = 'X';
}

resetButton.addEventListener('click', resetGame);

