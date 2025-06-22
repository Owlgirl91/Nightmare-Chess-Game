const board = document.getElementById("chessboard");
let selectedSquare = null;

const pieces = {
    r: "🎩", // Rook - Jack's hat

    n: "🎃", // Knight - Pumpkin

    b: "🕸️",  // Bishop - Web

    q: "👻", // Queen - Ghost

    k: "💀", // King - Skull

    p: "🖤", // Pawn - Black Heart
};

const startPosition = [
    ["r", "n", "b", "q", "k", "b", "n", "r"],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["","","","","","","",""],
    ["p","p","p","p","p","p","p","p"],
    ["R","N","B","Q","K","B","N","R"]

    
];

function createBoard() {
    board.innerHTML = "";


    for (let row = 0; row < 8; row++) {
        for (let col = 0; col < 8; col++) {
            const square = document.createElement("div");
            square.classList.add("square");

            if ((row + col) % 2 === 0) {
                square.classList.add("light");
            } else {
                square.classList.add("dark");
            }

            const piece = startPosition[row][col];
            if (piece) {
                square.textContent = pieces[piece.toLowerCase()];
            }

            square.dataset.row = row;
            square.dataset.col = col;

            square.addEventListener("click", handleSquareClick);
            board.appendChild(square);
        }
    }
}

function handleSquareClick(e) {
    const square = e.currentTarget;

    if (selectedSquare) {
        // Move piece
        const fromRow = selectedSquare.dataset.row;
        const fromCol = selectedSquare.dataset.col;
        const toRow = square.dataset.row;
        const toCol = square.dataset.col;

        startPosition[toRow][toCol] = startPosition[fromRow][fromCol];
        startPosition[fromRow][fromCol] = "";

        selectedSquare.classList.remove("selected");
        selectedSquare = null;
        createBoard();
    } else {
        // Select piece
        if (square.textContent !== "") {
            square.classList.add("selected");
            selectedSquare = square;
        }
    }
}

createBoard();