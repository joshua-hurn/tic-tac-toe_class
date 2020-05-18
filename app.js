const cells = document.querySelectorAll(".row > div");
const resetButton = document.getElementById("reset-button");
const winningCombos = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]],
];
let currentPlayer = "X";
let turnCount = 0;
let isGameOver = false;

resetButton.addEventListener("click", resetGame);

cells.forEach(function (cell) {
    cell.addEventListener("click", function (e) {
        if (e.target.textContent === "" && isGameOver === false) {
            e.target.textContent = currentPlayer;

            turnCount++;
            checkWin();
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }
        }
    });
});

function checkWin() {
    for (let i = 0; i < winningCombos.length; i++) {
        let XCount = 0;
        let OCount = 0;

        for (let j = 0; j < winningCombos[i].length; j++) {
            if (winningCombos[i][j].textContent === "X") {
                XCount++
            } else if (winningCombos[i][j].textContent === "O") {
                OCount++
            }
        }

        if (XCount === 3) {
            setTimeout(() => {
                alert("X Wins");
            }, 0);
            isGameOver = true;
            resetButton.style.display = "block";
        } else if (OCount === 3) {
            setTimeout(() => {
                alert("O Wins");
            }, 0);
            isGameOver = true;
            resetButton.style.display = "block";
        } else if (turnCount === 9) {
            setTimeout(() => {
                alert("Draw");
            }, 0);
            isGameOver = true;
            resetButton.style.display = "block";
            break;
        }
    }
}

function resetGame() {
    turnCount = 0;
    currentPlayer = "X";

    cells.forEach(function (cell) {
        cell.textContent = "";
    });
}
