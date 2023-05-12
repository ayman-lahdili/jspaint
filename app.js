const grid = document.getElementById("grid");

function generateGrid(dimension) {
    grid.style.setProperty('--grid-rows', dimension);
    grid.style.setProperty('--grid-cols', dimension);

    for (i = 0; i <dimension; i++) {
        for (j = 0; j<dimension; j++) {
            let cell = document.createElement("div");

            cell.className = "grid-item";
            grid.appendChild(cell).id  = `${i}-${j}`;

            cell.addEventListener("mouseover", () => {
                cell.style.cssText = `background-color: rgba(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255}, ${Math.random()});`
            })
        }
    }
};

generateGrid(24);