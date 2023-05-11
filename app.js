const container = document.getElementById("container");

function generateGrid(dimension) {
    container.style.setProperty('--grid-rows', dimension);
    container.style.setProperty('--grid-cols', dimension);

    for (i = 0; i <dimension; i++) {
        for (j = 0; j<dimension; j++) {
            let cell = document.createElement("div");

            cell.className = "grid-item";
            container.appendChild(cell).id  = `${i}-${j}`;

            cell.addEventListener("click", () => {
                cell.style.cssText = "background-color: black;"
            })
        }
    }
};

generateGrid(24);