const grid = document.getElementById("grid");
const changeDimBtn = document.getElementById("changeDimBtn");
const dimDisplay = document.querySelector(".dimDisplay");

function generateGrid(dimension) {
    grid.innerText = "";

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

    dimDisplay.innerText = `${dimension} x ${dimension}`;
};

generateGrid(16); // Default

changeDimBtn.addEventListener("click", () => {
    let dimension = parseInt(prompt("Please enter the number of squares per side for the new grid"));

    if (dimension>64) {
        alert("Must be under 64 squares per side");
    } else {
        generateGrid(dimension);
    }
})
