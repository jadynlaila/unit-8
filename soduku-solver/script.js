
const _BOARD = [
    ['.', '9', '.', '.', '4', '2', '1', '3', '6'],
    ['.', '.', '.', '9', '6', '.', '4', '8', '5'],
    ['.', '.', '.', '5', '8', '1', '.', '.', '.'],

    ['.', '.', '4', '.', '.', '.', '.', '.', '.'],
    ['5', '1', '7', '2', '.', '.', '9', '.', '.'],
    ['6', '.', '2', '.', '.', '.', '3', '7', '.'],

    ['1', '.', '.', '8', '.', '4', '.', '2', '.'],
    ['7', '.', '6', '.', '.', '.', '8', '1', '.'],
    ['3', '.', '.', '.', '9', '.', '.', '.', '.'],
]

const _COORDS = [
    [1, 1, 1, 2, 2, 2, 3, 3, 3],
    [1, 1, 1, 2, 2, 2, 3, 3, 3],
    [1, 1, 1, 2, 2, 2, 3, 3, 3],

    [4, 4, 4, 5, 5, 5, 6, 6, 6],
    [4, 4, 4, 5, 5, 5, 6, 6, 6],
    [4, 4, 4, 5, 5, 5, 6, 6, 6],

    [7, 7, 7, 8, 8, 8, 9, 9, 9],
    [7, 7, 7, 8, 8, 8, 9, 9, 9],
    [7, 7, 7, 8, 8, 8, 9, 9, 9],
]

function getRow(board, row) {
    //return an array with all of the array elements from the row
    return board[row];
}

function getCol(board, col) {
    //returns an array with all of the array elements from the column
    let inCol = [];
    for (row in board) {
        inCol.push(board[row][col])
    }
    return inCol;
}

function getQuad(board, quadNum) {
    //creates an array of all the array elements in the same quadrant
    let inQuad = [];

    //this cycles through all of the rows in the board
    for (row in board) {

        //this cycles through all of the columns in the row 
        for (col in board[row]) {
            if (_COORDS[row][col] == quadNum) {
                inQuad.push(board[row][col]);
            }
        }
    }
    return inQuad;
}

//filter through all of the used values and return only the possible values for that cell (every single number)
function getPossible(board, row, col) {
    let inRow = getRow(board, row);
    let inCol = getCol(board, col);
    let inQuad = getQuad(board, _COORDS[row][col]);
    let possible = [];
    let notPossible = [];

    //every row element and say what isnt possible 
    for (r in inRow) {
        let included = false;
        for (p in notPossible) {
            if (inRow[r] == notPossible[p]) {
                included = true;
                break;
            }
        }
        if (!included) {
            notPossible.push(inRow[r])
        }
    }

    //every col element and say wht isnt possible
    for (c in inCol) {
        let included = false;
        for (p in notPossible) {
            if (inCol[c] == notPossible[p]) {
                included = true;
                break;
            }
        }
        if (!included) {
            notPossible.push(inCol[c]);
        }
    }

    //finds all not possible from the quad

    for (q in inQuad) {
        let included = false;
        for (p in notPossible) {
            if (inQuad[q] == notPossible[p]) {
                included = true;
                break;
            }
        }
        if (!included) {
            notPossible.push(inQuad[q]);
        }
    }

    for (p in notPossible) {
        if (notPossible[p] == '.') {
            notPossible.splice(p, 1);
        }
    }

    for (let num = 1; num < 10; num++) {
        if (!notPossible.includes(num + '')) {
            possible.push(num + '');
        }
    }

    return possible;
}


let updated = true;

while (updated == true) {
    updated = false;
    for (row2 in _BOARD) {
        for (col2 in _BOARD[row2]) {
            fillInCell(_BOARD, row2, col2);
        }
    }
}


function fillInCell(board, row, col) {
    if (board[row][col] == '.') {
        let possible = getPossible(board, row, col);
        if (possible.length == 1) {
            board[row][col] = possible[0];
            updated = true;
        }
    }
}



//if its not filled in, then that loops over and over again until its solved ^ 
console.table(_BOARD);