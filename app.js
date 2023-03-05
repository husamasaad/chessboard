
// Defining Peices and their moves

const black = [
  [
    {
    name : 'rock-b-l',
    src : './images/rock-b.png',
    col : 0
  },
  {
    name : 'hourse-b-l',
    src : './images/hourse-b.png',
    col : 1
  },
  {
    name : 'pishop-b-l',
    src : './images/pishop-b.png',
    col : 2
  },
  {
    name : 'king-b',
    src : './images/king-b.png',
    col : 4
  },
  {
    name : 'queen-b',
    src : './images/queen-b.png',
    col : 3
  },
  {
    name : 'pishop-b-r',
    src : './images/pishop-b.png',
    col : 5
  },
  {
    name : 'hourse-b-r',
    src : './images/hourse-b.png',
    col : 6
  },
  {
    name : 'rock-b-r',
    src : './images/rock-b.png',
    col : 7
  }
  ],
  [
    {
      name : 'pawn-b',
      src : './images/pawn-b.png',
      col: 0
    },
    {
      name : 'pawn-b',
      src : './images/pawn-b.png',
      col: 1
    },
    {
      name : 'pawn-b',
      src : './images/pawn-b.png',
      col: 2
    },
    {
      name : 'pawn-b',
      src : './images/pawn-b.png',
      col: 3
    },
    {
      name : 'pawn-b',
      src : './images/pawn-b.png',
      col: 4
    },
    {
      name : 'pawn-b',
      src : './images/pawn-b.png',
      col: 5
    },
    {
      name : 'pawn-b',
      src : './images/pawn-b.png',
      col: 6
    },
    {
      name : 'pawn-b',
      src : './images/pawn-b.png',
      col: 7
    },
  ]
]
const white = [
  [
    {
    name : 'rock-w-l',
    src : './images/rock-w.png',
    col : 0,
    allowedMoves : [
      "row+7",
      "col+7"
    ]
  },
  {
    name : 'hourse-w-l',
    src : './images/hourse-w.png',
    col : 1
  },
  {
    name : 'pishop-w-l',
    src : './images/pishop-w.png',
    col : 2
  },
  {
    name : 'king-w',
    src : './images/king-w.png',
    col : 4
  },
  {
    name : 'queen-w',
    src : './images/queen-w.png',
    col : 3
  },
  {
    name : 'pishop-w-r',
    src : './images/pishop-w.png',
    col : 5
  },
  {
    name : 'hourse-w-r',
    src : './images/hourse-w.png',
    col : 6
  },
  {
    name : 'rock-w-r',
    src : './images/rock-w.png',
    col : 7
  }
  ],
  [
    {
      name : 'pawn-w',
      src : './images/pawn-w.png',
      col: 0,
      allowedMoves : [
        "row+2"
      ]
    },
    {
      name : 'pawn-w',
      src : './images/pawn-w.png',
      col: 1,
      allowedMoves : [
        "row+2"
      ]
    },
    {
      name : 'pawn-w',
      src : './images/pawn-w.png',
      col: 2,
      allowedMoves : [
        "row+2"
      ]
    },
    {
      name : 'pawn-w',
      src : './images/pawn-w.png',
      col: 3,
      allowedMoves : [
        "row+2"
      ]
    },
    {
      name : 'pawn-w',
      src : './images/pawn-w.png',
      col: 4,
      allowedMoves : [
        "row+2"
      ]
    },
    {
      name : 'pawn-w',
      src : './images/pawn-w.png',
      col: 5,
      allowedMoves : [
        "row+2"
      ]
    },
    {
      name : 'pawn-w',
      src : './images/pawn-w.png',
      col: 6,
      allowedMoves : [
        "row+2"
      ]
    },
    {
      name : 'pawn-w',
      src : './images/pawn-w.png',
      col: 7,
      allowedMoves : [
        "row+2"
      ]
    },
  ]
]
const piecesMoves = [
  {
    name : 'pawn-w',
    moves : 1,
    direction : 1
  },
  {
    name : 'pawn-b',
    moves : 1,
    direction : 1
  },
  {
    name : 'rock-w-l',
    moves : 8,
    direction : 4
  },
  {
    name : 'rock-w-r',
    moves : 8,
    direction : 4
  },
  {
    name : 'rock-b-l',
    moves : 8,
    direction : 4
  },
  {
    name : 'rock-b-r',
    moves : 8,
    direction : 4
  },
  {
    name : 'queen-w',
    moves : 8,
    direction : 8
  },
  {
    name : 'queen-b',
    moves : 8,
    direction : 8
  },
  {
    name : 'pishop-w-l',
    moves : 8,
    direction : -4
  },
  {
    name : 'pishop-w-r',
    moves : 8,
    direction : -4
  },
  {
    name : 'pishop-b-l',
    moves : 8,
    direction : -4
  },
  {
    name : 'pishop-b-r',
    moves : 8,
    direction : -4
  },
  {
    name : 'king-w',
    moves : 1,
    direction : 8
  },
  {
    name : 'king-b',
    moves : 1,
    direction : 8
  },
  {
    name : 'hourse-w-l',
    moves : 3,
    direction : 0
  },
  {
    name : 'hourse-w-r',
    moves : 3,
    direction : 0
  },
  {
    name : 'hourse-b-l',
    moves : 3,
    direction : 0
  },
  {
    name : 'hourse-b-r',
    moves : 3,
    direction : 0
  },
]


