let aux = "black";
const currentColor = document.querySelector(".currentColor");
currentColor.addEventListener("input", () => {aux = currentColor.value});

function changeSize(Value){
    let string = "";
    for(let i = 0; i < Value; ++i){
        string = string.concat("1fr ")
    }

    const drawingBoard = document.querySelector('.drawingBoard');
    drawingBoard.style.gridTemplateColumns = `${string}`;

    for(i = 0; i < Value**2; ++i){
        const square = document.createElement("div")
        square.classList.add("square")
        square.addEventListener('mouseover', () => square.style.background = `${aux}`);
        drawingBoard.appendChild(square);
    }
}

changeSize(16);

let sliderVal = document.querySelector(".slider")
sliderVal.addEventListener("input", () => {
    const sliderString = document.querySelector(".sliderValue");
    sliderString.classList.add(".sliderValue");
    sliderString.innerText = `${sliderVal.value}px x ${sliderVal.value}px`    
});

sliderVal.addEventListener("mouseup", () => {
    let sliderVal = document.querySelector(".slider")
    const checks = document.querySelectorAll(".square")
    checks.forEach(check => {
        check.parentNode.removeChild(check);
    });

    changeSize(sliderVal.value);
});

const clearBtn = document.querySelector(".clearBtn")
clearBtn.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square")
    squares.forEach(square => {
        square.style.background = "white";
    });
});