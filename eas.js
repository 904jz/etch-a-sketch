
const grid = 25;
const container = document.querySelector('.grid');
drawGrid(grid);
function getSize(){
    let size = window.prompt("Enter Size", "1-100");
    // parseInt and pass value to grid variable
    //redraw grid
    if (size == null || size ==  ""){
        
        drawGrid(25);
    }else{
        container.replaceChildren();
        drawGrid(parseInt(size));
    }
}

container.style.gridTemplateRows = "repeat(" + grid  + ", 1fr)";
container.style.gridTemplateColumns = "repeat(" + grid  + ", 1fr)";

// grid-template-rows: repeat(4, 1fr);
// grid-template-columns: repeat(4, 1fr);

      // Use a nested for loop to create the grid cells
function drawGrid(width){
    container.style.gridTemplateRows = "repeat(" + width  + ", 1fr)";
    container.style.gridTemplateColumns = "repeat(" + width  + ", 1fr)";
    for (let i = 0; i < width; i++) {
        for (let j = 0; j < width; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            container.appendChild(cell);

            cell.addEventListener("mouseover", function(e){
                e.target.classList.add("color");
                e.target.classList.remove("cell");
            }, false);
        }
    }
}

function eraseAll(){
    var cells = document.getElementsByClassName("color");
    // console.log(cells[0].classList)
    // console.log(cells.length);
    if (cells.length > 0){
        for (i = (cells.length) - 1; i >=0 ; --i){
            cell = cells[i];
            cell.classList.toggle("color");
            cell.classList.toggle("cell");
        }
    }
}