// Setup Variables
const gameBoard = document.getElementById('gameboard');
const endResult = document.querySelector('.end-result');
const winner = document.querySelector('.winner');
const playAgain = document.querySelector('.play-again');

let beingDragged;
let prevPostition;
let turn = 0;
let threat = false;
let KingTrapped = false;
let noSaves = false;


resetBoard();

function resetBoard() {
  gameBoard.innerHTML = '';
  turn = 0;
  threat = false;
  KingTrapped = false;
  noSaves = false;

  for (let i=0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      const div = document.createElement('div');
      div.classList.add('square');
      div.classList.add('empty');
      div.setAttribute("data-row", i);
      div.setAttribute("data-col", j);
      div.setAttribute("data-side", 'n');
      if (j % 2 == 0 & i % 2 == 0) {
        div.classList.add('beige');
      } else if (i % 2 != 0 & j % 2 != 0) {
        div.classList.add('beige');
      } else {
        div.classList.add('brown');
      }
      gameBoard.appendChild(div);
    }
  }

  settingPieces(white);
  settingPieces(black);

  endResult.classList.remove('show');
}

function settingPieces(arr) {
  let firstRow;
  let secondRow;

  if (arr === white) {
    firstRow = 7;
    secondRow = 6;
  } else if (arr === black) {
    firstRow = 0;
    secondRow = 1;
  }
  const fRow = document.querySelectorAll(`[data-row="${firstRow}"]`);

  arr[0].forEach((piece) => {
    rowSetub(fRow, piece, arr)
  })

  const sRow = document.querySelectorAll(`[data-row="${secondRow}"]`);

  arr[1].forEach((piece) => {
    rowSetub(sRow, piece, arr)
  })
}

// Creating the pieces
function rowSetub(row, piece, arr) {
  const item = document.createElement('img');
  item.classList.add('chess-piece');
  item.setAttribute('data-type', piece.name)

  item.setAttribute('data-moved', false);

  item.src = `${piece.src}`;

  row[`${piece.col}`].appendChild(item);
  row[`${piece.col}`].classList.remove('empty');

  let s = arr == black ? 'b' : 'w';
  item.classList.add(s)
  row[`${piece.col}`].setAttribute('data-side', s);
  moving(item)
}

// Piece Move Functunality
function moving(piece) {
  switch(turn) {
    case 0:
      if (piece.dataset.type.split('-')[1] == 'w') {
        piece.addEventListener('click', clicked);
      }
      break;
    case 1:
      if (piece.dataset.type.split('-')[1] == 'b') {
        piece.addEventListener('click', clicked);
      }
      break;
  }
}

function clicked(e) {
  beingDragged = e.target;
  prevPostition = e.target.parentElement;

  const squares = document.querySelectorAll('.square');
  squares.forEach((sq) => {
    sq.classList.remove('highlight');
    sq.removeEventListener('click', moveTo)
  })

  if (!threat) {
    let moves = movesArr(e.target);

    let safeMoves = moves.filter(step => {
      return checkIfSafe(beingDragged, step);
    })

    
    safeMoves.forEach((move) => {
      move.classList.add('highlight');
      move.addEventListener('click', moveTo);
      prevPostition.classList.add('empty');
    })
  }
}

