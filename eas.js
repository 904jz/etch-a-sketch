const container = document.querySelector("#top-level");
const grid = 25;
for (i = 0; i < grid; i++){
    const div1 = document.createElement("div");
    div1.style.display = "flex";
    container.appendChild(div1);

    for(j = 0; j < grid; j++){
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.style.padding = 500/grid + "px";
        cell.style.border = "1px solid black";
        
        div1.appendChild(cell);
    }

}