
function initializeBoard() {
    board = [];
} 

function renderBoard() {
    const boardDiv = document.getElementById("board");
    boardDiv.innerHTML = '';

    for (let row = 0; row < 6; row++) {
        const rowDiv = document.createElement("div");
        rowDiv.className = "row";
        
        for (let col = 0; col < 7; col++) {
            const cellDiv = document.createElement("div");
            cellDiv.className = "cell";

            // Add event listener to drop a piece when clicked
            cellDiv.addEventListener('click', () => handleClick(col));

            rowDiv.appendChild(cellDiv);
        }
        boardDiv.appendChild(rowDiv);
    }
}
    
// Start game button
document.getElementById("start").addEventListener('click', () => {
    initializeBoard();
    renderBoard();
});
