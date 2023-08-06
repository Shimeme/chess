const GameBoard = document.querySelector("#gameboard")
const playerdisplay=document.querySelector("#player")
const infoDisplay = document.querySelector ("#info-display")

const startpieces = [
    brook,bhorce,bbishop,bqueen,bking,bbishop,bhorce,brook,
    bpawn,bpawn,bpawn,bpawn,bpawn,bpawn,bpawn,bpawn,
    [],[],[],[],[],[],[],[],
    [],[],[],[],[],[],[],[],
    [],[],[],[],[],[],[],[],
    [],[],[],[],[],[],[],[],
    wpawn,wpawn,wpawn,wpawn,wpawn,wpawn,wpawn,wpawn,
    wrook,whorce,wbishop,wqueen,wking,wbishop,whorce,wrook,
]

function  createBoard(){
    startpieces.forEach((startPiece, i)  => {
        const square = document.createElement('div')
        square.classList.add('square')
        square.innerHTML = startPiece
        square. firstChild && square.firstChild.setAttribute ('draggable', true)
        square.setAttribute('square-id' , i)
        const row = Math.floor ( ( 63 - i) / 8) + 1
        if (row % 2 === 0 ){
            square.classList.add(i % 2 === 0 ? "brown":"beige")
        } else {
            square.classList.add(i % 2 === 0 ?    "beige":"brown")
        
        }

        if ( i <= 15) {
            square.firstChild.firstChild.classList 
        
        }
        if ( i>= 48){
            square.firstChild.firstChild.classList
        }
 

        GameBoard.append(square)
    }) 

}
createBoard()  
 


const allSquares = document.querySelectorAll ("#gameboard .square")

console.log(allSquares);


