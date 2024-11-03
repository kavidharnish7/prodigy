// Variables for the game state
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;
const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// Function to handle cell clicks
const handleCellClick = (e) => {
    const clickedCell = e.target;
    const cellIndex = clickedCell.getAttribute('data-index');

    if (board[cellIndex] !== "" || !gameActive) {
        return;
    }

    board[cellIndex] = currentPlayer;
    clickedCell.innerText = currentPlayer;

    if (checkWin()) {
        alert(`Player ${currentPlayer} wins!`);
        gameActive = false;
    } else if (board.every(cell => cell !== "")) {
        alert("It's a draw!");
        gameActive = false;
    } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
};

// Function to check winning conditions
const checkWin = () => {
    return winningConditions.some(condition => {
        const [a, b, c] = condition;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
};

// Function to restart the game
const restartGame = () => {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = "");
};

// Event listeners for the game
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.getElementById('reset').addEventListener('click', restartGame);
