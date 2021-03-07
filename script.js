const container = document.querySelector("#container");

const square = document.createElement("div");
square.classList.add("square");
square.style.filter = "brightness(100%)";

const createSquares = (numberOfSquares) => {
  container.appendChild(square);
  for (let i = 1; i < numberOfSquares * numberOfSquares; i++) {
    const squareDup = square.cloneNode(true);
    container.appendChild(squareDup);
  }
};

createSquares(16);

let squares = document.querySelectorAll(".square");

const createRandomColor = () => {
  const color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  return color;
};

const addEventListenerList = (list, event, fn) => {
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener(event, fn);
  }
};

const darkenColors = (squares) => {
  for (let square of squares) {
    square.style.filter = "brightness(100%)";
    square.addEventListener("mouseover", () => {
      let brightness = square.style.filter;
      brightnessDarkened = brightness.match(/\d/g).join("") - 10;
      square.style.filter = `brightness(${brightnessDarkened}%)`;
    });
  }
};

const getRandomColors = (squares) =>
  addEventListenerList(squares, "mouseover", () => {
    document.documentElement.style.setProperty(
      "--randomColor",
      createRandomColor()
    );
  });

getRandomColors(squares);
darkenColors(squares);

const clearButton = document.querySelector("#clear-button");

clearButton.addEventListener("click", () => {
  const newNumberOfSquares = prompt("Please choose the number of squares");
  if (newNumberOfSquares) {
    if (newNumberOfSquares > 100 || newNumberOfSquares < 1) {
      alert("Please choose a number between 1 and 100.");
      return;
    }
    container.innerHTML = "";
    createSquares(newNumberOfSquares);
    document.documentElement.style.setProperty(
      "--squareNum",
      newNumberOfSquares
    );
    let squares = document.querySelectorAll(".square");
    getRandomColors(squares);
    darkenColors(squares);
  }
});