function moveTo(e) {
  const squares = document.querySelectorAll('.square');

  let side = turn ? 'b' : 'w';

  if (e.target.classList.contains('empty')) {
    if (beingDragged.dataset.type.split('-')[0] == 'king' && beingDragged.dataset.moved == 'false'
    ){
      if (e.target.dataset.col == 6) {
        let rockSquare = document.querySelector(`[data-col="5"][data-row="${e.target.dataset.row}"]`);
        let rock = document.querySelector(`[data-type="rock-${side}-r"]`);
        rock.parentElement.classList.add('empty');
        rockSquare.append(rock);
      } else if (e.target.dataset.col == 2) {
        let rockSquare = document.querySelector(`[data-col="3"][data-row="${e.target.dataset.row}"]`);
        let rock = document.querySelector(`[data-type="rock-${side}-l"]`);
        rock.parentElement.classList.add('empty');
        rockSquare.append(rock);
      }
    }
    e.target.append(beingDragged);
    e.target.dataset.side = beingDragged.dataset.type.split('-')[1];
  } else {
    let side = beingDragged.dataset.type.split('-')[1];
    if (e.currentTarget.dataset.side != side) {
      e.target.remove();
      e.currentTarget.append(beingDragged)
      e.currentTarget.dataset.side = side;
    }
    
  }
  e.target.classList.remove('empty');
  beingDragged.dataset.moved = 'true';

  squares.forEach((sq) => {
    sq.classList.remove('highlight');
    sq.removeEventListener('click', moveTo)
  })

  turn = turn == 0? 1 : 0;

  gameBoard.querySelectorAll('.chess-piece').forEach(img => {
    img.removeEventListener('click', clicked)
    moving(img);
  })
  
  isCheck(turn);
}


function movesArr(piece) {

  let moves = [];
  let pieceObj;

  piecesMoves.forEach((pc) => {
    if (pc.name === piece.dataset.type) {
      pieceObj = pc;
    }
  })

    let dir = pieceObj.direction;
    let steps = pieceObj.moves;
    let side = pieceObj.name.split('-')[1]


    if (dir > 0) {
      for (let d = 1; d <= dir; d++) {
        switch (d) {
          case 1:
            if (side === 'w') {
              moveUP(steps, moves);
            } else {
              moveDown(steps, moves);
            }
            break;
          case 2:
            if (side === 'w') {
              moveRight(steps, moves);
            } else {
              moveLeft(steps, moves);
            }
            break;
          case 3:
            if (side === 'w') {
              moveDown(steps, moves);
            } else {
              moveUP(steps, moves);
            }
            break;
          case 4:
            if (side === 'w') {
              moveLeft(steps, moves);
            } else {
              moveRight(steps, moves);
            }
            break;
          case 5:
            if (side === 'w') {
              moveDiagRightUP(steps, moves);
            } else {
              moveDiagLeftDown(steps, moves);
            }
            break;
          case 6:
            if (side === 'w') {
              moveDiagRightDown(steps, moves);
            } else {
              moveDiagLeftUp(steps, moves);
            }
            break;
          case 7:
            if (side === 'w') {
              moveDiagLeftUp(steps, moves);
            } else {
              moveDiagRightDown(steps, moves);
            }
            break;
          case 8:
            if (side === 'w') {
              moveDiagLeftDown(steps, moves);
            } else {
              moveDiagRightUP(steps, moves);
            }
            break;
        }
    }
    } else if (dir < 0) {
      for (let d = -1; d >= dir; d--) {
        switch(d) {
          case -1:
            if (side === 'w') {
              moveDiagRightUP(steps, moves);
            } else {
              moveDiagLeftDown(steps, moves);
            }
            break;
          case -2:
            if (side === 'w') {
              moveDiagRightDown(steps, moves);
            } else {
              moveDiagLeftUp(steps, moves);
            }
            break;
          case -3:
            if (side === 'w') {
              moveDiagLeftUp(steps, moves);
            } else {
              moveDiagRightDown(steps, moves);
            }
            break;
          case -4:
            if (side === 'w') {
              moveDiagLeftDown(steps, moves);
            } else {
              moveDiagRightUP(steps, moves);
            }
            break;

        }
      }
    } else {
      for (let d = 1; d <= 4; d++) {
        switch (d) {
          case 1:
            moveHourseUp(steps, moves);
            break;
          case 2: 
            moveHourseDown(steps, moves);
            break;
        }
      }
    }

  return moves
}

