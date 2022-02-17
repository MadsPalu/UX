let submits = [];
const addSearch = (ev) => {
    ev.preventDefault();  //to stop the form submitting
    let search = {
        genre: document.getElementById('genre').value,
        forfatter: document.getElementById('forfatter').value,
        årstal: document.getElementById('årstal').value

    }
    submits.push(search);
    document.forms[0].reset(); // clear form

    console.warn('added', { submits });
    let pre = document.querySelector('#msg pre');
    pre.textContent = '\n' + JSON.stringify(submits, '\t', 2);

    //saving to localStorage
    localStorage.setItem('MyMovieList', JSON.stringify(submits));
}
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('Submitbtn').addEventListener('click', addSearch);
});

let wordOfDayArray = new Array(7);
let wordDesricptionArray = new Array(7);

wordOfDayArray[0] = "Aplha";
wordOfDayArray[1] = "Bravo";
wordOfDayArray[2] = "Charlie";
wordOfDayArray[3] = "Delta";
wordOfDayArray[4] = "Echo";
wordOfDayArray[5] = "Foxtrot";
wordOfDayArray[6] = "Golf";

wordDesricptionArray[0] = "a";
wordDesricptionArray[1] = "b";
wordDesricptionArray[2] = "c";
wordDesricptionArray[3] = "d";
wordDesricptionArray[4] = "e";
wordDesricptionArray[5] = "f";
wordDesricptionArray[6] = "g";

let currentDay = new Date();
let day = currentDay.getDay();
console.log(day);

document.getElementById('wordOfDay').innerHTML = wordOfDayArray[day];
document.getElementById('wordDesricption').innerHTML = wordDesricptionArray[day];

let footerTexts = document.getElementsByClassName("footerText");
let footerHeaders = document.getElementsByClassName("footerHeader");

function enlarge() {
    for (let i = 0; i < footerTexts.length; i++) {
        footerTexts[i].style.fontSize = "x-large";
    }
    for (let i = 0; i < footerHeaders.length; i++) {
        footerHeaders[i].style.fontSize = "x-large";
    }
}

function minimize() {
    for (let i = 0; i < footerTexts.length; i++) {
        footerTexts[i].style.fontSize = "initial";
    }
    for (let i = 0; i < footerHeaders.length; i++) {
        footerHeaders[i].style.fontSize = "initial";
    }
}

document.getElementById('enlargebtn').addEventListener('click', enlarge);
document.getElementById('minimizebtn').addEventListener('click', minimize);