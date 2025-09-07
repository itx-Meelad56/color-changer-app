let button = document.getElementById("changeColorBtn")
let colorCode = document.getElementById("colorCode")

function getRandomColor() {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor;
}

button.addEventListener("click", function () {
   let newColor = getRandomColor()

   document.body.style.backgroundColor = newColor

   colorCode.textContent = `Current Color: ${newColor}`;
});