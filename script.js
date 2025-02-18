const gameBoard = document.querySelector('.gameBoard');
const info = document.querySelector('#info');

const cells = [ "" , "" , "" , "" , "" , "" , "" , "" , "" ,];

info.textContent = "Circle";
let go = "circle";


// Create a game board cells 
// Create a game board cells 


function createBoards () {
    cells.forEach((cell , index) => {
        const cellElm = document.createElement("div");
        cellElm.classList.add("board-box");
        cellElm.id = index;
        gameBoard.append(cellElm)
        cellElm.addEventListener("click" , addGo);
    });
}
createBoards();





// const reset = document.querySelector('button');
// reset.addEventListener("click" , () => {
//     gameBoard.firstElementChild.
// })


//  Player one and Player two 
//  Cross and circle and when they play

let allCellElements;

function addGo (event) {
    const goDisplay = document.createElement('div');
    goDisplay.classList.add(go);

    go = go === 'circle' ? 'cross' : 'circle';
    event.target.append(goDisplay);
    info.textContent = `it's now ${go}...`;

    event.target.removeEventListener("click" , addGo);
    showWinner();
}


console.log(gameBoard);



//  Winning Logic Of Game
//  Winning Logic Of Game

function showWinner() {
    const allSquares = document.querySelectorAll('.board-box');
    const winning_combinations = [
        [0 , 1 , 2] , [3 , 4 , 5] , [6 , 7 , 8],
        [0 , 3 , 6] , [1 , 4 , 7] , [2 , 5 , 8],
        [0 , 4 , 8] , [2 , 4 , 6],
    ];

    winning_combinations.forEach(array => {
        const circleWins = array.every(cell => 
            allSquares[cell].firstChild?.classList.contains('circle'));
        
            if(circleWins) {
                info.textContent = "🏆...Circle Wins...🏆";
            }
    });

    winning_combinations.forEach(array => {
        const crossWins = array.every(cell => 
            allSquares[cell].firstChild?.classList.contains('cross'));

            if(crossWins) {
                info.textContent = "🏆...Cross Wins...🏆";
            }
    })
    
};







