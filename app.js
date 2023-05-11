const container = document.getElementById("container");

function generateGrid(dimension) {
  container.style.setProperty('--grid-rows', dimension);
  container.style.setProperty('--grid-cols', dimension);
  for (c = 0; c < (dimension * dimension); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

generateGrid(24);