const cells = document.querySelectorAll(".row > div");
let turnCount = 0;
let gameOver = false;
let winningBox = document.getElementById("winning-message");
let resetButton = document.getElementById("reset-button");
let winningCombos = [
    [cells[0], cells[1], cells[2]],
    [cells[3], cells[4], cells[5]],
    [cells[6], cells[7], cells[8]],
    [cells[0], cells[3], cells[6]],
    [cells[1], cells[4], cells[7]],
    [cells[2], cells[5], cells[8]],
    [cells[0], cells[4], cells[8]],
    [cells[2], cells[4], cells[6]],
];

resetButton.addEventListener("click", function () {
    window.location.reload();
});

cells.forEach(function (cell) {
    cell.addEventListener("click", function () {
        if (turnCount % 2 === 0 && gameOver === false) {
            cell.innerText = "X";
            turnCount++;
            checkWin();
        } else if (turnCount % 2 === 1 && gameOver === false) {
            cell.innerText = "O";
            turnCount++; // turnCount = turnCount + 1
            checkWin();
        }
    }, { once: true });
});

function checkWin() {
    for (let i = 0; i < winningCombos.length; i++) {
        // loop through winningCombos
        let xCount = 0;
        let oCount = 0;
        
        for (let j = 0; j < winningCombos[i].length; j++) {
            // loop through each inner array.
            
            if (winningCombos[i][j].textContent === "X") {
                xCount++
            } else if (winningCombos[i][j].textContent === "O") {
                oCount++
            }
        }

        if (xCount == 3) {
            gameOver = true;
            setTimeout(() => {
                winningBox.textContent = "X Wins!";
                resetButton.style.display = "block";
            }, 0);
        } else if (oCount == 3) {
            gameOver = true;
            setTimeout(() => {
                winningBox.textContent = "O Wins!";
                resetButton.style.display = "block";            
            }, 0);
        }
    }

    if (turnCount == 9 && !gameOver) {
        alert("Draw!");
    }
}