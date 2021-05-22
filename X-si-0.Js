function startGame() {
    let tableXO = document.getElementById("tableXO");
    for(let lines = 0;lines < 3; ++lines) {
        for(let columns = 0; columns < 3; ++columns) {
            tableXO.innerHTML += '<div class = "garage-title" id = '+ lines + columns +
            ' onclick = "onclickTableFormat(' + lines +', '+ columns +')">  </div>';
            tableXO.innerHTML += " ";
        }
        tableXO.innerHTML += "<br>";
    }
}

let winnerX = 0, winnerO = 0;

function onclickTableFormat(lines, columns) {
    if(winnerO == 0 && winnerX == 0) {
        document.getElementById('' +  lines + columns).innerHTML = 'X';
        let matrix = xOr0();
        let indexX = 0, index0 = 1;
        for(let i = 0; i < 3; ++i) {
            for(let j = 0; j < 3; ++j) {
                if(matrix[i][j] == 'X') {
                    ++indexX;
                } else if(matrix[i][j] == 'O') {
                    ++index0;
                }
            }
        }
        if(index0 < indexX) {
            document.getElementById('' +  lines + columns).innerHTML = 'O';
        }
    }
    winnerX = searchWinnerX();
    winnerO = searchWinnerO();
    let draw = drawGame();
    if(draw == 9 && winnerX == 0 && winnerO == 0) {
        document.getElementById("winnerText").innerHTML = "Draw Game!";
    }
}

function xOr0() { // initialization matirx with table index
    let matrix = [];
    for(let i = 0; i < 3; ++i) {
        matrix[i] = new Array(3);
    }
    for(let i = 0; i < 3; ++i) {
        for(let j = 0; j < 3; ++j) {
            matrix[i][j] = document.getElementById('' + i + j).innerHTML;
        }
    }
    return matrix;
}

function searchWinnerX() {
    let matrix = xOr0();
    for(let i = 0; i < 3; ++i) {
        let indexLine = 0, indexColumn = 0, mainDiagonal = 0, indexSecondary = 0;
        for(let j = 0, secondaryDiagonal = 2; j < 3; ++j, --secondaryDiagonal) {
            if(matrix[i][j] == 'X') {
                ++indexLine;
            }
            if(matrix[j][i] == 'X') {
                ++indexColumn;
            }
            if(matrix[j][j] == 'X') {
                ++mainDiagonal;
            }
            if(matrix[j][secondaryDiagonal] == 'X') {
                ++indexSecondary;
            }
        }
        if(indexLine == 3 || indexColumn == 3 || mainDiagonal == 3 || indexSecondary == 3) {
            return document.getElementById('winnerText').innerHTML = 'X is the winner!';
        }
    }
    return 0;
}
function searchWinnerO() {
    let matrix = xOr0();
    for(let i = 0; i < 3; ++i) {
        let indexLine = 0, indexColumn = 0, mainDiagonal = 0, indexSecondary = 0;
        for(let j = 0, secondaryDiagonal = 2; j < 3; ++j, --secondaryDiagonal) {
            if(matrix[i][j] == 'O') {
                ++indexLine;
            }
            if(matrix[j][i] == 'O') {
                ++indexColumn;
            }
            if(matrix[j][j] == 'O') {
                ++mainDiagonal;
            }
            if(matrix[j][secondaryDiagonal] == 'O') {
                ++indexSecondary;
            }
        }
        if(indexLine == 3 || indexColumn == 3 || mainDiagonal == 3 || indexSecondary == 3) {
            return document.getElementById('winnerText').innerHTML = 'O is the winner!';
        }
    }
    return 0;
}
function drawGame() {
    let matrix = xOr0();
    index = 0;
    for(let i = 0; i < 3; ++i) {
        for(let j = 0; j < 3; ++j) {
            if(matrix[i][j] != 0) {
                ++index;
            }
        }
    }
    return index;
}
