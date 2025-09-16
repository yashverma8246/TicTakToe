// script.js (fixed reset issue)

let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

let turnO = true; // true = O's turn, false = X's turn
let count = 0; // count moves

// Winning patterns (indexes of boxes)
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

// Reset game
const resetGame = () => {
    turnO = true;
    count = 0;
    enableBoxes();
    msg.innerText = ""; // 🔥 clear previous message
    msgContainer.classList.add("hide"); // hide message container
};

// Show winner message
const showWinner = (winner) => {
    msg.innerText = `Winner: ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};

// Check winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
            if (pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return true;
            }
        }
    }
    return false;
};

// Box click event
boxes.forEach((box) => {
    box.innerText = ""; // clear the "0" from HTML
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        } else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWinner = checkWinner();

        if (count === 9 && !isWinner) {
            msg.innerText = "It's a Draw!";
            msgContainer.classList.remove("hide");
        }
    });
});

// Disable all boxes
const disableBoxes = () => {
    boxes.forEach((box) => (box.disabled = true));
};

// Enable all boxes
const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
};

resetBtn.addEventListener("click", resetGame);
