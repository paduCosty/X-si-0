let stopper = false;

function startGame() {
    if(stopper == true) {
        return 0;
    }
    stopper = true;
    let tableXO = document.getElementById("tableXO");
    for(let tableFormatLines = 0; tableFormatLines < 3; ++tableFormatLines) {
        for(let tableFormatColumns = 0; tableFormatColumns < 3; ++tableFormatColumns) {
            tableXO.innerHTML += '<div class = "garage-title" id = '+ tableFormatLines + tableFormatColumns +
            ' onclick = "tableFormat(' + tableFormatLines +', '+ tableFormatColumns +')">  </div>';
            tableXO.innerHTML += " ";
        }
       tableXO.innerHTML += "<br>";
    }
}

let winnerToX = [], tablePieces = [];

function reinitializes() {
    for(let i = 0; i < 9; ++i) {
        winnerToX[i] = [];
        for(let j = 0; j <= 15; ++j) {
            tablePieces[j] = 0;
            winnerToX[i][j] = 0;
        }
    }
}

let enterClickX = 0, enterClickO = 0, stopGame = false, draw = 0;

function tableFormat(tableFormatLine, tableFormatColumns) {
    document.getElementById('' + tableFormatLine + tableFormatColumns).style = "Color: blue";
    if(stopGame == false && enterClickO == enterClickX && winnerToX[tableFormatLine][tableFormatColumns] == 0) {
        winnerToX[tableFormatLine][tableFormatColumns]++;
        ++draw;
       document.getElementById('' + tableFormatLine + tableFormatColumns).innerText = "X";
        for(let i = 0, j = 2; i < 3; ++i, --j) {
            if(tableFormatLine == i && tableFormatColumns == 0) {
                tablePieces[0] += winnerToX[tableFormatLine][tableFormatColumns];
            }
            if(tableFormatLine == i && tableFormatColumns == 1) {
                tablePieces[1] += winnerToX[tableFormatLine][tableFormatColumns];
            }
            if(tableFormatLine == i && tableFormatColumns == 2) {
                tablePieces[2] += winnerToX[tableFormatLine][tableFormatColumns];
            }
            if(tableFormatLine == i && tableFormatColumns == i) { 
                tablePieces[3] += winnerToX[tableFormatLine][tableFormatColumns];
            }
            if(tableFormatLine == i && tableFormatColumns == j) { 
                tablePieces[4] += winnerToX[tableFormatLine][tableFormatColumns];
            }
            if(tableFormatLine == 0 && tableFormatColumns == i) {
                tablePieces[5] += winnerToX[tableFormatLine][tableFormatColumns];
            }
            if(tableFormatLine == 1 && tableFormatColumns == i) {
                tablePieces[6] += winnerToX[tableFormatLine][tableFormatColumns];
            }
            if(tableFormatLine == 2 && tableFormatColumns == i) {
                tablePieces[7] += winnerToX[tableFormatLine][tableFormatColumns];
            }
        }
        for(let i = 0; i <= 7; ++i) {
            if(tablePieces[i] == 3) {
                document.getElementById("winnerText").innerHTML = "X is the winner!";
                stopGame = true;
                return 0;
            } else if(draw == 9) {
                document.getElementById("winnerText").innerHTML = "The game is draw!";
            }
        }
    ++enterClickX;
    } else if(stopGame == false && winnerToX[tableFormatLine][tableFormatColumns] == 0) {
            winnerToX[tableFormatLine][tableFormatColumns]++;
            ++draw;
            document.getElementById('' + tableFormatLine + tableFormatColumns).innerText = 'O';
        for(let i = 0, j = 2; i < 3; ++i, --j) {
            if(tableFormatLine == i && tableFormatColumns == 0) {
                tablePieces[8] += winnerToX[tableFormatLine][tableFormatColumns];
            }
            if(tableFormatLine == i && tableFormatColumns == 1) {
                tablePieces[9] += winnerToX[tableFormatLine][tableFormatColumns];
            }
            if(tableFormatLine == i && tableFormatColumns == 2) {
                tablePieces[10] += winnerToX[tableFormatLine][tableFormatColumns];
            }
            if(tableFormatLine == i && tableFormatColumns == i) { 
                tablePieces[11] += winnerToX[tableFormatLine][tableFormatColumns];
            }
            if(tableFormatLine == i && tableFormatColumns == j) { 
                tablePieces[12] += winnerToX[tableFormatLine][tableFormatColumns];
            }
            if(tableFormatLine == 0 && tableFormatColumns == i) {
                tablePieces[13] += winnerToX[tableFormatLine][tableFormatColumns];
            }
            if(tableFormatLine == 1 && tableFormatColumns == i) {
                tablePieces[14] += winnerToX[tableFormatLine][tableFormatColumns];
            }
            if(tableFormatLine == 2 && tableFormatColumns == i) {
                tablePieces[15] += winnerToX[tableFormatLine][tableFormatColumns];
            }
        }
        for(let i = 8; i < 16; ++i) {
            if(tablePieces[i] == 3) {
                document.getElementById("winnerText").innerHTML = "O is the winner!";
                stopGame = true;
                return 0;
            } else if(draw == 9) {
                ument.getElementById("winnerText").innerHTML = "The game is draw!";
            }
        }
        ++enterClickO;  
    }
}