function moveUP(steps, arr) {

  let prevRow = parseInt(prevPostition.dataset.row);
  let prevCol = parseInt(prevPostition.dataset.col);

  if (beingDragged.dataset.type.split('-')[0] == 'pawn') {
    if (beingDragged.parentElement.dataset.row == 6) {
      steps = 2;
    }
    // Pawn Killing Functuality

    if (prevRow - 1 >= 0) {
      let killRow = [...document.querySelectorAll(`[data-row="${prevRow - 1}"]`)];

      if (prevCol - 1 >= 0) {
        let killColLeft = killRow.filter(col => col.dataset.col == prevCol - 1);
        if (killColLeft[0].children.length != 0) {
          arr.push(killColLeft[0])
        }
      }
      if (prevCol + 1 <= 7) {
        let killColRight = killRow.filter(col => col.dataset.col == prevCol + 1);
  
        if (killColRight[0].children.length != 0) {
          arr.push(killColRight[0])
        }
      }
    }
  }

  for (let r = 1; r <= steps && r <= prevRow; r++) {
    let nextRow = [...document.querySelectorAll(`[data-row="${prevRow - r}"]`)];
    let nextCol = nextRow.filter(col => col.dataset.col == prevCol);

    if ((beingDragged.dataset.type.split('-')[0] == 'pawn')) {
      if (nextCol[0].children.length) {
        break;
      }
    } else if (nextCol[0].children.length) {
      if (
        nextCol[0].dataset.side !=
        beingDragged.dataset.type.split('-')[1] &&
        steps != 1
      ) {
        arr.push(nextCol[0]);
        break;
      }
      break;
    }
    arr.push(nextCol[0]);
  }

  return arr
}

function moveRight(steps, arr) {

  let prevRow = parseInt(prevPostition.dataset.row);
  let prevCol = parseInt(prevPostition.dataset.col);

  if (steps == 1) {
    if (beingDragged.dataset.moved == 'false') {
      steps = 2;
    }
  }

  for (let r = 1; r <= steps && r <= 7 - prevCol; r++) {
    let nextCol = [...document.querySelectorAll(`[data-col="${prevCol + r}"]`)];
    let nextRow = nextCol.filter(row => row.dataset.row == prevRow)

    if (nextRow[0].children.length) {
      if (
        nextRow[0].dataset.side !=
        beingDragged.dataset.type.split('-')[1]
      ) {
        arr.push(nextRow[0]);
        break;
      }
      break;
    }
    arr.push(nextRow[0]);
  }

  return arr
}

function moveDown(steps, arr) {
  let prevRow = parseInt(prevPostition.dataset.row);
  let prevCol = parseInt(prevPostition.dataset.col);

  if (beingDragged.dataset.type.split('-')[0] == 'pawn') {
    if (beingDragged.parentElement.dataset.row == 1) {
      steps = 2;
    }

    if (prevRow + 1 <= 7) {
      let killRow = [...document.querySelectorAll(`[data-row="${prevRow + 1}"]`)];

      if (prevCol - 1 >= 0) {
        let killColLeft = killRow.filter(col => col.dataset.col == prevCol - 1);
        if (killColLeft[0].children.length != 0) {
          arr.push(killColLeft[0])
        }
      }
      if (prevCol + 1 <= 7) {
        let killColRight = killRow.filter(col => col.dataset.col == prevCol + 1);
  
        if (killColRight[0].children.length != 0) {
          arr.push(killColRight[0])
        }
      }
    }
  }

  for (let r = 1; r <= steps && r <= 7 - prevRow; r++) {
    let nextRow = [...document.querySelectorAll(`[data-row="${prevRow + r}"]`)];
    let nextCol = nextRow.filter(col => col.dataset.col == prevCol)

    if ((beingDragged.dataset.type.split('-')[0] == 'pawn')) {
      if (nextCol[0].children.length) {
        break;
      }
    } else if (nextCol[0].children.length) {
      if (
        nextCol[0].dataset.side !=
        beingDragged.dataset.type.split('-')[1] &&
        steps != 1
      ) {
        arr.push(nextCol[0]);
        break;
      }
      break;
    }
    arr.push(nextCol[0]);
  }

  return arr
}

