
const gridInputButton = document.querySelector('.gridInputButton')
const gridInput = document.querySelector('.gridInput');
const resetButton = document.querySelector('.resetButton');
const buttons = document.querySelectorAll('.button');
let gridCells = null
let gridContainer = null
let gridColumns = null
let input = null
let toggle = false

function createGrid (num) {
     if (gridContainer != null) {
          main.removeChild(gridContainer)
     }
     if (num >= 10 && num <= 100) {
          gridContainer = document.createElement('div');
          gridContainer.classList.add('gridContainer');
          main.appendChild(gridContainer);
          const cellsAmountCheckpoint = num
          let cellsAmountWorker = cellsAmountCheckpoint
          for (num; num > 0; num--) {
               const gridColumn = document.createElement('div');
               gridColumn.classList.add('gridColumn');
               gridContainer.appendChild(gridColumn);
               for (cellsAmountWorker; cellsAmountWorker > 0; cellsAmountWorker--) {
                    const gridCell = document.createElement('div');
                    gridCell.classList.add('gridCell');
                    gridColumn.appendChild(gridCell);
               }
               cellsAmountWorker = cellsAmountCheckpoint
          }
          gridColumns = document.querySelectorAll('.gridColumns');
          gridCells = document.querySelectorAll('.gridCell');
          gridContainer.addEventListener('click',colorBlack)
     } else {
          gridContainer = null
     }
}

function generateGrid () { 
     input = document.getElementById("gridInput").value;
     createGrid(input)
}

function colorBlack () {

     if (toggle === false) {
          gridCells.forEach ((gridCell) => {
               gridCell.addEventListener('mouseover', handlerColor)
          toggle = true
     })} else if (toggle === true) { 
          gridCells.forEach ((gridCell) => {
               gridCell.removeEventListener('mouseover', handlerColor)
          toggle = false
     })     
     }
}

function handlerColor() {
     this.classList.add("black")
}


// buttons
gridInputButton.addEventListener('click',generateGrid)


buttons.forEach ((button) => {
     button.addEventListener('mouseover', handlerHover)
     button.addEventListener('mouseleave',handlerUnhover)
     }
)

resetButton.addEventListener('click',reset)

function handlerHover() {
     this.classList.add("hover")
}

function handlerUnhover() {
     this.classList.remove("hover")
}

function reset () {
     gridCells.forEach ((gridCell) => {
          gridCell.classList.remove("black")
          gridCell.removeEventListener('mouseover', handlerColor)
     })
}
