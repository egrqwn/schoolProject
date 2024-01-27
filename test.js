import {varA, varB, answer1, answer2, answer3, answer4, answer5, answer6, conclusion1, conclusion2, conclusion3, conclusion4, conclusion5, conclusion6} from "./testDB.js";

let results = [];
let currentIndex = 0;

let backBtn = document.querySelector('.btn-back');
let forwardBtn = document.querySelector('.btn-forward');

let endBtn = document.querySelector('.btn-end');

let aBtn = document.querySelector('.btn-a');
let bBtn = document.querySelector('.btn-b');

function fillContent() {
    aBtn.innerHTML = varA[currentIndex];
    bBtn.innerHTML = varB[currentIndex];
}

fillContent();

forwardBtn.onclick=function() {
    if (currentIndex < varA.length -1) {
        currentIndex += 1;
    }
    fillContent();
    aBtn.classList.remove('selected');
    bBtn.classList.remove('selected');
    if (results[currentIndex].includes("a") && results[currentIndex] != undefined) {
        aBtn.classList.add('selected');
    }
    if (results[currentIndex].includes("b") && results[currentIndex] != undefined) {
            bBtn.classList.add('selected');
    }
}

backBtn.onclick=function() {
    if (currentIndex > 0) {
        currentIndex -= 1;
    }
    fillContent();
    aBtn.classList.remove('selected');
    bBtn.classList.remove('selected');
    if (results[currentIndex].includes("a") && results[currentIndex] != undefined) {
    aBtn.classList.add('selected');
    }
    if (results[currentIndex].includes("b") && results[currentIndex] != undefined) {
        bBtn.classList.add('selected');
    }
}

aBtn.onclick = function() {
    results[currentIndex] = "";
    results[currentIndex] = currentIndex+1+"a";
    console.log(results);
    bBtn.classList.remove("selected");
    aBtn.classList.add("selected");
   
}

bBtn.onclick = function() {
    results[currentIndex]="";
    results[currentIndex] = currentIndex+1+"b";
    console.log(results);
    aBtn.classList.remove("selected");
    bBtn.classList.add("selected");
}