function moveLeft(steps, arr) {
  let prevRow = parseInt(prevPostition.dataset.row);
  let prevCol = parseInt(prevPostition.dataset.col);

  if (steps == 1) {
    if (beingDragged.dataset.moved == 'false') {
      steps = 2;
    }
  }

  for (let r = 1; r <= steps && r <= prevCol; r++) {
    let nextCol = [...document.querySelectorAll(`[data-col="${prevCol - r}"]`)];
    let nextRow = nextCol.filter(row => row.dataset.row == prevRow)
    if (nextRow[0].children.length) {
      if (
        nextRow[0].dataset.side !=
        beingDragged.dataset.type.split('-')[1]
      ) {
        arr.push(nextRow[0]);
        break;
      }
      break;
    }

    arr.push(nextRow[0]);
  }

  return arr
}

function moveDiagRightUP(steps, arr) {
  let prevRow = parseInt(prevPostition.dataset.row);
  let prevCol = parseInt(prevPostition.dataset.col);

  for (let r = 1; r <= steps && r <= 7 - prevCol && r <= prevRow; r++) {

    let nextCol = [...document.querySelectorAll(`[data-col="${prevCol + r}"]`)];
    let nextRow = nextCol.filter(row => row.dataset.row == prevRow - r)

    if (nextRow[0].children.length) {
      if (
        nextRow[0].dataset.side !=
        beingDragged.dataset.type.split('-')[1]
      ) {
        arr.push(nextRow[0]);
        break;
      }
      break;
    }

    arr.push(nextRow[0]);
  }

  return arr
}

function moveDiagRightDown(steps, arr) {

  let prevRow = parseInt(prevPostition.dataset.row);
  let prevCol = parseInt(prevPostition.dataset.col);

  for (let r = 1; r <= steps && r <= 7 - prevCol && r <= 7 - prevRow; r++) {
    let nextRow = [...document.querySelectorAll(`[data-row="${prevRow + r}"]`)];
    let nextCol = nextRow.filter(col => col.dataset.col == prevCol + r)

    if (nextCol[0].children.length) {
      if (
        nextCol[0].dataset.side !=
        beingDragged.dataset.type.split('-')[1]
      ) {
        arr.push(nextCol[0]);
        break;
      }
      break;
    }

    arr.push(nextCol[0]);
  }

  return arr
}

function moveDiagLeftUp(steps, arr) {
  let prevRow = parseInt(prevPostition.dataset.row);
  let prevCol = parseInt(prevPostition.dataset.col);

  for (let r = 1; r <= steps && r <= prevRow && r <= prevCol; r++) {
    let nextRow = [...document.querySelectorAll(`[data-row="${prevRow - r}"]`)];

    let nextCol = nextRow.filter(col => col.dataset.col == prevCol - r);

    if (nextCol[0].children.length) {
      if (
        nextCol[0].dataset.side !=
        beingDragged.dataset.type.split('-')[1]
      ) {
        arr.push(nextCol[0]);
        break;
      }
      break;
    }
    
    arr.push(nextCol[0]);
  }

  return arr
}

function moveDiagLeftDown(steps, arr) {
  let prevRow = parseInt(prevPostition.dataset.row);
  let prevCol = parseInt(prevPostition.dataset.col);

  for (let r = 1; r <= steps && r <= 7 - prevRow && r <=  prevCol; r++) {
    let nextRow = [...document.querySelectorAll(`[data-row="${prevRow + r}"]`)];
    let nextCol = nextRow.filter(col => col.dataset.col == prevCol - r)

    
    if (nextCol[0].children.length) {
      if (
        nextCol[0].dataset.side !=
        beingDragged.dataset.type.split('-')[1]
      ) {
        arr.push(nextCol[0]);
        break;
      }
      break;
    }

    arr.push(nextCol[0]);
  }

  return arr
}

function moveHourseUp(steps, arr) {
  let prevRow = parseInt(prevPostition.dataset.row);
  let prevCol = parseInt(prevPostition.dataset.col);
  let newRow;

  for (let r = 1; r <= 2 && prevRow - r >= 0; r++) {
    newRow = [...document.querySelectorAll(`[data-row="${prevRow - r}"]`)];
    let newColLeft;
    let newColRight;
    if (r == 1) {
      newColLeft = prevCol - 2;
      newColRight = prevCol + 2;
    } else {
      newColLeft = prevCol - 1;
      newColRight = prevCol + 1;
    }
  
    if (newColLeft >= 0) {
      arr.push(newRow.filter(col => col.dataset.col == newColLeft)[0]);
    }
    if (newColRight <= 7) {
      arr.push(newRow.filter(col => col.dataset.col == newColRight)[0]);
    }

  }

  return arr
}

