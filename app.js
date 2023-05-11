const container = document.getElementById("container");

function generateGrid(dimension) {
    container.style.setProperty('--grid-rows', dimension);
    container.style.setProperty('--grid-cols', dimension);
    // for (c = 0; c < (dimension * dimension); c++) {
    //     let cell = document.createElement("div");
    //     // cell.innerText = (c + 1);
    //     container.appendChild(cell).className = "grid-item";
    // };

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