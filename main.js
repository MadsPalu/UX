let textSize = document.getElementsByClassName("textSize");

let counter = 0;

function enlarge() {
    if (counter == 0) {
        for (let i = 0; i < textSize.length; i++) {
            textSize[i].style.fontSize = "large";
        }
        counter++;
    } else if (counter == 1) {
        for (let i = 0; i < textSize.length; i++) {
            textSize[i].style.fontSize = "x-large";
        }
        counter++;
    } else if (counter == 2) {
        for (let i = 0; i < textSize.length; i++) {
            textSize[i].style.fontSize = "xx-large";
        }
        counter++;
    } else if (counter == -3) {
        for (let i = 0; i < textSize.length; i++) {
            textSize[i].style.fontSize = "x-small";
        }
        counter++;
    } else if (counter == -2) {
        for (let i = 0; i < textSize.length; i++) {
            textSize[i].style.fontSize = "small";
        }
        counter++;
    } else if (counter == -1) {
        for (let i = 0; i < textSize.length; i++) {
            textSize[i].style.fontSize = "initial";
        }
        counter++;
    }
}

function min() {
    if (counter == 0) {
        for (let i = 0; i < textSize.length; i++) {
            textSize[i].style.fontSize = "small";
        }
        counter--;
    } else if (counter == -1) {
        for (let i = 0; i < textSize.length; i++) {
            textSize[i].style.fontSize = "x-small";
        }
        counter--;
    } else if (counter == -2) {
        for (let i = 0; i < textSize.length; i++) {
            textSize[i].style.fontSize = "xx-small";
        }
        counter--;
    } else if (counter == 3) {
        for (let i = 0; i < textSize.length; i++) {
            textSize[i].style.fontSize = "x-large";
        }
        counter--;
    } else if (counter == 2) {
        for (let i = 0; i < textSize.length; i++) {
            textSize[i].style.fontSize = "large";
        }
        counter--; 
    } else if (counter == 1) {
        for (let i = 0; i < textSize.length; i++) {
            textSize[i].style.fontSize = "initial";
        }
        counter--;
    }
}


document.getElementById('enlargebtn').addEventListener('click', enlarge);
document.getElementById('minimizebtn').addEventListener('click', min);