function moveHourseDown(steps, arr) {
  let prevRow = parseInt(prevPostition.dataset.row);
  let prevCol = parseInt(prevPostition.dataset.col);
  let newRow;

  for (let r = 1; r <= 2 && prevRow + r <= 7; r++) {
    newRow = [...document.querySelectorAll(`[data-row="${prevRow + r}"]`)];
    let newColLeft;
    let newColRight;
    if (r == 1) {
      newColLeft = prevCol - 2;
      newColRight = prevCol + 2;
    } else {
      newColLeft = prevCol - 1;
      newColRight = prevCol + 1;
    }
  
    if (newColLeft >= 0) {
      arr.push(newRow.filter(col => col.dataset.col == newColLeft)[0]);
    }
    if (newColRight <= 7) {
      arr.push(newRow.filter(col => col.dataset.col == newColRight)[0]);
    }

  }
  return arr
}


// check if King is thretened


function isCheck(tr) {

  let check = false;
  tr = tr ? 'w' : 'b';
  let target = tr == 'w'? 'b' : 'w';
  let targetKing;
  let threteningPiece;
  let peices = gameBoard.querySelectorAll(`.${tr}`);

  peices.forEach((pc) => {
    beingDragged = pc;
    prevPostition = beingDragged.parentElement;

    let availableMove = movesArr(pc);
    availableMove.forEach(mv => {
      if (mv.children.length != 0) {
        if (mv.firstChild.dataset.type == `king-${target}`) {
          check = true;
          targetKing = mv;
          threteningPiece = pc;
        }
      }
    })
  })

  
  if (check) {
    targetKing.classList.add('check');
    threat = true;
    kingChecked(targetKing, threteningPiece);
  } else {
    threat = false;
    const squares = document.querySelectorAll('.square');
    squares.forEach((sq) => {
      sq.classList.remove('check');
    })
  }
}

function kingChecked(king, piece) {
  let savingMoves = [];
  let kingRow = king.dataset.row
  let kingCol = king.dataset.col

  let pieceRow = +piece.parentElement.dataset.row
  let pieceCol = +piece.parentElement.dataset.col

  let rowSteps = kingRow - pieceRow;
  let colSteps = kingCol - pieceCol;

  if (rowSteps < 0 && colSteps < 0) {
    for (let r = 0; r < (rowSteps * -1); r++) {

      let nextRow = [...document.querySelectorAll(`[data-row="${pieceRow - r}"]`)];
  
      let nextCol = nextRow.filter(col => col.dataset.col == pieceCol - r);
  
      savingMoves.push(nextCol);
    }
  } else if (rowSteps > 0 && colSteps < 0) {
    for (let r = 0; r < rowSteps; r++) {

      let nextRow = [...document.querySelectorAll(`[data-row="${pieceRow + r}"]`)];
  
      let nextCol = nextRow.filter(col => col.dataset.col == pieceCol - r);
  
      savingMoves.push(nextCol);
    }
  } else if (rowSteps < 0 && colSteps > 0) {
    for (let r = 0; r < (rowSteps * -1); r++)  {

      let nextRow = [...document.querySelectorAll(`[data-row="${pieceRow - r}"]`)];
  
      let nextCol = nextRow.filter(col => col.dataset.col == pieceCol + r);
  
      savingMoves.push(nextCol);
    }
  } else if (rowSteps > 0 && colSteps > 0) {
    for (let r = 0; r < rowSteps; r++)  {

      let nextRow = [...document.querySelectorAll(`[data-row="${pieceRow + r}"]`)];
  
      let nextCol = nextRow.filter(col => col.dataset.col == pieceCol + r);
  
      savingMoves.push(nextCol);
    }
  } else if (rowSteps == 0 && colSteps > 0) {
    for (let r = 0; r < rowSteps; r++)  {

      let nextRow = [...document.querySelectorAll(`[data-row="${pieceRow}"]`)];
  
      let nextCol = nextRow.filter(col => col.dataset.col == pieceCol + r);
  
      savingMoves.push(nextCol);
    }
  } else if (rowSteps == 0 && colSteps < 0) {
    for (let r = 0; r < rowSteps; r++)  {

      let nextRow = [...document.querySelectorAll(`[data-row="${pieceRow}"]`)];
  
      let nextCol = nextRow.filter(col => col.dataset.col == pieceCol - r);
  
      savingMoves.push(nextCol);
    }
  } else if (rowSteps < 0 && colSteps == 0) {
    for (let r = 0; r < (rowSteps * -1); r++) {

      let nextRow = [...document.querySelectorAll(`[data-row="${pieceRow - r}"]`)];
  
      let nextCol = nextRow.filter(col => col.dataset.col == pieceCol);
  
      savingMoves.push(nextCol);
    }
  } else if (rowSteps > 0 && colSteps == 0) {
    for (let r = 0; r < rowSteps; r++) {

      let nextRow = [...document.querySelectorAll(`[data-row="${pieceRow + r}"]`)];
  
      let nextCol = nextRow.filter(col => col.dataset.col == pieceCol);
  
      savingMoves.push(nextCol);
    }
  }


  savingMoves.forEach(step => {
    step[0].classList.add('saving')
  })

  let tr = turn ? 'b' : 'w';

  let savers = [];

  let peices = gameBoard.querySelectorAll(`.${tr}`);

  peices.forEach(sv => {
    beingDragged = sv;
    prevPostition = sv.parentElement;

    let saveMoves = movesArr(sv);

    saveMoves.forEach(mv => {
      if(mv.classList.contains('saving')) {
        sv.classList.add('savier')
        savers.push(mv)
      }
    })
  })

  allowSaveMoves(savers, king);
}


function allowSaveMoves(savers, king) {
  
  savers.forEach(spot => {
    spot.classList.remove('saving')
  })

  king.firstChild.classList.remove('savier');
  let allowedPieces = [...document.querySelectorAll('.savier')];

  allowedPieces.forEach(img => {
    img.addEventListener('click', (e) => {
      let moves = movesArr(img);
      moves.forEach((move) => {
        if (savers.some(item => move === item)) {
          move.classList.add('highlight');
          move.addEventListener('click', moveTo)
          prevPostition.classList.add('empty');
        }
      })
    })
    img.classList.remove('savier')
  })

  if (allowedPieces.length == 0) {
    noSaves = true
  }
  
  KingTrapped = true;

  king.firstChild.addEventListener('click', (e) => {
    let moves = movesArr(king.firstChild);

    let saveMoves = moves.filter((move) => {
      return checkIfSafe(king.firstChild, move)
    })

    saveMoves.forEach((move) => {
      if (!savers.some(item => move === item)) {
        move.classList.add('highlight');
        move.addEventListener('click', moveTo)
        prevPostition.classList.add('empty');
        KingTrapped = false;
      }
    })

  })
  king.firstChild.click();

  if (noSaves && KingTrapped) {
    checkMate(king);
  }
}


function checkIfSafe(item, place) {
  let lastPlace = item.parentElement;
  let empty = true;
  let lastPiece;

  if (place.children.length != 0) {
    empty = false;
    lastPiece = place.firstChild;
    place.firstChild.remove();
    place.append(item);
  } else {
    place.append(item);
  }
  let check = true;
  let tr = turn ? 'w' : 'b';
  let target = tr == 'w'? 'b' : 'w';
  let peices = gameBoard.querySelectorAll(`.${tr}`);

  peices.forEach((pc) => {
    beingDragged = pc;
    prevPostition = beingDragged.parentElement;

    let availableMove = movesArr(pc);

    availableMove.forEach(mv => {

      if (mv.children.length != 0) {
        if (mv.firstChild.dataset.type == `king-${target}`) {
          check = false;
        }
      }
    })
  })

  if (!empty) {
    place.append(lastPiece)
  }
  
  beingDragged = item;
  prevPostition = lastPlace;
  lastPlace.append(item)

  return check;
}

// End the Game!
function checkMate(king) {
  let winSide = king.dataset.side;
  let winClr = winSide == 'b' ? 'White' : 'Black';
  winner.textContent = winClr;

  endResult.classList.add('show');

  playAgain.addEventListener('click', resetBoard);
}
